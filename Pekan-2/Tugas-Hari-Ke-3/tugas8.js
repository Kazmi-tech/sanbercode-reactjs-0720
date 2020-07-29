//Soal 1
let luasLingkaran = (r) =>{
    return 3.14* r * r 
}
let kelilingLingkaran = (r) =>{
    return 3.14 * 2 * r
}
console.log(luasLingkaran(4))
console.log(kelilingLingkaran(4))


// Soal 2
let kalimat = ""
tambahKata = (kata1, kata2, kata3, kata4, kata5)=>{

    kalimat = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`
    return kalimat

}
tambahKata("saya", "adalah", "seorang", "frontend", "developer")
console.log(kalimat)



// Soal 3
class Book {
    constructor(name, totalPage, price){
        this.name = name
        this.totalPage = totalPage
        this.price = price
    }
}
class Komik extends Book {
    constructor(name, totalPage, price){
        super(name,totalPage,price)
        this.isColorful = true
    }
}
Doraemon = new Komik("Doraemon", 21, 10000)
Kimia = new Book("Kimia", 67, 50000)

console.log(Doraemon)
console.log(Kimia)

