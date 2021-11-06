// CALLBACKS - are naturally asynchronous
// Avoid used this kind of async method due poor manuteanability.
const fs = require('fs')

// METHOD USED AS A CALLBACK
function callback (err, content) {
    console.log(`FILE CONTENT: ${String(content)}`)
}

console.log('START')

fs.readFile('../mocks/fileA.txt', (errA, contentA) => {
    fs.readFile('../mocks/fileB.txt', (errB, contentB) => {
        console.log(`ERROR A: ${errA}, FILE CONTENT A: ${String(contentA)}`)
        console.log(`ERROR B: ${errB}, FILE CONTENT B: ${String(contentB)}`)
    })
})

console.log('END')