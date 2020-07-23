// Soal 1
//Jawaban 1
console.log('LOOPING PERTAMA')
var angka = 0
while(angka < 20){
    angka+=2
    console.log(angka + " - I love coding")
}

console.log('LOOPING KEDUA')
while(angka > 0){
    console.log(angka + " - I will become a frontend developer")
    angka-=2
}



// Soal 2
// Jawaban 2
for(var i = 1;i <= 20; i++){
    if (i % 2 == 1 && i % 3 == 0){
        console.log(i + " - I Love Coding")
    } else if(i % 2 == 0){
        console.log(i + " - Berkualitas")
    } else if (i % 2 == 1){
        console.log(i + " - Santai")
    } else{
        console.log("ada yang salah")
    }
}


//Soal 3
//Jawaban 3
var pager = ''
for (var i = 1; i <= 7; i++){
    for(var j = 1; j <= i ; j++){
        pager += "#"
    }
    pager += '\n'
}
console.log(pager)


//Soal 4
var kalimat="saya sangat senang belajar javascript"

//Jawaban 4
console.log(kalimat.split(' '))


//Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

//Jawaban 5
daftarBuah.sort()
console.log(daftarBuah)
for(var i=0; i < 5; i++){
    console.log(daftarBuah[i])
}
