// Importación del módulo React y Component desde la biblioteca 'react'
import React, { Component } from 'react';
// Importación del archivo CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

import  { Link } from 'react-router-dom'
import { withRouter } from './withRouter'
import Tabladetareas from './tabladetareas'
import Navegacion from './navegacion'
// Definición del componente Formularioregistrodecliente que extiende de Component

class tarea extends Component {
	
	// Estado inicial del componente
	state = {
		// Objeto Cliente con sus campos iniciales
		tarea: {
			item_id : "",
			id : "",
			nombreTarea:"",
			materiaTarea:"",
			fechaTarea:"",
			descripcionTarea:"",             // Array vacío destinado a almacenar votos relacionados con la tarea

		},
		estilomsgdecarga: { visibility: 'collapse' }, // Estilo para mostrar el mensaje de carga
		tareasactuales: [], // Lista de clientes actuales
		

		modoedicion : false
	}
	componentDidMount() {
		this.cargatodaslastareas();
	}
	// M�todo de renderizado del componente
	render() {
	
		return (
			// Fragmento de React para envolver los elementos sin necesidad de un contenedor adicional
			<React.Fragment>
				<Navegacion/>

				<style>
					{`
					 body {
						font-family: "Poppins", sans-serif;
				  height: 100vh;
					}
					#task-form {
						-webkit-border-radius: 10px 10px 10px 10px;
				  border-radius: 10px 10px 10px 10px;
				  background: #fff;
				
				  width: 100%;
				  max-width: 1000px;
				  position: relative;
				 
				  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
				  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
				  text-align: center;
				  padding: 50px; /* Aumentar el relleno en todas las direcciones */
					margin: 0 auto; /* Centrar el formulario horizontalmente */
					}
					h1{
						 text-align: center;
				  color: #1b8028;
				  font-weight: bold;
				  text-transform: capitalize;
				  letter-spacing: 2px;
				  font-family: 'Roboto', sans-serif;
				  font-size: 48px !important;
				  font-weight: 400 !important;
					}
					label {
					display: inline-block;
					margin-bottom: 5px;
					font-size: 16px;
					font-family: 'Roboto', sans-serif;
					color: #0d0d0d;
					width: 100%;
					padding: 15px 32px;
					text-align: center;
					text-decoration: none;
					border: none;
					border-radius: 5px;
					transition: all 0.5s ease-in-out;
					box-sizing: border-box; /* Asegura que el padding se incluya en el ancho total */
				}
				
				label:hover {
					background-color: #fff;
					border-color: none;
				}
					input[type="text"], select {
						background-color: #f6f6f6;
				  border: none;
				  color: #0d0d0d;
				  padding: 15px 32px;
				  text-align: center;
				  text-decoration: none;
				  display: inline-block;
				  font-size: 16px;
				  margin: 5px;
				  width: 85%;
				  border: 2px solid #f6f6f6;
				  -webkit-transition: all 0.5s ease-in-out;
				  -moz-transition: all 0.5s ease-in-out;
				  -ms-transition: all 0.5s ease-in-out;
				  -o-transition: all 0.5s ease-in-out;
				  transition: all 0.5s ease-in-out;
				  -webkit-border-radius: 5px 5px 5px 5px;
				  border-radius: 5px 5px 5px 5px;
				  font-family: 'Roboto', sans-serif;
				  letter-spacing: 1px;
					}
				

					input[type="date"], select {
						background-color: #f6f6f6;
				  border: none;
				  color: #0d0d0d;
				  padding: 15px 32px;
				  text-align: center;
				  text-decoration: none;
				  display: inline-block;
				  font-size: 16px;
				  margin: 5px;
				  width: 85%;
				  border: 2px solid #f6f6f6;
				  -webkit-transition: all 0.5s ease-in-out;
				  -moz-transition: all 0.5s ease-in-out;
				  -ms-transition: all 0.5s ease-in-out;
				  -o-transition: all 0.5s ease-in-out;
				  transition: all 0.5s ease-in-out;
				  -webkit-border-radius: 5px 5px 5px 5px;
				  border-radius: 5px 5px 5px 5px;
				  font-family: 'Roboto', sans-serif;
				  letter-spacing: 1px;
					}
				
					input[type=text]:focus,
				{
				  background-color: #fff;
				  border: none;
				  border-bottom: 2px solid #4bcc59;
				}
				
				input[type=text]:placeholder,
				input[type=date] {
				  color: #cccccc;
				  
				}
				input[type=date]:placeholder,
				input[type=date] {
				  color: #cccccc;
				  
				}
				  
				input[type="text"], input[type="date"] {
					/* Otras propiedades */
					outline: none; /* Eliminar el borde de foco */
				}
				button {
						background-color: #46ba4f;
				  border: none;
				  color: white;
				  text-align: center;
				  text-decoration: none;
				  display: inline-block;
				  text-transform: uppercase;
				  font-size: 13px;
				  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
				  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
				  -webkit-border-radius: 5px 5px 5px 5px;
				  border-radius: 5px 5px 5px 5px;
				  margin: 5px 20px 40px 20px;
				  -webkit-transition: all 0.3s ease-in-out;
				  -moz-transition: all 0.3s ease-in-out;
				  -ms-transition: all 0.3s ease-in-out;
				  -o-transition: all 0.3s ease-in-out;
				  transition: all 0.3s ease-in-out;
				  font-family: 'Roboto', sans-serif;
				  padding: 10px 40px; /* Reducir el relleno */
					font-size: 12px; /* Reducir el tamaño de la fuente */
					}
				
					button:hover {
				  background-color: #16a62a;
				}
					.delete-btn {
						background-color: #f44336;
					}
					.delete-btn:hover {
						background-color: #f82516;
					}
					button.edit {
						background-color: #ffa500; /* Color naranja */
					}
					button.delete, button.edit {
					/* Otras propiedades */
					padding: 8px 20px; /* Reducir el relleno */
					font-size: 10px; /* Reducir el tamaño de la fuente */
				}
				
					.task {
						margin-bottom: 10px;
						padding: 10px;
						background-color: #f2f2f2;
						border-radius: 4px;
						display: flex;
						justify-content: space-between; /* Alineación a la derecha */
						align-items: center;
					}
					.task-text {
						margin-right: auto; /* Empuja el texto a la izquierda */
					}
					
					.fadeInDown {
				  -webkit-animation-name: fadeInDown;
				  animation-name: fadeInDown;
				  -webkit-animation-duration: 1s;
				  animation-duration: 1s;
				  -webkit-animation-fill-mode: both;
				  animation-fill-mode: both;
				  
				}
				
				
				@-webkit-keyframes fadeInDown {
				  0% {
					opacity: 0;
					-webkit-transform: translate3d(0, -100%, 0);
					transform: translate3d(0, -100%, 0);
				  }
				  100% {
					opacity: 1;
					-webkit-transform: none;
					transform: none;
				  }
				}
				
				@keyframes fadeInDown {
				  0% {
					opacity: 0;
					-webkit-transform: translate3d(0, -100%, 0);
					transform: translate3d(0, -100%, 0);
				  }
				  100% {
					opacity: 1;
					-webkit-transform: none;
					transform: none;
				  }
				}
				#eliminar-todas {
					display: block;
					margin: 0 auto; /* Esto centra el botón horizontalmente */
				}
				
				/* Simple CSS3 Fade-in Animation */
				@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
				@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
				@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
				
				.taskButton {
					background-color: #46ba4f;
					border: none;
					color: white;
					padding: 15px 80px;
					text-align: center;
					text-decoration: none;
					display: inline-block;
					text-transform: uppercase;
					font-size: 13px;
					-webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
					box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
					-webkit-border-radius: 5px;
					border-radius: 5px;
					margin: auto;
					-webkit-transition: all 0.3s ease-in-out;
					-moz-transition: all 0.3s ease-in-out;
					-ms-transition: all 0.3s ease-in-out;
					-o-transition: all 0.3s ease-in-out;
					transition: all 0.3s ease-in-out;
					font-family: 'Roboto', sans-serif;
				  }
				  
				  .taskButton:hover {
					background-color: #16a62a;
				  }
				  
				  .taskButton:active {
					-moz-transform: scale(0.95);
					-webkit-transform: scale(0.95);
					-o-transform: scale(0.95);
					-ms-transform: scale(0.95);
					transform: scale(0.95);
				  }
				  
				


				  /* Footer */
#tempaltemo_footer a { color: #dcdde1;}
#tempaltemo_footer a:hover { color: #16a62a;}


#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}
.bg-green {
  background-color: #12521B; /* Cambia este valor por el tono de verde que desees */
}
.bg-black {
  background-color: green; /* Cambia este valor por el color de fondo deseado */
}
				`}
				</style>
				<div className="wrapper fadeInDown">
        <div id="task-form">
          <h1 className="active">Administrador de Tareas</h1>
          <form id="form">

		  <label htmlFor="nombre">Nombre de la Tarea:</label>
		  <input
              type="text"
              id="nombreTarea"
              name="nombre"
              placeholder="Ingrese el nombre de la tarea"
              value={this.state.tarea.nombreTarea}
              onChange={(evt) => this.updateInputValue(evt)}
            />
            <label htmlFor="description">Descripción de la Tarea:</label>
            <input
              type="text"
              id="descripcionTarea"
              name="description"
              placeholder="Ingrese la descripción de la tarea"
              value={this.state.tarea.descripcionTarea}
              onChange={(evt) => this.updateInputValue(evt)}
            />

			<label htmlFor="materia">Materia de la Tarea:</label>
            <input
              type="text"
              id="materiaTarea"
              name="materia"
              placeholder="Ingrese la matera de la tarea"
              value={this.state.tarea.materiaTarea}
			  onChange={(evt) => this.updateInputValue(evt)}
            />

            <label htmlFor="fecha">Día de la Semana:</label>
			<input
			type="date"
			id="fechaTarea"
			name="fecha"
			/>
          
		
            <br/><br/>

        <input
          type="button"
          style={{ margin: "auto", display: "flex" }}
          value={this.state.modoedicion ? "Modificar" : "Guardar"}
          onClick={this.state.modoedicion ? () => this.modificartarea() : () => this.guardartarea()}
          className="taskButton"
        />
      
          </form>
        </div>
      </div>
				<br></br>
				<br></br>
				<br></br>
				
				<hr></hr>
				<div style={{margin:"auto", display:"flex"}}><Tabladetareas funcionparamodificar={this.funcionquemodifica} tipo="tabla" tareasactualespadre={this.state.tareasactuales} ></Tabladetareas></div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
				<footer className="bg-green" id="tempaltemo_footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4 pt-5">
        <h2 className="h2c text-light border-bottom pb-3 border-light">Información Adicional</h2>
        <ul className="list-unstyled text-light footer-link-list">
          <li>
            <i className="fas fa-map-marker-alt fa-fw"></i>
            VWQ7+Q32, Concepción Arriba de, Alajuelita
          </li>
          <li>
            <i className="fa fa-phone fa-fw"></i>
            <a className="text-decoration-none" href="tel:010-020-0340">8888-8888</a>
          </li>
          <li>
            <i className="fa fa-envelope fa-fw"></i>
            <a className="text-decoration-none" href="mailto:infodiaryworks@gmail.com">infodiaryworks@gmail.com</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 pt-5">
        <h2 className="h2c text-light border-bottom pb-3 border-light">Ubicación</h2>
        <p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7861.050598585387!2d-84.0942045!3d9.8901339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e2d990cbf34f%3A0xee630299d482996e!2sConcepci%C3%B3n%20Arriba%20de%20Alajuelita!5e0!3m2!1ses-419!2scr!4v1709655697719!5m2!1ses-419!2scr" width="100%" height="200" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </p>
      </div>
      <div className="col-md-4 pt-5">
        <h2 className="h2c text-light border-bottom pb-3 border-light">DiaryWorks</h2>
        <ul className="list-unstyled text-light footer-link-list">
          <li><a className="text-decoration-none" href="../login">Iniciar Sesión</a></li>
          <li><a className="text-decoration-none" href="../registro">Registrarse</a></li>
          <li><a className="text-decoration-none" href="../tarea">Tareas</a></li>
          <li><a className="text-decoration-none" href="../carrusel">Carrusel</a></li>
          <li><a className="text-decoration-none" href="../perfil">Perfil</a></li>

        </ul>
      </div>
    </div>
  </div>
  <div className="bg-black">
    <div className="container">
      <div className="row pt-2">
        <div className="col-12">
          <p className="text-left text-light">
            © 2024 Desarrollo Web. Todos los derechos son reservados.
            | Hecho por Miguel Velazquez
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
			</React.Fragment>
		);
	}

	

	
	


