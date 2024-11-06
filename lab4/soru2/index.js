const fs = require('fs');

const polinom = require('./fonksiyon');

const filePath = 'quiz 6.txt';


fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Dosya okuma hatası:', err);
        return;
    }

  
    const lines = data.trim().split('\n');

    lines.forEach((line) => {
       
        const values = line.split(',').map(Number);

        polinom.yerinekoy(values[0], values[1], values[2], values[3]);

        const A = polinom.hesapla();

        console.log(`Polinomun değeri A(${polinom.x}) = ${A}`);
    });
});
