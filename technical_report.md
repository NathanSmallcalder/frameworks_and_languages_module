Technical Report
================

(intro)


Server Framework Features
-------------------------
## Express

### Routing

Express JS allows the user to use routing to define URLs to separate webpages by configuring the ending of a URL, the application then responds to a HTTP request method, with each route being able to have multiple request methods, which have separate functionality, and executed when the URL is matched.

```js
    app.post('/add', (req, res) =>{
    STORAGE.push(req.body)
    res.status(201).json(req.body)
    console.log(STORAGE)
    })
```

Routing enables the user to separate and utilize HTTP requests to provide different functionality per request,separating web traffic and providing multi-functionality to a request method. ???? Middleware functions are typically embedded to one or more route handlers, executing when a HTTP request is received by the API.

References
https://expressjs.com/en/guide/routing.html
https://expressjs.com/en/starter/basic-routing.html


### Middleware 

Middleware integrates pre and post processing into the requests and responses methods, allowing a method to be invoked before the client receives a response and after the client returns a response, providing functionality to manipulate response or request objects.

```js
  var cors = require('cors');
  app.use('*', cors())
```

By having access to the request and response objects, middle ware can be used for a variety of different tasks, being able to manipulate different features of the system;from error control to third party options, allowing the application to store a user session by utilizing cookies or enable cross origin resource sharing.

References
https://expressjs.com/en/guide/using-middleware.html
https://expressjs.com/en/guide/writing-middleware.html
https://reflectoring.io/express-middleware/

### Templating

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Server Language Features
-----------------------

### HasOwnProperty

JavaScript has a feature which allows the user to invoke the ```HasOwnProperty()``` method which can be called on an object to check whether the object contains an attribute, this method will return a boolean value if the object contains a given attribute that is parsed into the method.

```js
var itemID = parseInt(req.params.id)
  if(ITEM.hasOwnProperty(itemID)){
    res.json(ITEM[itemID])
  }
```
The ```HasOwnProperty()``` method will return true if the given property is an attribute within the object, even if the value is null or undefined, and can be called on most Objects, to see if a given object contains an attribute, which prevents unnessasary object loops to find a given variable.

References
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
https://stackoverflow.com/questions/9396569/what-is-property-in-hasownproperty-in-javascript

### Object Functionality

(Technical description of the feature - 40ish words - 1 mark)

```js
for (const value of Object.values(ITEM)) {
    ItemList.push(value)
  }
```
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

Client Framework Features
-------------------------

### Data Binding

(Technical description of the feature - 40ish words - 1 mark)
Vue uses A Document Object Model based templating implementation, meaning that variables declared in JavaScipt can be parsed and displayed as HTML elements by syncing the  to the JavaScript DOM.

(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 2)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 3)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Client Language Features
------------------------

### (name of Feature 1)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)

### (name of Feature 2)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Critique of Server/Client prototype
---------------------

### (name of Issue 1)

(A code snippet example demonstrating the feature - 1 mark)
(Explain why this pattern is problematic - 40ish words 1 mark)

### (name of Issue 2)

(A code snippet example demonstrating the feature - 1 mark)
(Explain why this pattern is problematic - 40ish words 1 mark)


Future Technology Suggestions
-----------------------------

### (name of technology/feature 1)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)


### (name of technology/feature 2)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)


### (name of technology/feature 3)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)
