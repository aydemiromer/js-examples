// bankamatik uygulaması

var hesapA = {
    ad : 'Omer Erdem',
    hesapNo : '12345678',
    Bakiye : 2000,
    Ekhesap : 1000 
}

var hesapB = {
    ad : 'xyz',
    hesapNO : '123213213',
    Bakiye : 3000,
    Ekhesap : 2000
}

function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);
    if(hesap.Bakiye >= miktar){
        hesap.Bakiye = hesap.Bakiye - miktar;
        console.log('paranizi alin lutfen');
    }else {
        var toplam = hesap.Bakiye + hesap.Ekhesap;
        if(toplam >=miktar){
            if(confirm('ek hesabinizi kullanmak ister misiniz')){
                console.log('paranizi alabilirsiniz');
                var bakiye = hesap.bakiye;
                var Ekhesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.Ekhesap = hesap.Ekhesap - Ekhesap;

            }else{
                console.log(`${hesap.hesapNO} nolu hesabınızda
                ${miktar}bulunmamaktadır.`);
            }
        }else{
            console.log('YETERSIZ BAKIYE');
        }
    }
}

paraCek(hesapA,300);
paraCek(hesapA,20);
paraCek(hesapB,2000);
