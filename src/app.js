
var express = require('express')
var app = express()
const axios = require('axios')
const url = 'http://covid19api.xapix.io/v2/locations'

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/',(req,res) => {
        axios.get(url)
        .then((response) => {
            res.render('pages/index' , {data : response.data})
        })
        .catch((error) => {
            console.log(error)
        })
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port , () =>{
    console.log(`Listening on port ${port}` )
});