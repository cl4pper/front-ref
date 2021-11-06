// ASYNC/AWAIT
// async -> ensures that the function returns a promise, and wraps non-promises in it
// await -> makes JavaScript wait until that promise settles and returns its result
const fs = require('fs')

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

console.log('START')

const init = async() => {
    try {
        const contentA = await _readFile('../mocks/file.txt') // Fake file to show rejection behavior
        const contentB = await _readFile('../mocks/fileB.txt')
        console.log(String(contentA))
        console.log(String(contentB))
    } catch(err) {
        console.log(err)
    }
}

init()
    .then(content => console.log(content))

console.log('END')