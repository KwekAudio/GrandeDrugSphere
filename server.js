const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Mock database (replace with actual database)
const users = [];

// Registration Endpoint
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
   
    // Validation
    if (!email || !password || password.length < 8) {
        return res.status(400).send('Invalid email or password');
    }

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).send('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to database
    users.push({ email, password: hashedPassword });

    // Send confirmation email
    const confirmationToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Email Confirmation',
        text: `Please confirm your email by clicking the following link: http://localhost:${port}/confirm/${confirmationToken}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Confirmation email sent');
    });
});

// Login Endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(400).send('User not found');
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send('Invalid password');
    }

    // Generate JWT token
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
});

// Forgot Password Endpoint
app.post('/forgot-password', (req, res) => {
    const { email } = req.body;
   
    // Check if user exists
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(400).send('User not found');
    }

    // Generate reset token
    const resetToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset',
        text: `Reset your password by clicking the following link: http://localhost:${port}/reset-password/${resetToken}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Password reset email sent');
    });
});

// Reset Password Endpoint
app.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    if (newPassword.length < 8) {
        return res.status(400).send('Password must be at least 8 characters long');
    }

    try {
        const { email } = jwt.verify(token, process.env.JWT_SECRET);
        const user = users.find(user => user.email === email);

        if (!user) {
            return res.status(400).send('User not found');
        }

        // Hash new password and update user
        user.password = await bcrypt.hash(newPassword, 10);
        res.status(200).send('Password has been reset');
    } catch (error) {
        res.status(400).send('Invalid or expired token');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});