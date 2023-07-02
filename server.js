const express = require("express")
const app = express()

// use ejs as view engine
app.set("view engine", 'ejs')

// make request
app.get('/', (req, res) => {
    console.log("Hello")
    // rendering a html file
    res.render("gg", { myname: "Arthur" })
})




app.listen(3000)