require('dotenv').config()
const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('Ayush Srivastava')
})

app.get('/youtube', (req,res)=>{
    res.send('<h2>chai aur code </h2>')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})