	updateInputValue(evt) {
		// Crear un objeto local para almacenar los datos del cliente
		var tarealocal = new Object();

		// Copiar los datos del estado actual del cliente al objeto local
		tarealocal = this.state.tarea;

		// Identificar el campo de entrada que ha cambiado y actualizar el estado correspondiente del cliente
		switch (evt.target.id) {
			case "nombreTarea":
				tarealocal.nombreTarea = evt.target.value
				break;
			case "descripcionTarea":
				tarealocal.descripcionTarea = evt.target.value
				break;
			case "materiaTarea":
				tarealocal.materiaTarea = evt.target.value
				break;
			case "fechaTarea":
				tarealocal.fechaTarea = evt.target.value
				break;
			
		}

		// Actualizar el estado del cliente con los nuevos valores de los campos
		this.setState({
			tarea: tarealocal
		});
		console.log(this.state.tarea)
	}

	guardartarea = () => {
		var tarealocal = new Object();

		// Copiar los datos del estado actual del cliente al objeto local
		tarealocal = this.state.tarea;
		
		var estilolocal = { visibility: 'visible' }
		// Actualizar el estado para mostrar el mensaje de carga
		this.setState({ estilomsgdecarga: estilolocal })

		const Url = 'http://localhost:8080/api/tarea';

		// Configuraci�n de la solicitud HTTP
		const requestMetadata = {
			method: 'PUT',  // M�todo de la solicitud (en este caso, PUT para actualizar)
			headers: {
				'Content-Type': 'application/json'  // Tipo de contenido de la solicitud
			},
			body: JSON.stringify(tarealocal)  // Convertir el objeto cliente a JSON y enviarlo en el cuerpo de la solicitud
		};
		// Enviar la solicitud fetch al servidor
		fetch(Url, requestMetadata)
			// Manejar la respuesta JSON
			.then(res => res.json())
			// Procesar los datos del cliente actualizados recibidos del servidor
			.then(tareas => {
				// Imprimir los datos del cliente actualizados en la consola
				console.log(tareas)
				// Actualizar el estado con los clientes actuales recibidos del servidor
				this.setState({ tareasactuales: tareas })
				// Mostrar un mensaje de alerta indicando que el cliente ha sido guardado exitosamente
				alert("Guardado");
				// Ocultar el mensaje de carga al completarse la operaci�n
				estilolocal = { visibility: 'collapse' }
				this.setState({ estilomsgdecarga: estilolocal })
			});



	}

