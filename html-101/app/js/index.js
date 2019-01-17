
module.exports = {
    constructor() {
        this.name = 'name'
        this.age = 0
        this.isUsed = 'false'
    },

    setName: function(name) {
        return this.name = name
    },

    getName: function() {
        return this.name
    },

    named: function(name) {
        return 'this.name = name'
    },
}

// module.exports = () => {
//     return 'Hello'
// }