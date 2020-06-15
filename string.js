// Demo : Strings

var sentence = " Omer erdem aydemir omer erdemaydemir omer erdemaydemir. ";

var url ="http://sadikturan.com/Moder Javascrpit KURSU sıfırdan ileri seviye";

//cümle kaç karakterlidir ?
console.log(sentence.length);

 //kaç kelimeden oluşuyor ?
 console.log(sentence.split(' '));

 //Tüm cümleyi küçük harfe çevir
 console.log(sentence.toLowerCase());
 console.log(sentence.toUpperCase());

 // Cümlenin başındaki ve sonundaki boşlukları siliniz
 console.log(sentence.trim());

 // 'o' karakterini silin
 console.log(sentence.replace('o',''));

 //url içinden str kısmını çıkarınız
 var str = 'http://';
 console.log(url.substr(str.length));
 console.log(url.slice(str.length));

 // url hangı protokolu kullanmaktadır ? (http,https)
 console.log(url.startsWith('http'));
 console.log(url.startsWith('https'));

 // url .com ifadeisi içeriyormu
 console.log(url.indexOf('.com'));
 console.log(url.includes('.com'));

//url string ifadesini geçerli bir url olarak düzenleyiniz

console.log(url.toLowerCase()
                .replace(/ /g,'-'));