	modificartarea = () => {
		var tarealocal = new Object();

		// Copiar los datos del estado actual del cliente al objeto local
		tarealocal = this.state.tarea;
		tarealocal.item_id = tarealocal._id
		var estilolocal = { visibility: 'visible' }
		// Actualizar el estado para mostrar el mensaje de carga
		this.setState({ estilomsgdecarga: estilolocal })

		const Url = 'http://localhost:8080/api/tarea';

		// Configuraci�n de la solicitud HTTP
		const requestMetadata = {
			method: 'POST',  // M�todo de la solicitud (en este caso, PUT para actualizar)
			headers: {
				'Content-Type': 'application/json'  // Tipo de contenido de la solicitud
			},
			body: JSON.stringify(tarealocal)  // Convertir el objeto cliente a JSON y enviarlo en el cuerpo de la solicitud
		};
		// Enviar la solicitud fetch al servidor
		fetch(Url, requestMetadata)
			// Manejar la respuesta JSON
			.then(res => res.json())
			// Procesar los datos del cliente actualizados recibidos del servidor
			.then(tareas => {
				// Imprimir los datos del cliente actualizados en la consola
				console.log(tareas)
				// Actualizar el estado con los clientes actuales recibidos del servidor
				this.setState({ tareasactuales: tareas })
				// Mostrar un mensaje de alerta indicando que el cliente ha sido guardado exitosamente
				alert("Modificado");
				// Ocultar el mensaje de carga al completarse la operaci�n
				estilolocal = { visibility: 'collapse' }
				this.setState({ estilomsgdecarga: estilolocal })
			});



	}

