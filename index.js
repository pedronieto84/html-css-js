const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Qué pasa chavales, soy un hacker!')
})

app.get('/adiosmundo', (req, res) => {
    res.send('Adiós mundo cruel')
  })

  app.get('/lunes', (req, res) => {
    res.send('lunes triste')
  })
  app.get('/martes', (req, res) => {
    res.send('martesicooo')
  })
  app.get('/miercoles', (req, res) => {
    res.send('miercolessss')
  })
  app.get('/jueves', (req, res) => {
    res.send('juerneeesss')
  })
  app.get('/viernes', (req, res) => {
    res.send('que ya es viernes locoo')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
;