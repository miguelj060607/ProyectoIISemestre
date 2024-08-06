// Importación del módulo React y Component desde la biblioteca 'react'
import React, { Component } from 'react';
// Importación de Link y Collapse desde 'react-router-dom' y 'bootstrap', respectivamente

// Importación del archivo CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navegacion from './navegacion'

// Importación del componente Tabladeproductos






// Definición del componente Tabladepedidos que extiende de Component
class Tabladetareas extends Component {

	// Estado inicial del componente
	state = {
		// Objeto Cliente con sus campos iniciales

			tarea: {
				
			nombreTarea:"",
			materiaTarea:"",
			fechaTarea:"",
			descripcionTarea:"",	            // Array vacío destinado a almacenar votos relacionados con la tarea
	
			},
	
		estilomsgdecarga: { visibility: 'collapse' }, // Estilo para mostrar el mensaje de carga
		tareasactuales: [], // Lista de pedidos actuales
		actualizado: false // Estado de actualización
	}

	// Método de renderizado del componente
	render() {
		<Navegacion/>
		// Inicializar la lista de pedidos
		let listadetareas = this.props.tareasactualespadre
		// Verificar si los pedidos están actualizados
		//if (this.state.actualizado) {
		//	listadetareas = this.state.tareasactuales
		//} else {
		//	listadetareas = this.props.tareasactuales
		//}
		// Definir los títulos de la tabla de pedidos
		

		// Inicializar las filas de la tabla de pedidos
		let filasdelatabla = []
		let filasdelcarrusel = []
		// Mapear los pedidos para crear las filas de la tabla
		filasdelatabla = this.props.tareasactualespadre.map(op => <div >
			
            <div style={{ marginRight:"10px", marginLeft:"10px", width: "250px", height: "500px",  boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
				
			<div style={{margin:"auto", width: "200px"}}> 

			 <div style={{margin:"auto", width: "200px"}}>
			 <p>Tarea</p>
			 <p> {op.nombreTarea} </p>
			 </div>

			<div style={{margin:"auto", width: "200px"}}> 
			
			<p>Descripcion de la tarea</p>
			<p style={{maxWidth:"100px"}}> {op.descripcionTarea}</p>
			</div>	

			<div style={{margin:"auto", width: "200px"}}>
			
			<p> Fecha de entrega</p>
			<p >{op.fechaTarea}</p>
			</div>

			<div style={{margin:"auto", width: "200px"}}>
			
			<p>Materia</p>
			<p >{op.materiaTarea}</p>
			</div>		
				
				
				</div>


				<div style={{margin:"auto", display:"flex", width: "200px"}}> 

				<div style={{marginRight:"10px", marginLeft:"10px" }} >
				<p >Modificar</p>
				<p> <p> <input type='button' value='Modificar' onClick={() => { if (window.confirm('Desea modificar la tarea?')) { this.modificar(op._id) } }} /></p></p>
				</div>
				<div style={{marginRight:"10px", marginLeft:"10px" }} >
				<p>Eliminar</p>
				<p><p> <input type='button' value='Eliminar' onClick={() => { if (window.confirm('Desea eliminar la tarea?')) { this.eliminar(op._id) } }} /></p></p>
				</div>
				
				</div>
				

			</div>

			
		</div>)
    if (this.props.tipo == "tabla") {
		return (
			// Fragmento de React para envolver los elementos sin necesidad de un contenedor adicional
			<React.Fragment>
				
				<div style={{margin:"auto", display:"flex", width: "1260px", overflowX: "scroll"}}>
					
							{
								
								filasdelatabla.map(fila => fila)
							}
						
				</div>
			</React.Fragment>
		);
	}
    else {
		
	
		return (
			
			<div style={{margin:"auto", display:"flex", width: "1240px", overflowX: "scroll"}}>

			{filasdelcarrusel = this.props.tareasactualespadre.map(op => <div> 
		
			<div style={{ marginRight:"10px", marginLeft:"10px", width: "600px", height: "350px",  boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
				
			<div style={{margin:"auto", display:"flex"}}> 

				<div>
				<p>Tarea</p>
				<p> {op.nombreTarea} </p>
				</div>

				<div> 

				<p>Descripcion de la tarea</p>
				<p style={{width:"200px"}}> {op.descripcionTarea}</p>
				</div>	

				<div>

				<p>Fecha de entrega</p>
				<p >{op.fechaTarea}</p>
				</div>

				<div>

				<p>Materia</p>
				<p >{op.materiaTarea}</p>
				</div>		
				
				
				</div>


							
								
								

							</div>
							</div>)}
							</div>
				
				
			
		); 
	}
}
	// Función para eliminar un pedido
	modificar = (id) => {
		let foundObject = this.props.tareasactualespadre.find(obj => obj._id === id);
		this.props.funcionparamodificar(foundObject)
	}

	// Función para reportar que se recibió un pedido
	eliminar = (id) => {
		
		var estilolocal = { visibility: 'visible' }
		// Actualizar el estado para mostrar el mensaje de carga
		this.setState({ estilomsgdecarga: estilolocal })

		const Url = 'http://localhost:8080/api/tarea?item_id=' + id;

		// Configuración de la solicitud HTTP
		const requestMetadata = {
			method: 'DELETE',  // Método de la solicitud (en este caso, PUT para actualizar)
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
				this.setState({ tareasactualeslocal: tareas })
				// Mostrar un mensaje de alerta indicando que el cliente ha sido guardado exitosamente
				alert("Eliminado");
				// Ocultar el mensaje de carga al completarse la operación
				estilolocal = { visibility: 'collapse' }
				this.setState({ estilomsgdecarga: estilolocal })
			});
	}

	// Función para reportar que no se recibió un pedido
	
}


// Exportar el componente Tabladepedidos para su uso en otros archivos
export default Tabladetareas;