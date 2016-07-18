var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({port: 3000 });

server.route({
    path: '/hello',
    method: 'GET',
    handler: function(req, res){
        res('hello world');
    }
});

server.start(function(){
    console.log("listening on " + server.info.uri);
})