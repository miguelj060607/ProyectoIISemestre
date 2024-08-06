const mongoose = require('mongoose');

module.exports = mongoose.model('estudiante', {

    carnet : String,
    correo : String,
    nombreCompleto : String,
    especialidad : String,
    seccion : String,
    foto : String,
    clave : String

});
