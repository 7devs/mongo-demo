var express = require('express'),
    bodyParser = require('body-parser'),
    mongo = require('mongoose'),
    path = require('path'),
    app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.set('views', path.join(__dirname, 'lib/views'));
app.set('view engine', 'ejs');

app.use('/', require('./lib/routers/demo'));

// 连接数据库
mongo.connect('mongodb://localhost/demo', function(err) {
    if(err) {
        // 连接失败
        console.log(err);
    } else {
        // 连接成功
        app.listen(3000, function(err, b) {
            console.log('running...');
        })
    }
});
