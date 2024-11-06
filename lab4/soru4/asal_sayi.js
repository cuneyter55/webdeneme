const fs = require('fs');

// Asal sayıyı kontrol eden fonksiyon
function asalSayi(num) {
    if (num < 2) return false; // 2'den küçük sayılar asal değildir
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Eğer num herhangi bir sayıya tam bölünüyorsa asal değildir
    }
    return true; // Asal sayıdır
}

// Asal sayıları bulup dosyaya kaydeden fonksiyon
function asalSayilariKaydet() {
    const asalSayilar = []; // Asal sayıları tutacak dizi
    for (let i = 1; i <= 100; i++) {
        if (asalSayi(i)) {
            asalSayilar.push(i); // Eğer asal sayı ise diziyi ekle
        }
    }

    // Asal sayıları dosyaya yaz
    fs.writeFile('asal.txt', asalSayilar.join('\n'), (err) => {
        if (err) {
            console.error('Dosyaya yazma hatası:', err);
        } else {
            console.log('Asal sayılar asal.txt dosyasına kaydedildi.');
        }
    });
}

// Fonksiyonu çağır
asalSayilariKaydet();
