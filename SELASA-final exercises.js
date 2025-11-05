//Most Frequent Largest Number
function sorting(arrNumber){
   for(let i = 0; i < arrNumber.length; i ++){
    for(let j = 0; j < arrNumber.length - 1; j++){
        if(arrNumber[j] > arrNumber[j + 1]){
            let temp = arrNumber[j];
            arrNumber[j] = arrNumber[j + 1];
            arrNumber[j + 1] = temp;
        }
    }
   }
   return arrNumber;
}

function getTotal(arrNumber){
    if(arrNumber.length == 0){
        return '';
    }
let terbesar = arrNumber[arrNumber.length - 1];
let jumlah = 0
    for(let i = 0; i < arrNumber.length; i++){
        if(arrNumber[i] === terbesar){
            jumlah++;
        }
    }
    return `Angka paling besar adalah angka ${terbesar} dan jumlah kemunculan sebanyak ${jumlah} kali`
}

function mostFrequentLargestNumber(arrNumber){
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumber([9,8,7,8,9,7,6,9,8,9,4,3,2]));


//Password Generator
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