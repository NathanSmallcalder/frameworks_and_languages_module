'use strict';

const Hapi = require('@hapi/hapi');

let storage = []

const init = async () => {

    const server = Hapi.server({
        port: 8000,
        host: '0.0.0.0'
    });

    
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            request.response.stream('/')
        }
    });

    server.route({
        method: 'GET',
        path: '/items',
        handler: (request, reply) => {
            return h.response(storage).code(201)
        }
    });

    server.route({
        method: 'POST',
        path: '/item',
        handler: (request, h) => {
            var payload = request.payload
            storage.push(payload)
            console.log(storage)
            return h.response(storage).code(201)
        }
    });

    server.route({
        method: 'DELETE',
        path: '/item/{user_id}',
        handler: (request, h) => {
            let id = request.params.user_id
            if ([...storage.filter((storage)=>storage.user_id != id)])
            {
                console.log("eeee")
                return h.response(json.parse('{}').code(404))
            }
            storage = [...storage.filter((storage)=>storage.user_id != id)]
            console.log('deleted', storage)
            return h.response(JSON.parse('{}')).code(201)
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
