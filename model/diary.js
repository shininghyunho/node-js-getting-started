const mongoose = require('mongoose')

const url = "mongodb+srv://chaegangpower:1234@cluster0-3vobw.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url, { dbName: 'mydb' }, function (err) {
    if (err)
        console.log('err :: ' + err);
})

var Schema = mongoose.Schema

var diarySchema = new Schema({
    data: String, title: String, imgList: String, content: String
})