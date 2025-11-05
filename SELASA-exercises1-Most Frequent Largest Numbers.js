/*Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!

*/
// sorting
function sorting(arrNumber) {
    for (let i = 0; i < arrNumber.length; i++) { //loop luar, mengulang sebanyak jumlah elemen array.
    for (let j = 0; j < arrNumber.length - 1; j++){ //loop dalam, bandingin dua angka yang berdampingan, terus tukar posisi kalau urutannya salah.
        if (arrNumber[j] > arrNumber [j + 1]){ //Kalau yang di kiri lebih besar dari yang di kanan, tuker posisi mereka biar urutannya bener
        
            let temp = arrNumber[j]; //Simpan isi kiri dulu
        arrNumber[j] = arrNumber[j + 1]; //Ganti isi kiri dengan isi kanan
        arrNumber[j + 1] = temp; //Balikin isi yang disimpan ke kanan
        }
    }
    }
    return arrNumber;
    // Fuction Sorting ini berfungsi untuk mengurutkan angka dari yang terkecil hingga yang terbesar.
}

// getTotal
function getTotal(arrNumber) {
    if (arrNumber.length == 0) { // jika dalam kotak array tidak ada isi/angka / nilainya 0
        return ''; // maka function akan mengembalikan 0 (string kosong)
    }
let terbesar = arrNumber [arrNumber.length - 1]; // Array sudah diurutkan oleh "function sort(arrNumber)"
let jumlah = 0; // membuat variabel jumlah untuk menghitung berapa kali angka terbesar muncul, dimulai dari angka 0.
    for (let i = 0; i < arrNumber.length; i++) { // loop dimulai dari elemen pertama; berhenti sampai akhir array;
        if (arrNumber[i] === terbesar){ // Kalau angka yang sedang kita lihat sama dengan angka terbesar.
            jumlah++; // maka tambahkan 1 ke dalam variabel jumlah.
        }
    }
    return `angka paling besar adalah ${terbesar} dan jumlah kemunculan sebanyak ${jumlah} kali`;
}

// mostFrequentLargestNumber
function mostFrequentLargestNumber(arrNumber){
    var listSort = sorting(arrNumber); // membuat variabel listSort menggunakan fungsi sorting diatas
    var countHighest = getTotal(listSort); // mencari angka terbesar dan berapa kal angka terbesar muncul, menggunakan fungsi getTotal dimana isinya sesuai dengan listShort sebelumnya.
    return (countHighest);
}

console.log(mostFrequentLargestNumber([2,4,6,5,4,8,9,1,9,9,6]));





function sorting(arrNumber){
    for(let i = 0; i < arrNumber.length; i++){
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
let jumlah = 0;
    for(let i = 0; i < arrNumber.length; i++){
        if(arrNumber[i] === terbesar){
            jumlah++;
        }
    }
    return `Angka paling besar adalah ${terbesar} dan jumlah kemunculan sebanyak ${jumlah} kali.`
}

function mostFrequentLargestNumber(arrNumber){
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}
 console.log(mostFrequentLargestNumber([7,9,8,4,5,6,9,3,1,2,9,9,7,7]));




 function sorting(arrNumber){
    for (let i = 0; i < arrNumber.length; i++){
    for (let j = 0; j < arrNumber.length - 1; j++){
        if (arrNumber[j] > arrNumber[j+1]){
            let temp = arrNumber[j];
            arrNumber[j] = arrNumber [j+1];
            arrNumber [j+1] = temp;
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
let jumlah = 0;
    for (let i = 0; i < arrNumber.length; i++){
        if (arrNumber[i] === terbesar){
            jumlah++;
        }
    }
    return `Angka paling besar adalah ${terbesar} dan jumlah kemunculannya sebanyak ${jumlah} kali.`
 }

 function mostFrequentLargestNumber(arrNumber){
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
 }

 console.log(mostFrequentLargestNumber([9,3,6,1,2,3,9]))
