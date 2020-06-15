var num = 15.123456789;

// toplamda 3 basamaklı sayı kullanın
console.log(num.toPrecision(3));

// ondalık kısmı 3 basamakta sınırla 
console.log(num.toFixed(4));

// EN YAKIN SAYIYA YUVARLA
console.log(Math.round(num));

//yukarı yuvarla
console.log(Math.ceil(num));

//aşağı yuvarla
console.log(Math.floor(num));

// 1,2,10,56,20 sayılarını en küçüğü ve en büyüğü bul
console.log(Math.min(1,2,10,56,20));
console.log(Math.max(1,2,10,56,20));

// sayı aralığını kullanıcının belirleyeceği rastgele sayı üretin
var min = 50;
var max = 100;

console.log(min+Math.random()*(max-min));

/* Bir personelin yaptığı mesaiyegöre aldıgı maası hesaplayalım

    ** brüt maas : 3700 tl 
    ** brüt mesai : 10.3 tl
    Agustos ayı mesai toplamı 42 saat ise toplam brüt maas nedir ?
    brüt maas uzerındern toplam kesinti oranı
    %25 ise alınacak toplam net maas nedır ?
    */

    var brutMaas = 3700;
    var mesaiUcreti = 10.3;
    var mesaiSuresi = 42;

    var toplamBrutMaas = brutMaas + (mesaiUcreti*mesaiSuresi);
    var toplamNetMaas = toplamBrutMaas -toplamBrutMaas*0.25
    console.log(toplamBrutMaas,toplamNetMaas.toFixed(1));