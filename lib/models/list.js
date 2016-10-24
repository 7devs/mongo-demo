var mongoose = require('mongoose');

// 描述数据结构
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

// 虚拟字段
schema.virtual('fullInfo').get(function() {
    return this.title + '(' + this.leng + ')';
});

module.exports = mongoose.model('List', schema);
