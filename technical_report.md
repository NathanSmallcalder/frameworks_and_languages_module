Technical Report
================

(intro)


Server Framework Features
-------------------------

## Routing

Express JS allows the user to use routing to define URLs to separate webpages by configuring the ending of a URL, the application then responds to a HTTP request method, with each route being able to have multiple request methods, which have separate functionality, and executed when the URL is matched.

```js
    app.post('/add', (req, res) =>{
    STORAGE.push(req.body)
    res.status(201).json(req.body)
    console.log(STORAGE)
    })
```

Routing enables the user to separate and utilize HTTP requests to provide different functionality per request,separating web traffic and providing multi-functionality to a request method. 

References<br>
https://expressjs.com/en/guide/routing.html<br>
https://expressjs.com/en/starter/basic-routing.html<br>


## Middleware 

Middleware integrates pre and post processing into the requests and responses methods, allowing a method to be invoked before the client receives a response and after the client returns a response, providing functionality to manipulate response or request objects. Middleware functions are typically embedded to one or more route handlers, executing when a HTTP request is received.

```js
  var cors = require('cors');
  app.use('*', cors())
```

By having access to the request and response objects, middleware can be used for a variety of different tasks, being able to manipulate different features of the system; from error control to third party options, allowing the application to store a user session by utilizing cookies or enable cross origin resource sharing.

References<br>
https://expressjs.com/en/guide/using-middleware.html<br>
https://expressjs.com/en/guide/writing-middleware.html<br>
https://reflectoring.io/express-middleware/

## Templating

Templating can be used with in vue to serve static files in the application. When running the app, the templating engine instantiates variables within the file with data from the javascript file and converts the template into a html file to be rendered by the client.

```js
app.get('/home', (req, res) => {
  let Items = [
    {"id": 1,
    "user_id": "user1234",
    "keywords": ["hammer", "nails", "tools"],
    "description": "A hammer and nails set",
    "image": "https://placekitten.com/200/100",
    "lat": 1.10,
    "lon": 1.20,
    "date_from": "2022-11-22T08:22:39.067408",
    "date_to": "2022-11-22T08:22:39.067408" },
    {"id": 2,
    "user_id": "user1234",
    "keywords": ["hammer", "nails", "tools"],
    "description": "A hammer and nails set",
    "image": "https://placekitten.com/200/100",
    "lat": 1.10,
    "lon": 1.20,
    "date_from": "2022-11-22T08:22:39.067408",
    "date_to": "2022-11-22T08:22:39.067408" },
  ];
  res.render('home', { Items: Items });
});
```

```
<h2>Home page</h2>

<ul>
  <% Items.forEach((item) => { %>
  <li><%= item.id %></li>
  <% }); %>
</ul>
```

Templating minimizes the code bases and enables variables to be parsed directly into HTML to be viewed by the client, maximizing client side processing. Templating also gives the ability to provide a base template and expand multiple diffrent pages on the original layout, reducing duplicate code.

References <br>
https://expressjs.com/en/guide/using-template-engines.html<br>
https://www.tutorialsteacher.com/nodejs/template-engines-for-nodejs<br>
https://www.digitalocean.com/community/tutorials/nodejs-express-template-engines

Server Language Features
-----------------------

## Reflection

JavaScript uses reflection, which enables objects to look at owned properties and functions, this gives an advantage over using a static language, item properties can be stored dynamically, and can be accessed easily by using the ```HasOwnProperty()``` function which can be called on an object to check whether the object contains an attribute, enabling for a flexible solution rather than compiling errors using a static language.

```js
var itemID = parseInt(req.params.id)
  if(ITEM.hasOwnProperty(itemID)){
    res.json(ITEM[itemID])
  }
```

The ```HasOwnProperty()``` function will return true if the given property is an attribute within the object, even if the value is null or undefined, and can be called on most Objects, to see if a given object contains an attribute, which prevents unnessasary object loops to find a given variable, or a overcomplicated implementation of a static language.

References <br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty<br>
https://stackoverflow.com/questions/9396569/what-is-property-in-hasownproperty-in-javascript<br>
https://stackoverflow.com/questions/53170245/what-is-concept-of-reflection-in-javascript

