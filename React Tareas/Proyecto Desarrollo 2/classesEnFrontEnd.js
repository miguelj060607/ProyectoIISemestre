function EjecutaAjax(verbo, url, dato) {
    return new Promise(function (resolve, reject) {
        try {
            let peticion = new XMLHttpRequest();
            peticion.open(verbo, url);
            peticion.setRequestHeader('Content-Type', 'application/json');
            peticion.onload = function () {
                if (peticion.status === 200) {
                    console.log(JSON.parse(peticion.response));
                    resolve(JSON.parse(peticion.response));
                    console.log(peticion);
                    quitarcargando();
                }
                else {
                    reject(new Error(peticion.statusText));
                }


            };
            peticion.onerror = function () {
                reject(new Error("Error de red"));

            };

            peticion.send(JSON.stringify(dato));
            muestracargando();
        }

        catch (err) {
            reject(err.message);
        }

    });
}

class _Metodosbasicos {
    constructor() {

    }
    Guardar(urlapiaconsumir, funcionajecutar) {


        EjecutaAjax("PUT", urlapiaconsumir, this).then(function (response) {
            console.log(response);
            funcionajecutar(response);
         


        },
            function (error) {
                console.error(error);
                alert(
                    error
                )
            }
        );



    }
    Modificar(urlapiaconsumir, funcionaejecutar) {

        EjecutaAjax("POST", urlapiaconsumir, this).then(function (response) {
            console.log(response);
          

            funcionaejecutar(response);
        },
            function (error) {
                console.error(error);
                alert(
                    response
                )
            }
        );


    }

    Eliminar(urlapiaconsumir, funcionaejecutar) {

        EjecutaAjax("DELETE", urlapiaconsumir, this).then(function (response) {
            console.log(response);
            funcionaejecutar(response);
        },
            function (error) {
                console.error(error);
                alert(
                    response
                )
            }
        );


    }


    Seleccionartodos(urlapiaconsumir, funcionaejecutar) {

        EjecutaAjax("GET", urlapiaconsumir, this).then(function (response) {
            console.log(response);
            funcionaejecutar(response);
        },
            function (error) {
                console.error(error);
                alert(error);
            }
        );


    }
}
class _estudiante extends _Metodosbasicos {


    constructor(
        carnet,
        correo,
        nombreCompleto,
        especialidad,
        seccion,
        foto,
        clave
    ) {
        super();
        this.carnet = carnet;
        this.correo = correo;
        this.nombreCompleto = nombreCompleto;
        this.especialidad = especialidad;
        this.seccion = seccion;
        this.foto = foto;
        this.clave = clave;
    
    }

    login(urlapiaconsumir, funcionajecutar) {

        EjecutaAjax("POST", urlapiaconsumir, this).then(function (response) {
            funcionajecutar(response)
        },
            function (error) {
                console.error(error);
                alert(
                    error
                )
            }
        );
    }
}

 class _tareas extends _Metodosbasicos {


     constructor(
    FECHA,
    DESCRIPCION
     ) {
         super();
         this.FECHA = FECHA;
         this.DESCRIPCION = DESCRIPCION;
     
    
    }

    CalificaCamiseta(urlapiaconsumir, funcionaejecutar) {

        EjecutaAjax("POST", urlapiaconsumir, this).then(function (response) {
            

            funcionaejecutar(response);
        },
            function (error) {
                console.error(error);
                alert(
                    response
                )
            }
        );


    }
 }

function muestracargando() {

    //input.prepend("<span id= 'msgcargando'>Cargando...</span>"); 

    var btn = document.createElement("span");   // Create a <button> element
    btn.innerHTML = "Cargando...<br><img src='/cargandogif' height='15px' />";
    btn.style = "margin: auto; position:absolute; left: 65%; top: 43%; align-items: center;";
    // Insert text
    btn.id = 'msgcargando';
    document.body.appendChild(btn);
}
function quitarcargando() {


    var element = document.getElementById("msgcargando"); // notice the change
    element.parentNode.removeChild(element);
}