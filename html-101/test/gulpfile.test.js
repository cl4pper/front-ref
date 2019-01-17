const assert = require('chai').assert
const app = require('../app/js/index')

// let firstMethod = app.getName()

describe('app', function() {

    it('should return a string', function() {
        assert.typeOf(app.named(), 'string')
    })
})