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

References
https://expressjs.com/en/guide/routing.html
https://expressjs.com/en/starter/basic-routing.html


## Middleware 

Middleware integrates pre and post processing into the requests and responses methods, allowing a method to be invoked before the client receives a response and after the client returns a response, providing functionality to manipulate response or request objects.

```js
  var cors = require('cors');
  app.use('*', cors())
```

By having access to the request and response objects, middleware can be used for a variety of different tasks, being able to manipulate different features of the system; from error control to third party options, allowing the application to store a user session by utilizing cookies or enable cross origin resource sharing.

References
https://expressjs.com/en/guide/using-middleware.html
https://expressjs.com/en/guide/writing-middleware.html
https://reflectoring.io/express-middleware/

## Templating

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Server Language Features
-----------------------

## HasOwnProperty

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

## Object Functionality

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

## Data Binding

Vue uses A Document Object Model based templating implementation, meaning that variables declared in JavaScript are synced with the DOM and can be parsed and displayed as HTML elements by using the ```{{  }}``` syntax, the variable will be automatically updated if it is manipulated in the JavaScript. 
## need to edit

```js
<span>Message: {{ msg }}</span>
```

(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
Data binding allows for a synchronization of variables, which is 

References
https://medium.com/js-dojo/exploring-vue-js-reactive-two-way-data-binding-da533d0c4554
https://v1.vuejs.org/guide/syntax.html

## Event Binding

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)

References
https://vuejs.org/guide/essentials/event-handling.html#listening-to-events

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
CloneNode() is used in the solution to render items, this can lead to inconsistent element IDs and raise a risk of contaminating object IDs with the duplicate value. 

frameworks will allow for no ids (Data Binding)
difficult debug

https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode

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

(Explain why this pattern is problematic - 40ish words 1 mark)
The only way to turn the server off is by unplugging it?

Future Technology Suggestions
-----------------------------

## Serverless Architecture

Serverless Architecture allows functions to be run via a service cloud provider, removing the need to remotely run and provide a hosted service all of the time, rather a function is called when a user requires a service. Serverless architecture allows for low latency transfers, as a cloud service is hosting the server which can be hosted globally and allow users to connect to a server closest to them. However, code is not often compatible with other cloud providers, leaving you locked in to one service provider without the ability to change.

https://www.datadoghq.com/knowledge-center/serverless-architecture/
https://martinfowler.com/articles/serverless.html

## NoSQL

(Description of a feature or tool - 40ish words - 1 mark)
NoSQL is a non-relation data storage system which does not require a fixed data model.
rigidness
loose
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)

## Static Generated Web Page

(Description of a feature or tool - 40ish words - 1 mark)
Static site generator can be used to generate full HTML pages based on templates 

(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)

While static webpages are simple HTML files that can load quickly, dynamic webpages require the execution of JavaScript code within the browser in order to render.???????

https://www.gatsbyjs.com/docs/glossary/static-site-generator/
https://www.cloudflare.com/en-gb/learning/performance/static-site-generator/
