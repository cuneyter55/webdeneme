const fs = require('fs');

function asalSayi(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function asalSayiAraligi(min, max) {
    const primes = [];
    for (let i = min; i <= max; i++) {
        if (asalSayi(i)) {
            primes.push(i);
        }
    }
    return primes;
}

function asalSayiKaydet(primes) {
    fs.writeFile('asal_sayi.txt', primes.join('\n'), (err) => {
        if (err) {
            console.error('Dosyaya yazma hatası:', err);
        } else {
            console.log('Asal sayılar asal.txt dosyasına kaydedildi.');
        }
    });
}


const primes = asalSayiAraligi(1, 90);
asalSayiKaydet(primes);
