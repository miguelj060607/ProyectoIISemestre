// Importación del módulo React y Component desde la biblioteca 'react'
import React, { Component } from 'react';
// Importación del archivo CSS de Bootstrap para estilos predefinidos
import 'bootstrap/dist/css/bootstrap.css';
// Importación del componente withRouter desde './withRouter' para el enrutamiento
import { withRouter } from './withRouter';
// Importación del componente Perfildeestudiante desde './perfildeestudiante' para mostrar los datos del estudiante
import Perfildeestudiante from './perfildeestudiante';


// Definición del componente Datosdeestudiante que extiende de Component
class Cambiadatosdeestudiante extends Component {

	// Estado inicial del componente
	state = {
		// Objeto Cliente para almacenar los datos del estudiante
		estudiante: {
			
			clave: "",
			nuevaclave: "", // Campo para la nueva contraseña del cliente (tipo String)
			nuevaclave2: "" ,// Campo para confirmar la nueva contraseña del cliente (tipo String)

		},
		// Estilo para mostrar un mensaje de carga
		estilomsgdecarga: { visibility: 'collapse' },
		// Objeto para almacenar los datos del estudiante logueado
		estudiantelogueado: {}
	}

	// Método que se ejecuta después de que el componente se monta en el DOM
	componentDidMount() {
		// Obtener los datos del estudiante logueado del almacenamiento local
		this.state.estudiantelogueado = JSON.parse(localStorage.getItem("token"));
		// Crear un objeto local para almacenar los datos del estudiante
		let objetolocal = this.state.estudiante;
		// Asignar la URL de la foto del estudiante logueado al campo 'foto' del objeto local
		objetolocal.foto = JSON.parse(localStorage.getItem('token')).foto;
		// Actualizar el estado con el nuevo objeto local que contiene la foto del estudiante
		this.setState({
			estudiante: objetolocal
		});
	}

	// Método de renderizado del componente
	render() {
		// Estilo para la imagen de perfil del estudiante
		const inputStyleimg = { border_radius: '50%', cursor: 'pointer', width: '100px' };
	
		// Devolver el componente
		return (
			// Fragmento de React para envolver los elementos sin necesidad de un contenedor adicional
			<React.Fragment>
				{/* Componente Perfildeestudiante para mostrar los datos del estudiante */}
				<Perfildeestudiante  />
				<br />
				
				{/* Título del formulario */}
				<h2>Cambie sus datos</h2>

				{/* Contenedor del formulario */}
				<div style={this.state.estilomsgdecarga}> Cargando...</div>
				<div className="row">
					<div className="col">
						<div className="mb-3">
							{/* Campo para la clave actual */}
							<label htmlFor="clave" className="form-label">Clave actual</label>
							<input type="password" onChange={evt => this.updateInputValue(evt)} className="form-control" placeholder="Escriba su actual clave" id="claveactual" />
						</div>
						<div className="mb-3">
							{/* Campo para la nueva clave */}
							<label htmlFor="clave" className="form-label">Nueva Clave</label>
							<input type="password" onChange={evt => this.updateInputValue(evt)} className="form-control" placeholder="Escriba su nueva clave" id="clavenueva1" />
						</div>
						<div className="mb-3">
							{/* Campo para confirmar la nueva clave */}
							<label htmlFor="clave" className="form-label">Confirme su nueva Clave</label>
							<input type="password" onChange={evt => this.updateInputValue(evt)} className="form-control" placeholder="Escriba su nueva clave confirmar" id="clavenueva2" />
						</div>
						

					</div>
				</div>

				{/* Separador horizontal */}
				<hr />
				{/* Botón para cambiar los datos del estudiante */}
				<button type="button" onClick={() => this.modificar()} className="btn btn-primary">Cambiar</button>
			</React.Fragment>
		);
	};

	// Método que maneja el cambio en la entrada de archivo
	_onChange = async (e) => {
		// Crear un objeto local para almacenar los datos del estudiante
		var estudiantelocal = new Object();

		// Copiar los datos del estado actual del estudiante al objeto local
		estudiantelocal = this.state.estudiante;

		
				
				// Actualizar el estado del estudiante con el nuevo objeto local que contiene la imagen convertida
				this.setState({
					estudiante: estudiantelocal,
				});
			
		};
	

