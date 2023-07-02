const express = require("express")
const app = express()

// use ejs as view engine
app.set("view engine", 'ejs')

// make request
app.get('/', (req, res) => {
    console.log("Hello")
    // rendering a html file
    res.render("index", { myname: "Arthur" })

    //res.download("server.js")
})

const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')

app.use('/posts', postRouter)
app.use('/users', userRouter)

app.listen(3000)