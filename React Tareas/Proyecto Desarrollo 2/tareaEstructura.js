var mongoose =require('mongoose');

module.exports = mongoose.model('tarea', {

    nombreTarea:String,
    materiaTarea:String,
    fechaTarea:String,
    descripcionTarea:String,
    

});                                                                                         