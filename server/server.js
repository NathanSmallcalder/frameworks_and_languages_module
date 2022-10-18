const express = require('express')
const app = express()
const port = 8000

app.use(express.json());

storage = []

app.get('/items', (req,res) => {
  res.json(storage)
  console.log('get', storage)
})

app.get('/', (req, res) => {
})

app.post('/item', (req, res) =>{
    console.log(storage)
    storage.push(req.body)
    res.status(201).json(req.body)
    
  })
  
app.delete('/item/:id', (req,res) => {
    const id = req.params.id;
    console.log(id)
    storage = [...storage.filter((storage)=>storage.id != id)]
    console.log('deleted', storage)
    res.status(204).json()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  process.on('SIGINT', function() {process.exit()})
})