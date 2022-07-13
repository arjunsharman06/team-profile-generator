const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
    
        if (err) {
          reject(err);
          return;
        }
        
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

 // copying file
const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./src/stylesheet.css', './dist/stylesheet.css', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Stylesheet created!'
        });
      });
    });
  };

  module.exports = { writeFile, copyFile };