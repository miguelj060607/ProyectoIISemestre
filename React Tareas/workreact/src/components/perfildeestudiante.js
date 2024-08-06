// Importación del módulo React y Component desde la biblioteca 'react'
import React, { Component } from 'react';
import Navegacion from "./navegacion"

import { withRouter } from './withRouter'; // Importación del componente withRouter
// Definición del componente Perfildeusuario que extiende de Component
class Perfildeusuario extends Component {
	// Método de renderizado del componente
	render() {
		const nombredeusuario = JSON.parse(localStorage.getItem('token')).nombreCompleto;
		const correodeusuario = JSON.parse(localStorage.getItem('token')).correo;
		

		return (
			// Fragmento de React para envolver los elementos sin necesidad de un contenedor adicional
			<React.Fragment>
				<Navegacion></Navegacion>
				{/* Visualización de la foto de perfil */}

				{/* Visualización del nombre de usuario */}
				<h1 id="nombredeusuario">{nombredeusuario}</h1>
				{/* Visualización del correo del usuario */}
				<h3 id="correo">{correodeusuario}</h3>
				{/* Botón para cambiar la clave */}
				<input type="button" value="Cambia clave" onClick={this.cambiaclave} />
				{/* Botón para cerrar sesión */}
				<input type="button" value="Cerrar sesión" onClick={this.cierrasesion} />
			</React.Fragment>
		);
	}

	// Función para cambiar la clave del usuario
	cambiaclave = () => {
		// Navegar a la página de datos del usuario
		this.props.navigate('/datosdelusuario');
	}

	// Función para cerrar sesión
	cierrasesion = () => {
		// Limpiar el token de autenticación en el almacenamiento local
		localStorage.setItem("token", "");
		// Redireccionar al inicio de sesión
		this.props.navigate('/');
	}
}

// Exportar el componente Perfildeusuario con withRouter para su uso en otros archivos
export default withRouter(Perfildeusuario);