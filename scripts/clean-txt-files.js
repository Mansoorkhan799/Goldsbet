const fs = require('fs');
const path = require('path');

// Function to recursively find and delete .txt files
function deleteTxtFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively search subdirectories
      deleteTxtFiles(filePath);
    } else if (file.endsWith('.txt') && file !== 'robots.txt') {
      // Delete .txt files but keep robots.txt
      console.log(`Deleting: ${filePath}`);
      fs.unlinkSync(filePath);
    }
  });
}

// Clean the out directory
const outDir = path.join(__dirname, '..', 'out');
if (fs.existsSync(outDir)) {
  console.log('Cleaning .txt files from out directory...');
  deleteTxtFiles(outDir);
  console.log('Cleanup complete!');
} else {
  console.log('Out directory not found, skipping cleanup.');
}
