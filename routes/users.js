const express = require("express")
const router = express.Router()  //creating a router

router.get("/", (req, res) => {
    res.send("Users list")
})

router.get("/new", (req, res) => {
    res.send("New cohort members")
})

module.exports = router