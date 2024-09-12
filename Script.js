document.addEventListener('DOMContentLoaded', (event) => {
    // Registration form submit event
    document.getElementById('reg-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Registration logic here
    });

    // Login form submit event
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Login logic here
    });

    // Forgot password link click event
    document.getElementById('forgot-password').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('login').style.display = 'none';
        document.getElementById('forgot-password-form').style.display = 'block';
    });

    // Forgot password form submit event
    document.getElementById('reset-password-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Reset password logic here
    });

    // Example of handling drug group selection
    document.querySelectorAll('[data-group]').forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            const drugGroup = this.getAttribute('data-group');
            // Logic for handling drug group selection
        });
    });
});

// Sample users array for registration and login
const users = [];

// Show registration form
function showRegistration() {
    document.getElementById('registration').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    document.getElementById('drug-groups').style.display = 'none';
}

// Show login form
function showLogin() {
    document.getElementById('registration').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('drug-groups').style.display = 'none';
}

// Show drug groups after login
function showDrugGroups() {
    document.getElementById('registration').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('drug-groups').style.display = 'block';
}

// Handle user login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
   
    const user = users.find(user => user.username === username && user.password === password);
   
    if (user) {
        showDrugGroups();
    } else {
        alert('Invalid username or password.');
    }
});

// Handle password reset
document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const email = document.getElementById('forgot-email').value;
    alert('A reset link has been sent to your email.');
    document.getElementById('forgot-password').style.display = 'none';
    document.getElementById('reset-password').style.display = 'block';
});

// Handle new password submission
document.getElementById('reset-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const newPassword = document.getElementById('new-password').value;
    const confirmNewPassword = document.getElementById('confirm-new-password').value;
   
    if (newPassword === confirmNewPassword) {
        alert('Password reset successful!');
        showLogin();
    } else {
        alert('Passwords do not match.');
    }
});

// Handle user registration
document.getElementById('reg-form').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
   
    if (password === confirmPassword) {
        users.push({ username, password });
        alert('Registration successful! Please check your email for the confirmation code.');
        showLogin();
    } else {
        alert('Passwords do not match.');
    }
});
// Show drug info when a drug group is selected
function showDrugInfo(group) {
    document.getElementById('drug-info-container').style.display = 'block';
    // Add content dynamically
}

// Hide drug info when navigating back to groups
document.getElementById('drug-info-container').style.display = 'none';

