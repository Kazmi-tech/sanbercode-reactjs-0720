//soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

//jawaban 1
console.log(kataPertama + kataKedua + kataKetiga + kataKeempat.toUpperCase())


//soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

//jawaban 2
console.log(Number(kataPertama) + Number(kataKedua) + Number(kataKetiga) + Number(kataKeempat))

//soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 15) ;
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 25);
var kataKelima = kalimat.substring(25, 31)

// jawaban 3
console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

//soal 4
var nilai = 76

// Jawaban 4
if (nilai >= 80) {
    console.log('A')
} else if (nilai >= 70 && nilai < 80){
    console.log('B')
} else if (nilai >= 60 && nilai < 70){
    console.log('C')
} else if (nilai >= 50 && nilai < 60){
    console.log('D')
} else if (nilai < 50) {
    console.log('E')
} else{
    console.log('Ini bukan number')
}

//soal 5
var tanggal = 4;
var bulan = 4;
var tahun = 2004;

//jawaban 5
switch (bulan) {
    case 1:{
        bulan = ' Januari '
    break;
    }

    case 2:{
        bulan = ' Februari '
        break;
    }

    case 3:{
        bulan = ' Maret '
    break;
    }

    case 4:{
        bulan = ' April '
    break;
    }

    case 5:{
        bulan = ' Mei '
    break;
    }

    case 6:{
        bulan = ' Juni '
    }

    case 7:{
        bulan = ' Juli '
    break;
    }
    
    case 8:{
        bulan = ' Agustus '
    break;
    }
    
    case 9:{
        bulan = ' September '
    break;
    }
    
    case 10:{
        bulan = ' Oktober '
    break;
    }
    
    case 11:{
        bulan = ' November '
    break;
    }
    
    case 12:{
        bulan = ' Desember '
    break;
    }
    
    default:
        break;
}
console.log (tanggal + bulan + tahun)

