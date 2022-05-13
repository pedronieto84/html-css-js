const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Jeloo')
})

app.get('/adios-mundo', (req, res) => {
    res.send('Cerrame la 4')
  })

  app.get('/lunes', (req, res) => {
    res.send('Hoy es lunes')
  })
  app.get('/martes', (req, res) => {
    res.send('Hoy es martes')
  })
  app.get('/miercoles', (req, res) => {
    res.send('Hoy es miercoles')
  })
  app.get('/jueves', (req, res) => {
    res.send('Hoy es jueves')
  })
  app.get('/viernes', (req, res) => {
    res.send('Hoy es viernes')
  })
  app.get('/sabado', (req, res) => {
    res.send('Hoy es sabado')
  })
  app.get('/domingo', (req, res) => {
    res.send('Hoy es domingo')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
