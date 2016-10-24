var mongoose = require('mongoose');

var schema = mongoose.Schema({
    title: String,
    leng: {type: Number, default: 0},
    added: {type: Date, default: Date.now}
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

schema.virtual('fullInfo').get(function() {
    return this.title + '(' + this.leng + ')';
});

module.exports = mongoose.model('List', schema);
