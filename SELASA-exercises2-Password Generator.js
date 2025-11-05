/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:

Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/


function changeVocals(str) {
  let vokal = 'aiueoAIUEO'; 
  let ganti = ''; 

  for (let i = 0; i < str.length; i++) { // looping untuk melihat semua huruf.
    let char = str[i];
    if (vokal.includes(char)) {
      ganti += String.fromCharCode(char.charCodeAt(0) + 1);
    } else {
      ganti += char;
    }
  }
  return ganti;
}

function reverseWord(str) {

  return str.split('').reverse().join('');
}

function setLowerUpperCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}

function removeSpaces(str) {
  return str.replace(/\s+/g, '');
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 huruf';
  }

  let ubahVokal = changeVocals(name);
  let dibalik = reverseWord(ubahVokal);
  let ubahCase = setLowerUpperCase(dibalik);
  let hapusSpasi = removeSpaces(ubahCase);

  return hapusSpasi;
}

console.log(passwordGenerator('Sergei Dragunov')); // Contoh output: 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // Contoh output: 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 huruf'


function changeVocals(str){
    let vocal = 'aiueoAIUEO'; //buat ngecek nanti: “huruf ini termasuk vokal nggak ya?”
    let ganti = ''; //wadah kosong. Nanti kita isi satu per satu huruf hasil olahan dari str.
for (let i = 0; i < str.length; i++){ //wadah kosong. Nanti kita isi satu per satu huruf hasil olahan dari str.
    let char = str[i]; //Ambil satu huruf yang lagi dicek. Misal saat i = 0, maka char = 'H'.
    if (vocal.includes(char)){ //jika huruf termasuk di daftar vokal maka huruf ini harus diganti.
    ganti += String.fromCharCode(char.charCodeAt(0)+ 1); //Ubah huruf (char) jadi kode angka, tambahkan 1 biar geser ke huruf berikutnya, lalu ubah lagi jadi huruf.”
    } else {
        ganti += char;//“Kalau hurufnya nggak perlu diubah, yaudah — tambahkan aja huruf aslinya ke hasil (ganti).”
    }
}
return ganti;
}

function changeVocals(str){
    let vocal = 'aiueoAIUEO';
    let ganti = '';
for(let i = 0; i < str.length; i++){
    let char = str[i];
    if(vocal.includes(char)){
        ganti += String.fromCharCode(char.charCodeA(0) + 1);
    } else{
        ganti += char;
    }
}
return ganti;
}

function reverseWord(str) {
    return str.split('').reverse().join('');
}

function setLowerUpperCase(str){
    let result = ''; // membuat wadah kosong untuk hasil akhir.
    for (let i = 0; i < str.length; i++){ //melkukan loop untuk membaca setiap huruf.
        let char = str[i]; // mengambil satu huruf yang sedang di cek, simpan di variabel char
        if (char === char.toUpperCase()){ //
            result += char.toLowerCase();
        } else{
            result += char.toUpperCase();
        }
    }
    return result;
}

