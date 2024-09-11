const path = require('path');

module.exports = {
  entry: './src/index.js',  // Ensure this path points to your actual entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') // Corrected _dirname to __dirname
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src') // Corrected _dirname to __dirname
    }
  }
};