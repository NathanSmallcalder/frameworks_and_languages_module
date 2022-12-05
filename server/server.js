const express = require('express')
var cors = require('cors');
const app = express()
const port = 8000

app.use(express.json());

///Enable Cors
app.use(cors({
  methods: ['GET','POST','DELETE','OPTIONS']
}))
///Allows CORS all routes
app.use('*', cors())

//Item Store - example items
// https://livecodestream.dev/post/everything-you-should-know-about-javascript-dictionaries/
// Collaborated with Kieran Rutter https://github.com/theKIEgit

ITEM = {
  1: {
    "id": 1,
    "user_id": "user1234",
    "keywords": ["hammer", "nails", "tools"],
    "description": "A hammer and nails set",
    "image": "https://placekitten.com/200/100",
    "lat": 1.10,
    "lon": 1.20,
    "date_from": "2022-11-22T08:22:39.067408",
    "date_to": "2022-11-22T08:22:39.067408"
  },
  2: {
    "id":2,
    "user_id": "user12",
    "keywords": ["hammer", "nails", "tools"],
    "description": "A hammer and nails set",
    "image": "https://placekitten.com/200/100",
    "lat": 1.10,
    "lon": 1.20,
    "date_from": "2022-11-22T08:22:39.067408",
    "date_to": "2022-11-22T08:22:39.067408"
  },
}

///POST item
app.post('/item', (req,res) => {
  length = Object.keys(ITEM).length
  i = 0;
  newId = 1
  for (const value of Object.values(ITEM))  //https://stackoverflow.com/questions/46374993/find-a-value-in-a-dictionary-with-a-certain-property
  {
    if (parseInt(value.id) == newId) /// Pushes single item
    {
      newId = newId + 1
    }
    else{
      
    }
  }
  
  var date = new Date().toJSON().slice(0,10)
  ///Checking that key fields are not null
  if(req.body.user_id && req.body.keywords && req.body.description 
    && req.body.lat && req.body.lon !== ""){
    ITEM[newId] = {
      id: newId,
      user_id: req.body.user_id,
      keywords: req.body.keywords,
      description: req.body.description,
      image: req.body.image,
      lat: req.body.lat,
      lon: req.body.lon,
      date_from: date ,
      date_to: date
    }
    res.status(201).json(ITEM[newId])
  }
    else {   
      res.status(405).send("input fields missing")
    }
})

///GET
//Creates temp Array to push individual dictionary item too
//If Query item then clear array and find the queried item
app.get('/items', (req,res) => {
  var id = req.query.user_id;
  var obj;
  ItemList = []
  for (const value of Object.values(ITEM)) {
    ItemList.push(value)
  }
  /// If user gives a query param
  if(req.query.user_id){
    ItemList=[] // Clear item list
    for (const value of Object.values(ITEM))  //https://stackoverflow.com/questions/46374993/find-a-value-in-a-dictionary-with-a-certain-property
    {
      if (value.user_id == id) /// Pushes single item
      {
        obj = value;
        ItemList.push(obj) 
      }
    }
    }
    res.status(200).json(ItemList)
})

///Get item by ID
//Parse itemID as int
//Search data store for itemID
app.get('/item/:id' , (req,res) => {
  var itemID = parseInt(req.params.id)
  /// https://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object
  if(ITEM.hasOwnProperty(itemID)){
    res.json(ITEM[itemID])
  }
  else{
    res.status(404).send("Item not found")
  }
})

app.get('/', (req, res) => {
  res.send("Hello World")
})

///DELETE item
app.delete('/item/:id', (req,res) => {
  var itemID = parseInt(req.params.id)
  /// https://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object
  if(ITEM.hasOwnProperty(itemID)){
    delete ITEM[itemID]
    res.status(204).send("Ok")
  }
  else{
    res.status(404).send("Item not found")
  }  
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
process.on('SIGINT', function() {process.exit()})

