/* demo loops : sayı tahmin oyunu

1-10 arası rastgele sayı üretilen bir sayıyı asagı yukarı ifadeleri ile bulundurmaya çalışın
**puanlama yapın
**kullanıcı kac kerede bilecegini berirtebilsin

*/


var hak = 5;
var tahmin,sayac;
var sayi =Math.floor( (Math.random()*10)+1);

console.log(sayi);

while(hak>0){
    hak-- ;
    sayac++;
    tahmin = Number(prompt('bir sayı giriniz'));

    if(sayi == tahmin){
        console.log(`Tebrikler ${sayac} defada bildiniz`);
        break;
    }else if( sayi > tahmin){
        console.log('yukarı');
    }else{
       console.log('asagı');
    }

    if(hak == 0){
        console.log('hakkınız bitti');
    }
}