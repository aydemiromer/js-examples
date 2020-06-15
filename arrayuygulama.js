// Demo : Arrays

// Bmw mercedes opel mazda elemanlarına sahıp dızı olusturunuz

var arr = ["Bmw","mercedes","opel","mazda"];

console.log(arr);

// dizi kaç elemanlıdır 
console.log(arr.length)

// dizinin ilk ve son elemanı nedir
console.log(arr[0])
console.log(arr[3])
console.log(arr[arr.length-1])

// renault değerini dizinin sonuna ekleyın

arr[arr.length] = "renault";
arr.push('toyota');

// seat değerini en başa ekleyiniz
arr.unshift('seat');

//toyota degerini siliniz
arr.pop('toyota');

//dizi elemanlarını ters çevirin
arr.reverse()

//dizi elemanlarını alfabetik olarak sıralayınız
arr.sort();

// [1,2,5,80] dizisini sırlayın
var numbers =[1,2,5,80,15];

function compare(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}

console.log(numbers.sort(compare));

// var str = "chevrolet,dacia";
//ifadesini diziye çeviriniz

var str = "chevrolet,Dacia";
var arr2 = str.split(',');
console.log(arr2)

// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin

var arr3 = arr.concat(arr2);
console.log(arr3);

// Oluşturulan diziden son 2 elemanı siliniz
 
//console.log(arr3.pop());
//console.log(arr3.pop());

console.log(arr3.splice(6,2));
// 6 dan başlayıp kac eleman sılınıcek onu gosterdı

/* Aşagıda verilen elemanları bir dizi içerisinde saklayınız.

    studentA : Yigit Bilgi 2010
    studentB : Sena Turan 1999
    studentC : Ahmet Turan 1998
*/
var studentA = ['Yigit','Bilgi',2010];
var studentB = ['Sena','Turan',2010];
var studentC = ['Ahmet','Turan',2010];

var students =[studentA,studentB,studentC];

console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);
console.log(students)


