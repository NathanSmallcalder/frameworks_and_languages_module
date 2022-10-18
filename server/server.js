const express = require('express')
const cors = require('cors');
const e = require('express');
const app = express()
const port = 8000

app.use(express.json());

storage = []
var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/items', (req,res) => {
  res.json(storage)
  console.log('get', storage)
})

app.get('/', (req, res) => {
  res.send("Hello world")
})

app.post('/item', (req, res) =>{
    console.log(storage)
    storage.push(req.body)
    res.status(201).json()
  })
  
app.delete('/item/:id', (req,res) => {
    const id = req.params.id;
    console.log(id)
    storage = [...storage.filter((storage)=>storage.id != id)]
    if(storage = '{}')
    {
      res.status(404).json()
    }
    else{
      console.log('deleted', storage)
      res.status(204).json()
    }
})

app.options('*', cors())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on('SIGINT', function() {process.exit()})