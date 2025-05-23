// scripts/copy-lottie-files.js
const fs = require('node:fs');
const path = require('node:path');

// Source directory with .lottie files
const sourceDir = path.resolve(__dirname, './src/lottie');
// Destination directory
const destDir = path.resolve(__dirname, './assets');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Find all .lottie files in source directory
const lottieFiles = fs.readdirSync(sourceDir)
  .filter(file => file.endsWith('.lottie'));

// Copy each file to the destination
for (const file of lottieFiles) {
  const sourcePath = path.join(sourceDir, file);
  const destPath = path.join(destDir, file);
  
  fs.copyFileSync(sourcePath, destPath);
  console.log(`Copied: ${file}`);
}

console.log(`Copied ${lottieFiles.length} .lottie files to assets/`);