	// Función para convertir un archivo a formato base64
	convertBase64 = (file) => {
		// Devolver una promesa que resuelve la conversión del archivo a base64
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			// Cuando la lectura del archivo se completa con éxito
			fileReader.onload = () => {
				// Resolver la promesa con el resultado de la conversión a base64
				resolve(fileReader.result);
			}
			// Si ocurre un error durante la lectura del archivo
			fileReader.onerror = (error) => {
				// Rechazar la promesa con el error
				reject(error);
			}
		});
	}
	

	// Función para actualizar los valores de entrada del formulario en el estado del componente
	updateInputValue(evt) {
		// Crear un objeto local para almacenar los datos del estudiante
		var estudiantelocal = new Object();
		// Copiar los datos del estado actual del estudiante al objeto local
		estudiantelocal = this.state.estudiante;

		// Determinar el campo del formulario que se está modificando y actualizar el valor correspondiente en el objeto local
		switch (evt.target.id) {
			case "claveactual":
				estudiantelocal.clave = evt.target.value;
				break;
			case "clavenueva1":
				estudiantelocal.nuevaclave = evt.target.value;
				break;
			case "clavenueva2":
				estudiantelocal.nuevaclave2 = evt.target.value;
				break;
		};

		// Actualizar el estado del componente con el nuevo objeto local que contiene los datos actualizados del estudiante
		this.setState({
			estudiante: estudiantelocal
		});
	};

	// Función para modificar los datos del estudiante
	modificar = () => {
		// Establecer el estilo local para mostrar un mensaje de carga
		var estilolocal = { visibility: 'visible' };
		// Actualizar el estado para mostrar el mensaje de carga
		this.setState({ estilomsgdecarga: estilolocal });

		// Obtener el objeto estudiante del estado
		var objetolocal = this.state.estudiante;

		// Verificar si las dos nuevas claves ingresadas coinciden
		if (objetolocal.nuevaclave == objetolocal.nuevaclave2) {
			objetolocal.item_id = this.state.estudiantelogueado._id;
			// URL del servidor donde se enviará la solicitud
			const Url = 'http://localhost:8080/api/estudiante/cambiaClave';

			// Configuración de la solicitud HTTP
			const requestMetadata = {
				method: 'POST',  // Método de la solicitud (en este caso, POST para enviar los datos)
				headers: {
					'Content-Type': 'application/json'  // Tipo de contenido de la solicitud
				},
				body: JSON.stringify(objetolocal)  // Convertir el objeto estudiante a JSON y enviarlo en el cuerpo de la solicitud
			};

			// Enviar la solicitud fetch al servidor
			fetch(Url, requestMetadata)
				// Manejar la respuesta JSON
				.then(res => res.json())
				// Procesar los datos del estudiante actualizados recibidos del servidor
				.then(estudiantes => {
					if (estudiantes[0]._id == this.state.estudiantelogueado._id) {
						// Mostrar un mensaje de éxito
						alert("Ha restablecido correctamente su clave, debe iniciar sesión nuevamente");

						// Limpiar el token en el almacenamiento local y redirigir al estudiante a la página de inicio de sesión
						localStorage.setItem("token", null);
						this.props.navigate('/');
					}
					else {
						// Mostrar un mensaje de error si la clave actual no es válida
						alert("La clave actual ingresada no es válida");
					}
				});
		}
		else {
			// Mostrar un mensaje de error si las dos nuevas claves no coinciden
			alert("Los dos campos de la nueva clave deben coincidir");
		}

		// Actualizar el estado para ocultar el mensaje de carga
		estilolocal = { visibility: 'collapse' };
		this.setState({ estilomsgdecarga: estilolocal });
	}
}

// Exportar el componente Datosdeestudiante con withRouter para su uso en otros archivos y habilitar el enrutamiento
export default withRouter(Cambiadatosdeestudiante);