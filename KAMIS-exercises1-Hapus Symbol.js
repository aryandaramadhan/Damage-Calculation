// Cara Penulisan REGEX
var regexContohSatu = new RegExp('Arya'); //penulisan Regex yang dinamis, bisa diubah variabelnya.
var regexContohDua = /abc/; // bisa tapi variabel tetap tidak bisa diubah.

//TEST
var message = 'Regex itu Mudah!';
console.log(/[A-Z]/.test(message));

var messageAllLowerCase = 'regex itu susah!';
console.log(/[A-Z]/.test(messageAllLowerCase));

//Menggunakan RegExp object
var regexPattern = new RegExp('[A-Z]');
var message = 'Regex itu Mudah!';
var messageAllLowerCase = 'regex itu sulit?';
console.log(regexPattern.test(message));
console.log(regexPattern.test(messageAllLowerCase));

//SPLIT
var str = 'belajar regex itu menyenangkan';
console.log(str.split(/\s/));

//REPLACE
var stringAwal = 'Belajar Regex itu sulit!';
stringHasil = stringAwal.replace(/sulit/, 'mudah');
console.log(stringHasil);

// MATCH
var message = 'Regex Itu Mudah DEEEEh!';
console.log(message.match(/e/));
console.log(message.match(/e/g));
console.log(message.match(/e/gi));

var string = 'Walaupun regex banyak mengandung simbol, tapi tidak serumit seperti !@#%^%#$*( , ^%&*!!^&'
console.log(string.match(/[a-z]+/gi));

var string = 'Walaupun regex banyak mengandung simbol, tapi tidak serumit seperti'
console.log(string.match(/[a-z]/gi));

function hapusSimbol(str){
    var string = str.match(/[a-z\d]+/gi);
    return string.join('');
}
console.log(hapusSimbol('test%$4aa'));
console.log(hapusSimbol('devel0p3r s3j@@ati'));
console.log(hapusSimbol('ma@#k!an~'));
console.log(hapusSimbol('coding'));
console.log(hapusSimbol('1+3-5*2=100'))
