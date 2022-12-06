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

Middleware integrates pre and post processing into the requests and responses methods, allowing a method to be invoked before the client receives a response and after the client returns a response, providing functionality to manipulate response or request objects.???? Middleware functions are typically embedded to one or more route handlers, executing when a HTTP request is received by the API.

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

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Server Language Features
-----------------------

## Reflection

JavaScript uses reflection, which enables objects to look at owned properties and methods, this gives an advantage over using a static language, item properties can be stored dynamically, and can be accessed easily by using the ```HasOwnProperty()``` method which can be called on an object to check whether the object contains an attribute, enabling for a flexible solution rather than compiling errors using a static language.

```js
var itemID = parseInt(req.params.id)
  if(ITEM.hasOwnProperty(itemID)){
    res.json(ITEM[itemID])
  }
```
The ```HasOwnProperty()``` method will return true if the given property is an attribute within the object, even if the value is null or undefined, and can be called on most Objects, to see if a given object contains an attribute, which prevents unnessasary object loops to find a given variable, or a overcomplicated implementation of a static language.

References <br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty<br>
https://stackoverflow.com/questions/9396569/what-is-property-in-hasownproperty-in-javascript<br>
https://stackoverflow.com/questions/53170245/what-is-concept-of-reflection-in-javascript

## Object Functionality

(Technical description of the feature - 40ish words - 1 mark)

```js
for (const value of Object.values(ITEM)) {
    ItemList.push(value)
  }
```
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)

References<br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

Client Framework Features
-------------------------

## Data Binding

Vue uses A Document Object Model based templating implementation, meaning that variables declared in JavaScript are synced with the DOM and can be parsed and displayed as HTML elements by using the ```{{  }}``` syntax, the variable will be automatically updated if it is manipulated in the JavaScript. 
## need to edit

```html
<span>Message: {{ msg }} </span>
```

(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
Data binding allows for a synchronization of variables, which is 

References<br>
https://medium.com/js-dojo/exploring-vue-js-reactive-two-way-data-binding-da533d0c4554<br>
https://v1.vuejs.org/guide/syntax.html

## Event Binding

(Technical description of the feature - 40ish words - 1 mark)
Vue gives extra functionality to the binding of methods, instead of binding to a method name, methods can be invoked from an inline handler
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)

References<br>
https://vuejs.org/guide/essentials/event-handling.html#listening-to-events<br>
https://vuejs.org/guide/essentials/event-handling.html#accessing-event-argument-in-inline-handlers
## (name of Feature 3)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Client Language Features
------------------------

## (name of Feature 1)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)

## (name of Feature 2)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Critique of Server/Client prototype
---------------------

## CloneNode

```js		
const new_item_element = () => document.querySelector(`[data-page="items"] li`).cloneNode(true);
```
CloneNode() is used in the solution to render items, this can lead to inconsistent element IDs and raise a risk of contaminating object IDs with the duplicate value. Using a framework can benefit the way items as generated as most frameworks use data binding, which binds the data together at the source.

frameworks will allow for no ids (Data Binding)
difficult debug
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
