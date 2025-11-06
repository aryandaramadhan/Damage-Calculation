/* salah
function cariPelaku(str){
    var message = (str.match(/abc/gi));
    let jumlah = 0;
    for(let i = 0; i < str.length; i++)
    if(str === message){
        jumlah++;
    }
    return jumlah;
}
*/

function cariPelaku(str) {
    var hasil = str.match(/abc/gi);
    return hasil.length;
}
console.log(cariPelaku('mabcvabc'));
