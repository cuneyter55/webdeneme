'use strict'

const fs = require('fs');

fs.writeFile('dosya.txt','Merhaba Node.js', function (err,data) {
   if (err)throw err;
   console.log('Dosya başarıyla oluşturuldu.');
   
    
   
    
});