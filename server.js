const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'))

app.get('/contact' , (req, res) => res.send('this is contact'))

app.get('/about' , (req, res) => res.send('this is about me '))

app.listen(3000, () => console.log(`Example app listening at port 3000`))