// Sample drug data
    const drugData = {
    "Antibiotics": [
        {
            name: "Amoxicillin",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Bacterial infections, pneumonia, otitis media.",
            contraindications: "Allergy to penicillins.",
            sideEffects: "Nausea, rash, diarrhea.",
            diseases: "Pneumonia, otitis media.",
            seriousSideEffects: "Anaphylaxis, severe rash.",
            dosage: "500mg orally every 8 hours."
        },
        {
            name: "Ciprofloxacin",
            moa: "Inhibits DNA gyrase and topoisomerase IV, interfering with bacterial DNA replication.",
            indications: "Urinary tract infections, respiratory infections.",
            contraindications: "Myasthenia gravis, hypersensitivity to fluoroquinolones.",
            sideEffects: "Nausea, diarrhea, dizziness.",
            diseases: "Urinary tract infections, bronchitis.",
            seriousSideEffects: "Tendon rupture, QT prolongation.",
            dosage: "500mg orally twice daily."
        },
        {
            name: "Carbenicillin",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Gram-negative bacterial infections.",
            contraindications: "Allergy to penicillins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Allergic reactions, anaphylaxis.",
            dosage: "1-2g IV every 4-6 hours."
        },
        {
            name: "Carfecilin",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Bacterial infections resistant to penicillin.",
            contraindications: "Allergy to penicillins.",
            sideEffects: "Nausea, vomiting, rash.",
            seriousSideEffects: "Severe allergic reactions, nephritis.",
            dosage: "1-2g IV every 6-8 hours."
        },
        {
            name: "Carbenicillin Indanyl",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Severe infections caused by Gram-negative bacteria.",
            contraindications: "Hypersensitivity to penicillins.",
            sideEffects: "Diarrhea, rash, fever.",
            seriousSideEffects: "Severe allergic reactions, electrolyte imbalance.",
            dosage: "1g orally every 8 hours."
        },
        {
            name: "Ticarcillin",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Pseudomonas aeruginosa infections.",
            contraindications: "Allergy to beta-lactams.",
            sideEffects: "Nausea, vomiting, rash.",
            seriousSideEffects: "Severe allergic reactions, bleeding disorders.",
            dosage: "3-4g IV every 4-6 hours."
        },
        {
            name: "Mezlocillin",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Broad-spectrum infections.",
            contraindications: "Allergy to penicillins.",
            sideEffects: "Diarrhea, rash, allergic reactions.",
            seriousSideEffects: "Severe allergic reactions, renal impairment.",
            dosage: "2-4g IV every 6-8 hours."
        },
        {
            name: "Piperacillin",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Serious infections, including those caused by Pseudomonas aeruginosa.",
            contraindications: "Allergy to penicillins.",
            sideEffects: "Nausea, diarrhea, rash.",
            seriousSideEffects: "Severe allergic reactions, seizures.",
            dosage: "3-4g IV every 4-6 hours."
        },
        {
            name: "Ampicillin",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Infections caused by Gram-positive bacteria.",
            contraindications: "Allergy to penicillins.",
            sideEffects: "Rash, diarrhea, nausea.",
            seriousSideEffects: "Severe allergic reactions, Clostridium difficile-associated diarrhea.",
            dosage: "250-500mg orally every 6 hours."
        },
        {
            name: "Amoxicillin",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Ear infections, pneumonia, and other bacterial infections.",
            contraindications: "Allergy to penicillins.",
            sideEffects: "Nausea, diarrhea, rash.",
            seriousSideEffects: "Severe allergic reactions, liver dysfunction.",
            dosage: "500mg orally every 8 hours."
        },
        {
            name: "Penicillin G",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Various bacterial infections, including syphilis.",
            contraindications: "Allergy to penicillins.",
            sideEffects: "Allergic reactions, nausea, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, seizures.",
            dosage: "1-5 million units IV every 4-6 hours."
        },
        {
            name: "Penicillin V",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Mild to moderate infections.",
            contraindications: "Allergy to penicillins.",
            sideEffects: "Nausea, diarrhea, rash.",
            seriousSideEffects: "Severe allergic reactions, renal impairment.",
            dosage: "250-500mg orally every 6-8 hours."
        },
        {
            name: "Oxacillin",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Staphylococcal infections resistant to penicillin.",
            contraindications: "Allergy to beta-lactams.",
            sideEffects: "Nausea, rash, fever.",
            seriousSideEffects: "Severe allergic reactions, liver enzyme abnormalities.",
            dosage: "1-2g IV every 4-6 hours."
        },
        {
            name: "Cloxacillin",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Staphylococcal infections.",
            contraindications: "Allergy to penicillins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, hepatitis.",
            dosage: "250-500mg orally every 6 hours."
        },
        {
            name: "Dicloxacillin",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Infections caused by penicillin-resistant Staphylococcus aureus.",
            contraindications: "Allergy to penicillins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, liver dysfunction.",
            dosage: "250-500mg orally every 6 hours."
        },
        {
            name: "Flucloxacillin",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Infections caused by penicillin-resistant Staphylococcus.",
            contraindications: "Allergy to penicillins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, liver damage.",
            dosage: "500mg orally every 6 hours."
        },
        {
            name: "Aztreonam",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Infections caused by Gram-negative bacteria.",
            contraindications: "Allergy to beta-lactams.",
            sideEffects: "Nausea, diarrhea, rash.",
            seriousSideEffects: "Severe allergic reactions, kidney impairment.",
            dosage: "1-2g IV every 8 hours."
        },
        {
            name: "Ertapenem",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Broad-spectrum infections.",
            contraindications: "Allergy to carbapenems.",
            sideEffects: "Nausea, diarrhea, rash.",
            seriousSideEffects: "Severe allergic reactions, seizures.",
            dosage: "1g IV or IM every 24 hours."
        },
        {
            name: "Cefadroxil",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Skin infections, urinary tract infections.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, diarrhea, rash.",
            seriousSideEffects: "Severe allergic reactions, kidney impairment.",
            dosage: "500mg orally every 12 hours."
        },
        {
            name: "Cephalexin",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Respiratory tract infections, skin infections.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, diarrhea, rash.",
            seriousSideEffects: "Severe allergic reactions, liver damage.",
            dosage: "500mg orally every 6 hours."
        },
        {
            name: "Cefazolin",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Preoperative prophylaxis, infections.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, renal toxicity.",
            dosage: "1-2g IV every 8 hours."
        },
        {
            name: "Cephalothin",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Infections caused by Gram-positive bacteria.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, liver toxicity.",
            dosage: "1-2g IV every 6-8 hours."
        },
        {
            name: "Cefaclor",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Respiratory tract infections, urinary tract infections.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, diarrhea, rash.",
            seriousSideEffects: "Severe allergic reactions, liver dysfunction.",
            dosage: "250-500mg orally every 8 hours."
        },
                {
            name: "Cefoxitin",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Intra-abdominal infections, pelvic infections.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, diarrhea, rash.",
            seriousSideEffects: "Severe allergic reactions, liver dysfunction.",
            dosage: "1-2g IV every 6-8 hours."
        },
        {
            name: "Cefotetan",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Surgical prophylaxis, intra-abdominal infections.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, bleeding disorders.",
            dosage: "1-2g IV every 12 hours."
        },
        {
            name: "Cefuroxime",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Respiratory tract infections, skin infections.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, kidney impairment.",
            dosage: "250-500mg orally every 12 hours."
        },
        {
            name: "Cefotaxime",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Severe infections including septicemia and pneumonia.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, renal toxicity.",
            dosage: "1-2g IV every 6-8 hours."
        },
        {
            name: "Ceftazidime",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Pseudomonas aeruginosa infections, severe infections.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, kidney damage.",
            dosage: "1-2g IV every 8 hours."
        },
        {
            name: "Ceftriaxone",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Broad-spectrum infections, including severe Gram-negative infections.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, biliary sludge formation.",
            dosage: "1-2g IV every 24 hours."
        },
        {
            name: "Cefixime",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Urinary tract infections, respiratory infections.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, kidney issues.",
            dosage: "400mg orally every 12 hours."
        },
        {
            name: "Cefpodoxime",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Respiratory tract infections, skin infections.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, liver dysfunction.",
            dosage: "100mg orally every 12 hours."
        },
        {
            name: "Cefoperazone",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Severe infections including those caused by Pseudomonas aeruginosa.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, bleeding disorders.",
            dosage: "1-2g IV every 12 hours."
        },
        {
            name: "Ceftizoxime",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Broad-spectrum infections, including severe infections.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, kidney impairment.",
            dosage: "1-2g IV every 8 hours."
        },
        {
            name: "Cefpirome",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Severe infections including nosocomial infections.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, kidney damage.",
            dosage: "1-2g IV every 12 hours."
        },
        {
            name: "Cefacidine",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Staphylococcal infections.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, liver dysfunction.",
            dosage: "500mg orally every 6-8 hours."
        },
        {
            name: "Cefazoporan",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Broad-spectrum infections.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, kidney issues.",
            dosage: "1-2g IV every 12 hours."
        },
        {
            name: "Cefepime",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Severe infections including Pseudomonas aeruginosa.",
            contraindications: "Allergy to cephalosporins.",
            sideEffects: "Nausea, rash, diarrhea.",
            seriousSideEffects: "Severe allergic reactions, neurotoxicity.",
            dosage: "1-2g IV every 8 hours."
        },
        {
            name: "Vancomycin",
            moa: "Inhibits bacterial cell wall synthesis.",
            indications: "Serious Gram-positive infections, including MRSA.",
            contraindications: "Allergy to vancomycin.",
            sideEffects: "Nausea, rash, red man syndrome.",
            seriousSideEffects: "Severe allergic reactions, nephrotoxicity.",
            dosage: "1g IV every 12 hours."
        },
        {
            name: "Clinafloxacin",
            moa: "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.",
            indications: "Respiratory tract infections, skin infections.",
            contraindications: "Tendon disorders, myasthenia gravis.",
            sideEffects: "Nausea, diarrhea, headache.",
            seriousSideEffects: "Tendon rupture, QT prolongation.",
            dosage: "200 mg orally twice daily.",
            diseases: ["Respiratory Tract Infections", "Skin Infections"]
        },
        {
            name: "Gemifloxacin",
            moa: "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.",
            indications: "Respiratory tract infections, skin infections.",
            contraindications: "Tendon disorders, myasthenia gravis.",
            sideEffects: "Nausea, diarrhea, rash.",
            seriousSideEffects: "Tendon rupture, QT prolongation.",
            dosage: "320 mg orally once daily.",
            diseases: ["Respiratory Tract Infections", "Skin Infections"]
        },
        {
            name: "Moxifloxacin",
            moa: "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.",
            indications: "Respiratory tract infections, skin infections, intra-abdominal infections.",
            contraindications: "Tendon disorders, myasthenia gravis.",
            sideEffects: "Nausea, diarrhea, headache.",
            seriousSideEffects: "Tendon rupture, QT prolongation.",
            dosage: "400 mg orally once daily.",
            diseases: ["Respiratory Tract Infections", "Skin Infections", "Intra-abdominal Infections"]
        },
        {
            name: "Streptomycin",
            moa: "Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit.",
            indications: "Tuberculosis, plague, tularemia.",
            contraindications: "Renal disease, myasthenia gravis.",
            sideEffects: "Nausea, vomiting, rash.",
            seriousSideEffects: "Ototoxicity, nephrotoxicity.",
            dosage: "15 mg/kg IM once daily.",
            diseases: ["Tuberculosis", "Plague", "Tularemia"]
        },
        {
            name: "Gentamicin",
            moa: "Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit.",
            indications: "Serious gram-negative infections, sepsis.",
            contraindications: "Renal disease, hearing impairment.",
            sideEffects: "Nausea, vomiting, rash.",
            seriousSideEffects: "Ototoxicity, nephrotoxicity.",
            dosage: "5 mg/kg IV or IM once daily.",
            diseases: ["Serious Gram-Negative Infections", "Sepsis"]
        },
        {
            name: "Tobramycin",
            moa: "Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit.",
            indications: "Serious gram-negative infections, respiratory infections in cystic fibrosis.",
            contraindications: "Renal disease, hearing impairment.",
            sideEffects: "Nausea, vomiting, rash.",
            seriousSideEffects: "Ototoxicity, nephrotoxicity.",
            dosage: "5 mg/kg IV or IM once daily.",
            diseases: ["Serious Gram-Negative Infections", "Cystic Fibrosis Respiratory Infections"]
        },
        {
            name: "Amikacin",
            moa: "Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit.",
            indications: "Serious gram-negative infections, sepsis.",
            contraindications: "Renal disease, hearing impairment.",
            sideEffects: "Nausea, vomiting, rash.",
            seriousSideEffects: "Ototoxicity, nephrotoxicity.",
            dosage: "15 mg/kg IV or IM once daily.",
            diseases: ["Serious Gram-Negative Infections", "Sepsis"]
        },
        {
            name: "Netilmicin",
            moa: "Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit.",
            indications: "Serious gram-negative infections, sepsis.",
            contraindications: "Renal disease, hearing impairment.",
            sideEffects: "Nausea, vomiting, rash.",
            seriousSideEffects: "Ototoxicity, nephrotoxicity.",
            dosage: "6 mg/kg IV or IM once daily.",
            diseases: ["Serious Gram-Negative Infections", "Sepsis"]
        },
        {
            name: "Kanamycin",
            moa: "Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit.",
            indications: "Serious gram-negative infections, tuberculosis.",
            contraindications: "Renal disease, hearing impairment.",
            sideEffects: "Nausea, vomiting, rash.",
            seriousSideEffects: "Ototoxicity, nephrotoxicity.",
            dosage: "15 mg/kg IV or IM once daily.",
            diseases: ["Serious Gram-Negative Infections", "Tuberculosis"]
        },
        {
            name: "Neomycin",
            moa: "Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit.",
            indications: "Bowel decontamination, skin infections.",
            contraindications: "Renal disease, hearing impairment.",
            sideEffects: "Nausea, vomiting, rash.",
            seriousSideEffects: "Ototoxicity, nephrotoxicity.",
            dosage: "500 mg orally every 6 hours.",
            diseases: ["Bowel Decontamination", "Skin Infections"]
        },
        {
            name: "Tetracycline",
            moa: "Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit.",
            indications: "Acne, respiratory infections, chlamydia.",
            contraindications: "Pregnancy, children under 8 years old.",
            sideEffects: "Nausea, vomiting, photosensitivity.",
            seriousSideEffects: "Hepatotoxicity, intracranial hypertension.",
            dosage: "500 mg orally twice daily.",
            diseases: ["Acne", "Respiratory Infections", "Chlamydia"]
        },
        {
            name: "Oxytetracycline",
            moa: "Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit.",
            indications: "Respiratory infections, acne, chlamydia.",
            contraindications: "Pregnancy, children under 8 years old.",
            sideEffects: "Nausea, vomiting, photosensitivity.",
            seriousSideEffects: "Hepatotoxicity, intracranial hypertension.",
            dosage: "250 mg orally four times daily.",
            diseases: ["Respiratory Infections", "Acne", "Chlamydia"]
        },
        {
            name: "Doxycycline",
            moa: "Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit.",
            indications: "Respiratory infections, acne, Lyme disease.",
            contraindications: "Pregnancy, children under 8 years old.",
            sideEffects: "Nausea, vomiting, photosensitivity.",
            seriousSideEffects: "Hepatotoxicity, intracranial hypertension.",
            dosage: "100 mg orally twice daily.",
            diseases: ["Respiratory Infections", "Acne", "Lyme Disease"]
        },
        {
            name: "Minocycline",
            moa: "Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit.",
            indications: "Acne, respiratory infections, rheumatoid arthritis.",
            contraindications: "Pregnancy, children under 8 years old.",
            sideEffects: "Nausea, vomiting, photosensitivity.",
            seriousSideEffects: "Hepatotoxicity, intracranial hypertension.",
            dosage: "100 mg orally twice daily.",
            diseases: ["Acne", "Respiratory Infections", "Rheumatoid Arthritis"]
        },
        {
            name: "Demeclocycline",
            moa: "Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit.",
            indications: "Acne, respiratory infections, hyponatremia.",
            contraindications: "Pregnancy, children under 8 years old.",
            sideEffects: "Nausea, vomiting, photosensitivity.",
            seriousSideEffects: "Hepatotoxicity, intracranial hypertension.",
            dosage: "600 mg orally twice daily.",
            diseases: ["Acne", "Respiratory Infections", "Hyponatremia"]
        },
        {
            name: "Lymecycline",
            moa: "Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit.",
            indications: "Acne, respiratory infections.",
            contraindications: "Pregnancy, children under 8 years old.",
            sideEffects: "Nausea, vomiting, photosensitivity.",
            seriousSideEffects: "Hepatotoxicity, intracranial hypertension.",
            dosage: "408 mg orally once daily.",
            diseases: ["Acne", "Respiratory Infections"]
        },
        {
            name: "Erythromycin",
            moa: "Inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit.",
            indications: "Respiratory infections, skin infections, chlamydia.",
            contraindications: "Liver disease, hypersensitivity.",
            sideEffects: "Nausea, diarrhea, abdominal pain.",
            seriousSideEffects: "QT prolongation, hepatotoxicity.",
            dosage: "250-500 mg orally every 6 hours.",
            diseases: ["Respiratory Infections", "Skin Infections", "Chlamydia"]
        },
        {
            name: "Azithromycin",
            moa: "Inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit.",
            indications: "Respiratory infections, skin infections, sexually transmitted infections (STIs).",
            contraindications: "Liver disease, hypersensitivity.",
            sideEffects: "Nausea, diarrhea, abdominal pain.",
            seriousSideEffects: "QT prolongation, hepatotoxicity.",
            dosage: "500 mg orally on day 1, followed by 250 mg daily for 4 days.",
            diseases: ["Respiratory Infections", "Skin Infections", "STIs"]
        },
        {
            name: "Clarithromycin",
            moa: "Inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit.",
            indications: "Respiratory infections, skin infections, H. pylori infection.",
            contraindications: "Liver disease, hypersensitivity.",
            sideEffects: "Nausea, diarrhea, abdominal pain.",
            seriousSideEffects: "QT prolongation, hepatotoxicity.",
            dosage: "250-500 mg orally every 12 hours.",
            diseases: ["Respiratory Infections", "Skin Infections", "H. Pylori Infection"]
        },
        {
            name: "Chloramphenicol",
            moa: "Inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit.",
            indications: "Meningitis, typhoid fever, anaerobic infections.",
            contraindications: "Liver disease, bone marrow suppression.",
            sideEffects: "Nausea, vomiting, diarrhea.",
            seriousSideEffects: "Aplastic anemia, bone marrow suppression.",
            dosage: "50-100 mg/kg/day IV or IM in divided doses.",
            diseases: ["Meningitis", "Typhoid Fever", "Anaerobic Infections"]
        },
        {
            name: "Lincomycin",
            moa: "Inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit.",
            indications: "Serious gram-positive infections, dental infections.",
            contraindications: "Liver disease, hypersensitivity.",
            sideEffects: "Nausea, vomiting, diarrhea.",
            seriousSideEffects: "Pseudomembranous colitis, hepatotoxicity.",
            dosage: "600 mg IV or IM every 12 hours.",
            diseases: ["Serious Gram-Positive Infections", "Dental Infections"]
        },
        {
            name: "Linezolid",
            moa: "Inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit.",
            indications: "Pneumonia, skin infections, vancomycin-resistant infections.",
            contraindications: "Uncontrolled hypertension, use of MAO inhibitors.",
            sideEffects: "Nausea, vomiting, headache.",
            seriousSideEffects: "Serotonin syndrome, thrombocytopenia.",
            dosage: "600 mg orally or IV every 12 hours.",
            diseases: ["Pneumonia", "Skin Infections", "Vancomycin-Resistant Infections"]
        },
        {
            name: "Fusidic Acid",
            moa: "Inhibits bacterial protein synthesis by preventing elongation factor G from functioning.",
            indications: "Skin infections, osteomyelitis, septic arthritis.",
            contraindications: "Liver disease, hypersensitivity.",
            sideEffects: "Nausea, vomiting, rash.",
            seriousSideEffects: "Liver toxicity, jaundice.",
            dosage: "500 mg orally three times daily.",
            diseases: ["Skin Infections", "Osteomyelitis", "Septic Arthritis"]
        },
        {
            name: "Dalfopristin",
            moa: "Inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit.",
            indications: "Vancomycin-resistant Enterococcus infections.",
            contraindications: "Liver disease, hypersensitivity.",
            sideEffects: "Nausea, vomiting, muscle pain.",
            seriousSideEffects: "Liver toxicity, myopathy.",
            dosage: "7.5 mg/kg IV every 8-12 hours.",
            diseases: ["Vancomycin-Resistant Enterococcus Infections"]
        },
        {
            name: "Quinupristin",
            moa: "Inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit.",
            indications: "Vancomycin-resistant Enterococcus infections.",
            contraindications: "Liver disease, hypersensitivity.",
            sideEffects: "Nausea, vomiting, muscle pain.",
            seriousSideEffects: "Liver toxicity, myopathy.",
            dosage: "7.5 mg/kg IV every 8-12 hours.",
            diseases: ["Vancomycin-Resistant Enterococcus Infections"]
        },
        {
            name: "Nalidixic Acid",
            moa: "Inhibits bacterial DNA gyrase, preventing DNA replication.",
            indications: "Urinary tract infections.",
            contraindications: "Renal failure, myasthenia gravis.",
            sideEffects: "Nausea, vomiting, rash.",
            seriousSideEffects: "Seizures, tendon rupture.",
            dosage: "1 g orally every 6 hours.",
            diseases: ["Urinary Tract Infections"]
        },
        {
            name: "Oxolinic Acid",
            moa: "Inhibits bacterial DNA gyrase, preventing DNA replication.",
            indications: "Urinary tract infections.",
            contraindications: "Renal failure, myasthenia gravis.",
            sideEffects: "Nausea, vomiting, rash.",
            seriousSideEffects: "Seizures, tendon rupture.",
            dosage: "400 mg orally twice daily.",
            diseases: ["Urinary Tract Infections"]
        },
        {
            name: "Cinoxacin",
            moa: "Inhibits bacterial DNA gyrase, preventing DNA replication.",
            indications: "Urinary tract infections.",
            contraindications: "Renal failure, myasthenia gravis.",
            sideEffects: "Nausea, vomiting, rash.",
            seriousSideEffects: "Seizures, tendon rupture.",
            dosage: "500 mg orally every 12 hours.",
            diseases: ["Urinary Tract Infections"]
        },
        {
            name: "Ciprofloxacin",
            moa: "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.",
            indications: "Urinary tract infections, respiratory infections, skin infections.",
            contraindications: "Renal failure, myasthenia gravis.",
            sideEffects: "Nausea, diarrhea, dizziness.",
            seriousSideEffects: "Tendon rupture, QT prolongation.",
            dosage: "500 mg orally twice daily.",
            diseases: ["Urinary Tract Infections", "Respiratory Infections", "Skin Infections"]
        },
        {
            name: "Levofloxacin",
            moa: "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.",
            indications: "Respiratory tract infections, urinary tract infections.",
            contraindications: "Tendon disorders, myasthenia gravis.",
            sideEffects: "Nausea, diarrhea, headache.",
            seriousSideEffects: "Tendon rupture, QT prolongation.",
            dosage: "500 mg orally once daily.",
            diseases: ["Respiratory Tract Infections", "Urinary Tract Infections"]
        },
        {
            name: "Norfloxacin",
            moa: "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.",
            indications: "Urinary tract infections, gastrointestinal infections.",
            contraindications: "Tendon disorders, myasthenia gravis.",
            sideEffects: "Nausea, diarrhea, headache.",
            seriousSideEffects: "Tendon rupture, QT prolongation.",
            dosage: "400 mg orally twice daily.",
            diseases: ["Urinary Tract Infections", "Gastrointestinal Infections"]
        },
        {
            name: "Ofloxacin",
            moa: "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.",
            indications: "Urinary tract infections, respiratory tract infections.",
            contraindications: "Tendon disorders, myasthenia gravis.",
            sideEffects: "Nausea, diarrhea, headache.",
            seriousSideEffects: "Tendon rupture, QT prolongation.",
            dosage: "400 mg orally once daily.",
            diseases: ["Urinary Tract Infections", "Respiratory Tract Infections"]
        },
        {
            name: "Gatifloxacin",
            moa: "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.",
            indications: "Respiratory tract infections, urinary tract infections.",
            contraindications: "Diabetes, tendon disorders.",
            sideEffects: "Nausea, diarrhea, headache.",
            seriousSideEffects: "Tendon rupture, QT prolongation, dysglycemia.",
            dosage: "400 mg orally once daily.",
            diseases: ["Respiratory Tract Infections", "Urinary Tract Infections"]
        },
        {
            name: "Grepafloxacin",
            moa: "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.",
            indications: "Respiratory tract infections, skin infections.",
            contraindications: "Tendon disorders, cardiac issues.",
            sideEffects: "Nausea, diarrhea, headache.",
            seriousSideEffects: "QT prolongation, tendon rupture.",
            dosage: "600 mg orally once daily.",
            diseases: ["Respiratory Tract Infections", "Skin Infections"]
        },
        {
            name: "Pazufloxacin",
            moa: "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.",
            indications: "Respiratory tract infections, urinary tract infections.",
            contraindications: "Tendon disorders, myasthenia gravis.",
            sideEffects: "Nausea, vomiting, diarrhea.",
            seriousSideEffects: "Tendon rupture, QT prolongation.",
            dosage: "500 mg IV twice daily.",
            diseases: ["Respiratory Tract Infections", "Urinary Tract Infections"]
        },
        {
            name: "Sparfloxacin",
            moa: "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.",
            indications: "Respiratory tract infections, skin infections.",
            contraindications: "Tendon disorders, cardiac issues.",
            sideEffects: "Nausea, vomiting, headache.",
            seriousSideEffects: "QT prolongation, tendon rupture.",
            dosage: "400 mg orally once daily.",
            diseases: ["Respiratory Tract Infections", "Skin Infections"]
        },
        {
            name: "Clinafloxacin",
            moa: "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.",
            indications: "Complicated skin and intra-abdominal infections.",
            contraindications: "Tendon disorders, myasthenia gravis.",
            sideEffects: "Nausea, diarrhea, rash.",
            seriousSideEffects: "Tendon rupture, QT prolongation.",
            dosage: "200 mg IV twice daily.",
            diseases: ["Complicated Skin Infections", "Intra-Abdominal Infections"]
        },
        {
            name: "Gemifloxacin",
            moa: "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.",
            indications: "Respiratory tract infections, skin infections.",
            contraindications: "Tendon disorders, myasthenia gravis.",
            sideEffects: "Nausea, diarrhea, headache.",
            seriousSideEffects: "Tendon rupture, QT prolongation.",
            dosage: "320 mg orally once daily.",
            diseases: ["Respiratory Tract Infections", "Skin Infections"]
        },
        {
            name: "Moxifloxacin",
            moa: "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.",
            indications: "Respiratory tract infections, skin infections.",
            contraindications: "Tendon disorders, myasthenia gravis.",
            sideEffects: "Nausea, diarrhea, headache.",
            seriousSideEffects: "QT prolongation, tendon rupture.",
            dosage: "400 mg orally or IV once daily.",
            diseases: ["Respiratory Tract Infections", "Skin Infections"]
        },
         // Nitrofurantoin
{
    name: "Nitrofurantoin",
    moa: "Inhibits bacterial enzymes involved in carbohydrate metabolism, interfering with cell wall synthesis.",
    indications: "Urinary tract infections (UTIs), particularly against E. coli.",
    contraindications: "Severe renal impairment, neonates, pregnancy at term.",
    sideEffects: "Nausea, vomiting, diarrhea, headache.",
    seriousSideEffects: "Pulmonary toxicity, peripheral neuropathy, hepatotoxicity.",
    dosage: "50-100 mg orally four times daily for 7 days.",
    diseases: ["Urinary Tract Infections"]
},
// Sulfonamides (Sulfisoxazole, Sulfadiazine, etc.)
{
    name: "Sulfisoxazole",
    moa: "Inhibits bacterial folic acid synthesis by blocking dihydropteroate synthase.",
    indications: "Urinary tract infections, otitis media, meningitis.",
    contraindications: "Allergy to sulfa drugs, severe hepatic or renal impairment.",
    sideEffects: "Rash, fever, nausea.",
    seriousSideEffects: "Stevens-Johnson syndrome, agranulocytosis.",
    dosage: "2-4 g orally initially, then 500 mg every 4-6 hours.",
    diseases: ["Urinary Tract Infections", "Otitis Media", "Meningitis"]
},
{
    name: "Sulfadiazine",
    moa: "Blocks bacterial folic acid synthesis by inhibiting dihydropteroate synthase.",
    indications: "Toxoplasmosis, rheumatic fever prophylaxis.",
    contraindications: "Allergy to sulfa drugs, severe hepatic or renal impairment.",
    sideEffects: "Skin rash, gastrointestinal distress.",
    seriousSideEffects: "Blood dyscrasias, hypersensitivity reactions.",
    dosage: "2-4 g orally initially, then 1 g every 4-6 hours.",
    diseases: ["Toxoplasmosis", "Rheumatic Fever Prophylaxis"]
},
{
    name: "Trimethoprim",
    moa: "Inhibits dihydrofolate reductase, preventing the synthesis of tetrahydrofolic acid, essential for bacterial DNA synthesis.",
    indications: "Urinary tract infections, Pneumocystis jirovecii pneumonia.",
    contraindications: "Severe renal impairment, hypersensitivity.",
    sideEffects: "Rash, itching, nausea.",
    seriousSideEffects: "Hyperkalemia, blood dyscrasias, megaloblastic anemia.",
    dosage: "100-200 mg orally every 12 hours.",
    diseases: ["Urinary Tract Infections", "Pneumocystis Pneumonia"]
}
    ],

    "Antidiabetics": [
        {
            name: "Insulin",
            moa: "Promotes glucose uptake into cells, reducing blood sugar levels.",
            indications: "Type 1 and Type 2 diabetes.",
            contraindications: "Hypersensitivity, hypoglycemia.",
            sideEffects: "Hypoglycemia, weight gain.",
            diseases: "Diabetes.",
            seriousSideEffects: "Severe hypoglycemia.",
            dosage: "Individualized based on blood glucose levels."
        },
        {
            name: "Tolbutamide",
            moa: "Stimulates insulin release from pancreatic β-cells.",
            indications: "Type 2 diabetes mellitus.",
            contraindications: "Type 1 diabetes, diabetic ketoacidosis, hypersensitivity.",
            sideEffects: "Hypoglycemia, weight gain, nausea.",
            seriousSideEffects: "Severe hypoglycemia, liver toxicity.",
            dosage: "1-2 g orally once or twice daily, adjusted based on blood glucose levels.",
            diseases: ["Type 2 Diabetes Mellitus"]
        },
        {
            name: "Chlorpropamide",
            moa: "Stimulates insulin secretion from pancreatic β-cells and enhances insulin sensitivity.",
            indications: "Type 2 diabetes mellitus.",
            contraindications: "Type 1 diabetes, diabetic ketoacidosis, hypersensitivity.",
            sideEffects: "Hypoglycemia, weight gain, rash.",
            seriousSideEffects: "Severe hypoglycemia, liver toxicity.",
            dosage: "100-500 mg orally once daily.",
            diseases: ["Type 2 Diabetes Mellitus"]
        },
        {
            name: "Glyburide",
            moa: "Stimulates pancreatic insulin secretion and increases insulin sensitivity.",
            indications: "Type 2 diabetes mellitus.",
            contraindications: "Type 1 diabetes, diabetic ketoacidosis, hypersensitivity.",
            sideEffects: "Hypoglycemia, weight gain, nausea.",
            seriousSideEffects: "Severe hypoglycemia, liver dysfunction.",
            dosage: "1.25-20 mg orally once or twice daily.",
            diseases: ["Type 2 Diabetes Mellitus"]
        },
        {
            name: "Glipizide",
            moa: "Stimulates insulin release from pancreatic β-cells.",
            indications: "Type 2 diabetes mellitus.",
            contraindications: "Type 1 diabetes, diabetic ketoacidosis, hypersensitivity.",
            sideEffects: "Hypoglycemia, dizziness, weight gain.",
            seriousSideEffects: "Severe hypoglycemia, liver dysfunction.",
            dosage: "2.5-40 mg orally once or twice daily.",
            diseases: ["Type 2 Diabetes Mellitus"]
        },
        {
            name: "Glimepiride",
            moa: "Stimulates insulin release from pancreatic β-cells and increases insulin sensitivity.",
            indications: "Type 2 diabetes mellitus.",
            contraindications: "Type 1 diabetes, diabetic ketoacidosis, hypersensitivity.",
            sideEffects: "Hypoglycemia, weight gain, nausea.",
            seriousSideEffects: "Severe hypoglycemia, liver dysfunction.",
            dosage: "1-8 mg orally once daily.",
            diseases: ["Type 2 Diabetes Mellitus"]
        },
        {
            name: "Metformin",
            moa: "Decreases hepatic glucose production and enhances insulin sensitivity.",
            indications: "Type 2 diabetes mellitus, especially in overweight patients.",
            contraindications: "Renal impairment, metabolic acidosis, hypersensitivity.",
            sideEffects: "Gastrointestinal discomfort, metallic taste.",
            seriousSideEffects: "Lactic acidosis, severe gastrointestinal disturbances.",
            dosage: "500-2000 mg orally in divided doses.",
            diseases: ["Type 2 Diabetes Mellitus"]
        },
        {
            name: "Pioglitazone",
            moa: "Enhances insulin sensitivity by activating PPAR-γ receptors.",
            indications: "Type 2 diabetes mellitus.",
            contraindications: "Heart failure, liver disease, hypersensitivity.",
            sideEffects: "Weight gain, edema, headache.",
            seriousSideEffects: "Heart failure, liver dysfunction.",
            dosage: "15-45 mg orally once daily.",
            diseases: ["Type 2 Diabetes Mellitus"]
        },
        {
            name: "Rosiglitazone",
            moa: "Increases insulin sensitivity by activating PPAR-γ receptors.",
            indications: "Type 2 diabetes mellitus.",
            contraindications: "Heart failure, liver disease, hypersensitivity.",
            sideEffects: "Weight gain, edema, headache.",
            seriousSideEffects: "Heart failure, liver dysfunction.",
            dosage: "4-8 mg orally once or twice daily.",
            diseases: ["Type 2 Diabetes Mellitus"]
        },
        {
            name: "Acarbose",
            moa: "Inhibits intestinal α-glucosidases, slowing carbohydrate digestion and absorption.",
            indications: "Type 2 diabetes mellitus.",
            contraindications: "Inflammatory bowel disease, hypersensitivity.",
            sideEffects: "Flatulence, diarrhea, abdominal pain.",
            seriousSideEffects: "Severe gastrointestinal effects.",
            dosage: "25-100 mg orally with meals.",
            diseases: ["Type 2 Diabetes Mellitus"]
        },
        {
            name: "Miglitol",
            moa: "Inhibits intestinal α-glucosidases to delay carbohydrate absorption.",
            indications: "Type 2 diabetes mellitus.",
            contraindications: "Inflammatory bowel disease, hypersensitivity.",
            sideEffects: "Flatulence, diarrhea, abdominal pain.",
            seriousSideEffects: "Severe gastrointestinal effects.",
            dosage: "25-100 mg orally with meals.",
            diseases: ["Type 2 Diabetes Mellitus"]
        },
        {
            name: "Canagliflozin",
            moa: "Inhibits sodium-glucose co-transporter 2 (SGLT2), reducing glucose reabsorption in the kidneys.",
            indications: "Type 2 diabetes mellitus.",
            contraindications: "Severe renal impairment, hypersensitivity.",
            sideEffects: "Genital infections, urinary tract infections, polyuria.",
            seriousSideEffects: "Ketoacidosis, renal impairment.",
            dosage: "100-300 mg orally once daily.",
            diseases: ["Type 2 Diabetes Mellitus"]
        },
        {
            name: "Dapagliflozin",
            moa: "Inhibits SGLT2, reducing glucose reabsorption and increasing glucose excretion in the urine.",
            indications: "Type 2 diabetes mellitus.",
            contraindications: "Severe renal impairment, hypersensitivity.",
            sideEffects: "Genital infections, urinary tract infections, polyuria.",
            seriousSideEffects: "Ketoacidosis, renal impairment.",
            dosage: "5-10 mg orally once daily.",
            diseases: ["Type 2 Diabetes Mellitus"]
        },
        {
            name: "Sitagliptin",
            moa: "Inhibits dipeptidyl peptidase-4 (DPP-4), increasing insulin release and decreasing glucagon levels.",
            indications: "Type 2 diabetes mellitus.",
            contraindications: "Hypersensitivity.",
            sideEffects: "Nasopharyngitis, headache, upper respiratory tract infection.",
            seriousSideEffects: "Pancreatitis, severe allergic reactions.",
            dosage: "100 mg orally once daily.",
            diseases: ["Type 2 Diabetes Mellitus"]
        },
        {
            name: "Saxagliptin",
            moa: "Inhibits DPP-4, increasing insulin release and decreasing glucagon levels.",
            indications: "Type 2 diabetes mellitus.",
            contraindications: "Hypersensitivity.",
            sideEffects: "Headache, nasopharyngitis, upper respiratory tract infection.",
            seriousSideEffects: "Pancreatitis, severe allergic reactions.",
            dosage: "2.5-5 mg orally once daily.",
            diseases: ["Type 2 Diabetes Mellitus"]
        }
    ],

    "Antithyroids": [
        {
            name: "Levothyroxine (T4)",
            moa: "Synthetic form of thyroid hormone T4, increasing levels of thyroid hormone in the body.",
            indications: "Hypothyroidism.",
            contraindications: "Acute myocardial infarction, untreated adrenal insufficiency.",
            sideEffects: "Weight loss, nervousness, insomnia.",
            diseases: "Hypothyroidism.",
            seriousSideEffects: "Osteoporosis, heart arrhythmias.",
            dosage: "25-200 mcg orally once daily."
        },
        {
            name: "Liothyronine (T3)",
            moa: "Synthetic form of thyroid hormone T3, increasing thyroid hormone levels in the body.",
            indications: "Hypothyroidism, myxedema coma.",
            contraindications: "Acute myocardial infarction, adrenal insufficiency.",
            sideEffects: "Headache, nervousness, tremors.",
            diseases: "Hypothyroidism.",
            seriousSideEffects: "Arrhythmias, chest pain.",
            dosage: "5-25 mcg orally once daily."
        },
        {
            name: "Propylthiouracil (PTU)",
            moa: "Inhibits thyroid peroxidase, reducing thyroid hormone synthesis.",
            indications: "Hyperthyroidism, Graves' disease.",
            contraindications: "Liver disease, pregnancy (especially in the first trimester).",
            sideEffects: "Rash, nausea, arthralgia.",
            diseases: "Hyperthyroidism, Graves' disease.",
            seriousSideEffects: "Hepatotoxicity, agranulocytosis.",
            dosage: "100-150 mg orally every 8 hours."
        },
        {
            name: "Methimazole",
            moa: "Inhibits thyroid peroxidase, reducing thyroid hormone production.",
            indications: "Hyperthyroidism, Graves' disease.",
            contraindications: "Pregnancy (especially in the first trimester).",
            sideEffects: "Rash, nausea, arthralgia.",
            diseases: "Hyperthyroidism, Graves' disease.",
            seriousSideEffects: "Agranulocytosis, hepatotoxicity.",
            dosage: "5-30 mg orally once daily."
        },
        {
            name: "Carbimazole",
            moa: "Inhibits thyroid peroxidase, reducing thyroid hormone synthesis.",
            indications: "Hyperthyroidism.",
            contraindications: "Pregnancy (especially in the first trimester).",
            sideEffects: "Rash, headache, gastrointestinal disturbances.",
            diseases: "Hyperthyroidism.",
            seriousSideEffects: "Agranulocytosis, hepatotoxicity.",
            dosage: "20-40 mg orally daily."
        },
        {
            name: "Radioactive Iodine (I<sup>131</sup>)",
            moa: "Radioactive iodine destroys thyroid tissue through radiation.",
            indications: "Hyperthyroidism, thyroid cancer.",
            contraindications: "Pregnancy, severe uncontrolled hyperthyroidism.",
            sideEffects: "Hypothyroidism, radiation sickness.",
            diseases: "Hyperthyroidism, thyroid cancer.",
            seriousSideEffects: "Permanent hypothyroidism, radiation exposure effects.",
            dosage: "Dosing varies; administered as a single oral dose."
        },
        {
            name: "Lugol's Solution",
            moa: "Iodine solution that decreases thyroid hormone release and vascularity of the thyroid.",
            indications: "Preoperative preparation for thyroid surgery, hyperthyroidism.",
            contraindications: "Iodine allergy, thyroid storm.",
            sideEffects: "Iodine-induced dermatitis, metallic taste.",
            diseases: "Hyperthyroidism.",
            seriousSideEffects: "Iodine toxicity, thyroid dysfunction.",
            dosage: "5-10 drops orally three times daily."
        },
        {
            name: "Propranolol",
            moa: "Non-selective beta-adrenergic blocker, reduces symptoms of hyperthyroidism by blocking beta-adrenergic receptors.",
            indications: "Hyperthyroidism symptoms, hypertension, angina.",
            contraindications: "Asthma, severe bradycardia.",
            sideEffects: "Fatigue, dizziness, bradycardia.",
            diseases: "Hyperthyroidism, hypertension.",
            seriousSideEffects: "Heart failure, bronchospasm.",
            dosage: "40-160 mg orally two to three times daily."
        }
    ],
   
"Antimalarials": [
    {
            name: "Chloroquine",
            moa: "Interferes with the metabolism of heme within the parasite.",
            indications: "Treatment of malaria, especially Plasmodium vivax and Plasmodium malariae.",
            contraindications: "Hypersensitivity, pre-existing retinal damage, psoriasis.",
            sideEffects: "Nausea, headache, dizziness, blurred vision.",
            seriousSideEffects: "Retinal damage, severe skin reactions, cardiac toxicity.",
            dosage: "500 mg orally once weekly for prophylaxis, or as directed for treatment.",
            diseases: ["Malaria"]
        },
        {
            name: "Quinine",
            moa: "Interferes with the parasite’s ability to metabolize and detoxify heme.",
            indications: "Treatment of uncomplicated malaria, especially due to Plasmodium falciparum.",
            contraindications: "Hypersensitivity, tinnitus, hearing impairment.",
            sideEffects: "Nausea, tinnitus, headache, sweating.",
            seriousSideEffects: "Cinchonism (dizziness, headache, tinnitus), severe allergic reactions.",
            dosage: "600 mg orally every 8 hours for 7 days.",
            diseases: ["Malaria"]
        },
        {
            name: "Artemisinin",
            moa: "Generates reactive oxygen species that damage the parasite’s proteins and lipids.",
            indications: "Used for severe malaria or drug-resistant strains.",
            contraindications: "Hypersensitivity.",
            sideEffects: "Nausea, vomiting, dizziness.",
            seriousSideEffects: "Allergic reactions, severe gastrointestinal disturbances.",
            dosage: "Based on combination therapy; usually 200 mg orally once daily for 3 days.",
            diseases: ["Malaria"]
        },
        {
            name: "Mefloquine",
            moa: "Interferes with the parasite’s ability to metabolize heme and detoxify heme products.",
            indications: "Prophylaxis and treatment of malaria, especially in areas with chloroquine resistance.",
            contraindications: "History of psychiatric disorders, seizures.",
            sideEffects: "Nausea, dizziness, vivid dreams.",
            seriousSideEffects: "Neuropsychiatric effects (depression, hallucinations), seizures.",
            dosage: "250 mg orally once weekly for prophylaxis, or as directed for treatment.",
            diseases: ["Malaria"]
        },
        {
            name: "Primaquine",
            moa: "Oxidizes the parasite’s internal organelles and inhibits mitochondrial respiration.",
            indications: "Radical cure of Plasmodium vivax and Plasmodium ovale infections.",
            contraindications: "Hypersensitivity, G6PD deficiency.",
            sideEffects: "Abdominal pain, nausea, headache.",
            seriousSideEffects: "Hemolytic anemia in G6PD deficiency, severe gastrointestinal disturbances.",
            dosage: "15 mg orally once daily for 14 days.",
            diseases: ["Malaria"]
        },
    ],
    "Antileprosy":[
    {
        name: "Dapsone",
        moa: "Inhibits folic acid synthesis by blocking the conversion of pteridine to folate.",
        indications: "Used for leprosy and dermatitis herpetiformis.",
        contraindications: "Hypersensitivity, severe liver impairment, renal impairment.",
        sideEffects: "Nausea, vomiting, rash, hemolysis.",
        seriousSideEffects: "Severe skin reactions, hemolytic anemia, severe liver damage.",
        dosage: "100 mg orally once daily, can be adjusted based on condition.",
        diseases: ["Leprosy", "Dermatitis Herpetiformis"]
    },
    {
        name: "Clofazimine",
        moa: "Interferes with bacterial DNA, leading to inhibition of bacterial growth.",
        indications: "Used for the treatment of leprosy.",
        contraindications: "Hypersensitivity, severe liver impairment.",
        sideEffects: "Red-brown discoloration of skin, gastrointestinal disturbances.",
        seriousSideEffects: "Severe skin reactions, hepatotoxicity.",
        dosage: "100 mg orally daily, can be adjusted based on condition.",
        diseases: ["Leprosy"]
    }
],
"Antitubercle": [
    {
        name: "Rifampin",
        moa: "Inhibits bacterial DNA-dependent RNA polymerase, preventing RNA synthesis.",
        indications: "Used in combination with other antitubercular drugs for the treatment of tuberculosis.",
        contraindications: "Hypersensitivity, concurrent use with certain drugs like warfarin.",
        sideEffects: "Rash, nausea, vomiting, liver enzyme abnormalities.",
        seriousSideEffects: "Hepatotoxicity, severe allergic reactions, red-orange discoloration of body fluids.",
        dosage: "10 mg/kg orally once daily, up to 600 mg/day.",
        diseases: ["Tuberculosis"]
    },
    {
        name: "Isoniazid",
        moa: "Inhibits the synthesis of mycolic acids in the bacterial cell wall.",
        indications: "Used for the treatment and prevention of tuberculosis.",
        contraindications: "Liver disease, acute hepatic porphyria, hypersensitivity.",
        sideEffects: "Peripheral neuropathy, hepatitis, rash.",
        seriousSideEffects: "Hepatotoxicity, severe hypersensitivity reactions.",
        dosage: "5 mg/kg orally once daily, up to 300 mg/day.",
        diseases: ["Tuberculosis"]
    },
    {
        name: "Pyrazinamide",
        moa: "Disrupts mycobacterial cell membrane metabolism and transport functions.",
        indications: "Used in combination for the treatment of tuberculosis.",
        contraindications: "Severe hepatic impairment, acute gout.",
        sideEffects: "Nausea, vomiting, rash, liver enzyme abnormalities.",
        seriousSideEffects: "Hepatotoxicity, gout, severe hypersensitivity reactions.",
        dosage: "25 mg/kg orally once daily, up to 2000 mg/day.",
        diseases: ["Tuberculosis"]
    },
    {
        name: "Ethambutol",
        moa: "Inhibits the synthesis of the bacterial cell wall.",
        indications: "Used in combination therapy for tuberculosis.",
        contraindications: "Optic neuritis, severe renal impairment.",
        sideEffects: "Optic neuritis, rash, joint pain.",
        seriousSideEffects: "Vision loss, allergic reactions.",
        dosage: "15 mg/kg orally once daily, up to 1200 mg/day.",
        diseases: ["Tuberculosis"]
    },
    {
        name: "Ethionamide",
        moa: "Inhibits the synthesis of mycolic acids, disrupting bacterial cell wall formation.",
        indications: "Used for the treatment of multidrug-resistant tuberculosis.",
        contraindications: "Hepatic impairment, hypersensitivity.",
        sideEffects: "Nausea, vomiting, metallic taste, hepatotoxicity.",
        seriousSideEffects: "Severe liver damage, neurological symptoms.",
        dosage: "15 mg/kg orally once daily, up to 1000 mg/day.",
        diseases: ["Multidrug-Resistant Tuberculosis"]
    },
    {
        name: "Para-Aminosalicylic Acid",
        moa: "Inhibits folic acid synthesis in bacteria.",
        indications: "Used as an adjunct therapy in the treatment of tuberculosis.",
        contraindications: "Hypersensitivity, renal impairment.",
        sideEffects: "Nausea, vomiting, diarrhea, rash.",
        seriousSideEffects: "Severe allergic reactions, liver toxicity.",
        dosage: "150 mg/kg orally in divided doses.",
        diseases: ["Tuberculosis"]
    },
    {
        name: "Cycloserine",
        moa: "Inhibits bacterial cell wall synthesis by interfering with peptide synthesis.",
        indications: "Used in combination with other drugs for the treatment of multidrug-resistant tuberculosis.",
        contraindications: "Severe renal impairment, hypersensitivity.",
        sideEffects: "Neurological effects (e.g., seizures, psychosis), headache.",
        seriousSideEffects: "Severe CNS effects, hypersensitivity reactions.",
        dosage: "250 mg orally twice daily, up to 500 mg/day.",
        diseases: ["Multidrug-Resistant Tuberculosis"]
    },
    {
        name: "Amikacin",
        moa: "Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit.",
        indications: "Used for severe infections, including those caused by Mycobacterium tuberculosis.",
        contraindications: "Severe renal impairment, hypersensitivity.",
        sideEffects: "Nephrotoxicity, ototoxicity, rash.",
        seriousSideEffects: "Severe renal or hearing damage.",
        dosage: "15 mg/kg intravenously or intramuscularly every 24 hours.",
        diseases: ["Severe Infections"]
    },
    {
        name: "Capreomycin",
        moa: "Inhibits bacterial protein synthesis by binding to the 70S ribosomal subunit.",
        indications: "Used for multidrug-resistant tuberculosis.",
        contraindications: "Renal impairment, hypersensitivity.",
        sideEffects: "Ototoxicity, nephrotoxicity, injection site reactions.",
        seriousSideEffects: "Severe renal or hearing damage.",
        dosage: "1 g intramuscularly daily or 1.5 g intravenously weekly.",
        diseases: ["Multidrug-Resistant Tuberculosis"]
    },
    {
        name: "Fluoroquinolones",
        moa: "Inhibit bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.",
        indications: "Used for a range of infections including those caused by Mycobacterium tuberculosis.",
        contraindications: "Hypersensitivity, concurrent use with certain drugs like tizanidine.",
        sideEffects: "Nausea, diarrhea, dizziness.",
        seriousSideEffects: "Tendon rupture, CNS effects, QT prolongation.",
        dosage: "Varies by specific drug; typically 250-750 mg orally once or twice daily.",
        diseases: ["Various Infections"]
    },
    {
        name: "Rifabutin",
        moa: "Inhibits bacterial RNA polymerase, similar to rifampin.",
        indications: "Used for the treatment of tuberculosis and as part of HIV regimens.",
        contraindications: "Hypersensitivity, concurrent use with certain drugs.",
        sideEffects: "Rash, nausea, uveitis.",
        seriousSideEffects: "Severe liver toxicity, uveitis.",
        dosage: "300 mg orally once daily.",
        diseases: ["Tuberculosis", "HIV Co-Infection"]
    },
    {
        name: "Bedaquiline",
        moa: "Inhibits ATP synthase in Mycobacterium tuberculosis, preventing energy production.",
        indications: "Used for multidrug-resistant tuberculosis.",
        contraindications: "Hypersensitivity, concurrent use with certain medications.",
        sideEffects: "Nausea, headache, joint pain.",
        seriousSideEffects: "QT prolongation, hepatotoxicity.",
        dosage: "400 mg orally once daily for 2 weeks, then 200 mg three times a week.",
        diseases: ["Multidrug-Resistant Tuberculosis"]
    },
    {
        name: "Delamanid",
        moa: "Inhibits cell wall synthesis in Mycobacterium tuberculosis.",
        indications: "Used for multidrug-resistant tuberculosis.",
        contraindications: "Hypersensitivity, severe liver impairment.",
        sideEffects: "Nausea, diarrhea, rash.",
        seriousSideEffects: "QT prolongation, hepatotoxicity.",
        dosage: "100 mg orally twice daily.",
        diseases: ["Multidrug-Resistant Tuberculosis"]
    }
], 
"ARTs (Antiretrovirals)": [
    {
        name: "Abacavir (ABC)",
        moa: "Inhibits reverse transcriptase, blocking the conversion of HIV RNA to DNA.",
        indications: "HIV-1 infection.",
        contraindications: "Hypersensitivity to abacavir, severe hepatic impairment.",
        sideEffects: "Rash, nausea, diarrhea, headache.",
        seriousSideEffects: "Hypersensitivity reactions, lactic acidosis, liver toxicity.",
        dosage: "300 mg orally twice daily or 600 mg once daily.",
        diseases: ["HIV-1 Infection"]
    },
    {
        name: "Didanosine",
        moa: "Inhibits reverse transcriptase, preventing HIV RNA from being converted into DNA.",
        indications: "HIV-1 infection.",
        contraindications: "Hypersensitivity to didanosine, significant hepatic impairment.",
        sideEffects: "Diarrhea, nausea, abdominal pain, headache.",
        seriousSideEffects: "Pancreatitis, peripheral neuropathy, lactic acidosis.",
        dosage: "100-400 mg orally once daily, based on patient weight.",
        diseases: ["HIV-1 Infection"]
    },
    {
        name: "Emtricitabine (FTC)",
        moa: "Inhibits reverse transcriptase, preventing viral replication by terminating DNA chain elongation.",
        indications: "HIV-1 infection.",
        contraindications: "Hypersensitivity to emtricitabine, severe renal impairment.",
        sideEffects: "Rash, diarrhea, nausea, headache.",
        seriousSideEffects: "Lactic acidosis, hepatic steatosis, renal impairment.",
        dosage: "200 mg orally once daily.",
        diseases: ["HIV-1 Infection"]
    },
    {
        name: "Lamivudine (3-thiocytosine)",
        moa: "Inhibits reverse transcriptase, stopping the conversion of viral RNA into DNA.",
        indications: "HIV-1 infection, chronic hepatitis B.",
        contraindications: "Hypersensitivity to lamivudine, severe renal impairment.",
        sideEffects: "Headache, nausea, diarrhea, fatigue.",
        seriousSideEffects: "Lactic acidosis, hepatomegaly, hepatic steatosis.",
        dosage: "150 mg orally twice daily or 300 mg once daily.",
        diseases: ["HIV-1 Infection", "Chronic Hepatitis B"]
    },
    {
        name: "Stavudine",
        moa: "Inhibits reverse transcriptase, preventing the conversion of HIV RNA to DNA.",
        indications: "HIV-1 infection.",
        contraindications: "Hypersensitivity to stavudine, severe hepatic impairment.",
        sideEffects: "Nausea, diarrhea, peripheral neuropathy.",
        seriousSideEffects: "Lactic acidosis, severe peripheral neuropathy, lipodystrophy.",
        dosage: "30-40 mg orally twice daily.",
        diseases: ["HIV-1 Infection"]
    },
    {
        name: "Zidovudine",
        moa: "Inhibits reverse transcriptase, preventing HIV RNA from being converted to DNA.",
        indications: "HIV-1 infection, prevention of mother-to-child transmission.",
        contraindications: "Hypersensitivity to zidovudine, severe bone marrow suppression.",
        sideEffects: "Nausea, headache, anemia, bone marrow suppression.",
        seriousSideEffects: "Severe anemia, granulocytopenia, lactic acidosis.",
        dosage: "300 mg orally twice daily.",
        diseases: ["HIV-1 Infection"]
    },
    {
        name: "Tenofovir",
        moa: "Inhibits reverse transcriptase, blocking viral DNA synthesis.",
        indications: "HIV-1 infection, chronic hepatitis B.",
        contraindications: "Hypersensitivity to tenofovir, severe renal impairment.",
        sideEffects: "Nausea, diarrhea, headache, dizziness.",
        seriousSideEffects: "Renal toxicity, bone mineral density loss, lactic acidosis.",
        dosage: "300 mg orally once daily.",
        diseases: ["HIV-1 Infection", "Chronic Hepatitis B"]
    },
    {
        name: "Delavirdine",
        moa: "Inhibits HIV-1 reverse transcriptase, preventing viral replication.",
        indications: "HIV-1 infection.",
        contraindications: "Hypersensitivity to delavirdine, use with certain other medications.",
        sideEffects: "Rash, headache, nausea, diarrhea.",
        seriousSideEffects: "Severe rash, liver dysfunction.",
        dosage: "400 mg orally three times daily.",
        diseases: ["HIV-1 Infection"]
    },
    {
        name: "Nevirapine",
        moa: "Inhibits reverse transcriptase, preventing HIV RNA conversion to DNA.",
        indications: "HIV-1 infection.",
        contraindications: "Hypersensitivity to nevirapine, severe hepatic impairment.",
        sideEffects: "Rash, nausea, headache, fatigue.",
        seriousSideEffects: "Severe rash, liver toxicity, Stevens-Johnson syndrome.",
        dosage: "200 mg orally once daily for 14 days, then 200 mg twice daily.",
        diseases: ["HIV-1 Infection"]
    },
    {
        name: "Efavirenz (EFV)",
        moa: "Inhibits reverse transcriptase, blocking the replication of HIV.",
        indications: "HIV-1 infection.",
        contraindications: "Hypersensitivity to efavirenz, severe hepatic impairment.",
        sideEffects: "Dizziness, rash, headache, insomnia.",
        seriousSideEffects: "Severe psychiatric effects, liver dysfunction.",
        dosage: "600 mg orally once daily.",
        diseases: ["HIV-1 Infection"]
    },
    {
        name: "Entravirine",
        moa: "Inhibits HIV-1 reverse transcriptase by binding to the enzyme and blocking its function.",
        indications: "HIV-1 infection.",
        contraindications: "Hypersensitivity to etravirine.",
        sideEffects: "Rash, nausea, headache, fatigue.",
        seriousSideEffects: "Severe rash, liver toxicity.",
        dosage: "200 mg orally twice daily.",
        diseases: ["HIV-1 Infection"]
    },
    {
        name: "Dolutegravir",
        moa: "Inhibits HIV integrase, blocking the integration of viral DNA into the host genome.",
        indications: "HIV-1 infection.",
        contraindications: "Hypersensitivity to dolutegravir.",
        sideEffects: "Insomnia, headache, diarrhea, rash.",
        seriousSideEffects: "Severe hypersensitivity reactions, liver toxicity.",
        dosage: "50 mg orally once daily.",
        diseases: ["HIV-1 Infection"]
    },
    {
        name: "Atazanavir",
        moa: "Inhibits HIV-1 protease, preventing viral maturation.",
        indications: "HIV-1 infection.",
        contraindications: "Hypersensitivity to atazanavir, severe hepatic impairment.",
        sideEffects: "Jaundice, nausea, diarrhea, headache.",
        seriousSideEffects: "Severe jaundice, liver dysfunction.",
        dosage: "300 mg orally once daily with food.",
        diseases: ["HIV-1 Infection"]
    },
    {
        name: "Lopinavir",
        moa: "Inhibits HIV-1 protease, preventing viral replication and maturation.",
        indications: "HIV-1 infection.",
        contraindications: "Hypersensitivity to lopinavir, severe hepatic impairment.",
        sideEffects: "Nausea, diarrhea, abdominal pain.",
        seriousSideEffects: "Liver toxicity, severe gastrointestinal effects.",
        dosage: "400/100 mg orally twice daily or 800/200 mg once daily with ritonavir.",
        diseases: ["HIV-1 Infection"]
    },
    {
        name: "Ritonavir",
        moa: "Inhibits HIV-1 protease, preventing the cleavage of viral polyproteins.",
        indications: "HIV-1 infection.",
        contraindications: "Hypersensitivity to ritonavir, severe hepatic impairment.",
        sideEffects: "Nausea, diarrhea, abdominal pain.",
        seriousSideEffects: "Liver toxicity, severe gastrointestinal effects.",
        dosage: "600 mg orally twice daily.",
        diseases: ["HIV-1 Infection"]
    },
    {
        name: "Enfuvirtide",
        moa: "Inhibits HIV-1 entry into cells by binding to gp41 on the viral envelope.",
        indications: "HIV-1 infection in treatment-experienced patients.",
        contraindications: "Hypersensitivity to enfuvirtide.",
        sideEffects: "Injection site reactions, rash, diarrhea.",
        seriousSideEffects: "Severe allergic reactions, injection site infections.",
        dosage: "90 mg subcutaneously twice daily.",
        diseases: ["HIV-1 Infection"]
    }
],
             "Antihypertensives": [
        {
            name: "Enalapril",
            moa: "Inhibits ACE, reducing angiotensin II levels.",
            indications: "Hypertension, heart failure.",
            sideEffects: "Cough, dizziness.",
            seriousSideEffects: "Angioedema, hyperkalemia.",
            dosage: "5-40 mg daily."
        },
        {
            name: "Lisinopril",
            moa: "Inhibits ACE, decreasing angiotensin II production.",
            indications: "Hypertension, heart failure.",
            sideEffects: "Headache, rash.",
            seriousSideEffects: "Angioedema, renal impairment.",
            dosage: "10-40 mg daily."
        },
        {
            name: "Ramipril",
            moa: "Inhibits ACE, leading to vasodilation.",
            indications: "Hypertension, post-myocardial infarction.",
            sideEffects: "Cough, fatigue.",
            seriousSideEffects: "Angioedema, hypotension.",
            dosage: "2.5-20 mg daily."
        },
        {
            name: "Captopril",
            moa: "Blocks ACE, decreasing angiotensin II levels.",
            indications: "Hypertension, heart failure.",
            sideEffects: "Cough, rash.",
            seriousSideEffects: "Angioedema, renal dysfunction.",
            dosage: "25-150 mg daily."
        },
        {
            name: "Quinapril",
            moa: "Inhibits ACE, reducing blood pressure.",
            indications: "Hypertension, heart failure.",
            sideEffects: "Dizziness, headache.",
            seriousSideEffects: "Angioedema, hyperkalemia.",
            dosage: "10-80 mg daily."
        },
        {
            name: "Fosinopril",
            moa: "Inhibits ACE, leading to decreased blood pressure.",
            indications: "Hypertension, heart failure.",
            sideEffects: "Cough, headache.",
            seriousSideEffects: "Angioedema, renal impairment.",
            dosage: "10-40 mg daily."
        },
        {
            name: "Perindopril",
            moa: "Inhibits ACE, reducing blood pressure and cardiac workload.",
            indications: "Hypertension, coronary artery disease.",
            sideEffects: "Cough, dizziness.",
            seriousSideEffects: "Angioedema, hyperkalemia.",
            dosage: "4-16 mg daily."
        },
        {
            name: "Losartan",
            moa: "Blocks angiotensin II receptors, causing vasodilation.",
            indications: "Hypertension, diabetic nephropathy.",
            sideEffects: "Dizziness, headache.",
            seriousSideEffects: "Angioedema, renal impairment.",
            dosage: "50-100 mg daily."
        },
        {
            name: "Valsartan",
            moa: "Antagonizes angiotensin II receptors, leading to vasodilation.",
            indications: "Hypertension, heart failure.",
            sideEffects: "Fatigue, dizziness.",
            seriousSideEffects: "Angioedema, hyperkalemia.",
            dosage: "80-320 mg daily."
        },
        {
            name: "Irbesartan",
            moa: "Blocks angiotensin II receptors, reducing blood pressure.",
            indications: "Hypertension, diabetic nephropathy.",
            sideEffects: "Dizziness, headache.",
            seriousSideEffects: "Angioedema, renal dysfunction.",
            dosage: "75-300 mg daily."
        },
        {
            name: "Telmisartan",
            moa: "Antagonizes angiotensin II receptors, leading to vasodilation.",
            indications: "Hypertension, cardiovascular risk reduction.",
            sideEffects: "Dizziness, cough.",
            seriousSideEffects: "Angioedema, renal impairment.",
            dosage: "40-80 mg daily."
        },
        {
            name: "Olmesartan",
            moa: "Blocks angiotensin II receptors, lowering blood pressure.",
            indications: "Hypertension.",
            sideEffects: "Dizziness, headache.",
            seriousSideEffects: "Angioedema, renal dysfunction.",
            dosage: "20-40 mg daily."
        },
        {
            name: "Candesartan",
            moa: "Inhibits angiotensin II receptors, causing vasodilation.",
            indications: "Hypertension, heart failure.",
            sideEffects: "Dizziness, fatigue.",
            seriousSideEffects: "Angioedema, renal impairment.",
            dosage: "8-32 mg daily."
        },
        {
            name: "Eprosartan",
            moa: "Blocks angiotensin II receptors, leading to reduced blood pressure.",
            indications: "Hypertension.",
            sideEffects: "Dizziness, headache.",
            seriousSideEffects: "Angioedema, renal dysfunction.",
            dosage: "400-800 mg daily."
        },
        {
            name: "Amlodipine",
            moa: "Inhibits calcium channels, causing vasodilation.",
            indications: "Hypertension, angina.",
            sideEffects: "Swelling, headache.",
            seriousSideEffects: "Severe hypotension, angina exacerbation.",
            dosage: "5-10 mg daily."
        },
        {
            name: "Diltiazem",
            moa: "Blocks calcium channels, reducing heart rate and blood pressure.",
            indications: "Hypertension, angina.",
            sideEffects: "Edema, dizziness.",
            seriousSideEffects: "Bradycardia, heart failure.",
            dosage: "60-360 mg daily."
        },
        {
            name: "Nifedipine",
            moa: "Inhibits calcium channels, leading to vasodilation.",
            indications: "Hypertension, angina.",
            sideEffects: "Flushing, dizziness.",
            seriousSideEffects: "Severe hypotension, angina exacerbation.",
            dosage: "30-90 mg daily."
        },
        {
            name: "Verapamil",
            moa: "Blocks calcium channels, decreasing heart rate and blood pressure.",
            indications: "Hypertension, angina.",
            sideEffects: "Constipation, dizziness.",
            seriousSideEffects: "Severe bradycardia, heart failure.",
            dosage: "80-320 mg daily."
        },
        {
            name: "Nisoldipine",
            moa: "Inhibits calcium channels, resulting in vasodilation.",
            indications: "Hypertension.",
            sideEffects: "Dizziness, flushing.",
            seriousSideEffects: "Severe hypotension, edema.",
            dosage: "10-30 mg daily."
        },
        {
            name: "Isradipine",
            moa: "Blocks calcium channels, leading to reduced blood pressure.",
            indications: "Hypertension.",
            sideEffects: "Headache, flushing.",
            seriousSideEffects: "Severe hypotension.",
            dosage: "2.5-10 mg twice daily."
        },
        {
            name: "Felodipine",
            moa: "Inhibits calcium channels in smooth muscle, causing vasodilation.",
            indications: "Hypertension.",
            sideEffects: "Headache, edema.",
            seriousSideEffects: "Severe hypotension, angina.",
            dosage: "5-10 mg daily."
        },
        {
            name: "Prazosin",
            moa: "Blocks alpha-1 adrenergic receptors, causing vasodilation.",
            indications: "Hypertension, benign prostatic hyperplasia.",
            sideEffects: "Dizziness, headache.",
            seriousSideEffects: "Severe hypotension, syncope.",
            dosage: "1-20 mg daily."
        },
        {
            name: "Doxazosin",
            moa: "Antagonizes alpha-1 adrenergic receptors, leading to vasodilation.",
            indications: "Hypertension, benign prostatic hyperplasia.",
            sideEffects: "Dizziness, fatigue.",
            seriousSideEffects: "Severe hypotension, syncope.",
            dosage: "1-16 mg daily."
        },
        {
            name: "Terazosin",
            moa: "Blocks alpha-1 adrenergic receptors, resulting in vasodilation.",
            indications: "Hypertension, benign prostatic hyperplasia.",
            sideEffects: "Dizziness, headache.",
            seriousSideEffects: "Severe hypotension, syncope.",
            dosage: "1-20 mg daily."
        },
        {
            name: "Alfuzosin",
            moa: "Antagonizes alpha-1 adrenergic receptors, causing vasodilation.",
            indications: "Benign prostatic hyperplasia.",
            sideEffects: "Dizziness, headache.",
            seriousSideEffects: "Severe hypotension, syncope.",
            dosage: "10 mg daily."
        },
        {
            name: "Silodosin",
            moa: "Blocks alpha-1 adrenergic receptors in the prostate, improving urine flow.",
            indications: "Benign prostatic hyperplasia.",
            sideEffects: "Dizziness, retrograde ejaculation.",
            seriousSideEffects: "Severe hypotension.",
            dosage: "8 mg daily."
        },
        {
            name: "Hydralazine",
            moa: "Directly relaxes vascular smooth muscle, causing vasodilation.",
            indications: "Hypertension, heart failure.",
            sideEffects: "Headache, palpitations.",
            seriousSideEffects: "Severe hypotension, lupus-like syndrome.",
            dosage: "10-300 mg daily."
        },
        {
            name: "Minoxidil",
            moa: "Directly dilates arterial smooth muscle, lowering blood pressure.",
            indications: "Severe hypertension.",
            sideEffects: "Fluid retention, tachycardia.",
            seriousSideEffects: "Severe hypotension, pericardial effusion.",
            dosage: "2.5-80 mg daily."
        },
        {
            name: "Nitroprusside",
            moa: "Generates nitric oxide, leading to vasodilation.",
            indications: "Acute hypertensive emergencies.",
            sideEffects: "Nausea, headache.",
            seriousSideEffects: "Cyanide toxicity, severe hypotension.",
            dosage: "0.3-10 mcg/kg/min IV."
        },
        {
            name: "Diazoxide",
            moa: "Relaxes smooth muscle by opening potassium channels.",
            indications: "Hypertensive emergencies.",
            sideEffects: "Hyperglycemia, fluid retention.",
            seriousSideEffects: "Severe hypotension, excessive hair growth.",
            dosage: "300-600 mg IV bolus."
        },
        {
            name: "Fenoldopam",
            moa: "Agonizes dopamine D1 receptors, leading to vasodilation.",
            indications: "Acute hypertension.",
            sideEffects: "Headache, flushing.",
            seriousSideEffects: "Severe hypotension, tachycardia.",
            dosage: "0.1-0.8 mcg/kg/min IV."
        },
        {
            name: "Clonidine",
            moa: "Stimulates alpha-2 adrenergic receptors in the brain, reducing sympathetic outflow.",
            indications: "Hypertension, withdrawal symptoms.",
            sideEffects: "Dry mouth, sedation.",
            seriousSideEffects: "Severe hypotension, rebound hypertension.",
            dosage: "0.1-0.8 mg daily."
        },
        {
            name: "Methyldopa",
            moa: "Stimulates central alpha-2 receptors, reducing blood pressure.",
            indications: "Hypertension, especially in pregnancy.",
            sideEffects: "Sedation, dry mouth.",
            seriousSideEffects: "Hepatitis, hemolytic anemia.",
            dosage: "250-3000 mg daily."
        },
        {
            name: "Guanabenz",
            moa: "Agonizes alpha-2 adrenergic receptors in the central nervous system.",
            indications: "Hypertension.",
            sideEffects: "Drowsiness, dry mouth.",
            seriousSideEffects: "Severe hypotension, rebound hypertension.",
            dosage: "4-32 mg daily."
        },
        {
            name: "Guanfacine",
            moa: "Stimulates alpha-2 adrenergic receptors in the brain.",
            indications: "Hypertension, ADHD.",
            sideEffects: "Drowsiness, dry mouth.",
            seriousSideEffects: "Severe hypotension, rebound hypertension.",
            dosage: "1-4 mg daily."
        },
        {
            name: "Spironolactone",
            moa: "Antagonizes aldosterone receptors in the distal nephron, increasing sodium and water excretion while conserving potassium.",
            indications: "Hypertension, heart failure, hyperaldosteronism.",
            sideEffects: "Hyperkalemia, gynecomastia.",
            seriousSideEffects: "Severe hyperkalemia, renal impairment.",
            dosage: "25-400 mg daily."
        },
        {
            name: "Eplerenone",
            moa: "Selective antagonist of aldosterone receptors, increasing sodium and water excretion while conserving potassium.",
            indications: "Hypertension, heart failure.",
            sideEffects: "Hyperkalemia, dizziness.",
            seriousSideEffects: "Severe hyperkalemia, renal impairment.",
            dosage: "50-400 mg daily."
        },
        {
            name: "Amiloride",
            moa: "Blocks sodium channels in the distal nephron, leading to increased sodium and water excretion while conserving potassium.",
            indications: "Hypertension, heart failure.",
            sideEffects: "Hyperkalemia, nausea.",
            seriousSideEffects: "Severe hyperkalemia, renal impairment.",
            dosage: "5-20 mg daily."
        },
        {
            name: "Triamterene",
            moa: "Inhibits sodium channels in the distal nephron, increasing sodium and water excretion while preserving potassium.",
            indications: "Hypertension, edema.",
            sideEffects: "Hyperkalemia, dizziness.",
            seriousSideEffects: "Severe hyperkalemia, renal impairment.",
            dosage: "50-300 mg daily."
        },
        {
            name: "Furosemide",
            moa: "Inhibits the Na-K-2Cl cotransporter in the thick ascending limb of the loop of Henle, leading to increased sodium, chloride, and water excretion.",
            indications: "Edema, heart failure, hypertension.",
            sideEffects: "Electrolyte imbalances, dehydration.",
            seriousSideEffects: "Severe dehydration, ototoxicity.",
            dosage: "20-80 mg daily."
        },
        {
            name: "Bumetanide",
            moa: "Inhibits the Na-K-2Cl cotransporter in the thick ascending limb of the loop of Henle.",
            indications: "Edema, heart failure.",
            sideEffects: "Electrolyte imbalances, dizziness.",
            seriousSideEffects: "Severe dehydration, ototoxicity.",
            dosage: "0.5-10 mg daily."
        },
        {
            name: "Torsemide",
            moa: "Blocks the Na-K-2Cl cotransporter in the thick ascending limb of the loop of Henle.",
            indications: "Edema, hypertension.",
            sideEffects: "Electrolyte imbalances, dehydration.",
            seriousSideEffects: "Severe dehydration, ototoxicity.",
            dosage: "5-100 mg daily."
        },
        {
            name: "Ethacrynic Acid",
            moa: "Inhibits the Na-K-2Cl cotransporter in the thick ascending limb of the loop of Henle.",
            indications: "Edema, heart failure.",
            sideEffects: "Electrolyte imbalances, gastrointestinal disturbances.",
            seriousSideEffects: "Severe dehydration, ototoxicity.",
            dosage: "25-100 mg daily."
        }
    ],
    "Antiarrhythmics": [
        {
            name: "Procainamide",
            moa: "Blocks sodium channels, decreasing the rate of depolarization in cardiac cells.",
            indications: "Used for ventricular arrhythmias, atrial fibrillation.",
            contraindications: "Heart block, lupus erythematosus.",
            sideEffects: "Nausea, vomiting, hypotension.",
            diseases: "Ventricular arrhythmias.",
            seriousSideEffects: "Arrhythmias, lupus-like syndrome.",
            dosage: "Initial dose of 50 mg IV bolus; maintenance dose adjusted as needed."
        },
        {
            name: "Quinidine",
            moa: "Blocks sodium channels, prolongs the action potential duration.",
            indications: "Used for atrial fibrillation, ventricular arrhythmias.",
            contraindications: "Heart block, hypersensitivity to quinidine.",
            sideEffects: "Gastrointestinal upset, cinchonism.",
            diseases: "Atrial fibrillation, ventricular arrhythmias.",
            seriousSideEffects: "Severe hypotension, arrhythmias.",
            dosage: "Initial dose of 200-300 mg orally every 6-8 hours."
        },
        {
            name: "Disopyramide",
            moa: "Blocks sodium channels and has anticholinergic effects, reducing myocardial excitability.",
            indications: "Used for ventricular arrhythmias.",
            contraindications: "Heart failure, glaucoma.",
            sideEffects: "Dry mouth, urinary retention.",
            diseases: "Ventricular arrhythmias.",
            seriousSideEffects: "Severe hypotension, heart failure.",
            dosage: "Initial dose of 100 mg orally every 6-8 hours."
        },
        {
            name: "Lidocaine",
            moa: "Blocks sodium channels, preventing nerve impulse conduction.",
            indications: "Used for ventricular arrhythmias.",
            contraindications: "Hypersensitivity to amide-type anesthetics.",
            sideEffects: "Nausea, dizziness, local irritation.",
            diseases: "Ventricular arrhythmias.",
            seriousSideEffects: "Severe allergic reactions, CNS toxicity.",
            dosage: "Initial dose of 1-1.5 mg/kg IV; maintenance dose adjusted as needed."
        },
        {
            name: "Mexiletine",
            moa: "Blocks sodium channels, reducing the frequency of cardiac arrhythmias.",
            indications: "Used for ventricular arrhythmias.",
            contraindications: "Hypersensitivity, severe liver disease.",
            sideEffects: "Gastrointestinal upset, tremor.",
            diseases: "Ventricular arrhythmias.",
            seriousSideEffects: "Severe liver toxicity, heart block.",
            dosage: "Initial dose of 200 mg orally every 8 hours."
        },
        {
            name: "Phenytoin",
            moa: "Blocks sodium channels, stabilizing neuronal membranes.",
            indications: "Used for ventricular arrhythmias, seizures.",
            contraindications: "Hypersensitivity, sinus bradycardia.",
            sideEffects: "Gingival hyperplasia, rash.",
            diseases: "Seizures, ventricular arrhythmias.",
            seriousSideEffects: "Severe skin reactions, liver toxicity.",
            dosage: "Initial dose of 15-20 mg/kg IV; maintenance dose adjusted as needed."
        },
        {
            name: "Flecainide",
            moa: "Blocks sodium channels, slowing conduction through the heart.",
            indications: "Used for atrial fibrillation, ventricular arrhythmias.",
            contraindications: "Heart failure, structural heart disease.",
            sideEffects: "Dizziness, blurred vision.",
            diseases: "Atrial fibrillation, ventricular arrhythmias.",
            seriousSideEffects: "Severe arrhythmias, heart block.",
            dosage: "Initial dose of 50-100 mg orally every 12 hours."
        },
        {
            name: "Propafenone",
            moa: "Blocks sodium channels and has mild beta-blocking effects.",
            indications: "Used for atrial fibrillation, ventricular arrhythmias.",
            contraindications: "Heart failure, severe liver disease.",
            sideEffects: "Dizziness, nausea.",
            diseases: "Atrial fibrillation, ventricular arrhythmias.",
            seriousSideEffects: "Severe arrhythmias, liver toxicity.",
            dosage: "Initial dose of 150 mg orally every 8 hours."
        },
        {
            name: "Propranolol",
            moa: "Non-selective beta-blocker that decreases heart rate and contractility.",
            indications: "Used for atrial fibrillation, ventricular arrhythmias.",
            contraindications: "Asthma, severe bradycardia.",
            sideEffects: "Bradycardia, dizziness.",
            diseases: "Atrial fibrillation, ventricular arrhythmias.",
            seriousSideEffects: "Severe bradycardia, heart failure.",
            dosage: "Initial dose of 10-20 mg orally every 8 hours."
        },
        {
            name: "Metoprolol",
            moa: "Selective beta-1 blocker that reduces heart rate and myocardial oxygen demand.",
            indications: "Used for atrial fibrillation, ventricular arrhythmias.",
            contraindications: "Severe bradycardia, heart block.",
            sideEffects: "Fatigue, dizziness.",
            diseases: "Atrial fibrillation, ventricular arrhythmias.",
            seriousSideEffects: "Severe bradycardia, heart failure.",
            dosage: "Initial dose of 50 mg orally every 12 hours."
        },
        {
            name: "Amiodarone",
            moa: "Blocks potassium channels and has class I, II, III, and IV properties.",
            indications: "Used for atrial fibrillation, ventricular arrhythmias.",
            contraindications: "Severe thyroid dysfunction, hypersensitivity.",
            sideEffects: "Hypothyroidism, lung toxicity.",
            diseases: "Atrial fibrillation, ventricular arrhythmias.",
            seriousSideEffects: "Pulmonary fibrosis, liver toxicity.",
            dosage: "Initial dose of 800-1600 mg orally; maintenance dose adjusted as needed."
        },
        {
            name: "Dronedarone",
            moa: "Blocks potassium channels and has class I, II, III, and IV effects.",
            indications: "Used for atrial fibrillation, atrial flutter.",
            contraindications: "Severe liver disease, heart failure.",
            sideEffects: "Diarrhea, nausea.",
            diseases: "Atrial fibrillation, atrial flutter.",
            seriousSideEffects: "Hepatotoxicity, severe arrhythmias.",
            dosage: "Initial dose of 400 mg orally twice daily."
        },
        {
            name: "Ibutilide",
            moa: "Blocks potassium channels, prolonging the action potential duration.",
            indications: "Used for rapid conversion of atrial fibrillation or flutter.",
            contraindications: "QT prolongation, hypersensitivity.",
            sideEffects: "Tachycardia, hypotension.",
            diseases: "Atrial fibrillation, atrial flutter.",
            seriousSideEffects: "Torsades de pointes, severe hypotension.",
            dosage: "Initial dose of 1 mg IV over 10 minutes; repeat if needed."
        },
        {
            name: "Dofetilide",
            moa: "Blocks potassium channels, prolonging the action potential duration.",
            indications: "Used for atrial fibrillation and atrial flutter.",
            contraindications: "QT prolongation, renal impairment.",
            sideEffects: "Headache, dizziness.",
            diseases: "Atrial fibrillation, atrial flutter.",
            seriousSideEffects: "Torsades de pointes, renal failure.",
            dosage: "Initial dose of 500 mcg orally twice daily."
        },
        {
            name: "Calcium Channel Blockers",
            moa: "Inhibit calcium (Ca<sup>2+</sup>) entry into cells, reducing heart rate and myocardial contractility, include the drugs like Nifedipine, Nicardipine and Amlodipine as Dihydropyridine ,Verapamil, and Diltiezam as Non-dihydropyridine.",
            indications: "Used for atrial fibrillation, angina.",
            contraindications: "Severe hypotension, heart failure.",
            sideEffects: "Edema, dizziness.",
            diseases: "Atrial fibrillation, angina.",
            seriousSideEffects: "Severe hypotension, heart failure.",
            dosage: "Varies by specific drug; typically 30-120 mg orally twice daily."
        },
        {
            name: "Magnesium Sulfate",
            moa: "Blocks calcium channels, stabilizes cardiac membranes.",
            indications: "Used for torsades de pointes, arrhythmias.",
            contraindications: "Renal impairment, heart block.",
            sideEffects: "Flushing, hypotension.",
            diseases: "Torsades de pointes, arrhythmias.",
            seriousSideEffects: "Cardiac arrest, severe hypotension.",
            dosage: "Initial dose of 1-2 g IV over 15 minutes; repeat if necessary."
        },
        {
            name: "Digoxin",
            moa: "Inhibits Na+/K+ ATPase, increasing intracellular calcium and improving cardiac contractility.",
            indications: "Used for atrial fibrillation, heart failure.",
            contraindications: "Severe renal impairment, ventricular arrhythmias.",
            sideEffects: "Nausea, visual disturbances.",
            diseases: "Atrial fibrillation, heart failure.",
            seriousSideEffects: "Digoxin toxicity, severe bradycardia.",
            dosage: "Initial dose of 0.5-1 mg orally; maintenance dose adjusted as needed."
        }
    ],

    "Anticonvulsants": [
        {
            name: "Phenytoin",
            moa: "Blocks voltage-gated sodium channels, stabilizing neuronal membranes.",
            indications: "Generalized tonic-clonic seizures, partial seizures.",
            contraindications: "Sinus bradycardia, AV block.",
            sideEffects: "Gingival hyperplasia, ataxia, nystagmus.",
            diseases: "Epilepsy, seizures.",
            seriousSideEffects: "Stevens-Johnson syndrome, blood dyscrasias.",
            dosage: "300 mg/day orally in divided doses."
        },
        {
            name: "Carbamazepine",
            moa: "Blocks sodium channels, reducing neuronal excitability.",
            indications: "Partial seizures, generalized tonic-clonic seizures, trigeminal neuralgia.",
            contraindications: "Bone marrow suppression, hypersensitivity.",
            sideEffects: "Drowsiness, dizziness, blurred vision.",
            diseases: "Epilepsy, trigeminal neuralgia.",
            seriousSideEffects: "Aplastic anemia, agranulocytosis.",
            dosage: "200-400 mg/day orally, adjusted based on response."
        },
        {
            name: "Valproic Acid",
            moa: "Increases GABA levels, stabilizing neuronal activity.",
            indications: "Absence seizures, generalized tonic-clonic seizures, bipolar disorder.",
            contraindications: "Liver disease, hypersensitivity.",
            sideEffects: "Weight gain, tremor, hair loss.",
            diseases: "Epilepsy, bipolar disorder.",
            seriousSideEffects: "Hepatotoxicity, pancreatitis.",
            dosage: "10-15 mg/kg/day orally."
        },
        {
            name: "Lamotrigine",
            moa: "Blocks voltage-gated sodium channels, inhibiting excitatory neurotransmitter release.",
            indications: "Partial seizures, Lennox-Gastaut syndrome, bipolar disorder.",
            contraindications: "Hypersensitivity to lamotrigine.",
            sideEffects: "Dizziness, rash, blurred vision.",
            diseases: "Epilepsy, bipolar disorder.",
            seriousSideEffects: "Stevens-Johnson syndrome, toxic epidermal necrolysis.",
            dosage: "25 mg/day orally, titrated upward."
        },
        {
            name: "Levetiracetam",
            moa: "Modulates synaptic vesicle protein SV2A, reducing neuronal excitability.",
            indications: "Partial seizures, generalized seizures, myoclonic seizures.",
            contraindications: "Hypersensitivity.",
            sideEffects: "Drowsiness, irritability, dizziness.",
            diseases: "Epilepsy, seizures.",
            seriousSideEffects: "Psychosis, suicidal thoughts.",
            dosage: "500 mg twice daily orally."
        },
        {
            name: "Topiramate",
            moa: "Blocks sodium channels, enhances GABA activity, antagonizes glutamate receptors.",
            indications: "Partial seizures, generalized tonic-clonic seizures, migraine prophylaxis.",
            contraindications: "Hypersensitivity to topiramate.",
            sideEffects: "Cognitive impairment, weight loss, paresthesia.",
            diseases: "Epilepsy, migraines.",
            seriousSideEffects: "Kidney stones, metabolic acidosis.",
            dosage: "25-50 mg/day orally, titrated upward."
        },
        {
            name: "Gabapentin",
            moa: "Increases GABA release, reducing neuronal excitability.",
            indications: "Partial seizures, neuropathic pain.",
            contraindications: "Hypersensitivity to gabapentin.",
            sideEffects: "Drowsiness, dizziness, fatigue.",
            diseases: "Epilepsy, neuropathic pain.",
            seriousSideEffects: "Severe allergic reactions, angioedema.",
            dosage: "300 mg orally three times daily."
        },
        {
            name: "Pregabalin",
            moa: "Binds to voltage-gated calcium channels, reducing neurotransmitter release.",
            indications: "Partial seizures, neuropathic pain, fibromyalgia.",
            contraindications: "Hypersensitivity.",
            sideEffects: "Drowsiness, dizziness, weight gain.",
            diseases: "Epilepsy, neuropathic pain, fibromyalgia.",
            seriousSideEffects: "Severe allergic reactions, angioedema.",
            dosage: "150 mg/day orally, in divided doses."
        },
        {
            name: "Ethosuximide",
            moa: "Reduces calcium currents in thalamic neurons.",
            indications: "Absence seizures.",
            contraindications: "Hypersensitivity to ethosuximide.",
            sideEffects: "Nausea, vomiting, drowsiness.",
            diseases: "Epilepsy, absence seizures.",
            seriousSideEffects: "Blood dyscrasias, Stevens-Johnson syndrome.",
            dosage: "250 mg orally twice daily."
        },
        {
            name: "Zonisamide",
            moa: "Blocks sodium and calcium channels, reducing neuronal excitability.",
            indications: "Partial seizures, generalized tonic-clonic seizures.",
            contraindications: "Hypersensitivity to sulfonamides.",
            sideEffects: "Drowsiness, dizziness, weight loss.",
            diseases: "Epilepsy, seizures.",
            seriousSideEffects: "Kidney stones, metabolic acidosis.",
            dosage: "100 mg/day orally."
        },
        {
            name: "Clonazepam",
            moa: "Enhances GABA activity, reducing neuronal excitability.",
            indications: "Absence seizures, myoclonic seizures, panic disorder.",
            contraindications: "Severe liver disease, hypersensitivity.",
            sideEffects: "Drowsiness, dizziness, fatigue.",
            diseases: "Epilepsy, panic disorder.",
            seriousSideEffects: "Respiratory depression, withdrawal symptoms.",
            dosage: "0.5 mg orally three times daily."
        },
        {
            name: "Diazepam",
            moa: "Enhances GABA activity, causing sedation and reducing neuronal excitability.",
            indications: "Status epilepticus, muscle spasms, anxiety.",
            contraindications: "Severe respiratory depression, myasthenia gravis.",
            sideEffects: "Drowsiness, dizziness, fatigue.",
            diseases: "Status epilepticus, anxiety.",
            seriousSideEffects: "Respiratory depression, dependency.",
            dosage: "5-10 mg IV for status epilepticus."
        },
        {
            name: "Lorazepam",
            moa: "Enhances GABA activity, reducing seizure activity and anxiety.",
            indications: "Status epilepticus, anxiety disorders.",
            contraindications: "Severe respiratory depression, glaucoma.",
            sideEffects: "Sedation, dizziness, fatigue.",
            diseases: "Status epilepticus, anxiety.",
            seriousSideEffects: "Respiratory depression, dependence.",
            dosage: "4 mg IV for status epilepticus."
        },
        {
            name: "Primidone",
            moa: "Metabolized to phenobarbital, enhancing GABA activity.",
            indications: "Partial seizures, generalized tonic-clonic seizures.",
            contraindications: "Porphyria, hypersensitivity.",
            sideEffects: "Sedation, dizziness, ataxia.",
            diseases: "Epilepsy, seizures.",
            seriousSideEffects: "Blood dyscrasias, Stevens-Johnson syndrome.",
            dosage: "125 mg orally three times daily."
        },
        {
            name: "Phenobarbital",
            moa: "Enhances GABA activity, reducing seizure activity.",
            indications: "Generalized tonic-clonic seizures, partial seizures, status epilepticus.",
            contraindications: "Severe liver disease, respiratory depression.",
            sideEffects: "Sedation, dizziness, ataxia.",
            diseases: "Epilepsy, seizures.",
            seriousSideEffects: "Respiratory depression, dependence.",
            dosage: "60-120 mg/day orally in divided doses."
        },
        {
            name: "Vigabatrin",
            moa: "Inhibits GABA transaminase, increasing GABA levels.",
            indications: "Infantile spasms, refractory partial seizures.",
            contraindications: "Hypersensitivity to vigabatrin.",
            sideEffects: "Drowsiness, dizziness, weight gain.",
            diseases: "Infantile spasms, epilepsy.",
            seriousSideEffects: "Permanent vision loss, peripheral neuropathy.",
            dosage: "500 mg orally twice daily."
        },
        {
            name: "Rufinamide",
            moa: "Prolongs the inactivation phase of sodium channels.",
            indications: "Lennox-Gastaut syndrome.",
            contraindications: "Severe liver impairment, hypersensitivity.",
            sideEffects: "Drowsiness, dizziness, headache.",
            diseases: "Epilepsy, Lennox-Gastaut syndrome.",
            seriousSideEffects: "Status epilepticus, suicidal thoughts.",
            dosage: "400-800 mg/day orally in divided doses."
        },
      
        {
            name: "Perampanel",
            moa: "Selective, non-competitive antagonist of AMPA receptors, reducing excitatory transmission.",
            indications: "Partial-onset seizures, generalized tonic-clonic seizures.",
            contraindications: "Severe liver impairment, hypersensitivity.",
            sideEffects: "Dizziness, drowsiness, aggression.",
            diseases: "Epilepsy, seizures.",
            seriousSideEffects: "Suicidal thoughts, psychiatric disturbances.",
            dosage: "2-12 mg orally once daily."
        },
        {
            name: "Clobazam",
            moa: "Enhances GABA activity, reducing seizure activity.",
            indications: "Lennox-Gastaut syndrome, refractory seizures.",
            contraindications: "Severe liver disease, respiratory depression.",
            sideEffects: "Sedation, dizziness, ataxia.",
            diseases: "Epilepsy, Lennox-Gastaut syndrome.",
            seriousSideEffects: "Respiratory depression, dependence.",
            dosage: "5-20 mg/day orally."
        },
        {
            name: "Felbamate",
            moa: "Inhibits NMDA receptors and modulates GABA receptors, reducing seizure activity.",
            indications: "Lennox-Gastaut syndrome, refractory partial seizures.",
            contraindications: "History of liver disease or aplastic anemia.",
            sideEffects: "Nausea, insomnia, weight loss.",
            diseases: "Epilepsy, Lennox-Gastaut syndrome.",
            seriousSideEffects: "Aplastic anemia, liver failure.",
            dosage: "1200-3600 mg/day orally."
        },
        {
            name: "Tiagabine",
            moa: "Inhibits GABA reuptake, increasing GABA levels in the brain.",
            indications: "Partial seizures.",
            contraindications: "Hypersensitivity to tiagabine.",
            sideEffects: "Drowsiness, dizziness, tremor.",
            diseases: "Epilepsy, seizures.",
            seriousSideEffects: "Seizures in non-epileptic patients, confusion.",
            dosage: "4-56 mg/day orally."
        },
        {
            name: "Perampanel",
            moa: "Non-competitive AMPA receptor antagonist, reducing excitatory neurotransmission.",
            indications: "Partial-onset seizures, tonic-clonic seizures.",
            contraindications: "Hypersensitivity to perampanel.",
            sideEffects: "Dizziness, fatigue, irritability.",
            diseases: "Epilepsy, seizures.",
            seriousSideEffects: "Suicidal ideation, aggression.",
            dosage: "2-12 mg/day orally."
        },
        {
            name: "Lacosamide",
            moa: "Enhances slow inactivation of sodium channels, reducing neuronal excitability.",
            indications: "Partial seizures, tonic-clonic seizures.",
            contraindications: "Hypersensitivity to lacosamide.",
            sideEffects: "Dizziness, headache, nausea.",
            diseases: "Epilepsy, seizures.",
            seriousSideEffects: "Cardiac arrhythmias, suicidal ideation.",
            dosage: "100-400 mg/day orally."
        },
        {
            name: "Rufinamide",
            moa: "Prolongs the inactive state of sodium channels, reducing neuronal excitability.",
            indications: "Lennox-Gastaut syndrome.",
            contraindications: "Short QT syndrome, hypersensitivity.",
            sideEffects: "Drowsiness, headache, nausea.",
            diseases: "Epilepsy, Lennox-Gastaut syndrome.",
            seriousSideEffects: "Cardiac arrhythmias, suicidal ideation.",
            dosage: "400-3200 mg/day orally."
        },
        {
            name: "Vigabatrin",
            moa: "Irreversibly inhibits GABA transaminase, increasing GABA levels.",
            indications: "Infantile spasms, refractory complex partial seizures.",
            contraindications: "Hypersensitivity to vigabatrin.",
            sideEffects: "Drowsiness, dizziness, fatigue.",
            diseases: "Epilepsy, infantile spasms.",
            seriousSideEffects: "Permanent vision loss, psychiatric symptoms.",
            dosage: "500-3000 mg/day orally."
        },
        {
            name: "Eslicarbazepine",
            moa: "Inhibits voltage-gated sodium channels, reducing neuronal excitability.",
            indications: "Partial seizures.",
            contraindications: "Hypersensitivity to eslicarbazepine.",
            sideEffects: "Dizziness, somnolence, hyponatremia.",
            diseases: "Epilepsy, seizures.",
            seriousSideEffects: "Stevens-Johnson syndrome, toxic epidermal necrolysis.",
            dosage: "800-1600 mg/day orally."
        },
        {
            name: "Phenacemide",
            moa: "Exact mechanism unknown; thought to act by reducing neuronal excitability.",
            indications: "Severe epilepsy, refractory seizures.",
            contraindications: "Hypersensitivity to phenacemide.",
            sideEffects: "Drowsiness, dizziness, nausea.",
            diseases: "Epilepsy, seizures.",
            seriousSideEffects: "Bone marrow suppression, Stevens-Johnson syndrome.",
            dosage: "500-1500 mg/day orally."
        }
    ],
    "Antiasthmatics": [
        {
            name: "Epinephrine-Isoprenaline",
            moa: "Stimulates beta-adrenergic receptors, leading to bronchodilation.",
            indications: "Acute asthma, anaphylaxis.",
            sideEffects: "Tachycardia, tremors.",
            seriousSideEffects: "Severe cardiovascular events.",
            dosage: "Varies based on condition and route."
        },
        {
            name: "Salbutamol (Albuterol)",
            moa: "Selective beta-2 adrenergic agonist that relaxes bronchial smooth muscle.",
            indications: "Asthma, COPD.",
            sideEffects: "Tachycardia, palpitations.",
            seriousSideEffects: "Severe cardiovascular events.",
            dosage: "90-180 mcg via inhalation every 4-6 hours as needed."
        },
        {
            name: "Levoalbuterol",
            moa: "Beta-2 adrenergic agonist that relaxes bronchial smooth muscle.",
            indications: "Asthma, COPD.",
            sideEffects: "Tachycardia, headache.",
            seriousSideEffects: "Severe cardiovascular events.",
            dosage: "45 mcg via inhalation every 4-6 hours as needed."
        },
        {
            name: "Salmeterol",
            moa: "Long-acting beta-2 adrenergic agonist that provides sustained bronchodilation.",
            indications: "Asthma, COPD.",
            sideEffects: "Headache, throat irritation.",
            seriousSideEffects: "Severe cardiovascular events.",
            dosage: "50 mcg via inhalation twice daily."
        },
        {
            name: "Formoterol",
            moa: "Long-acting beta-2 adrenergic agonist with rapid onset and sustained bronchodilation.",
            indications: "Asthma, COPD.",
            sideEffects: "Tremors, tachycardia.",
            seriousSideEffects: "Severe cardiovascular events.",
            dosage: "12-24 mcg via inhalation twice daily."
        },
        {
            name: "Terbutaline",
            moa: "Beta-2 adrenergic agonist that relaxes bronchial smooth muscle.",
            indications: "Asthma, COPD.",
            sideEffects: "Tremors, palpitations.",
            seriousSideEffects: "Severe cardiovascular events.",
            dosage: "2.5-5 mg orally every 6-8 hours."
        },
        {
            name: "Ipratropium",
            moa: "Inhibits muscarinic receptors in the bronchial smooth muscle, leading to bronchodilation.",
            indications: "COPD, asthma.",
            sideEffects: "Dry mouth, cough.",
            seriousSideEffects: "Severe respiratory distress.",
            dosage: "40-80 mcg via inhalation 3-4 times daily."
        },
        {
            name: "Oxitropium",
            moa: "Blocks muscarinic receptors in the bronchial smooth muscle, leading to bronchodilation.",
            indications: "COPD.",
            sideEffects: "Dry mouth, cough.",
            seriousSideEffects: "Severe respiratory distress.",
            dosage: "200 mcg via inhalation 2-3 times daily."
        },
        {
            name: "Tiotropium",
            moa: "Long-acting muscarinic antagonist that provides sustained bronchodilation.",
            indications: "COPD, asthma.",
            sideEffects: "Dry mouth, constipation.",
            seriousSideEffects: "Severe respiratory distress.",
            dosage: "18 mcg via inhalation once daily."
        },
        {
            name: "Aclidinium",
            moa: "Long-acting muscarinic antagonist that inhibits bronchial smooth muscle contraction.",
            indications: "COPD.",
            sideEffects: "Headache, cough.",
            seriousSideEffects: "Severe respiratory distress.",
            dosage: "400 mcg via inhalation twice daily."
        },
        {
            name: "Umeclidinium",
            moa: "Long-acting muscarinic antagonist that provides sustained bronchodilation.",
            indications: "COPD.",
            sideEffects: "Dry mouth, headache.",
            seriousSideEffects: "Severe respiratory distress.",
            dosage: "62.5 mcg via inhalation once daily."
        },
        {
            name: "Glycopyrronium",
            moa: "Long-acting muscarinic antagonist that blocks bronchial smooth muscle contraction.",
            indications: "COPD.",
            sideEffects: "Dry mouth, cough.",
            seriousSideEffects: "Severe respiratory distress.",
            dosage: "50 mcg via inhalation once daily."
        },
        {
            name: "Glycopyrrolate",
            moa: "Anticholinergic that blocks muscarinic receptors in the bronchial smooth muscle.",
            indications: "COPD.",
            sideEffects: "Dry mouth, cough.",
            seriousSideEffects: "Severe respiratory distress.",
            dosage: "8 mcg via inhalation twice daily."
        },
        {
            name: "Theophylline",
            moa: "Phosphodiesterase inhibitor that increases cAMP levels, leading to bronchodilation.",
            indications: "Asthma, COPD.",
            sideEffects: "Nausea, tachycardia.",
            seriousSideEffects: "Severe arrhythmias, seizures.",
            dosage: "200-400 mg orally every 6-12 hours."
        },
        {
            name: "Beclometasone",
            moa: "Anti-inflammatory steroid that reduces airway inflammation and hyperreactivity.",
            indications: "Asthma, COPD.",
            sideEffects: "Oral thrush, hoarseness.",
            seriousSideEffects: "Adrenal suppression, osteoporosis.",
            dosage: "100-400 mcg via inhalation twice daily."
        },
        {
            name: "Fluticasone",
            moa: "Corticosteroid that reduces inflammation and swelling in the airways.",
            indications: "Asthma, COPD.",
            sideEffects: "Oral thrush, cough.",
            seriousSideEffects: "Adrenal suppression, osteoporosis.",
            dosage: "100-500 mcg via inhalation twice daily."
        },
        {
            name: "Budesonide",
            moa: "Anti-inflammatory steroid that decreases airway inflammation.",
            indications: "Asthma, COPD.",
            sideEffects: "Oral thrush, sore throat.",
            seriousSideEffects: "Adrenal suppression, growth retardation.",
            dosage: "200-800 mcg via inhalation twice daily."
        },
        {
            name: "Mometasone",
            moa: "Inhibits inflammatory responses in the airways.",
            indications: "Asthma, COPD.",
            sideEffects: "Oral thrush, cough.",
            seriousSideEffects: "Adrenal suppression, osteoporosis.",
            dosage: "200-400 mcg via inhalation once daily."
        },
        {
            name: "Prednisone",
            moa: "Systemic corticosteroid that reduces inflammation throughout the body.",
            indications: "Severe asthma exacerbations, COPD exacerbations.",
            sideEffects: "Weight gain, mood changes.",
            seriousSideEffects: "Adrenal suppression, osteoporosis.",
            dosage: "5-60 mg orally daily."
        },
        {
            name: "Montelukast",
            moa: "Leukotriene receptor antagonist that reduces inflammation and bronchoconstriction.",
            indications: "Asthma, allergic rhinitis.",
            sideEffects: "Headache, abdominal pain.",
            seriousSideEffects: "Mood changes, suicidal thoughts.",
            dosage: "10 mg orally once daily."
        },
        {
            name: "Zafirlukast",
            moa: "Leukotriene receptor antagonist that decreases airway inflammation.",
            indications: "Asthma.",
            sideEffects: "Headache, gastrointestinal symptoms.",
            seriousSideEffects: "Liver toxicity.",
            dosage: "20 mg orally twice daily."
        },
        {
            name: "Zileuton",
            moa: "Inhibits leukotriene synthesis by blocking lipoxygenase.",
            indications: "Asthma.",
            sideEffects: "Headache, dizziness.",
            seriousSideEffects: "Liver toxicity.",
            dosage: "600 mg orally four times daily."
        },
        {
            name: "Cromolyn Sodium",
            moa: "Stabilizes mast cells, preventing the release of inflammatory mediators.",
            indications: "Asthma, allergic rhinitis.",
            sideEffects: "Cough, throat irritation.",
            seriousSideEffects: "Anaphylaxis.",
            dosage: "2 mg via inhalation four times daily."
        },
        {
            name: "Nedocromil",
            moa: "Inhibits mast cell degranulation and reduces inflammation.",
            indications: "Asthma.",
            sideEffects: "Cough, throat irritation.",
            seriousSideEffects: "Anaphylaxis.",
            dosage: "4 mg via inhalation twice daily."
        },
        {
            name: "Omalizumab",
            moa: "Monoclonal antibody that binds to IgE, preventing it from binding to receptors on mast cells and basophils.",
            indications: "Moderate to severe persistent asthma, chronic idiopathic urticaria.",
            sideEffects: "Injection site reactions, headache.",
            seriousSideEffects: "Anaphylaxis, malignancy.",
            dosage: "150-375 mg subcutaneously every 2-4 weeks, based on weight and IgE levels."
        }
],
"Antidepressants": [
    {
        name: "Fluoxetine",
        moa: "Selective serotonin reuptake inhibitor (SSRI) that increases serotonin levels in the brain.",
        indications: "Depression, obsessive-compulsive disorder, panic disorder.",
        contraindications: "Concurrent use of MAO inhibitors, pregnancy.",
        sideEffects: "Nausea, headache, insomnia.",
        diseases: "Depression, anxiety disorders.",
        seriousSideEffects: "Serotonin syndrome, suicidal thoughts.",
        dosage: "20 mg orally once daily, may increase to 80 mg/day."
    },
    {
        name: "Paroxetine",
        moa: "SSRI that inhibits serotonin reuptake in the brain, increasing serotonin levels.",
        indications: "Depression, anxiety disorders, PTSD.",
        contraindications: "Concurrent use of MAO inhibitors, pregnancy.",
        sideEffects: "Drowsiness, dry mouth, sexual dysfunction.",
        diseases: "Depression, anxiety disorders.",
        seriousSideEffects: "Serotonin syndrome, suicidal thoughts.",
        dosage: "20 mg orally once daily, may increase to 50 mg/day."
    },
    {
        name: "Sertraline",
        moa: "SSRI that increases serotonin levels by inhibiting its reuptake.",
        indications: "Depression, panic disorder, social anxiety disorder.",
        contraindications: "Concurrent use of MAO inhibitors, pregnancy.",
        sideEffects: "Diarrhea, dry mouth, dizziness.",
        diseases: "Depression, anxiety disorders.",
        seriousSideEffects: "Serotonin syndrome, suicidal thoughts.",
        dosage: "50 mg orally once daily, may increase to 200 mg/day."
    },
    {
        name: "Citalopram",
        moa: "SSRI that increases serotonin levels by inhibiting reuptake.",
        indications: "Depression, anxiety disorders.",
        contraindications: "Concurrent use of MAO inhibitors, QT prolongation.",
        sideEffects: "Nausea, fatigue, dry mouth.",
        diseases: "Depression, anxiety disorders.",
        seriousSideEffects: "Serotonin syndrome, QT prolongation.",
        dosage: "20 mg orally once daily, may increase to 40 mg/day."
    },
    {
        name: "Fluvoxamine",
        moa: "SSRI that increases serotonin levels by inhibiting reuptake.",
        indications: "Obsessive-compulsive disorder, depression.",
        contraindications: "Concurrent use of MAO inhibitors, liver disease.",
        sideEffects: "Nausea, headache, drowsiness.",
        diseases: "Obsessive-compulsive disorder, depression.",
        seriousSideEffects: "Serotonin syndrome, liver toxicity.",
        dosage: "50 mg orally once daily, may increase to 300 mg/day."
    },
    {
        name: "Amitriptyline",
        moa: "Tricyclic antidepressant that inhibits reuptake of norepinephrine and serotonin.",
        indications: "Depression, neuropathic pain, chronic pain.",
        contraindications: "Recent myocardial infarction, concurrent MAO inhibitors.",
        sideEffects: "Dry mouth, constipation, drowsiness.",
        diseases: "Depression, neuropathic pain.",
        seriousSideEffects: "Cardiac arrhythmias, serotonin syndrome.",
        dosage: "25-150 mg orally once daily, usually at bedtime."
    },
    {
        name: "Imipramine",
        moa: "Tricyclic antidepressant that inhibits norepinephrine and serotonin reuptake.",
        indications: "Depression, enuresis in children.",
        contraindications: "Recent myocardial infarction, concurrent MAO inhibitors.",
        sideEffects: "Dry mouth, dizziness, constipation.",
        diseases: "Depression, enuresis.",
        seriousSideEffects: "Cardiac arrhythmias, serotonin syndrome.",
        dosage: "75-300 mg orally daily, in divided doses or once daily at bedtime."
    },
    {
        name: "Clomipramine",
        moa: "Tricyclic antidepressant that inhibits reuptake of norepinephrine and serotonin.",
        indications: "Obsessive-compulsive disorder, depression.",
        contraindications: "Concurrent MAO inhibitors, recent myocardial infarction.",
        sideEffects: "Dry mouth, drowsiness, weight gain.",
        diseases: "Obsessive-compulsive disorder, depression.",
        seriousSideEffects: "Cardiac arrhythmias, serotonin syndrome.",
        dosage: "25-250 mg orally daily, usually in divided doses."
    },
    {
        name: "Phenelzine",
        moa: "Monoamine oxidase inhibitor (MAOI) that increases levels of norepinephrine, serotonin, and dopamine.",
        indications: "Depression, anxiety disorders.",
        contraindications: "Concurrent use of SSRIs, tyramine-rich foods.",
        sideEffects: "Dizziness, weight gain, insomnia.",
        diseases: "Depression, anxiety disorders.",
        seriousSideEffects: "Hypertensive crisis, serotonin syndrome.",
        dosage: "15 mg orally three times daily, may increase to 90 mg/day."
    },
    {
        name: "Tranylcypromine",
        moa: "MAOI that inhibits monoamine oxidase, increasing norepinephrine and serotonin levels.",
        indications: "Depression.",
        contraindications: "Concurrent use of SSRIs, tyramine-rich foods.",
        sideEffects: "Insomnia, dry mouth, dizziness.",
        diseases: "Depression.",
        seriousSideEffects: "Hypertensive crisis, serotonin syndrome.",
        dosage: "30 mg orally daily, may increase to 60 mg/day."
    },
    {
        name: "Bupropion",
        moa: "Norepinephrine-dopamine reuptake inhibitor (NDRI) that increases norepinephrine and dopamine levels.",
        indications: "Depression, smoking cessation.",
        contraindications: "Seizure disorders, eating disorders.",
        sideEffects: "Dry mouth, insomnia, headache.",
        diseases: "Depression, smoking cessation.",
        seriousSideEffects: "Seizures, severe allergic reactions.",
        dosage: "150-400 mg orally daily, in divided doses."
    },
    {
        name: "Mirtazapine",
        moa: "Atypical antidepressant that increases norepinephrine and serotonin levels by blocking α2-adrenergic receptors.",
        indications: "Depression, anxiety disorders.",
        contraindications: "Concurrent use of MAO inhibitors.",
        sideEffects: "Sedation, weight gain, dry mouth.",
        diseases: "Depression, anxiety disorders.",
        seriousSideEffects: "Serotonin syndrome, agranulocytosis.",
        dosage: "15-45 mg orally once daily, usually at bedtime."
    },
    {
        name: "Trazodone",
        moa: "Serotonin antagonist and reuptake inhibitor (SARI) that increases serotonin levels and has sedative effects.",
        indications: "Depression, insomnia.",
        contraindications: "Concurrent use of MAO inhibitors.",
        sideEffects: "Sedation, dizziness, dry mouth.",
        diseases: "Depression, insomnia.",
        seriousSideEffects: "Priapism, serotonin syndrome.",
        dosage: "50-400 mg orally daily, in divided doses or once daily at bedtime."
    },
    {
        name: "Venlafaxine",
        moa: "Serotonin-norepinephrine reuptake inhibitor (SNRI) that increases serotonin and norepinephrine levels.",
        indications: "Depression, anxiety disorders, panic disorder.",
        contraindications: "Concurrent use of MAO inhibitors.",
        sideEffects: "Nausea, headache, dizziness.",
        diseases: "Depression, anxiety disorders.",
        seriousSideEffects: "Serotonin syndrome, hypertension.",
        dosage: "75-375 mg orally daily, in divided doses or extended-release form."
    },
    {
        name: "Lithium",
        moa: "Modulates neurotransmitter release and receptor sensitivity, stabilizing mood.",
        indications: "Bipolar disorder, depression.",
        contraindications: "Severe renal impairment, sodium depletion.",
        sideEffects: "Tremor, polyuria, weight gain.",
        diseases: "Bipolar disorder.",
        seriousSideEffects: "Thyroid dysfunction, renal impairment.",
        dosage: "300-1200 mg orally daily, in divided doses, adjusted based on serum levels."
    },
    {
        name: "Methylphenidate",
        moa: "Centrally acting stimulant that increases norepinephrine and dopamine levels in the brain.",
        indications: "Attention deficit hyperactivity disorder (ADHD), narcolepsy.",
        contraindications: "Concurrent use of monoamine oxidase inhibitors.",
        sideEffects: "Insomnia, decreased appetite, headache.",
        diseases: "ADHD, narcolepsy.",
        seriousSideEffects: "Cardiovascular events, severe psychiatric symptoms.",
        dosage: "5-60 mg orally daily, in divided doses or extended-release form."
    },
    {
        name: "Atomoxetine",
        moa: "Norepinephrine reuptake inhibitor that increases norepinephrine levels in the brain.",
        indications: "Attention deficit hyperactivity disorder (ADHD).",
        contraindications: "Glaucoma, severe cardiovascular disorders.",
        sideEffects: "Decreased appetite, nausea, dry mouth.",
        diseases: "ADHD.",
        seriousSideEffects: "Suicidal thoughts, liver toxicity.",
        dosage: "40-100 mg orally daily, adjusted based on response and tolerability."
    }
],
"Antiemetics": [
    {
        name: "Ondansetron",
        moa: "5-HT3 receptor antagonist that prevents nausea and vomiting.",
        indications: "Postoperative nausea, chemotherapy-induced nausea.",
        contraindications: "Hypersensitivity to ondansetron.",
        sideEffects: "Headache, constipation, dizziness.",
        diseases: "Nausea, vomiting.",
        seriousSideEffects: "QT prolongation, serotonin syndrome.",
        dosage: "4-8mg orally or intravenously every 6-8 hours."
    },
    {
        name: "Metoclopramide",
        moa: "Dopamine antagonist that enhances gastric motility and reduces nausea.",
        indications: "Gastroparesis, nausea, vomiting.",
        contraindications: "Gastrointestinal obstruction, seizures.",
        sideEffects: "Drowsiness, restlessness.",
        diseases: "Gastroparesis, nausea.",
        seriousSideEffects: "Tardive dyskinesia, neuroleptic malignant syndrome.",
        dosage: "10mg orally or intravenously every 6-8 hours."
    }
],
"Antitussives": [
       {    
            name: "Codeine(methylmorphine)",
            moa: "Opioid receptor agonist",
            indications: "Moderate to severe pain",
            contraindications: "Respiratory depression, acute asthma",
            SideEffects: "Drowsiness, constipation, nausea, vomiting",
            seriousSideEffects: "Respiratory depression, addiction, overdose",
            dosage: "15-60 mg every 4-6 hours as needed."  
        },
        {
            name: "Dihydrocodeine",
            moa: "Opioid receptor agonist",
            sideEffects: "Drowsiness, constipation, dizziness, nausea",
            dosage: "30-120 mg every 4-6 hours as needed",
            seriousSideEffecs: "Respiratory depression, addiction, overdose",
            indications: "Moderate to severe pain",
            contraindications: "Respiratory depression, severe asthma"
        },
        {
            name:"Dextromethorphan",
            moa: "NMDA receptor antagonist",
            sideEffects: "Drowsiness, dizziness, nausea, stomach upset",
            dosage: "10-20 mg every 4-6 hours as needed",
            seriousSideEffects: "Confusion, hallucinations, severe allergic reactions",
            indications: "Cough suppression",
            contraindications: "Use with MAO inhibitors, respiratory depression"
        },
    {
         name:"Prenoxidiazine",
            moa: "Antitussive",
            SideEffects: "Drowsiness, dizziness, dry mouth",
            dosage: "25 mg three times daily",
            seriousSideEffects: "Severe allergic reactions, hypotension",
            indications: "Chronic cough",
            contraindications: "Hypersensitivity to the drug"
        },
        {
         name:"Ammonium chloride",
            moa: "Expectorant",
            SideEffects: "Nausea, vomiting, stomach upset",
            dosage: "1-2 grams three times daily",
            seriousSideEffects: "Metabolic acidosis, nausea",
            indications: "Cough and bronchitis",
            contraindications: "Severe renal impairment"
        },
        {
         name:"Sodium citrate",
            moa: "Expectorant and alkalizer",
            SideEffects: "Stomach upset, nausea",
            dosage: "5-10 ml three times daily",
            seriousSideEffects: "Metabolic alkalosis, gastrointestinal irritation",
            indications: "Cough, to reduce acidity",
            contraindications: "Hypersensitivity to the drug"
        },
        {
         name:"Syrup of ipecacuanha",
            moa: "Emetic",
            SideEffects: "Nausea, vomiting, stomach pain",
            dosage: "15-30 ml for adults, 5-10 ml for children",
            seriousSideEffects: "Dehydration, aspiration pneumonia",
            indications: "Induction of vomiting in poisoning",
            contraindications: "Unconscious patients, corrosive poison ingestion"
        },
        {
         name:"Guaifenesin",
            moa: "Expectorant",
            SideEffects: "Nausea, vomiting, headache",
            dosage: "200-400 mg every 4-6 hours",
            seriousSideEffects: "Allergic reactions, rash",
            indications: "Chest congestion",
            contraindications: "Hypersensitivity to the drug"
        },
        {
         name:"Ambroxol",
            moa: "decrease the viscosity of mucus by splitting the disulfide (–S–S–) bonds of mucoproteins. This action is further facilitated by alkaline pH (7–9).",
            SideEffects: "Gastrointestinal disturbances, headache",
            dosage: "30 mg three times daily",
            seriousSideEffects: "Severe allergic reactions",
            indications: "Chronic bronchitis, asthma",
            contraindications: "Hypersensitivity to the drug"
        },
        {
        name: "Acetylcysteine",
            moa: "decrease the viscosity of mucus by splitting the disulfide (–S–S–) bonds of mucoproteins. This action is further facilitated by alkaline pH (7–9) and (used also for the treatment of paracetamol intoxication).",
            SideEffects: "Nausea, vomiting, rash",
            dosage: "600 mg twice daily",
            seriousSideEffects: "Severe allergic reactions, bronchospasm",
            indications: "Chronic obstructive pulmonary disease (COPD)",
            contraindications: "Hypersensitivity to acetylcysteine"
        },
        {
         name:"Bromohexine",
            moa: "Mucolytic,decrease the viscosity of mucus by splitting the disulfide (–S–S–) bonds of mucoproteins. This action is further facilitated by alkaline pH (7–9).",
            SideEffects: "Gastrointestinal disturbances, headache",
            dosage: "8-16 mg three times daily",
            seriousSideEffects: "Severe allergic reactions",
            indications: "Acute and chronic respiratory diseases",
            contraindications: "Hypersensitivity to the drug"
        },
        {
         name:"Dornase-alfa",
            moa: "Enzyme that breaks down DNA in mucus",
            SideEffects: "Sore throat, hoarseness, cough",
            dosage: "2.5 mg once daily via nebulization",
            seriousSideEffects: "Voice alteration, fever",
            indications: "Cystic fibrosis",
            contraindications: "Hypersensitivity to dornase-alfa"
        },
        {
         name:"Mesna",
            moa: "Detoxifies harmful metabolites of certain chemotherapeutic agents(used also for protection of cancerogenic activity of cyclophosphamide and ifosphamide too)",
            SideEffects: "Nausea, vomiting, headache",
            dosage: "400 mg IV every 4 hours during chemotherapy",
            seriousSideEffects: "Hypersensitivity reactions",
            indications: "Prevention of hemorrhagic cystitis",
            contraindications: "Hypersensitivity to mesna"
        }
],

"Anticancer": [
    {
        name: "Cyclophosphamide",
        moa: "Alkylates DNA, causing cross-linking and cell death.",
        indications: "Lymphomas, breast cancer, leukemia.",
        contraindications: "Severe bone marrow suppression.",
        sideEffects: "Nausea, hair loss.",
        diseases: "Non-Hodgkin's lymphoma, breast cancer.",
        seriousSideEffects: "Hemorrhagic cystitis, myelosuppression.",
        dosage: "1-5 mg/kg orally daily."
    },
    {
        name: "Cisplatin",
        moa: "Forms DNA crosslinks, inhibiting DNA synthesis and replication.",
        indications: "Testicular, ovarian, bladder, and lung cancers.",
        contraindications: "Severe renal impairment, hearing loss.",
        sideEffects: "Nausea, vomiting, nephrotoxicity.",
        diseases: "Testicular cancer, ovarian cancer.",
        seriousSideEffects: "Ototoxicity, nephrotoxicity.",
        dosage: "50-100 mg/m² IV every 3-4 weeks."
    },
    {
        name: "Daunorubicin",
        moa: "Intercalates DNA, inhibiting topoisomerase II and causing DNA strand breaks.",
        indications: "Leukemia, lymphomas.",
        contraindications: "Severe cardiac disease.",
        sideEffects: "Nausea, hair loss.",
        diseases: "Acute myeloid leukemia (AML), acute lymphoblastic leukemia (ALL).",
        seriousSideEffects: "Cardiotoxicity, myelosuppression.",
        dosage: "45-60 mg/m² IV every 3 weeks."
    },
    {
        name: "Procarbazine",
        moa: "Inhibits DNA, RNA, and protein synthesis through alkylation.",
        indications: "Hodgkin's disease, brain tumors.",
        contraindications: "Severe bone marrow suppression.",
        sideEffects: "Nausea, vomiting.",
        diseases: "Hodgkin's lymphoma, brain tumors.",
        seriousSideEffects: "Myelosuppression, secondary malignancies.",
        dosage: "100 mg/m²/day orally."
    },
    {
        name: "Methotrexate",
        moa: "Inhibits dihydrofolate reductase, leading to decreased DNA and RNA synthesis.",
        indications: "Leukemia, breast cancer, rheumatoid arthritis.",
        contraindications: "Pregnancy, severe liver disease.",
        sideEffects: "Nausea, fatigue.",
        diseases: "Acute lymphoblastic leukemia (ALL), rheumatoid arthritis.",
        seriousSideEffects: "Hepatotoxicity, myelosuppression.",
        dosage: "2.5-30 mg orally or IV weekly."
    },
    {
        name: "Bleomycin",
        moa: "Induces free radical formation, leading to DNA strand breaks.",
        indications: "Testicular cancer, Hodgkin's lymphoma.",
        contraindications: "Pulmonary fibrosis.",
        sideEffects: "Fever, skin reactions.",
        diseases: "Hodgkin's lymphoma, testicular cancer.",
        seriousSideEffects: "Pulmonary fibrosis, hypersensitivity reactions.",
        dosage: "10-20 units/m² IV every 3 weeks."
    },
    {
        name: "Busulfan",
        moa: "Alkylates DNA, causing cross-linking and cell death.",
        indications: "Chronic myelogenous leukemia (CML).",
        contraindications: "Severe bone marrow suppression.",
        sideEffects: "Nausea, hair loss.",
        diseases: "Chronic myeloid leukemia (CML).",
        seriousSideEffects: "Pulmonary fibrosis, myelosuppression.",
        dosage: "0.8 mg/kg/day orally or IV for 4 days."
    },
    {
        name: "Doxorubicin",
        moa: "Intercalates DNA, inhibiting topoisomerase II and causing DNA strand breaks.",
        indications: "Breast cancer, lymphomas, leukemia.",
        contraindications: "Severe cardiac disease.",
        sideEffects: "Nausea, vomiting, hair loss.",
        diseases: "Breast cancer, non-Hodgkin's lymphoma.",
        seriousSideEffects: "Cardiotoxicity, myelosuppression.",
        dosage: "60-75 mg/m² IV every 3 weeks."
    },
    {
        name: "5-Fluorouracil (5-FU)",
        moa: "Inhibits thymidylate synthase, disrupting DNA synthesis.",
        indications: "Colorectal cancer, breast cancer, gastric cancer.",
        contraindications: "Severe bone marrow suppression.",
        sideEffects: "Nausea, diarrhea.",
        diseases: "Colorectal cancer, gastric cancer.",
        seriousSideEffects: "Myelosuppression, hand-foot syndrome.",
        dosage: "400-600 mg/m² IV weekly."
    },
    {
        name: "Capecitabine",
        moa: "Prodrug of 5-FU, inhibits thymidylate synthase, disrupting DNA synthesis.",
        indications: "Breast cancer, colorectal cancer.",
        contraindications: "Severe renal impairment.",
        sideEffects: "Diarrhea, hand-foot syndrome.",
        diseases: "Breast cancer, colorectal cancer.",
        seriousSideEffects: "Myelosuppression, hand-foot syndrome.",
        dosage: "1,250 mg/m² orally twice daily for 2 weeks."
    },
    {
        name: "6-Mercaptopurine",
        moa: "Inhibits purine synthesis, disrupting DNA and RNA production.",
        indications: "Acute lymphoblastic leukemia (ALL).",
        contraindications: "Severe bone marrow suppression.",
        sideEffects: "Nausea, vomiting.",
        diseases: "Acute lymphoblastic leukemia (ALL).",
        seriousSideEffects: "Myelosuppression, hepatotoxicity.",
        dosage: "2.5 mg/kg orally daily."
    },
    {
        name: "Vinblastine",
        moa: "Inhibits microtubule formation, arresting cell division at metaphase.",
        indications: "Lymphomas, testicular cancer.",
        contraindications: "Severe bone marrow suppression.",
        sideEffects: "Nausea, vomiting.",
        diseases: "Hodgkin's lymphoma, testicular cancer.",
        seriousSideEffects: "Myelosuppression, neurotoxicity.",
        dosage: "6-12 mg/m² IV every 3 weeks."
    },
    {
        name: "Vincristine",
        moa: "Inhibits microtubule formation, arresting cell division at metaphase.",
        indications: "Lymphomas, leukemia.",
        contraindications: "Severe bone marrow suppression.",
        sideEffects: "Peripheral neuropathy, hair loss.",
        diseases: "Hodgkin's lymphoma, acute lymphoblastic leukemia (ALL).",
        seriousSideEffects: "Neurotoxicity, myelosuppression.",
        dosage: "1.4 mg/m² IV every 3 weeks."
    },
    {
        name: "All-trans Retinoic Acid (ATRA)",
        moa: "Induces differentiation of promyelocytes in acute promyelocytic leukemia (APL).",
        indications: "Acute promyelocytic leukemia (APL).",
        contraindications: "Hypervitaminosis A.",
        sideEffects: "Dry skin, bone pain.",
        diseases: "Acute promyelocytic leukemia (APL).",
        seriousSideEffects: "Retinoic acid syndrome, leukocytosis.",
        dosage: "45 mg/m² orally daily."
    },
    {
        name: "Imatinib",
        moa: "Inhibits BCR-ABL tyrosine kinase, halting cell proliferation.",
        indications: "Chronic myelogenous leukemia (CML), gastrointestinal stromal tumors (GIST).",
        contraindications: "Severe liver impairment.",
        sideEffects: "Nausea, muscle cramps.",
        diseases: "Chronic myeloid leukemia (CML), gastrointestinal stromal tumors (GIST).",
        seriousSideEffects: "Hepatotoxicity, myelosuppression.",
        dosage: "400-600 mg orally daily."
    },
    {
        name: "Cetuximab",
        moa: "Inhibits epidermal growth factor receptor (EGFR), blocking cell growth and survival.",
        indications: "Colorectal cancer, head and neck cancers.",
        contraindications: "Severe hypersensitivity to cetuximab.",
        sideEffects: "Rash, hypomagnesemia.",
        diseases: "Colorectal cancer, head and neck cancers.",
        seriousSideEffects: "Severe infusion reactions, cardiopulmonary arrest.",
        dosage: "400 mg/m² IV on day 1, then 250 mg/m² weekly."
    },
    {
        name: "Trastuzumab",
        moa: "Binds to HER2 receptor, inhibiting proliferation of HER2-positive cells.",
        indications: "HER2-positive breast cancer, gastric cancer.",
        contraindications: "Severe cardiac disease.",
        sideEffects: "Fever, chills.",
        diseases: "HER2-positive breast cancer.",
        seriousSideEffects: "Cardiotoxicity, pulmonary toxicity.",
        dosage: "4 mg/kg IV on day 1, then 2 mg/kg weekly."
    },
    {
        name: "Bevacizumab",
        moa: "Inhibits vascular endothelial growth factor (VEGF), preventing angiogenesis.",
        indications: "Colorectal cancer, lung cancer, kidney cancer.",
        contraindications: "Severe bleeding disorders.",
        sideEffects: "Hypertension, fatigue.",
        diseases: "Colorectal cancer, lung cancer, kidney cancer.",
        seriousSideEffects: "Gastrointestinal perforation, wound healing complications.",
        dosage: "5-10 mg/kg IV every 2 weeks."
    },
    {
        name: "Sorafenib",
        moa: "Inhibits multiple kinases, including RAF kinase, VEGFR, and PDGFR, inhibiting tumor growth and angiogenesis.",
        indications: "Hepatocellular carcinoma, renal cell carcinoma, thyroid cancer.",
        contraindications: "Severe cardiac conditions.",
        sideEffects: "Diarrhea, rash.",
        diseases: "Hepatocellular carcinoma, renal cell carcinoma.",
        seriousSideEffects: "Hand-foot syndrome, hypertension.",
        dosage: "400 mg orally twice daily."
    }    
],

"Non-Steroidal Antiinflammatory Drugs(NSAIDs)": [
    {
        name: "Paracetamol (Acetaminophen)",
        moa: "Inhibits prostaglandin synthesis in the central nervous system.",
        indications: "Pain, fever.",
        contraindications: "Severe liver disease.",
        sideEffects: "Rash, hepatotoxicity (at high doses).",
        diseases: "Pain, fever.",
        seriousSideEffects: "Liver failure.",
        dosage: "500-1000mg orally every 4-6 hours as needed."
    },
    {
        name: "Diclofenac",
        moa: "Inhibits cyclooxygenase (COX-1 and COX-2), reducing prostaglandin synthesis and inflammation.",
        indications: "Pain, osteoarthritis, rheumatoid arthritis.",
        contraindications: "Peptic ulcer disease, hypersensitivity to NSAIDs.",
        sideEffects: "Nausea, abdominal pain.",
        diseases: "Osteoarthritis, rheumatoid arthritis.",
        seriousSideEffects: "Gastrointestinal bleeding, hepatotoxicity.",
        dosage: "50-75 mg orally twice daily."
    },
    {
        name: "Etodolac",
        moa: "Selective COX-2 inhibitor, reducing inflammation and pain.",
        indications: "Osteoarthritis, rheumatoid arthritis.",
        contraindications: "Peptic ulcer disease, hypersensitivity to NSAIDs.",
        sideEffects: "Nausea, headache.",
        diseases: "Osteoarthritis, rheumatoid arthritis.",
        seriousSideEffects: "Gastrointestinal bleeding, renal impairment.",
        dosage: "200-400 mg orally twice daily."
    },
    {
        name: "Indomethacin",
        moa: "Inhibits cyclooxygenase enzymes (COX-1 and COX-2), reducing inflammation and pain.",
        indications: "Rheumatoid arthritis, gout, ankylosing spondylitis.",
        contraindications: "Peptic ulcer disease, renal failure.",
        sideEffects: "Nausea, dizziness.",
        diseases: "Rheumatoid arthritis, gout.",
        seriousSideEffects: "Gastrointestinal bleeding, renal failure.",
        dosage: "25-50 mg orally two to three times daily."
    },
    {
        name: "Sulindac",
        moa: "Inhibits COX-1 and COX-2, reducing prostaglandin synthesis.",
        indications: "Osteoarthritis, rheumatoid arthritis.",
        contraindications: "Peptic ulcer disease, hypersensitivity to NSAIDs.",
        sideEffects: "Nausea, headache.",
        diseases: "Osteoarthritis, rheumatoid arthritis.",
        seriousSideEffects: "Gastrointestinal bleeding, liver toxicity.",
        dosage: "150-200 mg orally twice daily."
    },
    {
        name: "Tolmetin",
        moa: "Inhibits COX-1 and COX-2, reducing inflammation and pain.",
        indications: "Osteoarthritis, rheumatoid arthritis.",
        contraindications: "Peptic ulcer disease, hypersensitivity to NSAIDs.",
        sideEffects: "Nausea, dyspepsia.",
        diseases: "Osteoarthritis, rheumatoid arthritis.",
        seriousSideEffects: "Gastrointestinal bleeding, renal impairment.",
        dosage: "400 mg orally three times daily."
    },
    {
        name: "Meclofenamate",
        moa: "Inhibits COX-1 and COX-2, reducing inflammation and pain.",
        indications: "Pain, osteoarthritis, rheumatoid arthritis.",
        contraindications: "Peptic ulcer disease, renal impairment.",
        sideEffects: "Nausea, headache.",
        diseases: "Osteoarthritis, rheumatoid arthritis.",
        seriousSideEffects: "Gastrointestinal bleeding, liver dysfunction.",
        dosage: "50 mg orally three times daily."
    },
    {
        name: "Meclofenamic Acid",
        moa: "Inhibits COX-1 and COX-2, reducing inflammation and pain.",
        indications: "Pain, osteoarthritis, rheumatoid arthritis.",
        contraindications: "Peptic ulcer disease, hypersensitivity to NSAIDs.",
        sideEffects: "Nausea, abdominal pain.",
        diseases: "Osteoarthritis, rheumatoid arthritis.",
        seriousSideEffects: "Gastrointestinal bleeding, liver toxicity.",
        dosage: "100 mg orally twice daily."
    },
    {
        name: "Nabumetone",
        moa: "Prodrug that is converted to an active COX-1 and COX-2 inhibitor, reducing inflammation and pain.",
        indications: "Osteoarthritis, rheumatoid arthritis.",
        contraindications: "Peptic ulcer disease, renal impairment.",
        sideEffects: "Nausea, dizziness.",
        diseases: "Osteoarthritis, rheumatoid arthritis.",
        seriousSideEffects: "Gastrointestinal bleeding, renal failure.",
        dosage: "500-1000 mg orally once daily."
    },
    {
        name: "Piroxicam",
        moa: "Inhibits COX-1 and COX-2, reducing prostaglandin synthesis.",
        indications: "Osteoarthritis, rheumatoid arthritis.",
        contraindications: "Peptic ulcer disease, hypersensitivity to NSAIDs.",
        sideEffects: "Nausea, rash.",
        diseases: "Osteoarthritis, rheumatoid arthritis.",
        seriousSideEffects: "Gastrointestinal bleeding, renal impairment.",
        dosage: "10-20 mg orally once daily."
    },
    {
        name: "Meloxicam",
        moa: "Inhibits COX-1 and COX-2, reducing prostaglandin synthesis.",
        indications: "Osteoarthritis, rheumatoid arthritis.",
        contraindications: "Peptic ulcer disease, hypersensitivity to NSAIDs.",
        sideEffects: "Indigestion, rash.",
        diseases: "Osteoarthritis, rheumatoid arthritis.",
        seriousSideEffects: "Gastrointestinal bleeding, liver dysfunction.",
        dosage: "7.5-15 mg orally once daily."
    },
    {
        name: "Ibuprofen",
        moa: "Non-selective COX inhibitor, reducing inflammation and pain.",
        indications: "Pain, fever, osteoarthritis, dysmenorrhea.",
        contraindications: "Asthma, peptic ulcers.",
        sideEffects: "Heartburn, dizziness.",
        diseases: "Osteoarthritis, rheumatoid arthritis.",
        seriousSideEffects: "Gastrointestinal bleeding, renal impairment.",
        dosage: "200-800 mg orally every 6-8 hours."
    },
    {
        name: "Ketoprofen",
        moa: "Non-selective COX inhibitor, reducing inflammation and pain.",
        indications: "Pain, osteoarthritis, rheumatoid arthritis.",
        contraindications: "Peptic ulcer disease, hypersensitivity to NSAIDs.",
        sideEffects: "Nausea, headache.",
        diseases: "Osteoarthritis, rheumatoid arthritis.",
        seriousSideEffects: "Gastrointestinal bleeding, renal impairment.",
        dosage: "25-50 mg orally every 6-8 hours."
    },
    {
        name: "Fenoprofen",
        moa: "Non-selective COX inhibitor, reducing inflammation and pain.",
        indications: "Pain, osteoarthritis, rheumatoid arthritis.",
        contraindications: "Peptic ulcer disease, renal impairment.",
        sideEffects: "Nausea, headache.",
        diseases: "Osteoarthritis, rheumatoid arthritis.",
        seriousSideEffects: "Gastrointestinal bleeding, renal impairment.",
        dosage: "300 mg orally three times daily."
    },
    {
        name: "Naproxen",
        moa: "Inhibits COX-1 and COX-2 enzymes, decreasing prostaglandin production.",
        indications: "Pain, inflammation, osteoarthritis, ankylosing spondylitis.",
        contraindications: "Active gastrointestinal bleeding, asthma.",
        sideEffects: "Constipation, headache.",
        diseases: "Osteoarthritis, ankylosing spondylitis.",
        seriousSideEffects: "Myocardial infarction, stroke.",
        dosage: "250-500 mg orally twice daily."
    },
    {
        name: "Oxaprozin",
        moa: "Non-selective COX inhibitor, reducing inflammation and pain.",
        indications: "Osteoarthritis, rheumatoid arthritis.",
        contraindications: "Peptic ulcer disease, renal impairment.",
        sideEffects: "Nausea, headache.",
        diseases: "Osteoarthritis, rheumatoid arthritis.",
        seriousSideEffects: "Gastrointestinal bleeding, renal impairment.",
        dosage: "600-1200 mg orally once daily."
    },
    {
        name: "Flurbiprofen",
        moa: "Non-selective COX inhibitor, reducing inflammation and pain.",
        indications: "Pain, osteoarthritis, rheumatoid arthritis.",
        contraindications: "Peptic ulcer disease, hypersensitivity to NSAIDs.",
        sideEffects: "Nausea, dizziness.",
        diseases: "Osteoarthritis, rheumatoid arthritis.",
        seriousSideEffects: "Gastrointestinal bleeding, renal impairment.",
        dosage: "50-100 mg orally three times daily."
    },
        {
        name: "Aspirin (Acetylsalicylic acid)",
        moa: "Irreversibly inhibits COX-1 and COX-2, reducing inflammation and platelet aggregation.",
        indications: "Pain, fever, cardiovascular disease prevention.",
        contraindications: "Peptic ulcer disease, bleeding disorders.",
        sideEffects: "Nausea, heartburn.",
        diseases: "Cardiovascular disease, pain.",
        seriousSideEffects: "Gastrointestinal bleeding, Reye's syndrome.",
        dosage: "81-325 mg orally once daily for cardiovascular protection."
    },
    {
        name: "Diflunisal",
        moa: "Inhibits COX-1 and COX-2, reducing inflammation and pain.",
        indications: "Pain, osteoarthritis, rheumatoid arthritis.",
        contraindications: "Peptic ulcer disease, hypersensitivity to NSAIDs.",
        sideEffects: "Nausea, headache.",
        diseases: "Osteoarthritis, rheumatoid arthritis.",
        seriousSideEffects: "Gastrointestinal bleeding, renal impairment.",
        dosage: "500-1000 mg orally twice daily."
    },
    {
        name: "Salsalate",
        moa: "Non-selective COX inhibitor, reducing inflammation and pain.",
        indications: "Osteoarthritis, rheumatoid arthritis.",
        contraindications: "Peptic ulcer disease, hypersensitivity to NSAIDs.",
        sideEffects: "Nausea, abdominal pain.",
        diseases: "Osteoarthritis, rheumatoid arthritis.",
        seriousSideEffects: "Gastrointestinal bleeding, renal impairment.",
        dosage: "500-1000 mg orally twice daily."
    },
    {
        name: "Celecoxib",
        moa: "Selective COX-2 inhibitor, reducing pain and inflammation.",
        indications: "Osteoarthritis, rheumatoid arthritis, acute pain.",
        contraindications: "Sulfa allergy, history of heart disease.",
        sideEffects: "Diarrhea, hypertension.",
        diseases: "Osteoarthritis, rheumatoid arthritis.",
        seriousSideEffects: "Heart attack, stroke.",
        dosage: "100-200 mg orally once or twice daily."
    },
    {
        name: "Rofecoxib",
        moa: "Selective COX-2 inhibitor, reducing pain and inflammation.",
        indications: "Osteoarthritis, rheumatoid arthritis, acute pain.",
        contraindications: "Sulfa allergy, history of cardiovascular disease.",
        sideEffects: "Diarrhea, headache.",
        diseases: "Osteoarthritis, rheumatoid arthritis.",
        seriousSideEffects: "Cardiovascular events, gastrointestinal bleeding.",
        dosage: "12.5-25 mg orally once daily."
    }
],

"Local Anesthetics": [
    {
        name: "Procaine",
        moa: "Blocks sodium channels to inhibit nerve impulse conduction.",
        indications: "Local anesthesia for minor surgical procedures.",
        contraindications: "Hypersensitivity to ester-type anesthetics.",
        sideEffects: "Allergic reactions, hypotension.",
        diseases: "Local pain relief.",
        seriousSideEffects: "Severe allergic reactions, convulsions.",
        dosage: "Typically 5-15 mg/kg."
    },
    {
        name: "Chloroprocaine",
        moa: "Blocks sodium channels to inhibit nerve impulse conduction.",
        indications: "Local anesthesia for procedures such as epidural anesthesia.",
        contraindications: "Known allergy to ester-type anesthetics.",
        sideEffects: "Nausea, dizziness.",
        diseases: "Local pain relief during labor and surgeries.",
        seriousSideEffects: "Allergic reactions, seizures.",
        dosage: "10-15 mg/kg."
    },
    {
        name: "Lidocaine",
        moa: "Blocks sodium channels, preventing nerve impulse conduction.",
        indications: "Local anesthesia for minor surgical procedures and cardiac arrhythmias.",
        contraindications: "Severe liver disease, hypersensitivity.",
        sideEffects: "Dizziness, tinnitus, nausea.",
        diseases: "Local pain, ventricular arrhythmias.",
        seriousSideEffects: "Toxicity leading to seizures or cardiac arrest.",
        dosage: "5-10 mg/kg depending on the procedure."
    },
    {
        name: "Mepivacaine",
        moa: "Blocks sodium channels to prevent nerve impulse conduction.",
        indications: "Local anesthesia in dentistry and minor surgeries.",
        contraindications: "Hypersensitivity to amide anesthetics.",
        sideEffects: "Nausea, dizziness.",
        diseases: "Local pain relief.",
        seriousSideEffects: "Central nervous system toxicity, cardiac toxicity.",
        dosage: "4-7 mg/kg."
    },
    {
        name: "Prilocaine",
        moa: "Inhibits sodium channel function to block nerve impulses.",
        indications: "Local anesthesia, including dental procedures.",
        contraindications: "Hypersensitivity, severe liver disease.",
        sideEffects: "Nausea, dizziness, methemoglobinemia.",
        diseases: "Local pain relief.",
        seriousSideEffects: "Methemoglobinemia, convulsions.",
        dosage: "5 mg/kg."
    },
    {
        name: "Bupivacaine",
        moa: "Blocks sodium channels to prevent nerve conduction.",
        indications: "Local and regional anesthesia, including epidural.",
        contraindications: "Hypersensitivity, severe liver disease.",
        sideEffects: "Nausea, dizziness, hypotension.",
        diseases: "Local pain, labor pain.",
        seriousSideEffects: "Cardiotoxicity, severe allergic reactions.",
        dosage: "2-3 mg/kg."
    },
    {
        name: "Ropivacaine",
        moa: "Blocks sodium channels to inhibit nerve conduction.",
        indications: "Local and regional anesthesia, including epidural and nerve blocks.",
        contraindications: "Hypersensitivity, severe liver disease.",
        sideEffects: "Nausea, dizziness, hypotension.",
        diseases: "Local pain relief, labor pain.",
        seriousSideEffects: "Cardiotoxicity, severe allergic reactions.",
        dosage: "2-3 mg/kg."
    },
    {
        name: "Tetracaine",
        moa: "Blocks sodium channels to inhibit nerve impulse conduction.",
        indications: "Local anesthesia for various procedures, including spinal anesthesia.",
        contraindications: "Hypersensitivity to ester-type anesthetics.",
        sideEffects: "Local irritation, hypotension.",
        diseases: "Local pain relief.",
        seriousSideEffects: "Severe allergic reactions, cardiovascular effects.",
        dosage: "1-2 mg/kg."
    },
    {
        name: "Dibucaine",
        moa: "Blocks sodium channels to prevent nerve impulse conduction.",
        indications: "Local anesthesia and pain relief.",
        contraindications: "Hypersensitivity to local anesthetics.",
        sideEffects: "Local irritation, dizziness.",
        diseases: "Local pain relief.",
        seriousSideEffects: "Severe allergic reactions.",
        dosage: "Apply as directed; typically 0.5-1% concentration."
    },
    {
        name: "Cocaine",
        moa: "Blocks sodium channels and has vasoconstrictive properties.",
        indications: "Local anesthesia for specific ear, nose, and throat procedures.",
        contraindications: "Hypersensitivity, cardiovascular disease.",
        sideEffects: "Euphoria, hypertension, tachycardia.",
        diseases: "Local pain relief.",
        seriousSideEffects: "Addiction, severe cardiovascular effects.",
        dosage: "0.5-1% solution for topical application."
    },
    {
        name: "Benzocaine",
        moa: "Blocks sodium channels to prevent nerve conduction.",
        indications: "Topical anesthesia for minor pain and itching.",
        contraindications: "Hypersensitivity to local anesthetics.",
        sideEffects: "Local irritation, allergic reactions.",
        diseases: "Local pain relief.",
        seriousSideEffects: "Methemoglobinemia in high doses.",
        dosage: "Apply topically as needed; typically 5-20% concentration."
    }
],

"General Anesthetics": [
    {
        name: "Ether",
        moa: "Inhaled anesthetic that depresses the central nervous system.",
        indications: "Used for general anesthesia in surgical procedures.",
        contraindications: "History of respiratory issues, inflammations.",
        sideEffects: "Nausea, vomiting, respiratory irritation.",
        diseases: "Induction and maintenance of general anesthesia.",
        seriousSideEffects: "Liver toxicity, respiratory depression.",
        dosage: "Administered via inhalation; dose is adjusted based on patient response."
    },
    {
        name: "Halothane",
        moa: "Inhaled anesthetic that causes CNS depression and muscle relaxation.",
        indications: "Used for general anesthesia in surgeries.",
        contraindications: "Pre-existing liver disease, history of malignant hyperthermia.",
        sideEffects: "Hypotension, respiratory depression.",
        diseases: "General anesthesia.",
        seriousSideEffects: "Hepatotoxicity, malignant hyperthermia.",
        dosage: "Administered via inhalation; titrated to effect."
    },
    {
        name: "Isoflurane",
        moa: "Inhaled anesthetic that provides general anesthesia with muscle relaxation.",
        indications: "Used for induction and maintenance of general anesthesia.",
        contraindications: "Hypersensitivity, recent exposure to halogenated anesthetics.",
        sideEffects: "Hypotension, nausea.",
        diseases: "Surgical anesthesia.",
        seriousSideEffects: "Cardiac arrhythmias, respiratory depression.",
        dosage: "Administered via inhalation; dosage adjusted according to patient needs."
    },
    {
        name: "Desflurane",
        moa: "Inhaled anesthetic that induces general anesthesia rapidly with minimal residual effects.",
        indications: "Used for rapid induction and maintenance of anesthesia.",
        contraindications: "Patients with airway issues, hypersensitivity.",
        sideEffects: "Respiratory irritation, hypotension.",
        diseases: "General anesthesia.",
        seriousSideEffects: "Cardiac arrhythmias, respiratory depression.",
        dosage: "Administered via inhalation; dosage titrated to effect."
    },
    {
        name: "Sevoflurane",
        moa: "Inhaled anesthetic that provides rapid induction and recovery from anesthesia.",
        indications: "Used for induction and maintenance of general anesthesia, especially in pediatrics.",
        contraindications: "Hypersensitivity, renal impairment.",
        sideEffects: "Nausea, hypotension.",
        diseases: "Surgical anesthesia.",
        seriousSideEffects: "Renal toxicity, respiratory depression.",
        dosage: "Administered via inhalation; dose adjusted based on patient response."
    },
    {
        name: "Thiopental",
        moa: "Barbiturate that depresses CNS activity to induce anesthesia.",
        indications: "Used for induction of general anesthesia.",
        contraindications: "Porphyria, hypersensitivity.",
        sideEffects: "Respiratory depression, hypotension.",
        diseases: "Induction of anesthesia.",
        seriousSideEffects: "Respiratory arrest, cardiovascular instability.",
        dosage: "Administered intravenously; typically 3-5 mg/kg."
    },
    {
        name: "Propofol",
        moa: "Short-acting sedative-hypnotic that induces and maintains anesthesia.",
        indications: "Used for induction and maintenance of anesthesia and sedation.",
        contraindications: "Hypersensitivity to egg or soy products.",
        sideEffects: "Hypotension, respiratory depression.",
        diseases: "General anesthesia and sedation.",
        seriousSideEffects: "Respiratory and cardiovascular depression.",
        dosage: "Administered intravenously; typically 1-2.5 mg/kg for induction."
    },
    {
        name: "Etomidate",
        moa: "Sedative-hypnotic that provides rapid induction of anesthesia with minimal cardiovascular effects.",
        indications: "Used for induction of general anesthesia.",
        contraindications: "Adrenal insufficiency, hypersensitivity.",
        sideEffects: "Nausea, vomiting.",
        diseases: "Induction of anesthesia.",
        seriousSideEffects: "Adrenal suppression, myoclonus.",
        dosage: "Administered intravenously; typically 0.2-0.6 mg/kg."
    },
    {
        name: "Methohexital",
        moa: "Barbiturate that provides rapid induction of anesthesia with a brief duration.",
        indications: "Used for induction of general anesthesia.",
        contraindications: "Porphyria, hypersensitivity.",
        sideEffects: "Respiratory depression, hypotension.",
        diseases: "Induction of anesthesia.",
        seriousSideEffects: "Respiratory and cardiovascular depression.",
        dosage: "Administered intravenously; typically 1-1.5 mg/kg."
    },
    {
        name: "Diazepam",
        moa: "Benzodiazepine that provides sedation and anxiolysis.",
        indications: "Used for preoperative sedation and as an adjunct to anesthesia.",
        contraindications: "Severe respiratory or hepatic disease.",
        sideEffects: "Drowsiness, dizziness.",
        diseases: "Sedation, anxiety relief.",
        seriousSideEffects: "Respiratory depression, dependency.",
        dosage: "Administered orally or intravenously; typically 5-10 mg before procedures."
    },
    {
        name: "Lorazepam",
        moa: "Benzodiazepine that provides sedation and anxiolysis with longer duration.",
        indications: "Used for preoperative sedation and anxiety management.",
        contraindications: "Severe liver disease, hypersensitivity.",
        sideEffects: "Drowsiness, ataxia.",
        diseases: "Sedation, anxiety relief.",
        seriousSideEffects: "Respiratory depression, dependence.",
        dosage: "Administered orally or intravenously; typically 2-4 mg before procedures."
    },
    {
        name: "Midazolam",
        moa: "Short-acting benzodiazepine that provides sedation and amnesia.",
        indications: "Used for preoperative sedation and procedural anesthesia.",
        contraindications: "Severe respiratory disease, hypersensitivity.",
        sideEffects: "Drowsiness, amnesia.",
        diseases: "Sedation, procedural anesthesia.",
        seriousSideEffects: "Respiratory depression, paradoxical reactions.",
        dosage: "Administered orally or intravenously; typically 1-5 mg before procedures."
    },
    {
        name: "Ketamine",
        moa: "Dissociative anesthetic that induces anesthesia while providing analgesia.",
        indications: "Used for induction and maintenance of anesthesia, especially in patients with cardiovascular instability.",
        contraindications: "Severe psychiatric disorders, hypersensitivity.",
        sideEffects: "Hallucinations, dissociation.",
        diseases: "General anesthesia and pain relief.",
        seriousSideEffects: "Emergence delirium, cardiovascular stimulation.",
        dosage: "Administered intravenously or intramuscularly; typically 1-2 mg/kg for induction."
    },
    {
        name: "Fentanyl",
        moa: "Potent opioid analgesic that provides analgesia and sedation.",
        indications: "Used for pain management and adjunct to anesthesia.",
        contraindications: "Severe respiratory disease, hypersensitivity.",
        sideEffects: "Respiratory depression, nausea.",
        diseases: "Pain relief, anesthesia adjunct.",
        seriousSideEffects: "Respiratory arrest, dependence.",
        dosage: "Administered intravenously or transdermally; dosage adjusted based on pain control needs."
    },
    {
        name: "Nitrous Oxide (N2O)",
        moa: "Inhaled gas that provides analgesia and mild sedation.",
        indications: "Used for analgesia during dental and minor surgical procedures.",
        contraindications: "Severe chronic obstructive pulmonary disease, pneumothorax.",
        sideEffects: "Nausea, dizziness.",
        diseases: "Pain relief during procedures.",
        seriousSideEffects: "Hypoxia, vitamin B12 deficiency with prolonged use.",
        dosage: "Administered via inhalation; typically used in combination with other anesthetics."
    }
],


"Opioids": [
    {
        name: "Morphine",
        moa: "Binds to opioid receptors, primarily the mu receptor, to produce analgesia.",
        indications: "Severe pain, chronic pain, myocardial infarction pain.",
        contraindications: "Respiratory depression, asthma, paralytic ileus.",
        sideEffects: "Constipation, nausea, vomiting, sedation.",
        diseases: "Severe pain, myocardial infarction.",
        seriousSideEffects: "Respiratory depression, addiction, tolerance, overdose.",
        dosage: "10-30 mg orally every 4 hours or 2-10 mg intravenously every 3-4 hours."
      },
      {
        name: "Codeine",
        moa: "Opioid agonist that is converted to morphine in the body, providing pain relief and cough suppression.",
        indications: "Mild to moderate pain, cough suppression.",
        contraindications: "Respiratory depression, asthma, paralytic ileus.",
        sideEffects: "Drowsiness, constipation, nausea, vomiting.",
        diseases: "Mild pain, cough.",
        seriousSideEffects: "Respiratory depression, addiction, overdose.",
        dosage: "15-60 mg orally every 4-6 hours as needed."
      },
      {
        name: "Heroin",
        moa: "Opioid agonist that rapidly crosses the blood-brain barrier and is converted to morphine, producing intense euphoria.",
        indications: "Not used medically in most countries, illegal drug of abuse.",
        contraindications: "Respiratory depression, asthma, paralytic ileus.",
        sideEffects: "Euphoria, dry mouth, warm flushing skin.",
        diseases: "Substance use disorder.",
        seriousSideEffects: "Respiratory depression, overdose, addiction.",
        dosage: "Not applicable."
      },
      {
        name: "Fentanyl",
        moa: "A potent synthetic opioid that binds to opioid receptors, especially the mu receptor, to provide pain relief.",
        indications: "Severe pain, surgical anesthesia, cancer pain.",
        contraindications: "Respiratory depression, asthma, paralytic ileus.",
        sideEffects: "Nausea, vomiting, drowsiness, constipation.",
        diseases: "Severe pain, cancer pain.",
        seriousSideEffects: "Respiratory depression, overdose, addiction.",
        dosage: "50-100 mcg intravenously every 1-2 hours as needed."
      },
      {
        name: "Methadone",
        moa: "Long-acting opioid agonist that binds to opioid receptors, providing pain relief and reducing withdrawal symptoms.",
        indications: "Chronic pain, opioid use disorder.",
        contraindications: "Respiratory depression, asthma, prolonged QT interval.",
        sideEffects: "Sweating, constipation, drowsiness.",
        diseases: "Chronic pain, opioid addiction.",
        seriousSideEffects: "Respiratory depression, QT prolongation, overdose.",
        dosage: "2.5-10 mg orally every 8-12 hours for pain or 20-120 mg once daily for opioid dependence."
      },
      {
        name: "Pethidine",
        moa: "Opioid analgesic that binds to opioid receptors to relieve pain.",
        indications: "Moderate to severe pain, anesthesia adjunct.",
        contraindications: "Respiratory depression, asthma, renal failure.",
        sideEffects: "Dizziness, sedation, nausea, vomiting.",
        diseases: "Moderate pain, severe pain.",
        seriousSideEffects: "Seizures, respiratory depression, addiction.",
        dosage: "50-150 mg orally or intramuscularly every 3-4 hours."
      },
      {
        name: "Tramadol",
        moa: "Opioid agonist and serotonin/norepinephrine reuptake inhibitor that provides pain relief.",
        indications: "Moderate to moderately severe pain.",
        contraindications: "Respiratory depression, epilepsy.",
        sideEffects: "Nausea, dizziness, constipation, drowsiness.",
        diseases: "Moderate pain.",
        seriousSideEffects: "Seizures, serotonin syndrome, respiratory depression.",
        dosage: "50-100 mg orally every 4-6 hours as needed."
      },
      {
        name: "Naloxone",
        moa: "Opioid antagonist that rapidly reverses opioid overdose by displacing opioids from their receptors.",
        indications: "Opioid overdose, opioid-induced respiratory depression.",
        contraindications: "Hypersensitivity to naloxone.",
        sideEffects: "Rapid withdrawal symptoms, nausea, vomiting, sweating.",
        diseases: "Opioid overdose.",
        seriousSideEffects: "Cardiac arrest, seizures (rare).",
        dosage: "0.4-2 mg intravenously every 2-3 minutes as needed."
      },
      {
        name: "Papaverine",
        moa: "Smooth muscle relaxant that inhibits phosphodiesterase, leading to increased levels of cAMP and vasodilation.",
        indications: "Vascular spasms, ischemic conditions, erectile dysfunction.",
        contraindications: "Hypersensitivity, heart block, severe liver disease.",
        sideEffects: "Flushing, dizziness, hypotension.",
        diseases: "Vascular spasms, erectile dysfunction.",
        seriousSideEffects: "Hepatotoxicity, arrhythmias.",
        dosage: "30-60 mg orally or intravenously every 8 hours."
      },
      {
        name: "Oxymorphone",
        moa: "Opioid agonist that binds to mu receptors to provide potent analgesia.",
        indications: "Severe pain, chronic pain.",
        contraindications: "Respiratory depression, asthma, paralytic ileus.",
        sideEffects: "Nausea, vomiting, constipation, drowsiness.",
        diseases: "Severe pain, chronic pain.",
        seriousSideEffects: "Respiratory depression, overdose, addiction.",
        dosage: "10-20 mg orally every 4-6 hours."
      },
      {
        name: "Hydromorphone",
        moa: "Opioid agonist that binds to mu receptors, offering powerful analgesic effects.",
        indications: "Moderate to severe pain.",
        contraindications: "Respiratory depression, asthma, paralytic ileus.",
        sideEffects: "Constipation, nausea, vomiting, dizziness.",
        diseases: "Moderate pain, severe pain.",
        seriousSideEffects: "Respiratory depression, addiction, overdose.",
        dosage: "2-4 mg orally every 4-6 hours or 1-2 mg intravenously every 2-3 hours."
      },
      {
        name: "Naltrexone",
        moa: "Opioid antagonist that blocks the effects of opioids and reduces the craving for alcohol and opioids.",
        indications: "Opioid dependence, alcohol dependence.",
        contraindications: "Acute hepatitis, liver failure, opioid use within the last 7-10 days.",
        sideEffects: "Nausea, headache, dizziness, fatigue.",
        diseases: "Opioid addiction, alcohol addiction.",
        seriousSideEffects: "Hepatotoxicity, withdrawal symptoms in opioid users.",
        dosage: "50 mg orally once daily."
      },
      {
        name: "Benzomorphans",
        moa: "Opioid agonists with mixed kappa and mu receptor activity, providing pain relief.",
        indications: "Moderate to severe pain.",
        contraindications: "Respiratory depression, asthma, paralytic ileus.",
        sideEffects: "Nausea, vomiting, constipation, dizziness.",
        diseases: "Moderate pain, severe pain.",
        seriousSideEffects: "Respiratory depression, addiction, overdose.",
        dosage: "Varies by drug, typically 10-30 mg orally every 4-6 hours."
    }
],
"Oral Contraceptives": [
    {
        name: "Norethindrone",
        moa: "Synthetic progestin that inhibits ovulation and causes changes in the uterine lining.",
        indications: "Contraception, treatment of endometriosis, abnormal uterine bleeding.",
        contraindications: "Pregnancy, liver disease, breast cancer.",
        sideEffects: "Nausea, headache, weight gain.",
        diseases: "Endometriosis, contraception.",
        seriousSideEffects: "Deep vein thrombosis, stroke.",
        dosage: "0.35 mg orally once daily."
    },
    {
        name: "Mifepristone",
        moa: "Antiprogestin that blocks progesterone receptors, leading to uterine lining breakdown and abortion.",
        indications: "Medical abortion, management of missed miscarriage.",
        contraindications: "Ectopic pregnancy, severe adrenal insufficiency, chronic corticosteroid therapy.",
        sideEffects: "Nausea, vomiting, abdominal pain.",
        diseases: "Unplanned pregnancy.",
        seriousSideEffects: "Heavy bleeding, infection.",
        dosage: "200 mg orally once."
    },
    {
        name: "Ethinyl Estradiol",
        moa: "Synthetic estrogen that inhibits ovulation and stabilizes the endometrial lining.",
        indications: "Contraception, hormone replacement therapy.",
        contraindications: "Pregnancy, liver disease, estrogen-dependent cancers.",
        sideEffects: "Nausea, headache, breast tenderness.",
        diseases: "Contraception, hormone replacement therapy.",
        seriousSideEffects: "Deep vein thrombosis, stroke.",
        dosage: "0.02-0.05 mg orally once daily."
    },
    {
        name: "Levonorgestrel",
        moa: "Synthetic progestin that prevents ovulation and thickens cervical mucus.",
        indications: "Contraception, emergency contraception.",
        contraindications: "Pregnancy, liver disease.",
        sideEffects: "Nausea, headache, breast tenderness.",
        diseases: "Contraception.",
        seriousSideEffects: "Ectopic pregnancy, severe abdominal pain.",
        dosage: "1.5 mg orally as a single dose (emergency contraception)."
    },
    {
        name: "Desogestrel",
        moa: "Synthetic progestin that prevents ovulation and causes changes in the cervical mucus.",
        indications: "Contraception.",
        contraindications: "Pregnancy, liver disease.",
        sideEffects: "Headache, nausea, mood changes.",
        diseases: "Contraception.",
        seriousSideEffects: "Deep vein thrombosis, stroke.",
        dosage: "0.15 mg orally once daily."
    },
    {
        name: "Drospirenone",
        moa: "Synthetic progestin with anti-androgenic properties, inhibits ovulation.",
        indications: "Contraception, treatment of acne, premenstrual dysphoric disorder.",
        contraindications: "Pregnancy, liver disease, kidney disease.",
        sideEffects: "Nausea, headache, mood swings.",
        diseases: "Contraception, acne.",
        seriousSideEffects: "Blood clots, liver dysfunction.",
        dosage: "3 mg orally once daily."
    }
],
"Erectile Dysfunction Drugs": [
    {
        name: "Sildenafil",
        moa: "Inhibits phosphodiesterase type 5 (PDE5), increasing levels of cyclic GMP and promoting penile erection.",
        indications: "Erectile dysfunction.",
        contraindications: "Nitrate use, severe cardiovascular conditions.",
        sideEffects: "Headache, flushing, dyspepsia.",
        diseases: "Erectile dysfunction.",
        seriousSideEffects: "Priapism, severe hypotension.",
        dosage: "50 mg orally 1 hour before sexual activity (adjustable based on efficacy and tolerability)."
    },
    {
        name: "Tadalafil",
        moa: "Inhibits PDE5, increasing levels of cyclic GMP and enhancing penile erection.",
        indications: "Erectile dysfunction, benign prostatic hyperplasia.",
        contraindications: "Nitrate use, severe cardiovascular conditions.",
        sideEffects: "Headache, back pain, indigestion.",
        diseases: "Erectile dysfunction, benign prostatic hyperplasia.",
        seriousSideEffects: "Priapism, severe hypotension.",
        dosage: "10 mg orally before sexual activity or 2.5-5 mg daily for continuous use."
    },
    {
        name: "Vardenafil",
        moa: "Inhibits PDE5, leading to increased levels of cyclic GMP and improved penile erection.",
        indications: "Erectile dysfunction.",
        contraindications: "Nitrate use, severe cardiovascular conditions.",
        sideEffects: "Headache, flushing, nasal congestion.",
        diseases: "Erectile dysfunction.",
        seriousSideEffects: "Priapism, severe hypotension.",
        dosage: "10 mg orally 1 hour before sexual activity (adjustable based on efficacy and tolerability)."
    },
    {
        name: "Avanafil",
        moa: "Inhibits PDE5, increasing cyclic GMP levels and enhancing penile erection.",
        indications: "Erectile dysfunction.",
        contraindications: "Nitrate use, severe cardiovascular conditions.",
        sideEffects: "Headache, flushing, nasal congestion.",
        diseases: "Erectile dysfunction.",
        seriousSideEffects: "Priapism, severe hypotension.",
        dosage: "100 mg orally 15-30 minutes before sexual activity (adjustable based on efficacy and tolerability)."
    }
],
"Uterine stimulants & Abortifacients": [
    {
        name: "Oxytocin",
        moa: "Stimulates uterine contractions by acting on oxytocin receptors in the uterus.",
        indications: "Induction of labor, control of postpartum hemorrhage.",
        contraindications: "Uterine surgery, fetal distress.",
        sideEffects: "Uterine hyperstimulation, nausea, vomiting.",
        diseases: "Labor induction, postpartum hemorrhage.",
        seriousSideEffects: "Uterine rupture, severe fetal distress.",
        dosage: "10-20 units IV infusion, titrated to desired contraction pattern."
    },
    {
        name: "Misoprostol",
        moa: "Prostaglandin E1 analog that causes uterine contractions and cervical dilation.",
        indications: "Induction of labor, treatment of postpartum hemorrhage, medical abortion.",
        contraindications: "Active pelvic inflammatory disease, prior cesarean section.",
        sideEffects: "Abdominal pain, diarrhea, nausea.",
        diseases: "Labor induction, abortion.",
        seriousSideEffects: "Uterine rupture, severe bleeding.",
        dosage: "200-400 mcg orally or vaginally every 4-6 hours for labor induction."
    },
    {
        name: "Dinoprostone",
        moa: "Prostaglandin E2 analog that causes cervical ripening and uterine contractions.",
        indications: "Induction of labor, cervical ripening.",
        contraindications: "Previous cesarean section, active pelvic inflammatory disease.",
        sideEffects: "Nausea, diarrhea, fever.",
        diseases: "Labor induction, cervical ripening.",
        seriousSideEffects: "Uterine rupture, severe fetal distress.",
        dosage: "10 mg vaginally as a slow-release insert or 0.5 mg vaginally as a gel for cervical ripening."
    },
    {
        name: "Carboprost",
        moa: "Prostaglandin F2α analog that causes uterine contractions and reduces bleeding.",
        indications: "Postpartum hemorrhage, abortion.",
        contraindications: "Active pelvic inflammatory disease, uterine surgery.",
        sideEffects: "Nausea, vomiting, diarrhea.",
        diseases: "Postpartum hemorrhage, abortion.",
        seriousSideEffects: "Uterine rupture, severe bleeding.",
        dosage: "250 mcg intramuscularly every 15-90 minutes as needed for postpartum hemorrhage."
    },
    {
        name: "Mifepristone",
        moa: "Antiprogestin that blocks progesterone receptors, leading to uterine lining breakdown and abortion.",
        indications: "Medical abortion, management of missed miscarriage.",
        contraindications: "Ectopic pregnancy, severe adrenal insufficiency, chronic corticosteroid therapy.",
        sideEffects: "Nausea, vomiting, abdominal pain.",
        diseases: "Unplanned pregnancy.",
        seriousSideEffects: "Heavy bleeding, infection.",
        dosage: "200 mg orally once."
    },
    {
        name: "Methotrexate",
        moa: "Folate antagonist that inhibits DNA synthesis and cell proliferation.",
        indications: "Medical abortion, ectopic pregnancy, cancer treatment.",
        contraindications: "Pregnancy, liver disease, renal impairment.",
        sideEffects: "Nausea, mucositis, fatigue.",
        diseases: "Ectopic pregnancy, cancer.",
        seriousSideEffects: "Hepatotoxicity, bone marrow suppression.",
        dosage: "50 mg orally once or in divided doses for medical abortion, dosage varies for cancer treatment."
    }
],
"Skeletal and Smooth Muscle Relaxants": [
    {
        name: "Diazepam",
        moa: "Enhances the effect of GABA at the GABA-A receptor, causing muscle relaxation.",
        indications: "Muscle spasms, anxiety, seizures.",
        contraindications: "Severe respiratory insufficiency, sleep apnea.",
        sideEffects: "Drowsiness, fatigue, muscle weakness.",
        diseases: "Muscle spasms, anxiety.",
        seriousSideEffects: "Respiratory depression.",
        dosage: "5-10mg orally or intravenously."
    },
    {
        name: "Cyclobenzaprine",
        moa: "Reduces tonic somatic motor activity, influencing both gamma and alpha motor systems.",
        indications: "Muscle spasm.",
        contraindications: "Hyperthyroidism, heart block.",
        sideEffects: "Drowsiness, dry mouth.",
        diseases: "Muscle spasm.",
        seriousSideEffects: "Arrhythmias.",
        dosage: "5-10mg orally three times daily."
    }
],
"Antifungals": [
    {
        name: "Amphotericin B",
        moa: "Binds to ergosterol in fungal cell membranes, increasing permeability and causing cell death.",
        indications: "Severe systemic fungal infections, cryptococcal meningitis.",
        contraindications: "Hypersensitivity, renal impairment.",
        sideEffects: "Fever, chills, nephrotoxicity.",
        diseases: "Aspergillosis, candidiasis, histoplasmosis, cryptococcosis.",
        seriousSideEffects: "Severe nephrotoxicity, electrolyte imbalances.",
        dosage: "0.25-1.5 mg/kg/day intravenously."
    },
    {
        name: "Natamycin",
        moa: "Binds to sterols in fungal cell membranes, increasing membrane permeability.",
        indications: "Fungal eye infections, keratitis.",
        contraindications: "Hypersensitivity to natamycin.",
        sideEffects: "Eye irritation, redness.",
        diseases: "Fungal keratitis, conjunctivitis.",
        seriousSideEffects: "Severe allergic reactions.",
        dosage: "1 drop in the affected eye 4-6 times daily."
    },
    {
        name: "Nystatin",
        moa: "Binds to ergosterol in fungal cell membranes, increasing permeability and causing cell death.",
        indications: "Oral candidiasis, cutaneous and mucosal fungal infections.",
        contraindications: "Hypersensitivity to nystatin.",
        sideEffects: "Nausea, diarrhea, skin irritation.",
        diseases: "Oral thrush, vaginal candidiasis.",
        seriousSideEffects: "Severe allergic reactions.",
        dosage: "Oral: 400,000-600,000 units 4 times daily; Topical: Apply 2-3 times daily."
    },
    {
        name: "Fluconazole",
        moa: "Inhibits fungal cytochrome P450 enzyme (lanosterol 14-α-demethylase), impairing ergosterol synthesis.",
        indications: "Candidiasis, cryptococcal meningitis.",
        contraindications: "Hypersensitivity to fluconazole.",
        sideEffects: "Headache, abdominal pain.",
        diseases: "Vaginal candidiasis, esophageal candidiasis, cryptococcosis.",
        seriousSideEffects: "QT prolongation, hepatotoxicity.",
        dosage: "150 mg once daily."
    },
    {
        name: "Ketoconazole",
        moa: "Inhibits ergosterol synthesis by blocking fungal cytochrome P450 enzymes.",
        indications: "Fungal skin infections, seborrheic dermatitis.",
        contraindications: "Liver disease, hypersensitivity.",
        sideEffects: "Nausea, itching.",
        diseases: "Tinea versicolor, seborrheic dermatitis.",
        seriousSideEffects: "Hepatotoxicity, adrenal insufficiency.",
        dosage: "200-400 mg orally once daily."
    },
    {
        name: "Itraconazole",
        moa: "Inhibits ergosterol synthesis by blocking fungal cytochrome P450 enzymes.",
        indications: "Histoplasmosis, aspergillosis, onychomycosis.",
        contraindications: "Heart failure, liver impairment.",
        sideEffects: "Nausea, rash.",
        diseases: "Blastomycosis, sporotrichosis, onychomycosis.",
        seriousSideEffects: "Heart failure, hepatotoxicity.",
        dosage: "100-400 mg orally daily."
    },
    {
        name: "Voriconazole",
        moa: "Inhibits ergosterol synthesis, crucial for fungal cell membrane structure.",
        indications: "Aspergillosis, candidiasis, other invasive fungal infections.",
        contraindications: "Hypersensitivity to voriconazole.",
        sideEffects: "Visual disturbances, rash.",
        diseases: "Invasive aspergillosis, candidemia.",
        seriousSideEffects: "Hepatotoxicity, QT prolongation.",
        dosage: "6 mg/kg IV every 12 hours for two doses, then 4 mg/kg every 12 hours."
    },
    {
        name: "Clotrimazole",
        moa: "Inhibits the synthesis of ergosterol, a key component of fungal cell membranes.",
        indications: "Candidiasis, tinea infections.",
        contraindications: "Hypersensitivity to clotrimazole.",
        sideEffects: "Local irritation, burning sensation.",
        diseases: "Oral thrush, athlete's foot, ringworm.",
        seriousSideEffects: "Severe allergic reactions.",
        dosage: "Topical: Apply 2-3 times daily."
    },
    {
        name: "Miconazole",
        moa: "Inhibits ergosterol synthesis, compromising fungal cell membrane integrity.",
        indications: "Candidiasis, tinea infections.",
        contraindications: "Hypersensitivity to miconazole.",
        sideEffects: "Local irritation, itching.",
        diseases: "Vaginal yeast infections, athlete's foot.",
        seriousSideEffects: "Severe allergic reactions.",
        dosage: "Topical: Apply 2-3 times daily."
    },
    {
        name: "Butenafine",
        moa: "Inhibits fungal squalene epoxidase, disrupting cell membrane synthesis.",
        indications: "Tinea pedis, tinea cruris, tinea corporis.",
        contraindications: "Hypersensitivity to butenafine.",
        sideEffects: "Burning sensation, redness.",
        diseases: "Jock itch, athlete's foot, ringworm.",
        seriousSideEffects: "Severe allergic reactions.",
        dosage: "Topical: Apply once daily for 1-4 weeks."
    },
    {
        name: "Naftifine",
        moa: "Inhibits squalene epoxidase, leading to decreased ergosterol synthesis and fungal cell membrane disruption.",
        indications: "Tinea infections, dermatophyte infections.",
        contraindications: "Hypersensitivity to naftifine.",
        sideEffects: "Itching, dryness.",
        diseases: "Ringworm, athlete's foot.",
        seriousSideEffects: "Severe allergic reactions.",
        dosage: "Topical: Apply once daily for 2 weeks."
    },
    {
        name: "Terbinafine",
        moa: "Inhibits squalene epoxidase, causing accumulation of squalene and death of fungal cells.",
        indications: "Onychomycosis, tinea infections.",
        contraindications: "Liver disease, hypersensitivity.",
        sideEffects: "Headache, gastrointestinal upset.",
        diseases: "Toenail fungus, jock itch, athlete's foot.",
        seriousSideEffects: "Hepatotoxicity, taste disturbances.",
        dosage: "250 mg orally once daily for 6-12 weeks."
    },
    {
        name: "Anidulafungin",
        moa: "Inhibits fungal cell wall synthesis by non-competitively inhibiting β-1,3-D-glucan synthase.",
        indications: "Invasive candidiasis.",
        contraindications: "Hypersensitivity to anidulafungin.",
        sideEffects: "Diarrhea, nausea.",
        diseases: "Candidemia, esophageal candidiasis.",
        seriousSideEffects: "Hepatotoxicity, hypersensitivity reactions.",
        dosage: "200 mg IV on day 1, then 100 mg daily."
    },
    {
        name: "Caspofungin",
        moa: "Inhibits fungal cell wall synthesis by inhibiting β-1,3-D-glucan synthesis.",
        indications: "Invasive candidiasis, aspergillosis.",
        contraindications: "Hypersensitivity to caspofungin.",
        sideEffects: "Fever, elevated liver enzymes.",
        diseases: "Invasive aspergillosis, esophageal candidiasis.",
        seriousSideEffects: "Hepatotoxicity, anaphylaxis.",
        dosage: "70 mg IV on day 1, then 50 mg daily."
    },
    {
        name: "Micafungin",
        moa: "Inhibits fungal cell wall synthesis by inhibiting β-1,3-D-glucan synthesis.",
        indications: "Candidemia, esophageal candidiasis.",
        contraindications: "Hypersensitivity to micafungin.",
        sideEffects: "Fever, rash.",
        diseases: "Esophageal candidiasis, candidemia.",
        seriousSideEffects: "Hepatotoxicity, anaphylaxis.",
        dosage: "100 mg IV once daily."
    },
    {
        name: "Griseofulvin",
        moa: "Disrupts fungal cell mitosis by interacting with microtubules.",
        indications: "Dermatophytosis, onychomycosis.",
        contraindications: "Liver disease, porphyria.",
        sideEffects: "Nausea, dizziness.",
        diseases: "Tinea capitis, tinea corporis, onychomycosis.",
        seriousSideEffects: "Hepatotoxicity, photosensitivity.",
        dosage: "500 mg orally once daily."
    },
    {
        name: "Flucytosine",
        moa: "Inhibits fungal DNA and RNA synthesis by interfering with pyrimidine metabolism.",
        indications: "Cryptococcal meningitis, candidiasis.",
        contraindications: "Bone marrow suppression, renal impairment.",
        sideEffects: "Bone marrow suppression, nausea.",
        diseases: "Cryptococcosis, invasive candidiasis.",
        seriousSideEffects: "Hepatotoxicity, renal toxicity.",
        dosage: "50-150 mg/kg/day orally in divided doses every 6 hours."
    }
],
"Antipsychotics": [
    {
        name: "Haloperidol",
        moa: "Dopamine D2 receptor antagonist, reducing dopaminergic activity.",
        indications: "Schizophrenia, acute psychosis, Tourette syndrome.",
        contraindications: "Parkinson's disease, severe CNS depression.",
        sideEffects: "Extrapyramidal symptoms, sedation.",
        diseases: "Schizophrenia, acute psychosis.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "0.5-20 mg orally daily, in divided doses."
    },
    {
        name: "Chlorpromazine",
        moa: "Dopamine D2 receptor antagonist, reducing dopaminergic activity.",
        indications: "Schizophrenia, bipolar disorder, severe nausea.",
        contraindications: "Severe hepatic impairment, bone marrow depression.",
        sideEffects: "Sedation, weight gain, dry mouth.",
        diseases: "Schizophrenia, bipolar disorder.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "25-800 mg orally daily, in divided doses."
    },
    {
        name: "Fluphenazine",
        moa: "Dopamine D2 receptor antagonist, reducing dopaminergic activity.",
        indications: "Schizophrenia, chronic psychosis.",
        contraindications: "Severe liver disease, CNS depression.",
        sideEffects: "Extrapyramidal symptoms, drowsiness.",
        diseases: "Schizophrenia.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "1-10 mg orally daily, in divided doses."
    },
    {
        name: "Loxapine",
        moa: "Dopamine D2 receptor antagonist, reducing dopaminergic activity.",
        indications: "Schizophrenia, bipolar disorder.",
        contraindications: "Severe respiratory disease, CNS depression.",
        sideEffects: "Sedation, dizziness, dry mouth.",
        diseases: "Schizophrenia, bipolar disorder.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "10-100 mg orally daily, in divided doses."
    },
    {
        name: "Perphenazine",
        moa: "Dopamine D2 receptor antagonist, reducing dopaminergic activity.",
        indications: "Schizophrenia, severe nausea.",
        contraindications: "Severe hepatic impairment, bone marrow depression.",
        sideEffects: "Extrapyramidal symptoms, drowsiness.",
        diseases: "Schizophrenia.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "8-32 mg orally daily, in divided doses."
    },
    {
        name: "Thioridazine",
        moa: "Dopamine D2 receptor antagonist, reducing dopaminergic activity.",
        indications: "Schizophrenia, psychotic disorders.",
        contraindications: "Severe hepatic impairment, history of arrhythmias.",
        sideEffects: "Sedation, weight gain, dry mouth.",
        diseases: "Schizophrenia.",
        seriousSideEffects: "Neuroleptic malignant syndrome, cardiac arrhythmias.",
        dosage: "50-800 mg orally daily, in divided doses."
    },
    {
        name: "Trifluoperazine",
        moa: "Dopamine D2 receptor antagonist, reducing dopaminergic activity.",
        indications: "Schizophrenia, severe anxiety.",
        contraindications: "Severe hepatic impairment, CNS depression.",
        sideEffects: "Extrapyramidal symptoms, sedation.",
        diseases: "Schizophrenia.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "1-30 mg orally daily, in divided doses."
    },
    {
        name: "Pimozide",
        moa: "Dopamine D2 receptor antagonist, reducing dopaminergic activity.",
        indications: "Tourette syndrome, schizophrenia.",
        contraindications: "Severe hepatic impairment, history of QT prolongation.",
        sideEffects: "Sedation, dry mouth, weight gain.",
        diseases: "Tourette syndrome, schizophrenia.",
        seriousSideEffects: "Neuroleptic malignant syndrome, QT prolongation.",
        dosage: "1-10 mg orally daily, in divided doses."
    },
    {
        name: "Mesoridazine",
        moa: "Dopamine D2 receptor antagonist, reducing dopaminergic activity.",
        indications: "Schizophrenia.",
        contraindications: "Severe hepatic impairment, history of arrhythmias.",
        sideEffects: "Sedation, dry mouth, hypotension.",
        diseases: "Schizophrenia.",
        seriousSideEffects: "Neuroleptic malignant syndrome, cardiac arrhythmias.",
        dosage: "50-400 mg orally daily, in divided doses."
    },
    {
        name: "Olanzapine",
        moa: "Atypical antipsychotic that blocks serotonin and dopamine receptors.",
        indications: "Schizophrenia, bipolar disorder.",
        contraindications: "Severe hepatic impairment, hypersensitivity to the drug.",
        sideEffects: "Weight gain, sedation, dry mouth.",
        diseases: "Schizophrenia, bipolar disorder.",
        seriousSideEffects: "Neuroleptic malignant syndrome, metabolic syndrome.",
        dosage: "5-20 mg orally daily."
    },
    {
        name: "Risperidone",
        moa: "Atypical antipsychotic that blocks serotonin and dopamine receptors.",
        indications: "Schizophrenia, bipolar disorder, irritability in autism.",
        contraindications: "Severe renal impairment, hypersensitivity to the drug.",
        sideEffects: "Weight gain, drowsiness, increased appetite.",
        diseases: "Schizophrenia, bipolar disorder.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "1-6 mg orally daily."
    },
    {
        name: "Quetiapine",
        moa: "Atypical antipsychotic that affects serotonin and dopamine receptors.",
        indications: "Schizophrenia, bipolar disorder, major depressive disorder.",
        contraindications: "Severe hepatic impairment, hypersensitivity to the drug.",
        sideEffects: "Sedation, weight gain, dizziness.",
        diseases: "Schizophrenia, bipolar disorder.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "25-800 mg orally daily, in divided doses."
    },
    {
        name: "Aripiprazole",
        moa: "Atypical antipsychotic that modulates dopamine and serotonin activity.",
        indications: "Schizophrenia, bipolar disorder, major depressive disorder.",
        contraindications: "Severe hepatic impairment, hypersensitivity to the drug.",
        sideEffects: "Insomnia, anxiety, weight gain.",
        diseases: "Schizophrenia, bipolar disorder.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "10-30 mg orally daily."
    },
    {
        name: "Clozapine",
        moa: "Atypical antipsychotic with effects on serotonin and dopamine receptors.",
        indications: "Treatment-resistant schizophrenia.",
        contraindications: "Severe bone marrow suppression, hypersensitivity to the drug.",
        sideEffects: "Weight gain, sedation, hypersalivation.",
        diseases: "Schizophrenia.",
        seriousSideEffects: "Agranulocytosis, seizures.",
        dosage: "300-900 mg orally daily."
    },
    {
        name: "Ziprasidone",
        moa: "Atypical antipsychotic that affects serotonin and dopamine receptors.",
        indications: "Schizophrenia, bipolar disorder.",
        contraindications: "Prolonged QT interval, hypersensitivity to the drug.",
        sideEffects: "Sedation, nausea, weight gain.",
        diseases: "Schizophrenia, bipolar disorder.",
        seriousSideEffects: "QT prolongation, neuroleptic malignant syndrome.",
        dosage: "20-80 mg orally twice daily."
    },
    {
        name: "Lurasidone",
        moa: "Atypical antipsychotic with serotonin and dopamine receptor antagonism.",
        indications: "Schizophrenia, bipolar depression.",
        contraindications: "Severe hepatic impairment, hypersensitivity to the drug.",
        sideEffects: "Sedation, nausea, weight gain.",
        diseases: "Schizophrenia, bipolar depression.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "40-160 mg orally daily."
    },
    {
        name: "Asenapine",
        moa: "Atypical antipsychotic with serotonin and dopamine receptor antagonism.",
        indications: "Schizophrenia, bipolar disorder.",
        contraindications: "Severe hepatic impairment, hypersensitivity to the drug.",
        sideEffects: "Sedation, weight gain, oral numbness.",
        diseases: "Schizophrenia, bipolar disorder.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "5-10 mg orally twice daily."
    },
    {
        name: "Paliperidone",
        moa: "Atypical antipsychotic that blocks dopamine and serotonin receptors.",
        indications: "Schizophrenia, schizoaffective disorder.",
        contraindications: "Severe renal impairment, hypersensitivity to the drug.",
        sideEffects: "Weight gain, drowsiness, akathisia.",
        diseases: "Schizophrenia, schizoaffective disorder.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "6-12 mg orally daily."
    }
],
"Antidiarrheals": [
    {
        name: "Loperamide",
        moa: "Opioid receptor agonist that decreases gut motility.",
        indications: "Acute and chronic diarrhea.",
        contraindications: "Bloody diarrhea, fever, pseudomembranous colitis.",
        sideEffects: "Constipation, dizziness, nausea.",
        diseases: "Diarrhea.",
        seriousSideEffects: "Toxic megacolon, ileus.",
        dosage: "2 mg orally after each loose stool, not exceeding 8 mg/day."
    },
    {
        name: "Diphenoxylate/Atropine",
        moa: "Opioid receptor agonist with atropine to reduce abuse potential.",
        indications: "Acute diarrhea.",
        contraindications: "Obstructive jaundice, diarrhea caused by antibiotics.",
        sideEffects: "Drowsiness, dry mouth, constipation.",
        diseases: "Diarrhea.",
        seriousSideEffects: "Toxic megacolon, respiratory depression.",
        dosage: "2.5 mg orally 3-4 times daily."
    },
    {
        name: "Bismuth Subsalicylate",
        moa: "Absorbs toxins and has antimicrobial properties.",
        indications: "Traveler’s diarrhea, indigestion.",
        contraindications: "Allergy to salicylates, children with viral infections.",
        sideEffects: "Black stools, constipation, darkened tongue.",
        diseases: "Diarrhea, indigestion.",
        seriousSideEffects: "Reye’s syndrome, salicylate toxicity.",
        dosage: "524 mg orally every 30 minutes to 1 hour as needed, up to 8 doses/day."
    },
    {
        name: "Kaolin/Pectin",
        moa: "Adsorbent that binds toxins and bacteria.",
        indications: "Diarrhea.",
        contraindications: "Severe dehydration, bowel obstruction.",
        sideEffects: "Constipation, nausea.",
        diseases: "Diarrhea.",
        seriousSideEffects: "Intestinal obstruction.",
        dosage: "1-2 tablespoons orally every 3-4 hours as needed."
    },
    {
        name: "Racecadotril",
        moa: "Enkephalinase inhibitor that reduces intestinal fluid secretion.",
        indications: "Acute diarrhea in adults and children.",
        contraindications: "Hypersensitivity to the drug.",
        sideEffects: "Nausea, headache, abdominal pain.",
        diseases: "Diarrhea.",
        seriousSideEffects: "Severe allergic reactions.",
        dosage: "100 mg orally three times daily."
    },
    {
        name: "Eluxadoline",
        moa: "Opioid receptor agonist that decreases gastrointestinal motility.",
        indications: "Irritable bowel syndrome with diarrhea.",
        contraindications: "Severe liver impairment, history of pancreatitis.",
        sideEffects: "Constipation, nausea, abdominal pain.",
        diseases: "Irritable bowel syndrome.",
        seriousSideEffects: "Pancreatitis, severe constipation.",
        dosage: "100 mg orally twice daily."
    },
    {
        name: "Cholestyramine",
        moa: "Bile acid sequestrant that binds bile acids in the gut.",
        indications: "Diarrhea due to bile acid malabsorption.",
        contraindications: "Complete biliary obstruction, hypersensitivity to the drug.",
        sideEffects: "Constipation, flatulence, nausea.",
        diseases: "Diarrhea due to bile acid malabsorption.",
        seriousSideEffects: "Intestinal obstruction.",
        dosage: "4 grams orally once or twice daily."
    },
    {
        name: "Lactase Supplements",
        moa: "Enzyme replacement that helps digest lactose.",
        indications: "Diarrhea related to lactose intolerance.",
        contraindications: "Hypersensitivity to lactase.",
        sideEffects: "Flatulence, bloating.",
        diseases: "Lactose intolerance.",
        seriousSideEffects: "Severe allergic reactions.",
        dosage: "1-2 tablets with each lactose-containing meal."
    },
    {
        name: "Octreotide",
        moa: "Somatostatin analog that decreases gastrointestinal fluid secretion.",
        indications: "Diarrhea associated with neuroendocrine tumors.",
        contraindications: "Hypersensitivity to the drug.",
        sideEffects: "Abdominal pain, nausea, headache.",
        diseases: "Neuroendocrine tumor-associated diarrhea.",
        seriousSideEffects: "Gallbladder abnormalities, hyperglycemia.",
        dosage: "50-100 mcg subcutaneously 2-3 times daily."
    },
    {
        name: "Opiate Derivatives",
        moa: "Opioid derivatives that reduce gut motility and increase transit time.",
        indications: "Diarrhea.",
        contraindications: "Diarrhea caused by bacteria, bowel obstruction.",
        sideEffects: "Constipation, drowsiness.",
        diseases: "Diarrhea.",
        seriousSideEffects: "Toxic megacolon.",
        dosage: "Varies by specific drug."
    },
    {
        name: "Probiotics",
        moa: "Microorganisms that restore the natural balance of gut flora.",
        indications: "Diarrhea related to antibiotic use, irritable bowel syndrome.",
        contraindications: "Severe immunocompromised state.",
        sideEffects: "Gas, bloating.",
        diseases: "Diarrhea.",
        seriousSideEffects: "Infection in immunocompromised patients.",
        dosage: "Varies by specific product."
    },
    {
        name: "Tannins",
        moa: "Compounds that bind to proteins and reduce gastrointestinal fluid loss.",
        indications: "Diarrhea.",
        contraindications: "Allergy to tannins.",
        sideEffects: "Constipation.",
        diseases: "Diarrhea.",
        seriousSideEffects: "None reported.",
        dosage: "Varies by specific product."
    }
],

"Ear Defect Drugs": [
    {
        name: "Ciprofloxacin Otic",
        moa: "Fluoroquinolone antibiotic that inhibits bacterial DNA gyrase.",
        indications: "Ear infections (e.g., otitis externa).",
        contraindications: "Hypersensitivity to ciprofloxacin or other quinolones.",
        sideEffects: "Ear discomfort, itching.",
        diseases: "Ear infections.",
        seriousSideEffects: "Severe allergic reactions.",
        dosage: "3-4 drops in the affected ear(s) twice daily."
    },
    {
        name: "Hydrocortisone Otic",
        moa: "Anti-inflammatory agent that reduces inflammation and itching.",
        indications: "Inflammatory ear conditions.",
        contraindications: "Ear infections with perforated tympanic membrane.",
        sideEffects: "Ear irritation, dryness.",
        diseases: "Ear inflammation.",
        seriousSideEffects: "Systemic absorption leading to adrenal suppression.",
        dosage: "3-4 drops in the affected ear(s) twice daily."
    }
],

"Eye Defect Drugs": [
    {
        name: "Latanoprost",
        moa: "Prostaglandin analog that increases aqueous humor outflow.",
        indications: "Glaucoma, ocular hypertension.",
        contraindications: "Hypersensitivity to latanoprost.",
        sideEffects: "Eye redness, eyelash growth.",
        diseases: "Glaucoma.",
        seriousSideEffects: "Pigmentation of iris, macular edema.",
        dosage: "1 drop in affected eye(s) once daily."
    },
    {
        name: "Timolol",
        moa: "Non-selective beta-blocker that decreases aqueous humor production.",
        indications: "Glaucoma, ocular hypertension.",
        contraindications: "Asthma, severe COPD.",
        sideEffects: "Eye irritation, dry eyes.",
        diseases: "Glaucoma.",
        seriousSideEffects: "Bradycardia, respiratory issues.",
        dosage: "1 drop in affected eye(s) twice daily."
    }
],
"Vaccines": [
    {
        name: "BCG (Bacillus Calmette–Guérin)",
        moa: "BCG is a live attenuated vaccine that stimulates an immune response against *Mycobacterium tuberculosis*. It helps develop immunity by introducing a weakened form of the bacteria that does not cause the disease but promotes the production of antibodies.",
        indications: "Prevention of tuberculosis (TB), particularly in countries with high prevalence. Also used in bladder cancer therapy.",
        contraindications: "Immunocompromised individuals (e.g., HIV positive), pregnancy, people with active TB infection, or a history of BCG vaccination.",
        sideEffects: "Mild fever, lymphadenopathy, injection site ulceration, and abscess formation.",
        diseases: "Tuberculosis (TB), bladder cancer (as adjuvant therapy).",
        seriousSideEffects: "Disseminated BCG infection, osteitis (bone inflammation), allergic reactions.",
        dosage: "0.05-0.1 mL intradermally, usually administered at birth."
    },
    {
        name: "Hepatitis B Vaccine",
        moa: "Contains purified recombinant Hepatitis B surface antigen (HBsAg) that triggers an immune response against the hepatitis B virus by generating protective antibodies.",
        indications: "Prevention of Hepatitis B infection.",
        contraindications: "Hypersensitivity to yeast or any component of the vaccine.",
        sideEffects: "Mild fever, injection site soreness, fatigue.",
        diseases: "Hepatitis B.",
        seriousSideEffects: "Anaphylaxis (rare).",
        dosage: "Usually administered as a series of 3 injections at 0, 1, and 6 months."
    },
    {
        name: "MMR (Measles, Mumps, and Rubella) Vaccine",
        moa: "Live attenuated viruses stimulate the immune system to develop immunity against measles, mumps, and rubella viruses.",
        indications: "Prevention of measles, mumps, and rubella.",
        contraindications: "Pregnancy, immunocompromised individuals, history of severe allergic reaction to a previous dose.",
        sideEffects: "Fever, mild rash, swollen glands, and joint pain.",
        diseases: "Measles, mumps, rubella.",
        seriousSideEffects: "Severe allergic reactions, febrile seizures (rare).",
        dosage: "0.5 mL subcutaneously, usually administered at 12-15 months, with a second dose at 4-6 years."
    },
    {
        name: "Diphtheria, Tetanus, and Pertussis (DTaP) Vaccine",
        moa: "Contains inactivated toxins (toxoids) from *Corynebacterium diphtheriae*, *Clostridium tetani*, and *Bordetella pertussis* to generate immunity by producing antibodies to the toxins.",
        indications: "Prevention of diphtheria, tetanus, and pertussis.",
        contraindications: "Severe allergic reaction to a previous DTaP vaccine or any of its components, progressive neurological disease.",
        sideEffects: "Fever, irritability, tiredness, swelling or pain at the injection site.",
        diseases: "Diphtheria, tetanus, pertussis (whooping cough).",
        seriousSideEffects: "Severe allergic reactions, seizures (rare).",
        dosage: "0.5 mL intramuscularly, administered in 5 doses at 2, 4, 6, 15-18 months, and 4-6 years."
    },
    {
        name: "Influenza (Flu) Vaccine",
        moa: "Inactivated or live attenuated influenza virus strains stimulate the immune system to produce protective antibodies against influenza virus infection.",
        indications: "Prevention of seasonal influenza.",
        contraindications: "Severe allergic reaction to egg protein or a previous flu vaccine, Guillain-Barré syndrome.",
        sideEffects: "Low-grade fever, muscle aches, fatigue, injection site redness.",
        diseases: "Influenza (flu).",
        seriousSideEffects: "Severe allergic reactions, Guillain-Barré syndrome (rare).",
        dosage: "0.5 mL intramuscularly, administered annually."
    },
    {
        name: "Polio Vaccine (IPV - Inactivated Polio Vaccine)",
        moa: "Inactivated poliovirus stimulates the immune system to produce antibodies that protect against poliovirus infection and paralysis.",
        indications: "Prevention of poliomyelitis (polio).",
        contraindications: "Hypersensitivity to any component of the vaccine.",
        sideEffects: "Soreness at the injection site, mild fever, fatigue.",
        diseases: "Poliomyelitis (polio).",
        seriousSideEffects: "Severe allergic reactions (rare).",
        dosage: "0.5 mL intramuscularly or subcutaneously, given in 4 doses at 2, 4, 6-18 months, and 4-6 years."
    },
    {
        name: "Varicella (Chickenpox) Vaccine",
        moa: "Live attenuated *Varicella-Zoster* virus stimulates the immune system to produce immunity against chickenpox infection.",
        indications: "Prevention of varicella (chickenpox).",
        contraindications: "Pregnancy, immunocompromised individuals, severe allergic reaction to gelatin or neomycin.",
        sideEffects: "Mild rash, fever, pain at injection site.",
        diseases: "Varicella (chickenpox).",
        seriousSideEffects: "Severe allergic reactions, seizures (rare).",
        dosage: "0.5 mL subcutaneously, given in 2 doses at 12-15 months and 4-6 years."
    },
    {
        name: "Human Papillomavirus (HPV) Vaccine",
        moa: "Contains virus-like particles that resemble the human papillomavirus, prompting the immune system to produce protective antibodies.",
        indications: "Prevention of HPV infections that can cause cervical, anal, oropharyngeal cancers, and genital warts.",
        contraindications: "Severe allergic reaction to a previous HPV vaccine dose or any of its components.",
        sideEffects: "Pain at injection site, mild fever, fatigue.",
        diseases: "HPV infection, cervical cancer, genital warts.",
        seriousSideEffects: "Severe allergic reactions (rare).",
        dosage: "0.5 mL intramuscularly, administered in 2 or 3 doses depending on age."
    },
    {
        name: "Pneumococcal Conjugate Vaccine (PCV13)",
        moa: "Contains purified capsular polysaccharides of *Streptococcus pneumoniae*, conjugated to a protein to enhance the immune response.",
        indications: "Prevention of pneumococcal diseases such as pneumonia, meningitis, and sepsis.",
        contraindications: "Severe allergic reaction to a previous dose of PCV or any component of the vaccine.",
        sideEffects: "Fever, irritability, swelling at the injection site.",
        diseases: "Pneumococcal diseases (e.g., pneumonia, meningitis).",
        seriousSideEffects: "Severe allergic reactions (rare).",
        dosage: "0.5 mL intramuscularly, given in 4 doses at 2, 4, 6, and 12-15 months."
    },
    {
        name: "Rotavirus Vaccine",
        moa: "Live attenuated rotavirus strains that replicate in the intestines, inducing immunity against rotavirus infection.",
        indications: "Prevention of rotavirus gastroenteritis.",
        contraindications: "Severe combined immunodeficiency (SCID), history of intussusception.",
        sideEffects: "Mild diarrhea, vomiting, irritability.",
        diseases: "Rotavirus gastroenteritis.",
        seriousSideEffects: "Intussusception (rare).",
        dosage: "Administered orally in 2 or 3 doses depending on the vaccine brand, at 2 and 4 months (or 6 months for 3-dose schedules)."
    }
],
"Antiviral": [
    {
        name: "Acyclovir",
        moa: "Inhibits viral DNA polymerase, preventing viral DNA replication.",
        indications: "Treatment of herpes simplex virus infections, including genital herpes, cold sores, and shingles.",
        contraindications: "Hypersensitivity to acyclovir or valacyclovir.",
        sideEffects: "Nausea, diarrhea, headache, and vertigo.",
        diseases: "Herpes simplex virus infections, varicella-zoster virus infections.",
        seriousSideEffects: "Renal toxicity, neurotoxicity (e.g., tremors, seizures).",
        dosage: "200-400 mg orally every 4-6 hours for 7-10 days, depending on the infection."
    },
    {
        name: "Valacyclovir",
        moa: "Prodrug of acyclovir; inhibits viral DNA polymerase, preventing viral DNA replication.",
        indications: "Treatment of herpes simplex virus infections, including genital herpes and cold sores, and shingles.",
        contraindications: "Hypersensitivity to valacyclovir or acyclovir.",
        sideEffects: "Nausea, headache, abdominal pain, and dizziness.",
        diseases: "Herpes simplex virus infections, varicella-zoster virus infections.",
        seriousSideEffects: "Renal toxicity, neurotoxicity.",
        dosage: "500-1000 mg orally every 8-12 hours, depending on the condition."
    },
    {
        name: "Oseltamivir",
        moa: "Inhibits the neuraminidase enzyme on the influenza virus surface, preventing the release of new viral particles.",
        indications: "Treatment and prevention of influenza A and B.",
        contraindications: "Hypersensitivity to oseltamivir or any component of the formulation.",
        sideEffects: "Nausea, vomiting, headache, and abdominal pain.",
        diseases: "Influenza.",
        seriousSideEffects: "Severe allergic reactions, neuropsychiatric effects (rare).",
        dosage: "75 mg orally twice daily for 5 days for treatment; 75 mg once daily for 10 days for prophylaxis."
    },
    {
        name: "Zanamivir",
        moa: "Inhibits neuraminidase enzyme, preventing the release of influenza virus from infected cells.",
        indications: "Treatment and prevention of influenza A and B.",
        contraindications: "Hypersensitivity to zanamivir, history of respiratory disease.",
        sideEffects: "Cough, bronchospasm, and nasal symptoms.",
        diseases: "Influenza.",
        seriousSideEffects: "Severe allergic reactions, respiratory complications.",
        dosage: "10 mg (2 inhalations) twice daily for 5 days for treatment; 10 mg once daily for 28 days for prophylaxis."
    },
    {
        name: "Ribavirin",
        moa: "Inhibits viral RNA synthesis and capping, preventing replication of RNA viruses.",
        indications: "Treatment of chronic hepatitis C, RSV infections in infants.",
        contraindications: "Pregnancy, severe renal impairment, hypersensitivity to ribavirin.",
        sideEffects: "Anemia, fatigue, headache, and cough.",
        diseases: "Hepatitis C, respiratory syncytial virus (RSV) infection.",
        seriousSideEffects: "Teratogenic effects, severe anemia.",
        dosage: "400-1200 mg orally daily, divided into 2-3 doses, depending on the infection."
    },
    {
        name: "Interferon Alpha",
        moa: "Enhances the immune response and inhibits viral replication by stimulating the production of antiviral proteins.",
        indications: "Chronic hepatitis B and C, certain types of cancer.",
        contraindications: "Autoimmune diseases, severe depression, hypersensitivity.",
        sideEffects: "Flu-like symptoms, fatigue, and mood changes.",
        diseases: "Hepatitis B, hepatitis C, certain cancers.",
        seriousSideEffects: "Severe psychiatric effects, autoimmune disorders.",
        dosage: "3-5 million units subcutaneously 3 times weekly for hepatitis C; dose varies for cancer treatment."
    },
    {
        name: "Lamivudine",
        moa: "Inhibits reverse transcriptase enzyme in HIV and HBV, preventing viral DNA synthesis.",
        indications: "Treatment of HIV infection and chronic hepatitis B.",
        contraindications: "Hypersensitivity to lamivudine.",
        sideEffects: "Nausea, diarrhea, headache, and fatigue.",
        diseases: "HIV, hepatitis B.",
        seriousSideEffects: "Lactic acidosis, hepatomegaly, and resistance development.",
        dosage: "150 mg orally twice daily for HIV; 100 mg once daily for hepatitis B."
    },
    {
        name: "Tenofovir",
        moa: "Inhibits reverse transcriptase enzyme in HIV and HBV, preventing viral DNA synthesis.",
        indications: "Treatment of HIV infection and chronic hepatitis B.",
        contraindications: "Hypersensitivity to tenofovir, severe renal impairment.",
        sideEffects: "Nausea, diarrhea, headache, and renal impairment.",
        diseases: "HIV, hepatitis B.",
        seriousSideEffects: "Renal toxicity, bone density loss.",
        dosage: "300 mg orally once daily for HIV and hepatitis B."
    },
    {
        name: "Adefovir",
        moa: "Inhibits reverse transcriptase enzyme in HBV, preventing viral DNA replication.",
        indications: "Treatment of chronic hepatitis B.",
        contraindications: "Hypersensitivity to adefovir, renal impairment.",
        sideEffects: "Nausea, headache, abdominal pain, and renal impairment.",
        diseases: "Hepatitis B.",
        seriousSideEffects: "Renal toxicity, lactic acidosis.",
        dosage: "10 mg orally once daily."
    },
    {
        name: "Entecavir",
        moa: "Inhibits reverse transcriptase enzyme in HBV, preventing viral DNA replication.",
        indications: "Treatment of chronic hepatitis B.",
        contraindications: "Hypersensitivity to entecavir, severe renal impairment.",
        sideEffects: "Headache, fatigue, dizziness, and nausea.",
        diseases: "Hepatitis B.",
        seriousSideEffects: "Lactic acidosis, hepatomegaly, resistance development.",
        dosage: "0.5 mg orally once daily."
    },
    {
        name: "Sofosbuvir",
        moa: "Inhibits the hepatitis C virus NS5B polymerase, preventing viral RNA replication.",
        indications: "Treatment of chronic hepatitis C.",
        contraindications: "Hypersensitivity to sofosbuvir, severe renal impairment.",
        sideEffects: "Fatigue, headache, nausea, and insomnia.",
        diseases: "Hepatitis C.",
        seriousSideEffects: "Bradycardia when used with certain other drugs, hepatitis B reactivation.",
        dosage: "400 mg orally once daily."
    },
    {
        name: "Ledipasvir",
        moa: "Inhibits the hepatitis C virus NS5A protein, which is necessary for viral replication.",
        indications: "Treatment of chronic hepatitis C, often in combination with sofosbuvir.",
        contraindications: "Hypersensitivity to ledipasvir, severe renal impairment.",
        sideEffects: "Fatigue, headache, nausea, and diarrhea.",
        diseases: "Hepatitis C.",
        seriousSideEffects: "Hepatitis B reactivation, potential for drug interactions.",
        dosage: "90 mg orally once daily, usually in combination with sofosbuvir."
    },
    {
        name: "Velpatasvir",
        moa: "Inhibits the hepatitis C virus NS5A protein, which is necessary for viral replication.",
        indications: "Treatment of chronic hepatitis C, often in combination with sofosbuvir.",
        contraindications: "Hypersensitivity to velpatasvir, severe renal impairment.",
        sideEffects: "Fatigue, headache, nausea, and diarrhea.",
        diseases: "Hepatitis C.",
        seriousSideEffects: "Hepatitis B reactivation, potential for drug interactions.",
        dosage: "100 mg orally once daily, usually in combination with sofosbuvir."
    },
    {
        name: "Ribavirin",
        moa: "Inhibits viral RNA synthesis and capping, preventing replication of RNA viruses.",
        indications: "Treatment of chronic hepatitis C and respiratory syncytial virus (RSV) infections in infants.",
        contraindications: "Pregnancy, severe renal impairment, hypersensitivity to ribavirin.",
        sideEffects: "Anemia, fatigue, headache, and cough.",
        diseases: "Hepatitis C, RSV infection.",
        seriousSideEffects: "Teratogenic effects, severe anemia.",
        dosage: "400-1200 mg orally daily, divided into 2-3 doses depending on the infection."
    },
    {
        name: "Cidofovir",
        moa: "Inhibits viral DNA polymerase, preventing viral DNA replication.",
        indications: "Treatment of cytomegalovirus (CMV) retinitis in HIV-infected patients.",
        contraindications: "Hypersensitivity to cidofovir, renal impairment.",
        sideEffects: "Nephrotoxicity, nausea, diarrhea, and fever.",
        diseases: "Cytomegalovirus retinitis.",
        seriousSideEffects: "Renal toxicity, bone marrow suppression.",
        dosage: "5 mg/kg intravenously once weekly for 2 weeks, then every 2 weeks."
    },
    {
            name: "Foscarnet",
        moa: "Inhibits viral DNA polymerase and reverse transcriptase, preventing viral DNA synthesis.",
        indications: "Treatment of cytomegalovirus (CMV) infections in HIV-infected patients, and acyclovir-resistant HSV infections.",
        contraindications: "Hypersensitivity to foscarnet, severe renal impairment, hypocalcemia.",
        sideEffects: "Renal toxicity, hypocalcemia, nausea, and headache.",
        diseases: "Cytomegalovirus retinitis, acyclovir-resistant HSV.",
        seriousSideEffects: "Renal toxicity, electrolyte imbalances, seizures.",
        dosage: "60 mg/kg intravenously every 8 hours for 2 weeks, then every 12 hours for maintenance."
    },
    {
        name: "Amantadine",
        moa: "Inhibits the replication of influenza A virus by interfering with the viral M2 protein, preventing uncoating.",
        indications: "Prophylaxis and treatment of influenza A; also used for Parkinson's disease.",
        contraindications: "Hypersensitivity to amantadine, history of seizures, renal impairment.",
        sideEffects: "Dizziness, nausea, insomnia, and dry mouth.",
        diseases: "Influenza A, Parkinson's disease.",
        seriousSideEffects: "Severe CNS effects, including hallucinations and confusion.",
        dosage: "100 mg orally twice daily for influenza; doses vary for Parkinson's disease."
    },
    {
        name: "Rimantadine",
        moa: "Inhibits the replication of influenza A virus by interfering with the viral M2 protein, preventing uncoating.",
        indications: "Prophylaxis and treatment of influenza A.",
        contraindications: "Hypersensitivity to rimantadine, renal impairment.",
        sideEffects: "Dizziness, nausea, dry mouth, and insomnia.",
        diseases: "Influenza A.",
        seriousSideEffects: "Severe CNS effects, including hallucinations and confusion.",
        dosage: "100 mg orally twice daily for treatment; 100 mg once daily for prophylaxis."
    }
],
"Antiparkinsonism": [
    {
        name: "Levodopa",
        moa: "Converted to dopamine in the brain, supplementing dopamine levels.",
        indications: "Parkinson's disease, parkinsonism.",
        contraindications: "Narrow-angle glaucoma, history of melanoma.",
        sideEffects: "Nausea, dizziness, orthostatic hypotension.",
        diseases: "Parkinson's disease.",
        seriousSideEffects: "Dyskinesia, hallucinations.",
        dosage: "300-800 mg orally daily, in divided doses."
    },
    {
        name: "Carbidopa",
        moa: "Inhibits peripheral decarboxylation of levodopa, increasing its availability to the brain.",
        indications: "Parkinson's disease (often used in combination with levodopa).",
        contraindications: "Narrow-angle glaucoma, severe liver disease.",
        sideEffects: "Nausea, headache, dry mouth.",
        diseases: "Parkinson's disease.",
        seriousSideEffects: "Hallucinations, severe dyskinesia.",
        dosage: "25-200 mg orally daily, usually in combination with levodopa."
    },
    {
        name: "Tolcapone",
        moa: "Inhibits catechol-O-methyltransferase (COMT), increasing levodopa availability.",
        indications: "Parkinson's disease (in combination with levodopa/carbidopa).",
        contraindications: "Liver disease, history of liver dysfunction.",
        sideEffects: "Diarrhea, liver enzyme elevation, dyskinesia.",
        diseases: "Parkinson's disease.",
        seriousSideEffects: "Hepatotoxicity, severe dyskinesia.",
        dosage: "100 mg orally three times daily."
    },
    {
        name: "Entacapone",
        moa: "Inhibits COMT, increasing the effectiveness of levodopa.",
        indications: "Parkinson's disease (in combination with levodopa/carbidopa).",
        contraindications: "Hepatic impairment, concurrent use of MAO inhibitors.",
        sideEffects: "Diarrhea, dyskinesia, nausea.",
        diseases: "Parkinson's disease.",
        seriousSideEffects: "Hepatotoxicity, severe dyskinesia.",
        dosage: "200 mg orally with each dose of levodopa/carbidopa, up to 8 times daily."
    },
    {
        name: "Selegiline",
        moa: "Selective monoamine oxidase-B inhibitor that increases dopamine levels.",
        indications: "Parkinson's disease (early stages or adjunct to levodopa).",
        contraindications: "Concurrent use of MAO inhibitors, severe hepatic impairment.",
        sideEffects: "Nausea, dizziness, insomnia.",
        diseases: "Parkinson's disease.",
        seriousSideEffects: "Hypertensive crisis, serotonin syndrome.",
        dosage: "5-10 mg orally daily, usually in divided doses."
    },
    {
        name: "Pramipexole",
        moa: "Dopamine agonist that stimulates dopamine receptors in the brain.",
        indications: "Parkinson's disease, restless legs syndrome.",
                contraindications: "Severe renal impairment, hypersensitivity to the drug.",
        sideEffects: "Nausea, dizziness, drowsiness.",
        diseases: "Parkinson's disease, restless legs syndrome.",
        seriousSideEffects: "Hallucinations, sudden sleep onset.",
        dosage: "0.375-4.5 mg orally daily, in divided doses."
    },
    {
        name: "Ropinirole",
        moa: "Dopamine agonist that stimulates dopamine receptors in the brain.",
        indications: "Parkinson's disease, restless legs syndrome.",
        contraindications: "Severe renal impairment, hypersensitivity to the drug.",
        sideEffects: "Nausea, dizziness, drowsiness.",
        diseases: "Parkinson's disease, restless legs syndrome.",
        seriousSideEffects: "Hallucinations, sudden sleep onset.",
        dosage: "0.5-8 mg orally daily, in divided doses."
    },
    {
        name: "Benztropine",
        moa: "Anticholinergic agent that helps balance dopamine and acetylcholine in the brain.",
        indications: "Parkinson's disease, drug-induced extrapyramidal symptoms.",
        contraindications: "Glaucoma, urinary obstruction.",
        sideEffects: "Dry mouth, constipation, blurred vision.",
        diseases: "Parkinson's disease, drug-induced movement disorders.",
        seriousSideEffects: "Confusion, hallucinations.",
        dosage: "1-6 mg orally daily, in divided doses."
    },
    {
        name: "Trihexyphenidyl",
        moa: "Anticholinergic that reduces acetylcholine activity in the brain.",
        indications: "Parkinson's disease, drug-induced extrapyramidal symptoms.",
        contraindications: "Glaucoma, myasthenia gravis.",
        sideEffects: "Dry mouth, constipation, blurred vision.",
        diseases: "Parkinson's disease, drug-induced movement disorders.",
        seriousSideEffects: "Confusion, hallucinations.",
        dosage: "1-6 mg orally daily, in divided doses."
    },
    {
        name: "Amantadine",
        moa: "Antiviral and dopaminergic agent that increases dopamine release and inhibits reuptake.",
        indications: "Parkinson's disease, drug-induced extrapyramidal symptoms.",
        contraindications: "Severe renal impairment, hypersensitivity to the drug.",
        sideEffects: "Dizziness, dry mouth, insomnia.",
        diseases: "Parkinson's disease, drug-induced movement disorders.",
        seriousSideEffects: "Hallucinations, severe CNS effects.",
        dosage: "100-400 mg orally daily, in divided doses."
    }
],

"Antischizophrenic": [
    {
        name: "Haloperidol",
        moa: "Dopamine D2 receptor antagonist, reducing dopaminergic activity.",
        indications: "Schizophrenia, acute psychosis, Tourette syndrome.",
        contraindications: "Parkinson's disease, severe CNS depression.",
        sideEffects: "Extrapyramidal symptoms, sedation.",
        diseases: "Schizophrenia, acute psychosis.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "0.5-20 mg orally daily, in divided doses."
    },
    {
        name: "Chlorpromazine",
        moa: "Dopamine D2 receptor antagonist, reducing dopaminergic activity.",
        indications: "Schizophrenia, bipolar disorder, severe nausea.",
        contraindications: "Severe hepatic impairment, bone marrow depression.",
        sideEffects: "Sedation, weight gain, dry mouth.",
        diseases: "Schizophrenia, bipolar disorder.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "25-800 mg orally daily, in divided doses."
    },
    {
        name: "Fluphenazine",
        moa: "Dopamine D2 receptor antagonist, reducing dopaminergic activity.",
        indications: "Schizophrenia, chronic psychosis.",
        contraindications: "Severe liver disease, CNS depression.",
        sideEffects: "Extrapyramidal symptoms, drowsiness.",
        diseases: "Schizophrenia.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "1-10 mg orally daily, in divided doses."
    },
    {
        name: "Loxapine",
        moa: "Dopamine D2 receptor antagonist, reducing dopaminergic activity.",
        indications: "Schizophrenia, bipolar disorder.",
        contraindications: "Severe respiratory disease, CNS depression.",
        sideEffects: "Sedation, dizziness, dry mouth.",
        diseases: "Schizophrenia, bipolar disorder.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "10-100 mg orally daily, in divided doses."
    },
    {
        name: "Perphenazine",
        moa: "Dopamine D2 receptor antagonist, reducing dopaminergic activity.",
        indications: "Schizophrenia, severe nausea.",
        contraindications: "Severe hepatic impairment, bone marrow depression.",
        sideEffects: "Extrapyramidal symptoms, drowsiness.",
        diseases: "Schizophrenia.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "8-32 mg orally daily, in divided doses."
    },
    {
        name: "Thioridazine",
        moa: "Dopamine D2 receptor antagonist, reducing dopaminergic activity.",
        indications: "Schizophrenia, psychotic disorders.",
        contraindications: "Severe hepatic impairment, history of arrhythmias.",
        sideEffects: "Sedation, weight gain, dry mouth.",
        diseases: "Schizophrenia.",
        seriousSideEffects: "Neuroleptic malignant syndrome, cardiac arrhythmias.",
        dosage: "50-800 mg orally daily, in divided doses."
    },
    {
        name: "Trifluoperazine",
        moa: "Dopamine D2 receptor antagonist, reducing dopaminergic activity.",
        indications: "Schizophrenia, severe anxiety.",
        contraindications: "Severe hepatic impairment, CNS depression.",
        sideEffects: "Extrapyramidal symptoms, sedation.",
        diseases: "Schizophrenia.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "1-30 mg orally daily, in divided doses."
    },
    {
        name: "Pimozide",
        moa: "Dopamine D2 receptor antagonist, reducing dopaminergic activity.",
        indications: "Tourette syndrome, schizophrenia.",
        contraindications: "Severe hepatic impairment, history of QT prolongation.",
        sideEffects: "Sedation, dry mouth, weight gain.",
        diseases: "Tourette syndrome, schizophrenia.",
        seriousSideEffects: "Neuroleptic malignant syndrome, QT prolongation.",
        dosage: "1-10 mg orally daily, in divided doses."
    },
    {
        name: "Mesoridazine",
        moa: "Dopamine D2 receptor antagonist, reducing dopaminergic activity.",
        indications: "Schizophrenia.",
        contraindications: "Severe hepatic impairment, history of arrhythmias.",
        sideEffects: "Sedation, dry mouth, hypotension.",
        diseases: "Schizophrenia.",
        seriousSideEffects: "Neuroleptic malignant syndrome, cardiac arrhythmias.",
        dosage: "50-400 mg orally daily, in divided doses."
    },
    {
        name: "Olanzapine",
        moa: "Atypical antipsychotic that blocks serotonin and dopamine receptors.",
        indications: "Schizophrenia, bipolar disorder.",
        contraindications: "Severe hepatic impairment, hypersensitivity to the drug.",
        sideEffects: "Weight gain, sedation, dry mouth.",
        diseases: "Schizophrenia, bipolar disorder.",
        seriousSideEffects: "Neuroleptic malignant syndrome, metabolic syndrome.",
        dosage: "5-20 mg orally daily."
    },
    {
        name: "Risperidone",
        moa: "Atypical antipsychotic that blocks serotonin and dopamine receptors.",
        indications: "Schizophrenia, bipolar disorder, irritability in autism.",
        contraindications: "Severe renal impairment, hypersensitivity to the drug.",
        sideEffects: "Weight gain, drowsiness, increased appetite.",
        diseases: "Schizophrenia, bipolar disorder.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "1-6 mg orally daily."
    },
    {
        name: "Quetiapine",
        moa: "Atypical antipsychotic that affects serotonin and dopamine receptors.",
        indications: "Schizophrenia, bipolar disorder, major depressive disorder.",
        contraindications: "Severe hepatic impairment, hypersensitivity to the drug.",
        sideEffects: "Sedation, weight gain, dizziness.",
        diseases: "Schizophrenia, bipolar disorder.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "25-800 mg orally daily, in divided doses."
    },
    {
        name: "Aripiprazole",
        moa: "Atypical antipsychotic that modulates dopamine and serotonin activity.",
        indications: "Schizophrenia, bipolar disorder, major depressive disorder.",
        contraindications: "Severe hepatic impairment, hypersensitivity to the drug.",
        sideEffects: "Insomnia, anxiety, weight gain.",
        diseases: "Schizophrenia, bipolar disorder.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "10-30 mg orally daily."
    },
    {
        name: "Clozapine",
        moa: "Atypical antipsychotic with effects on serotonin and dopamine receptors.",
        indications: "Treatment-resistant schizophrenia.",
        contraindications: "Severe bone marrow suppression, hypersensitivity to the drug.",
        sideEffects: "Weight gain, sedation, hypersalivation.",
        diseases: "Schizophrenia.",
        seriousSideEffects: "Agranulocytosis, seizures.",
        dosage: "300-900 mg orally daily."
    },
    {
        name: "Ziprasidone",
        moa: "Atypical antipsychotic that affects serotonin and dopamine receptors.",
        indications: "Schizophrenia, bipolar disorder.",
        contraindications: "Prolonged QT interval, hypersensitivity to the drug.",
        sideEffects: "Sedation, nausea, weight gain.",
        diseases: "Schizophrenia, bipolar disorder.",
        seriousSideEffects: "QT prolongation, neuroleptic malignant syndrome.",
        dosage: "20-80 mg orally twice daily."
    },
    {
        name: "Lurasidone",
        moa: "Atypical antipsychotic with serotonin and dopamine receptor antagonism.",
        indications: "Schizophrenia, bipolar depression.",
        contraindications: "Severe hepatic impairment, hypersensitivity to the drug.",
        sideEffects: "Sedation, nausea, weight gain.",
        diseases: "Schizophrenia, bipolar depression.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "40-160 mg orally daily."
    },
    {
        name: "Asenapine",
        moa: "Atypical antipsychotic with serotonin and dopamine receptor antagonism.",
        indications: "Schizophrenia, bipolar disorder.",
        contraindications: "Severe hepatic impairment, hypersensitivity to the drug.",
        sideEffects: "Sedation, weight gain, oral numbness.",
        diseases: "Schizophrenia, bipolar disorder.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "5-10 mg orally twice daily."
    },
    {
        name: "Paliperidone",
        moa: "Atypical antipsychotic that blocks dopamine and serotonin receptors.",
        indications: "Schizophrenia, schizoaffective disorder.",
        contraindications: "Severe renal impairment, hypersensitivity to the drug.",
        sideEffects: "Weight gain, drowsiness, akathisia.",
        diseases: "Schizophrenia, schizoaffective disorder.",
        seriousSideEffects: "Neuroleptic malignant syndrome, tardive dyskinesia.",
        dosage: "6-12 mg orally daily."
    }
],
"Local Hormones And the drugs affecting": [
    {
        name: "Thyroxine",
        moa: "Synthetic thyroid hormone that increases metabolic rate.",
        indications: "Hypothyroidism.",
        contraindications: "Thyrotoxicosis.",
        sideEffects: "Weight loss, increased appetite, sweating.",
        diseases: "Hypothyroidism.",
        seriousSideEffects: "Osteoporosis, atrial fibrillation.",
        dosage: "25-200mcg orally daily."
    },
    {
        name: "Insulin",
        moa: "Hormone that lowers blood glucose by facilitating cellular glucose uptake.",
        indications: "Diabetes mellitus.",
        contraindications: "Hypoglycemia.",
        sideEffects: "Hypoglycemia, weight gain.",
        diseases: "Diabetes.",
        seriousSideEffects: "Severe hypoglycemia.",
        dosage: "Individualized dosing based on blood glucose levels."
    },
    {
        name: "Promethazine",
        moa: "H1 receptor antagonist with sedative and antiemetic effects.",
        indications: "Allergic conditions, motion sickness, nausea, vomiting.",
        contraindications: "Severe respiratory depression, children under 2 years.",
        sideEffects: "Drowsiness, dry mouth, blurred vision.",
        diseases: "Allergic rhinitis, motion sickness.",
        seriousSideEffects: "Respiratory depression, neuroleptic malignant syndrome.",
        dosage: "25 mg orally or rectally every 4-6 hours."
      },
      {
        name: "Diphenhydramine",
        moa: "First-generation H1 receptor antagonist with sedative and anticholinergic properties.",
        indications: "Allergic reactions, insomnia, motion sickness.",
        contraindications: "Asthma, neonates, breastfeeding.",
        sideEffects: "Drowsiness, dry mouth, dizziness.",
        diseases: "Allergic rhinitis, insomnia.",
        seriousSideEffects: "Severe drowsiness, confusion in elderly, urinary retention.",
        dosage: "25-50 mg orally every 6-8 hours."
      },
      {
        name: "Dimenhydrinate",
        moa: "H1 receptor antagonist that reduces nausea and vomiting caused by motion sickness.",
        indications: "Motion sickness, nausea, vomiting.",
        contraindications: "Glaucoma, asthma, bladder obstruction.",
        sideEffects: "Drowsiness, dry mouth, blurred vision.",
        diseases: "Motion sickness, vertigo.",
        seriousSideEffects: "Severe drowsiness, confusion.",
        dosage: "50-100 mg orally every 4-6 hours."
      },
      {
        name: "Promethazine Theoclate",
        moa: "H1 receptor antagonist with antiemetic, antihistamine, and sedative properties.",
        indications: "Motion sickness, nausea, vomiting.",
        contraindications: "Children under 2 years, severe respiratory depression.",
        sideEffects: "Drowsiness, dry mouth, dizziness.",
        diseases: "Motion sickness, nausea.",
        seriousSideEffects: "Respiratory depression, confusion.",
        dosage: "25-50 mg orally as needed."
      },
      {
        name: "Doxylamine",
        moa: "First-generation H1 receptor antagonist with sedative effects.",
        indications: "Insomnia, allergic conditions, nausea.",
        contraindications: "Asthma, glaucoma, prostate hypertrophy.",
        sideEffects: "Drowsiness, dry mouth, dizziness.",
        diseases: "Insomnia, allergies.",
        seriousSideEffects: "Severe drowsiness, confusion.",
        dosage: "25 mg orally at bedtime."
      },
      {
        name: "Cyclizine",
        moa: "Piperazine derivative and H1 receptor antagonist used to treat nausea and motion sickness.",
        indications: "Motion sickness, nausea, vertigo.",
        contraindications: "Glaucoma, bladder obstruction.",
        sideEffects: "Drowsiness, dry mouth, blurred vision.",
        diseases: "Motion sickness, nausea.",
        seriousSideEffects: "Confusion, urinary retention.",
        dosage: "50 mg orally every 4-6 hours."
      },
      {
        name: "Meclizine",
        moa: "Piperazine derivative and H1 receptor antagonist with antiemetic and antivertigo effects.",
        indications: "Vertigo, motion sickness.",
        contraindications: "Glaucoma, urinary retention.",
        sideEffects: "Drowsiness, dry mouth, fatigue.",
        diseases: "Motion sickness, vertigo.",
        seriousSideEffects: "Confusion, hypotension.",
        dosage: "25-50 mg orally once daily."
      },
      {
        name: "Cinnarizine",
        moa: "Piperazine derivative and H1 receptor antagonist with anti-vertigo and anti-nausea properties.",
        indications: "Motion sickness, vertigo, nausea.",
        contraindications: "Parkinson's disease, porphyria.",
        sideEffects: "Drowsiness, dry mouth, weight gain.",
        diseases: "Motion sickness, vertigo.",
        seriousSideEffects: "Extrapyramidal symptoms, tremors.",
        dosage: "25 mg orally every 6-8 hours."
      },
      {
        name: "Cimetidine",
        moa: "H2 receptor antagonist that inhibits stomach acid production.",
        indications: "Gastric ulcers, GERD, Zollinger-Ellison syndrome.",
        contraindications: "Hypersensitivity, severe liver disease.",
        sideEffects: "Headache, dizziness, gynecomastia.",
        diseases: "Gastric ulcers, GERD.",
        seriousSideEffects: "Hepatotoxicity, agranulocytosis.",
        dosage: "300 mg orally four times daily."
      },
      {
        name: "Pitolisant",
        moa: "Histamine H3 receptor antagonist/inverse agonist that increases histamine release in the brain.",
        indications: "Narcolepsy with or without cataplexy.",
        contraindications: "Severe hepatic impairment.",
        sideEffects: "Insomnia, headache, anxiety.",
        diseases: "Narcolepsy.",
        seriousSideEffects: "QT prolongation, seizure risk.",
        dosage: "18-36 mg orally once daily."
      },
      {
        name: "Thioperamide",
        moa: "Histamine H3 receptor antagonist that blocks presynaptic H3 receptors to increase neurotransmitter release.",
        indications: "Research drug, not used clinically.",
        contraindications: "N/A.",
        sideEffects: "N/A.",
        diseases: "N/A.",
        seriousSideEffects: "N/A.",
        dosage: "N/A."
      },
      {
        name: "Montelukast",
        moa: "Leukotriene receptor antagonist that prevents airway inflammation and bronchoconstriction.",
        indications: "Asthma, allergic rhinitis.",
        contraindications: "Hypersensitivity.",
        sideEffects: "Headache, abdominal pain, dizziness.",
        diseases: "Asthma, allergic rhinitis.",
        seriousSideEffects: "Neuropsychiatric effects, eosinophilic granulomatosis.",
        dosage: "10 mg orally once daily."
      },
      {
        name: "Zafirlukast",
        moa: "Leukotriene receptor antagonist that inhibits the effects of leukotrienes, reducing inflammation in the lungs.",
        indications: "Chronic asthma.",
        contraindications: "Hepatic impairment, hypersensitivity.",
        sideEffects: "Headache, nausea, abdominal pain.",
        diseases: "Asthma.",
        seriousSideEffects: "Liver toxicity, neuropsychiatric effects.",
        dosage: "20 mg orally twice daily."
      },
      {
        name: "Pranlukast",
        moa: "Leukotriene receptor antagonist that reduces airway inflammation.",
        indications: "Chronic asthma, allergic rhinitis.",
        contraindications: "Severe hepatic impairment.",
        sideEffects: "Headache, sore throat, gastrointestinal discomfort.",
        diseases: "Asthma, allergic rhinitis.",
        seriousSideEffects: "Liver toxicity, neuropsychiatric effects.",
        dosage: "112.5 mg orally twice daily."
      },
      {
        name: "Vasopressin",
        moa: "Antidiuretic hormone that increases water reabsorption in the kidneys and causes vasoconstriction.",
        indications: "Diabetes insipidus, vasodilatory shock.",
        contraindications: "Chronic nephritis, hypersensitivity.",
        sideEffects: "Headache, abdominal cramps, water intoxication.",
        diseases: "Diabetes insipidus, shock.",
        seriousSideEffects: "Hyponatremia, seizures, cardiac ischemia.",
        dosage: "5-10 units intramuscularly or intravenously every 4-6 hours."
      },
      {
        name: "Vasopressin Antagonists",
        moa: "Block vasopressin receptors, reducing water retention in the kidneys.",
        indications: "Hyponatremia, heart failure.",
        contraindications: "Hypovolemia, anuria.",
        sideEffects: "Polyuria, dehydration, hypernatremia.",
        diseases: "Hyponatremia, heart failure.",
        seriousSideEffects: "Hypotension, renal failure.",
        dosage: "Conivaptan: 20 mg intravenously over 30 minutes, then 20 mg over 24 hours."
      }
],
    };
    function displayDrugInfo(group) {
        const drugInfoArray = drugData[group];
    
        if (drugInfoArray) {
            // Clear previous drug info
            document.getElementById('drug-info-container').innerHTML = '<h3>Drug Information</h3>';
    
            // Display each drug's information
            drugInfoArray.forEach(drug => {
                document.getElementById('drug-info-container').innerHTML += `
                    <div>
                    <h4 style="font-family:Gabriola; font-size: 28px; color: blue; text-shadow: black;"> ${drug.name}</h4>
                    <p><strong>MOA:</strong> ${drug.moa}</p>
                    <p><strong>Indications:</strong> ${drug.indications}</p>
                    <p><strong>Contraindications:</strong> ${drug.contraindications}</p>
                    <p><strong>Side Effects:</strong> ${drug.sideEffects}</p>
                    <p><strong>Diseases:</strong> ${drug.diseases}</p>
                    <p><strong>Serious Side Effects:</strong> ${drug.seriousSideEffects}</p>
                    <p><strong>Dosage:</strong> ${drug.dosage}</p>
            </div>
     
            `;
        });
        document.getElementById('drug-info-container').style.display = 'block'; // Show the drug info fr the selected group
    }
}

// Add click event listeners to drug group links
document.querySelectorAll('#drug-groups ul li a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link action
        const group = this.getAttribute('data-group'); // Get the group name
        displayDrugInfo(group); // Show the drug info for the selected group
    });
});
