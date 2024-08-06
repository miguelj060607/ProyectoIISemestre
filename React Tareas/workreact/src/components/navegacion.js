import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import logo from './logotareas.png';

// Definici�n del componente Formularioregistrodecliente que extiende de Component
class Navegacion extends Component {
	render() {
		return (
			<React.Fragment>
				<div style={styles.headerContainer}>
					<img src={logo} alt="Logo" style={styles.logo} />
					<div style={styles.navLinks}>
					<Link to="../login" style={styles.navLink}>Iniciar Sesión</Link>
						<Link to="../registro" style={styles.navLink}>Registro</Link>
						<Link to="../tarea" style={styles.navLink}>Tareas</Link>
						<Link to="../carrusel" style={styles.navLink}>Carrusel</Link>
						<Link to="../perfil" style={styles.navLink}>Perfil</Link>
						<Link to="../" style={styles.navLink}>Volver</Link>
					</div>
				</div>
				<br></br>
				
			</React.Fragment>
		);
	}
}

const styles = {
	headerContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#f8f9fa',
		padding: '10px 20px',
	},
	logo: {
		width: '200px', // Ajusta el ancho del logo
	},
	navLinks: {
		display: 'flex',
	},
	navLink: {
		textDecoration: 'none',
		color: '#16a62a',
		marginLeft: '20px',
		fontSize: '16px',
		transition: 'color 0.3s', // Transición suave para el cambio de color
	},
};

// Estilos para el hover


export default Navegacion;