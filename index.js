const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hola Mundo!')
})

app.get('/lunes', (req, res) => {
  res.send('Hoy es lunes!')
})
app.get('/martes', (req, res) => {
  res.send('Hoy es martes!')
})
app.get('/miercoles', (req, res) => {
  res.send('Hoy es miercoles!')
})
app.get('/jueves', (req, res) => {
  res.send('Hoy es jueves!')
})
app.get('/viernes', (req, res) => {
  res.send('Hoy es viernes!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})