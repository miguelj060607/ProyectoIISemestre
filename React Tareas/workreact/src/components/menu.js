// Importación del módulo React y Component desde la biblioteca 'react'
import React, { Component } from 'react';
// Importación de Routes y Route desde react-router-dom para manejar las rutas de la aplicación
import { Routes, Route } from "react-router-dom";
// Importación de los componentes necesarios para cada ruta
import Registro from "./registro"
import LogIn from "./logindeusuario"
import Perfil from "./perfildeestudiante"
import Index from "./index"
import Tarea from "./tarea"
import CambiarDatos from "./cambiardatosdelestudiante"
import Carrusel from "./carrusel"

// Definición del componente menu que extiende de Component
class menu extends Component {
    // Método de renderizado del componente
    render() {
        return (
            // Contenedor principal de la aplicación
            <div className="Aplicacion">
                {/* Componente Routes para definir las rutas de la aplicación */}
                <Routes>
                    {/* Ruta para la página de inicio (Login) */}
                    <Route path="/registro" element={<Registro />} />
                    {/* Ruta para la página de registro */}
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/perfil" element={<Perfil />} /> 
                    <Route path="/" element={<Index />} /> 
                    <Route path="/datosdelusuario" element={<CambiarDatos />} />  
                    <Route path="/tarea" element={<Tarea />} />    
                    <Route path="/carrusel" element={<Carrusel />} />                 
                </Routes>
            </div>
        );
    }
}
// Exportar el componente menu para su uso en otros archivos
export default menu;