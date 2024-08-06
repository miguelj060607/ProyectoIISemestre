// Importación del módulo React y Component desde la biblioteca 'react'
import React, { Component } from 'react';
// Importación del archivo CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// import Perfildelestudiante from './perfildelestudiante'
import  { Link } from 'react-router-dom'
import { withRouter } from './withRouter'
import Tabladetareas from './tabladetareas'
import Navegacion from './navegacion'

// Definición del componente Formularioregistrodecliente que extiende de Component

class tareacarrusel extends Component {
	
	// Estado inicial del componente
	state = {
		// Objeto Cliente con sus campos iniciales

        tarea: {
			
			nombreTarea:"",
			materiaTarea:"",
			fechaTarea:"",
			descripcionTarea:"",             // Array vacío destinado a almacenar votos relacionados con la tarea

		},
	
		estilomsgdecarga: { visibility: 'collapse' }, // Estilo para mostrar el mensaje de carga
		tareasactuales: [], // Lista de pedidos actuales
		actualizado: false // Estado de actualización
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
               <Tabladetareas tipo="tabla" tareasactualespadre={this.state.tareasactuales} ></Tabladetareas>			</React.Fragment>
		);
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
	

	

}

// Exportar el componente Formularioregistrodecliente para su uso en otros archivos
export default tareacarrusel;