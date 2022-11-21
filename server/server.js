const express = require('express')
var cors = require('cors');
const app = express()
const port = 8000

app.use(express.json());

app.use(cors({
  methods: ['GET','POST','DELETE','OPTIONS']
}))
ITEM = {
  1: {
    "id": 1,
    "user_id": "user1234",
    "keywords": ["hammer", "nails", "tools"],
    "description": "A hammer and nails set",
    "image": "https://www.placekitten.com/200/100",
    "lat": 1.10,
    "lon": 1.20,
    "date_from": "2022-11-22T08:22:39.067408",
    "date_to": "2022-11-22T08:22:39.067408"
  },
  3: {
    "id":3,
    "user_id": "user12",
    "keywords": ["hammer", "nails", "tools"],
    "description": "A hammer and nails set",
    "image": "https://www.placekitten.com/200/100",
    "lat": 1.10,
    "lon": 1.20,
    "date_from": "2022-11-22T08:22:39.067408",
    "date_to": "2022-11-22T08:22:39.067408"
  },
}

app.post('/item', (req,res) => {
  var newId = Object.keys(ITEM).length  + 1
  var date = new Date().toJSON().slice(0,10)
  ///Implement Improved ID method???
  if(ITEM.hasOwnProperty(newId)){
    newId = newId + 1
  }
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
    //console.log("Added")
    console.log(ITEM[newId])
    res.status(201).json(ITEM[newId])
  }
    else {   
      res.status(405).send("input fields missing")
    }
})

app.get('/items', (req,res) => {
  var id = req.query.user_id;
  var obj;
  ItemList = []
  console.log("called")
  for (const value of Object.values(ITEM)) {
    ItemList.push(value)
  }
  if(req.query.user_id){
    print(ItemList)
    ItemList=[]
    for (const value of Object.values(ITEM))
    {
      if (value.user_id == id) 
      {
        obj = value;
        ItemList.push(obj)
      }
    }
    }
    res.status(200).json(ItemList)
})

app.get('/item/:id' , (req,res) => {
  var itemID = parseInt(req.params.id)
  if(ITEM.hasOwnProperty(itemID)){
    res.json(ITEM[itemID])
  }
  else{
    res.status(404).send("Item not found")
  }
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.delete('/item/:id', (req,res) => {
  var itemID = parseInt(req.params.id)
  if(ITEM.hasOwnProperty(itemID)){
    console.log("DELETED")
    delete ITEM[itemID]
    res.status(204).send("Ok")
  }
  else{
    console.log("Not")
    res.status(404).send("Item not found")
  }  
  })

  ///Allows CORS all routes
app.use('*', cors())



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})

process.on('SIGINT', function() {process.exit()})

// https://livecodestream.dev/post/everything-you-should-know-about-javascript-dictionaries/
// https://stackoverflow.com/questions/46374993/find-a-value-in-a-dictionary-with-a-certain-property