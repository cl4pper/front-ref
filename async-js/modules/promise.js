// PROMISE
const fs = require('fs')

console.log('START')

const _readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, content) => {
        if (err) {
            // reject(err)
            console.log('ERROR:', err)
        } else {
            resolve(content)
        }
    })
})

_readFile('../mocks/fileA.txt')
    .then(content => {
        console.log(String(content))
        return _readFile('../mocks/file.txt') // Fake file to show rejection behavior
    })
    .then(content => {
        console.log(String(content))
    })

console.log('END')