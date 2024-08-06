var Item = require('./estudianteEstructura');
const {createHash} = require('crypto')
const path = require('path');

var crypto = require('crypto');
var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
var key = 'password';

var cipher = crypto.createCipher(algorithm, key);

// Obtiene todos los objetos Estudiante de la base de datos
exports.getItem = function (req, res){
    
    //console.log(item)
    Item.find(
        function(err, item) {
            if (err)
                res.send(err)
                    res.json(item); // devuelve todos las Estudiantes en JSON       
                }
            );
}
exports.login = function (req, res) {
    var claveHash = createHash('sha256').update(req.body.clave).digest('base64');

    // console.log(Item)
    Item.find({ correo: req.body.correo, clave: claveHash },
        function (err, item) {
            if (err)
                res.send(err)
            if (item.length > 0) {
            
                var usuarioparacifrar = {};
              
                usuarioparacifrar.correo = item[0].correo;
               
                usuarioparacifrar.clave = item[0].clave;
                item[0].clave = cipher.update(JSON.stringify(usuarioparacifrar), 'utf8', 'hex') + cipher.final('hex');

            }
            res.json(item); 
        }
    );
}
exports.verificaparaKmiseta = function (req, res) {
    var decipher = crypto.createDecipher(algorithm, key);
    try {
        var objetousuariodescifrado = decipher.update(req.query.token, 'hex', 'utf8') + decipher.final('utf8');
        objetousuariodescifrado = JSON.parse(objetousuariodescifrado)
        console.log(objetousuariodescifrado)
        // console.log(Item)
        Item.find({ correo: objetousuariodescifrado.correo, clave: objetousuariodescifrado.clave },
            function (err, item) {
                if (err)
                    return (err)

                if (item.length > 0) {

                    res.sendfile(path.join(__dirname + '/tareas.html'))
                }
                else {
                    res.send("no andez jakiando")
                }
            }
        );
    }
    catch (error) {
        console.log(error)
        res.send("no te pazes de listillo")
    }

}

exports.verifica = function (correo, clave) {
   
    // console.log(Item)
    Item.find({ correo: correo, clave: clave },
        function (err, item) {
            if (err)
                return err
            if (item.length > 0) {
                return true
            }
            else {
                return false
            }
           
        }
    );
}

exports.setItem = function (req, res){
    //Creo el objeto Estudiante

    var claveHash=createHash('sha256').update(req.body.clave).digest('base64'); 
    // Base 64 convierte las cadenas de bytes en textor
        Item.create(
            {
                carnet : req.body.carnet,
                correo: req.body.correo,
                clave: claveHash,
                nombreCompleto: req.body.nombreCompleto,
                especialidad : req.body.especialidad,
                seccion : req.body.seccion,
                foto: req.body.foto
    
            },

            function(err, item) {
                if (err)
                    res.send(err);
                // Obtine y devuelve todas los estudiantes tras crear una de ellas

                Item.find(function(err, item) {
                    if (err)
                        res.send(err)
                    res.json(item);
                });
            });

    }

exports.updateItem = function(req, res){
    var claveHash=createHash('sha256').update(req.body.clave).digest('base64');
    Item.update( {_id : req.body.item_id},
        {
            $set:{
                carnet : req.body.carnet,
                correo: req.body.correo,
                clave: claveHash,
                nombreCompleto: req.body.nombreCompleto,
                especialidad : req.body.especialidad,
                seccion : req.body.seccion,
                foto: req.body.foto

            }
        },

        function(err, item) {
            if (err)
                res.send(err);
        

        Item.find(function(err, item) {
            if (err)
                res.send(err)
            res.json(item);
        });
    });
}

exports.removeItem = function(req, res){

    Item.remove({_id : req.query.item_id}, function (err, item){
        if(err)
            res.send(err);
        //Obtiene  y devuelve todas las personas tras borrar una de ellas

        Item.find(function (err, find){
            if(err)
                res.send(err)
            res.json(item);
        });

    });

}
exports.updateClave = function (req, res) {
   
    var claveHash = createHash('sha256').update(req.body.clave).digest('base64');
    var clavehashnueva = createHash('sha256').update(req.body.nuevaclave).digest('base64');
    console.log(req.body)
    Item.find({ _id: req.body.item_id, clave: claveHash },
        function (err, item) {
            if (err)
                res.send(err)
            if (item.length > 0) {
                console.log('si lo encontro')
                Item.update({ _id: req.body.item_id },
                    {
                        $set: {
                            clave: clavehashnueva,
                            foto: req.body.foto
                        }
                    },
                    function (err, item) {
                        if (err)
                            res.send(err);
                        // Obtine y devuelve todas las personas tras crear una de ellas
                        Item.find({ _id: req.body.item_id }, function (err, item) {
                            if (err)
                                res.send(err)
                            res.json(item);
                        });
                    });


            }
            else {

                res.json(item);

            }
        }
    );


}


