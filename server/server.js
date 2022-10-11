const express = require('express')
const app = express()
const port = 8000

app.use(express.json());

STORAGE = []

app.get('/items', (req,res) => {
  res.json(STORAGE)
  console.log('get', STORAGE)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/item', (req, res) =>{
    console.log(STORAGE)
    STORAGE.push(req.body)
    res.status(201).json(req.body)
    
  })
  
app.delete('/added/:id', (req,res) => { 
    STORAGE = STORAGE.filter(o => o.id !== parseFloat(req.ID))
    console.log('deleted', STORAGE)
    res.status(204).json()
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})