const express = require('express')
const app = express()
const port = 3000

app.get('/lunes', (req, res) => {
  res.send('Hoy es lunes <br> <a href="/martes">siguiente</a>')
})

app.get('/martes', (req, res) => {
  res.send('Hoy es martes <br> <a href="/miercoles">siguiente</a>')
})
app.get('/miercoles', (req, res) => {
  res.send('Hoy es miercoles <br> <a href="/jueves">siguiente</a>')
})
app.get('/jueves', (req, res) => {
  res.send('Hoy es jueves <br> <a href="/viernes">siguiente</a>')
})
app.get('/viernes', (req, res) => {
  res.send('Hoy es viernes <br> <a href="/sabado">siguiente</a>')
})
app.get('/sabado', (req, res) => {
  res.send('Hoy es sabado <br> <a href="/domingo">siguiente</a>')
})
app.get('/domingo', (req, res) => {
  res.send('Hoy es domingo <br> <a href="/lunes">volver a lunes</a>')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
