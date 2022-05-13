const express = require('express')
const app = express()
const port = 3000

app.get('/lunes', (req, res) => {
  res.send('<h1>Lunes</h1> <br> <a href="/martes">siguiente</a>')
})
app.get('/martes', (req, res) => {
    res.send('<h1>Martes</h1> <br> <a href="/miercoles">siguiente</a>')
  })
  app.get('/miercoles', (req, res) => {
    res.send('<h1>Miercoles</h1> <br> <a href="/jueves">siguiente</a>')
  })
  app.get('/jueves', (req, res) => {
    res.send('<h1>Jueves</h1> <br> <a href="/viernes">siguiente</a>')
  })
  app.get('/viernes', (req, res) => {
    res.send('<h1>Viernes</h1> <br> <a href="/sabado">siguiente</a>')
  })
  app.get('/sabado', (req, res) => {
    res.send('<h1>Sabado</h1> <br> <a href="/domingo">siguiente</a>')
  })
  app.get('/domingo', (req, res) => {
    res.send('<h1>Domingo</h1> <br> <a href="/lunes">siguiente</a>')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



