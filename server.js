const express = require('express')
const app = express()

const PORT = 8080

app.get('/api/holis', (_, res) => {
    res.send('Bienvenido a tu API')
})

let count = 0

app.get('/', (_, res) => {
    console.log(`Visitante: ${++count}`)
    res.send(`Esta es tu página principal, sos el visitante ${count}`)
})

app.get('*', (_, res) => {
    res.send('Ups, esta pagina no existe')
})



const server = app.listen(PORT, () => {
    console.log(`listening at ${server.address().port} - http://localhost:${PORT}`)
})