## Mutability and Immutability

Objects and Arrays within JavaScript are mutable, after an object or array has been declared its properties or values can be changed. Other variable types in javascript are immutable, once they have been instantiated they can not be changed without creating a new value.

```js
    ///Immutable
    var String1 = "New String";
    var String2 = String1;
    String1 = "Variable has been changed";
    console.log(String1 === String2);
    //Mutable
```

Mutable objects prevent the program from re-allocating space on the same variable, allowing the program to alter the variable when needed. However other variables in JS are immutable, when creating a new variable they all require a new object for each unique value.

References<br>
https://developer.mozilla.org/en-US/docs/Glossary/Mutable <br>
https://developer.mozilla.org/en-US/docs/Glossary/Immutable <br>
https://en.proft.me/2013/11/24/advantages-and-disadvantages-immutable-objects-jav/<br>

Client Framework Features
-------------------------

## Interpolation

Vue uses Interpolation to insert javascript variables, attributes and raw HTML into HTML code using the ```{{  }}``` syntax, which will then display the javascript variable in plaintext, updating when the variable if it is manipulated in the JavaScript. 

```html
<div class="content">
    <p class="title is-4" data-field="id">ID: {{item.id}}</p>
	<p> user_id: {{user_id}}</p>
	<p> keywords: {{item.keywords}}</p>
	<p> description: {{item.description}}</p>
	<p> lat: {{item.lat}}</p>
	<p> lon: {{item.lon}}</p>
	<p>{{item.date_from}}</p>

    <p>{{ message.split('').reverse().join('') }}<p>
    
</div>
```
Interpolation allows for a synchronization of variables, which removes the need for extra functions that re-render variables for HTML. Interpolation also provides extra functionality to evoke Javascript functions and expressions inside of data bindings.

References<br>
https://medium.com/js-dojo/exploring-vue-js-reactive-two-way-data-binding-da533d0c4554<br>
https://v1.vuejs.org/guide/syntax.html

## List Rendering

Vue supports list rendering in html, which iterates through each item of an object, array or in range of a value, using the v-for syntax. List rendering provides loop functionality within a vue template, which is useful to iterate and display objects within HTML.

```html
 <li v-for="item in items">
 	<p> user_id: {{user_id}}</p>
	<p> keywords: {{item.keywords}}</p>
	<p> description: {{item.description}}</p>
	<p> lat: {{item.lat}}</p>
	<p> lon: {{item.lon}}</p>
	<p>{{item.date_from}}</p>
```
This prevents the over-engineering of JavaScript functions, to achieve this without Vue, a JavaScript function will have to be constructed which iterates through an item and returns a string which contains HTML and the variable to be displayed onto the HTML page, Vue avoids extra JavaScript function.

References<br>
https://v1.vuejs.org/guide/list.html<br>
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists

## Methods and Event Handling

Vue gives extra functionality to the binding of method, instead of binding to a method name, methods can be invoked from an inline JavaScript handler. JavaScript is then executed when the vue method is called when a user interacts with an element.

```html
</div>
	<button class="button is-danger" @click="deleteItem(item.id)" data-action="delete">Delete</button>
</div>
```
```js
    methods: {
            deleteItem(id){ 
                fetch(`${urlAPI}/item/${id}`, {
                    method: 'DELETE',
                })
            .then(()=>this.getItem())
        .catch(err => console.error(err));
        }
    }
```

Vue's method handling enables a event to change depending on the programs scenario or prevent a default event, which can be used to prevent reloading a page on a form submission. Key event modifiers can also be used to allow the program to listen to keyboard key inputs.

References<br>
https://blog.logrocket.com/deep-dive-vue-event-handling/<br>
https://vuejs.org/guide/essentials/event-handling

Client Language Features
------------------------

## IndexOf

IndexOf() can be called on an array to find the specific index of a given parameter which is parsed into the function . The function  uses a linear search on an array and returns the first matched value it finds.

