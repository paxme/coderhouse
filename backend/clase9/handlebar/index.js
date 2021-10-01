const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

app.use('/', express.static(__dirname + '/public'))

app.set('views', __dirname + '/views')

app.set('view engine', 'hbs')

app.engine("hbs", handlebars({
    extname: "hbs",
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "main"
}))

app.get("/", (req, res) => {
    res.render("home", {data: [{name: "diego"}]})
})

app.listen(8080, () => {
    console.log("serer is up on port 8080")
})