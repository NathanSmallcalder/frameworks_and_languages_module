const express = require('express')
var cors = require('cors')
const app = express()
const port = 8000

app.use(express.json());

ITEM = []

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/items', (req,res) => {
  res.json(ITEM)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/item', (req, res) =>{
    RequiredFields = 'user_id,keywords,description,image,lat,lon'
    if (Object.keys(req.body).sort().toString() !== 'user_id,keywords,description,image,lat,lon') {
      return res.status(405).json({message: "You have missing fields"})
    }
    else{
      ITEM.push(req.body)
      res.status(201).json(req.body)
    }
  })
  
app.delete('/item/:id', (req,res) => {
    const id = req.params.id;
    console.log(id)
    const length = ITEM.length;
    ITEM = [...ITEM.filter((ITEM)=>ITEM.id != id)]
    if (length > ITEM.length)
    {
      res.status(204).json
      console.log('deleted', ITEM)
    }
    else
    {
      res.status(404).json()
    }

})

app.options('*', cors())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})

process.on('SIGINT', function() {process.exit()})