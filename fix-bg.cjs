const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src/components');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Remove multi-line div with absolute inset-0 z-0
  content = content.replace(/<div\s+className="absolute inset-0 z-0"\s+style=\{\{[\s\S]*?\}\}\s*\/>/g, '');
  
  // Remove single line div with absolute inset-0 z-0
  content = content.replace(/<div className="absolute inset-0 z-0"[^>]+style=\{\{.*?\}\}\s*\/>/g, '');

  // Remove overlay divs
  content = content.replace(/<div className="absolute inset-0 bg-black[^"]+" \/>/g, '');
  content = content.replace(/<div className="absolute inset-0 bg-gradient-[^"]+" \/>/g, '');

  // Also remove the {/* Background Image */} and {/* Overlay */} comments
  content = content.replace(/\{\/\*\s*Background Image\s*\*\/\}/g, '');
  content = content.replace(/\{\/\*\s*Overlay[^\*]*\*\/\}/g, '');
  
  fs.writeFileSync(filePath, content, 'utf-8');
}

fs.readdirSync(componentsDir).forEach(file => {
  if (file.endsWith('.tsx')) {
    processFile(path.join(componentsDir, file));
  }
});

// Also fix Footer.tsx specially for the tejasraghavvv issue and the fixed background
let footerPath = path.join(componentsDir, 'Footer.tsx');
let footerContent = fs.readFileSync(footerPath, 'utf-8');
// Fix insta handle
footerContent = footerContent.replace(/tejasraghavvv/g, 'traghavvv');
// Remove fixed background div
footerContent = footerContent.replace(/<div\s+className="fixed inset-0 z-0"[\s\S]*?\/>/g, '');
footerContent = footerContent.replace(/\{\/\*\s*Fixed Background[^\*]*\*\/\}/g, '');
fs.writeFileSync(footerPath, footerContent, 'utf-8');

console.log("Backgrounds and Footer fixed.");
