var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

// Tulis code untuk memanggil function readBooks di sini

function bacalagi(waktu, i){
    readBooks(waktu, books[i], function(sisaWaktu){
        if(sisaWaktu >= 0 ){
            if(i + 1 < books.length){
                bacalagi(sisaWaktu, i+1)
            } else {
                console.log("Semua buku selesai dibaca")
            }
        }
    })
}
bacalagi(10000, 0)