const express = require('express')
const app = express()
const port = 8000

app.use(express.json());

STORAGE = []

app.get('/addes', (req,res) => {
  res.json(STORAGE)
  console.log('get', STORAGE)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/add', (req, res) =>{
    STORAGE.push(req.body)
    res.status(201).json(req.body)
    console.log(STORAGE)
  })
  
app.delete('/added/:id', (req,res) => { 
    STORAGE = STORAGE.filter(o => o.id !== parseFloat(req.ID))
    console.log('deleted', STORAGE)
})
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})