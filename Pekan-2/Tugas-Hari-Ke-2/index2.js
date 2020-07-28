var readBooksPromise = require('./promise.js')
const readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]



function bacalagi(waktu, i){
    readBooksPromise(waktu, books[i])
    
    .then(function(baca){
        readBooksPromise(baca, books[1]).then(
            function(baca){
                readBooksPromise(baca, books[2]).then(
                    
                )
            }
        )
    })
    .catch(function(sisaWaktu){
        console.log(sisaWaktu)
    })
}
bacalagi(10000, 0)



