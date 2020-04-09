const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var bodyparser = require('body-parser')

var app = express();
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

var datas=mongoose.model('diary',diarySchema,'diary')

datas.find(function(err,diary){
  if(err){
    console.log('err :: '+err)
  }
  else{
    diary.forEach(function(row){
      console.log('data :: '+row.title)
    })
  }
})