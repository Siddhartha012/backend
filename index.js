require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('My  name is Siddhartha Maity!')
})
app.get('/youtube', (req,res) =>{
    res.send('<h2>ullu banaya bara maza aya</h2>')
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})