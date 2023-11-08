// BANKA UYGULAMASI -------------------------------------------------

// let bakiye = 0;

// function bakiyeSorgula() {
//   alert(`Bakiyeniz: ${bakiye} TL`);
// }

// function paraCek() {
//   let miktar = Number(prompt("Çekmek istediğiniz miktarı girin:"));
//   if(miktar <= bakiye) {
//     bakiye -= miktar;
//     alert(`Yeni bakiyeniz: ${bakiye} TL`);
//   } else {
//     alert("Yetersiz bakiye.");
//   }
// }

// function paraYatir() {
//   let miktar = Number(prompt("Yatırmak istediğiniz miktarı girin:"));
//   bakiye += miktar;
//   alert(`Yeni bakiyeniz: ${bakiye} TL`);
// }

// function baslat() {
//   let islem;
//   do {
//     islem = Number(prompt("Bir işlem seçin:\n1: Bakiye Sorgula\n2: Para Çek\n3: Para Yatır\n4: Çıkış"));
//     switch(islem) {
//       case 1:
//         bakiyeSorgula();
//         break;
//       case 2:
//         paraCek();
//         break;
//       case 3:
//         paraYatir();
//         break;
//       case 4:
//         alert("Çıkış yapılıyor...");
//         break;
//       default:
//         alert("Geçersiz işlem.");
//     }
//   } while(islem !== 4);
// }

// baslat();

// BANKA UYGULAMASI BİTİŞ----------------------------------



// HEX KOD OLUŞTURMA ---------------------------------------
// let karakterler = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// function hexKod() {

//   let renk = [];

//   for (let i = 0; i < 6; i++) {

//     let rastgeleKarakter = karakterler[Math.floor(Math.random() * karakterler.length)];

//     renk.push(rastgeleKarakter);
//   }
  
//   return '#' + renk.join('');
// }

// console.log(hexKod());

// HEX KOD OLUŞTURMA BİTİŞ -------------------------------------------------

let karakterler = ["a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t", "u", "ü", "v", "y", "z", "q", "w", "x", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "I", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "Q", "W", "X", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "!", "'", "^", "+", "%", "&", "/", "(", ")", "=", "?", "-", "_", "*", ",", ";", "`", "{", "}", "[", "]", "@", "|", "<", ">", ".", ":", "é", "$", "#", "£", "€", "₺"];

// RANDOM ŞİFRE OLUŞTURMA BAŞLANGIÇ --------------------------------------------
let sifreUzunlugu = Number(prompt("Oluşturulacak şifrenin uzunluğunu giriniz:"));
let sifre = [];
for (let i = 0; i < sifreUzunlugu; i++) {
  let rastgeleIndex = Math.floor(Math.random() * karakterler.length);
  sifre.push(karakterler[rastgeleIndex]);
  karakterler.splice(rastgeleIndex, 1);
}
sifre = sifre.join('');
alert(`Oluşturulan şifre: ${sifre}`);

// RANDOM ŞİFRE OLUŞTURMA BİTİŞ --------------------------------------------