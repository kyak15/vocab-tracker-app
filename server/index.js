require('dontenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`app is listening on localhost:${PORT}`)
})