```js
    const NumArray = [1, 2, 3, 4, 5];
    console.log(NumArray.indexOf(2)); 
    //Prints Position 1
```

IndexOf() allows the program to find a specific occurrence of a value in an array without iterating over the whole array, after the index is found, the object can be accessed using the object's index.

References<br>
https://medium.com/@nathanbell09/binary-search-vs-indexof-63651f91acb7

## Prototypical Inheritance

Instead of using class inheritance, JavaScript uses prototypical inheritance, where an object is a prototype of another object and can be used to add methods and properties to other objects.

```js

```

Prototypical inheritance allows an object to inherit from multiple different objects, providing the ability to reuse properties or methods from a JavaScript object to a new object through reference pointers.

References<br>
https://www.educative.io/blog/understanding-and-using-prototypal-inheritance-in-javascript<br>
<https://www.toptal.com/javascript/es6-class-chaos-keeps-js-developer-up>


Critique of Server/Client prototype
---------------------

## CloneNode

```js		
const new_item_element = () => document.querySelector(`[data-page="items"] li`).cloneNode(true);
```
CloneNode() is used in the solution to render items, this can lead to inconsistent element IDs and raise a risk of contaminating object IDs with the duplicate value. Using a framework can benefit the way items as generated as most frameworks use data binding, which binds the data together at the source.

References <br>
https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode<br>

## Server Running

```python		
def serve_app(func_app, port, host=''):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        s.bind((host, port))
        while True:
            s.listen()
            try:
                conn, addr = s.accept()
            except KeyboardInterrupt as ex:
                break
            with conn:
                    data = conn.recv(65535)
                    try:
                        request = parse_request(data)
                    except InvalidHTTPRequest as ex:
                        log.exception("InvalidHTTPRequest")
                        continue
                    while int(request.get('content-length', 0)) > len(request['body']):
                        request['body'] += conn.recv(65535).decode('utf8')

                    try:
                        response = func_app(request)
                    except Exception as ex:
                        log.error(request)
                        traceback.print_exc()
                        response = {'code': 500, 'body': f'<PRE>{traceback.format_exc()}</PRE>'}
                    log.info(f"{addr} - {request.get('path')} - {response.get('code')} {response.get('Content-length')}")
                    conn.send(encode_response(response))
```

To serve the app, the prototype uses While True:, which does keep the server active, but there is no function to stop the loop running, which means that the server can only be stopped by unplugging or terminating the program, which could lead to data loss. 

Future Technology Suggestions
-----------------------------

## Serverless Architecture

Serverless Architecture allows functions to be run via a service cloud provider, removing the need to self-host the service, rather a function is executed on demand when needed. Serverless architecture allows for low latency transfers, as a cloud service is hosting the server which can be hosted globally and allow users to connect to a server closest to them. However, solution is not often compatible with other cloud providers, leaving you locked in to one service provider without the ability to change.

References <br>
https://www.datadoghq.com/knowledge-center/serverless-architecture/<br>
https://martinfowler.com/articles/serverless.html<br>

## NoSQL

NoSQL refers to non-relational data storage system which does not require a fixed data model, allowing for more dynamic data storage for scenarios that require a extensive amount of data storage. NoSQL provides a loose and flexible schema which can scale by storing grouped values against a singular key. However, NoSQL lacks a standardized language, depending on the type of NoSQL database used, the language and syntax used will be different, which could make initial development challenging.

References <br>
https://www.mongodb.com/nosql-explained<br>
https://www.datastax.com/blog/sql-vs-nosql-pros-cons<br>

## Static Generated Web Page

Static site generator can be used to generate full HTML pages based on templates using pre-rendered layouts which are cached and served ahead of time to the user via a content delivery network, which pre-renders the site server side. Static site generator removes the need to render the site per GET request, instead the site is rendered once server-side, requiring no dependencies, and returned to the user ahead of time.

References <br>
https://www.gatsbyjs.com/docs/glossary/static-site-generator/<br>
https://www.cloudflare.com/en-gb/learning/performance/static-site-generator/<br>
https://teleporthq.io/blog/what-is-a-static-site-generator<br>
