/* 
Aşağıdaki object literal yapısını kullanarak en az 5 araç bilgisini tutunuz

Araç bilgileri:
    id : bmw116d_1234
    model : 116d
    yil : 2015
    renk : white
    servis kayitlari :
            id : bmw116d_1234_1 tarih :30.01.2016 km :13000 toplam ücret :900
                servis detayı :
                id : 1 işlem :  yag degisim ücreti:300
                id : 2 işlem : filtre degisimi :300
                id : 3 işlem :  fren hidroliği :300
            
            id: bmw116d_1234_2 tarih: 10.01.2017 km :28000 toplam ücret :1800
                id :  1 işlem : yag degisimi ücret : 350
                id : 2 işlem : filtre degisimi : 350
                id : 3 işlem : frend hidroliği : 300
                id :4 işlem : balata degisimi : 800
                */

                var aracBilgileri = [
                {
                    id : 'bmw116d_123',
                    model : 'bmw 116d',
                    yil : 2015,
                    renk : 'Beyaz',
                    servisKayitlari : [
                        {
                            id : 'bmw116d_123_1',
                            tarih : '20.01.2016',
                            km : '13000',
                            ucret : 900,
                            detay : [
                                {id : 'bmw116d_123_1_1', aciklama : 'yag degisimi ücret',ucret : 300},
                                {id : 'bmw116d_123_1_2', aciklama : 'filtre degisimi',ucret : 300},
                                {id : 'bmw116d_123_1_3',aciklama : 'fren hidroligi',ucret : 300
                                }
                            ]
                        },
                        {
                            id : 'bmw116d_123_2',
                            tarih : '10.01.2017',
                            km : '28000',
                            ucret : 1800
                            detay : [
                                { id : 'bmw116d_123_2_1',aciklama : 'yag degisimi ücret',ucret : 350},
                                { id : 'bmw116d_123_2_2',aciklama : 'filtre degisimi',ucret : 350},
                                { id : 'bmw116d_123_2_3',aciklama : 'fren hidroligi',ucret : 300},
                                { id : 'bmw116d_123_2_3',aciklama : 'balata degisimii',ucret : 800}
                            ]
                        },
                    ]
                },
                {
                    id : 'bmw118d_123',
                    model : 'bmw 118d',
                    yil : 2015,
                    renk : 'Beyaz',
                    servisKayitlari : [
                        {
                            id : 'bmw118d_123_1',
                            tarih : '20.01.2016',
                            km : '13000',
                            ucret : 900,
                            detay : [
                                {id : 'bmw118d_123_1_1', aciklama : 'yag degisimi ücret',ucret : 300},
                                {id : 'bmw118d_123_1_2', aciklama : 'filtre degisimi',ucret : 300},
                                {id : 'bmw118d_123_1_3',aciklama : 'fren hidroligi',ucret : 300
                                }
                            ]
                        },
                        {
                            id : 'bmw118d_123_2',
                            tarih : '10.01.2017',
                            km : '28000',
                            ucret : 1800
                            detay : [
                                { id : 'bmw118d_123_2_1',aciklama : 'yag degisimi ücret',ucret : 350},
                                { id : 'bmw118d_123_2_2',aciklama : 'filtre degisimi',ucret : 350},
                                { id : 'bmw118d_123_2_3',aciklama : 'fren hidroligi',ucret : 300},
                                { id : 'bmw118d_123_2_3',aciklama : 'balata degisimii',ucret : 800}
                            ]
                        },
                    ]
                },
                {
                    id : 'bmw116i_123',
                    model : 'bmw 116i',
                    yil : 2015,
                    renk : 'Beyaz',
                    servisKayitlari : [
                        {
                            id : 'bmw116i_123_1',
                            tarih : '20.01.2016',
                            km : '13000',
                            ucret : 900,
                            detay : [
                                {id : 'bmw116i_123_1_1', aciklama : 'yag degisimi ücret',ucret : 300},
                                {id : 'bmw116i_123_1_2', aciklama : 'filtre degisimi',ucret : 300},
                                {id : 'bmw116i_123_1_3',aciklama : 'fren hidroligi',ucret : 300
                                }
                            ]
                        },
                        {
                            id : 'bmw116i_123_2',
                            tarih : '10.01.2017',
                            km : '28000',
                            ucret : 1800
                            detay : [
                                { id : 'bmw116i_123_2_1',aciklama : 'yag degisimi ücret',ucret : 350},
                                { id : 'bmw116i_123_2_2',aciklama : 'filtre degisimi',ucret : 350},
                                { id : 'bmw116i_123_2_3',aciklama : 'fren hidroligi',ucret : 300},
                                { id : 'bmw116i_123_2_3',aciklama : 'balata degisimii',ucret : 800}
                            ]
                        },
                    ]
                }

            ];

                console.log(aracBilgileri[0]);
                console.log(aracBilgileri[1]);
                console.log(aracBilgileri[2]);
