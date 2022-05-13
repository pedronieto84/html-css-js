const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('YAESTAELNODEMON NO NO ')
})
app.get('/lunes', (req, res) => {
  res.send('Lunes')
})

app.get('/martes', (req, res) => {
  res.send('Martes')
})

app.get('/miercoles', (req, res) => {
  res.send('Miercoles')
})
app.get('/jueves', (req, res) => {
  res.send('Jueves')
})
app.get('/viernes', (req, res) => {
  res.send('Viernes')
})
app.get('/adios-mundo', (req, res) => {
  res.send('Adios Mundo!!!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