	cargatodaslastareas = () => {
		
		var estilolocal = { visibility: 'visible' }
		// Actualizar el estado para mostrar el mensaje de carga
		this.setState({ estilomsgdecarga: estilolocal })

		const Url = 'http://localhost:8080/api/tarea';

		// Configuraci�n de la solicitud HTTP
		const requestMetadata = {
			method: 'GET',  // M�todo de la solicitud (en este caso, PUT para actualizar)
			headers: {
				'Content-Type': 'application/json'  // Tipo de contenido de la solicitud
			}
		};
		// Enviar la solicitud fetch al servidor
		fetch(Url, requestMetadata)
			// Manejar la respuesta JSON
			.then(res => res.json())
			// Procesar los datos del cliente actualizados recibidos del servidor
			.then(tareas => {
				// Imprimir los datos del cliente actualizados en la consola
				console.log(tareas)
				// Actualizar el estado con los clientes actuales recibidos del servidor
				this.setState({
					tareasactuales: tareas
					
				})
				// Mostrar un mensaje de alerta indicando que el cliente ha sido guardado exitosamente
			
				estilolocal = { visibility: 'collapse' }
				this.setState({ estilomsgdecarga: estilolocal })
			});



	}


	funcionquemodifica = (objetotipotarea) => {
		this.setState({ tarea: objetotipotarea, modoedicion: true })



	}

}

// Exportar el componente Formularioregistrodecliente para su uso en otros archivos
export default tarea;