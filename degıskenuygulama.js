// ** Bir Müşterinin aşağıdaki bilgileri için değişken oluşturunuz.

//** Müşteri adı 
//** Müşteri Soyadı
//** Müşteri tc kimlik
//** Müşteri sipariş toplamı
//** Müşteri cinsiyet
//** Müşteri adres bilgisi
//** Müşteri Hobiler

var customerName = 'Omer';
var customerLastName = 'Erdem';

var fullName = 'Omer Erdem Aydemir';
var customerId = '123456789';

var total = 300.5;
var gender = true; //male is true , woman is false

var adress ={
    city : 'Kocaeli',
    district : 'Gebze',
    body : 'Fevzi Çakmak Mah. no:11'
}

var hobbies = ['sinema','futbol','oyun'];

//** Sipariş toplamı */

var order1 = Number ('100');
var order2 = Number ('150');

var totalOrder = order1 + order2;
console.log(totalOrder);

var order3 = Number ('100.5');
var order4 = Number ('150.2');

var totalOrder2 = order3 + order4;
console.log(totalOrder2);

var order5 =parseInt ('1231.2');
var order6 =parseInt ('131.2');

var totalOrder3 = order5+ order6;
console.log(totalOrder3);
