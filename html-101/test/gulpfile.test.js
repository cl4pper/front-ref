const assert = require('chai').assert
const app = require('../app/js/index')

let firstMethod = app.getName()

describe('App', () => {

    it('should return a string', () => {
        assert.typeOf(firstMethod)
    })
})