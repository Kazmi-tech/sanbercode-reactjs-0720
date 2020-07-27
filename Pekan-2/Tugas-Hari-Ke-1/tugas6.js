// Soal 1 
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

var DaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    jenisKelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahunLahir : arrayDaftarPeserta[3]
}
// Soal 2

var buah = [
    {
        nama: "strawberry",
        warna: "merah",
        ada_bijinya: "tidak",
        harga: 9000
        },
    {
        nama: "jeruk",
        warna: "oranye",
        ada_bijinya: "ada",
        harga: 8000
        },
    {
        nama: "Semangka",
        warna: "Hijau, Merah",
        ada_bijinya: "ada",
        harga: 10000
        },
    {
        nama: "Pisang",
        warna: "Kuning",
        ada_bijinya: "tidak",
        harga: 5000 
        }   
]
console.log(buah[0])


// Soal 3
var dataFilm = []

function film(nama, durasi, genre, tahun){
    var Datafilm ={
        nama : nama,
        durasi : durasi,
        genre : genre,
        tahun : tahun
    }
    return Datafilm;
}
var myDataFilm = film("A Whisker Away", "1 jam 44 menit", "romance", 2020)
dataFilm.push(myDataFilm)
console.log(myDataFilm)


// Soal 4

class Animal {
    constructor(name){
        this.name = name,
        this.legs = 4,
        this.cold_blooded = false
    }
}
var sheep = new Animal("shaun");
 
console.log(sheep.name)
console.log(sheep.legs) 
console.log(sheep.cold_blooded)

class Frog extends Animal{
    constructor(name){
    super(name),
    this.legs = 2,
    this.cold_blooded = false
    }

    jump(){
        console.log("Auooo")
    }
}

class Ape extends Animal{
    constructor(name){
        super(name),
        this.legs = 4,
        this.cold_blooded = false
    }
    yell(){
        console.log("hop hop")
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell()
 
var kodok = new Frog("buduk")
kodok.jump()


// Soal 5
class Clock {
    constructor ({ template }){
         {
             var timer;
    
             function render(){
                var date = new Date();
    
                var hours = date.getHours();
                if (hours < 10) hours = '0' + hours;
    
                var mins = date.getMinutes();
                if (mins < 10) mins = '0' + mins;
    
                var secs = date.getSeconds();
                if (secs < 10) secs = '0' + secs;
    
                var output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);
    
                console.log(output);
            }
            this.stop = function() {
                clearInterval(timer);
              };
            
            this.start = function() {
                render();
                timer = setInterval(render, 1000);
              };
            
        }
    }
}
var clock = new Clock({template: 'h:m:s'});
clock.start();  