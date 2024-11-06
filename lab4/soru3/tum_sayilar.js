

const fs = require('fs'); 


function asal_sayilari_oku() {
    return new Promise((resolve, reject) => {
        fs.readFile('asal_sayi.txt', 'utf8', (err, data) => {
            if (err) {
                reject(err); 
            } else {
                const primes = data.split('\n').map(Number); 
                resolve(primes); 
            }
        });
    });
}


function eksik_sayilari_doldur(primes) {
    const tumSayilar = Array.from({ length: 90 }, (_, i) => i + 1); 
    const eksikSayilar = tumSayilar.filter(num => !primes.includes(num)); 
    return [...primes, ...eksikSayilar].sort((a, b) => a - b); 
}


async function tumSayilariYaz() {
    try {
        const primes = await asal_sayilari_oku(); 
        const allNumbers = eksik_sayilari_doldur(primes); 
        fs.writeFile('tum_sayilar.txt', allNumbers.join('\n'), (err) => { 
            if (err) {
                console.error('Dosyaya yazma hatası:', err); 
            } else {
                console.log('Tüm sayılar tum_sayilar.txt dosyasına kaydedildi.'); 
            }
        });
    } catch (err) {
        console.error('Hata:', err); 
}}
tumSayilariYaz(); 
