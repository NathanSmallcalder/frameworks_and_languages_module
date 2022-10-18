'use strict';

const Hapi = require('@hapi/hapi');
const Path = require('path');
const { stopCoverage } = require('v8');

// create new server instance
const server = new Hapi.Server({  
    host: '0.0.0.0',
    port: 8000
})
let storage = []

async function liftOff () {  
  await server.register({
    plugin: require('inert')
  })
  await server.start()
  console.log('Server started at: ' + server.info.uri)
  process.on('SIGINT', function() {process.exit()})
}

server.route({  
    method: 'GET',
    path: '/',
    handler: (request, h) => {

    }
  })
  
  server.route({
    method: 'POST',
    path: '/item',
    handler: (request, h) => {
        var payload = request.payload
        storage.push(payload)
        return h.response(payload).code(201)
    }
});

  server.route({
    method: 'GET',
    path: '/items',
    handler: (request, reply) => {
        return reply.response(storage).code(201)
    }
});

server.route({
    method: 'DELETE',
    path: '/item/{id}',
    handler: (request, h) => {
        let id = request.params.user_id;
        storage = [...storage.filter((storage)=>storage.user_id != id)]
        console.log(storage)
        console.log('deleted', storage)
        return h.response(JSON.parse('{}')).code(201)

}});

liftOff();