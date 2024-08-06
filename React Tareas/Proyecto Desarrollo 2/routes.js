var controladorEstudiante = require('./controladorEstudiante');
var controladorTareas = require('./controladorTareas');
const path = require('path')
const cors = require('cors')

module.exports = function(app){
  
    app.use(cors())

    app.get('/api/estudiante',controladorEstudiante.getItem)
    app.get('/api/tarea',controladorTareas.getItem)

    app.put('/api/estudiante',controladorEstudiante.setItem)
    app.put('/api/tarea',controladorTareas.setItem)

    app.post('/api/estudiante',controladorEstudiante.updateItem)
    app.post('/api/tarea',controladorTareas.updateItem)

    app.post('/login',controladorEstudiante.login);
    app.post('/api/estudiante/cambiaClave', controladorEstudiante.updateClave); 


    app.delete('/api/estudiante',controladorEstudiante.removeItem)
    app.delete('/api/tarea',controladorTareas.removeItem)


    app.get('/formulario',
    function(req, res){
        res.sendfile(path.join(__dirname + '/registroEstudiante.html'))
    });

    app.get('/formulariojs',
    function(req, res){
        res.sendfile(path.join(__dirname + '/registroEstudiante.js'))
    });

    app.get('/formulariocss',
    function(req, res){
        res.sendfile(path.join(__dirname + '/registroEstudiante.css'))
    });

    app.get('/classesFrontEndjs',
    function(req, res){
        res.sendfile(path.join(__dirname + '/classesEnFrontEnd.js'))
    });

    app.get('/login',
    function(req, res){
        res.sendfile(path.join(__dirname + '/login.html'))
    });

    app.get('/logincss',
    function(req, res){
        res.sendfile(path.join(__dirname + '/login.css'))
    });

    app.get('/cargandogif',
    function(req, res){
        res.sendfile(path.join(__dirname + '/cargando.gif'))
    });

    app.get('/logocedes',
    function(req, res){
        res.sendfile(path.join(__dirname + '/logocedes.png'))
    });

    app.get('/mostrarcontrasenajs',
    function(req, res){
        res.sendfile(path.join(__dirname + '/mostrarcontrasena.js'))
    });

    app.get('/invitacion',
    function(req, res){
        res.sendfile(path.join(__dirname + '/invitacion.png'))
    });



    app.get('/menu',
    function(req, res){
        res.sendfile(path.join(__dirname + '/index.html'))
    });
    app.get('/bootstrap',
    function(req, res){
        res.sendfile(path.join(__dirname + '/bootstrap.min.css'))
    });
    app.get('/fontawEsome',
    function(req, res){
        res.sendfile(path.join(__dirname + '/fontawesome.min.css'))
    });
    app.get('/templatemo',
    function(req, res){
        res.sendfile(path.join(__dirname + '/templatemo.css'))
    });

    app.get('/camisa',
    function(req, res){
        res.sendfile(path.join(__dirname + '/camisa.png'))
    });

    app.get('/sudadera',
    function(req, res){
        res.sendfile(path.join(__dirname + '/sudadera.png'))
    });

    app.get('/bootstrapp',
    function(req, res){
        res.sendfile(path.join(__dirname + '/bootstrap.js'))
    });

    app.get('/jquery1',
    function(req, res){
        res.sendfile(path.join(__dirname + '/jquery1.js'))
    });

    app.get('/jquery2',
    function(req, res){
        res.sendfile(path.join(__dirname + '/jquery2.js'))
    });

    app.get('/fa-brands-400.svg',
    function(req, res){
        res.sendfile(path.join(__dirname + '/fa-brands-400.svg'))
    });

    app.get('/fa-brands-400.woff2',
    function(req, res){
        res.sendfile(path.join(__dirname + '/fa-brands-400.woff2'))
    });

    app.get('/fa-solid-900.svg',
    function(req, res){
        res.sendfile(path.join(__dirname + '/fa-solid-900.svg'))
    });

    app.get('/fa-solid-900.ttf',
    function(req, res){
        res.sendfile(path.join(__dirname + '/fa-solid-900.ttf'))
    });

    app.get('/fa-solid-900.woff2',
    function(req, res){
        res.sendfile(path.join(__dirname + '/fa-solid-900.woff2'))
    });

    app.get('/tareas',
    controladorEstudiante.verificaparaKmiseta
);


    app.get('/tareas',
    function(req, res){
        res.sendfile(path.join(__dirname + '/tareas.html'))
    });

    app.get('/vote',
    function(req, res){
        res.sendfile(path.join(__dirname + '/vote.JPG'))
    });

 
    


    app.get('/tareasEstructuraJs',
    function(req, res){
        res.sendfile(path.join(__dirname + '/tareasEstructura.js'))
    });

    app.get('/controladorTareasJs',
    function(req, res){
        res.sendfile(path.join(__dirname + '/controladorTareas.js'))
    });
    

    app.get('/index2',
    function(req, res){
        res.sendfile(path.join(__dirname + '/controladorTareas.js'))
    });
    

}