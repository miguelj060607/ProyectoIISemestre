// Importación del hook useNavigate desde react-router-dom
import { useNavigate } from 'react-router-dom';

// Definición de una función withRouter que recibe un componente como parámetro
export const withRouter = (Component) => {
    // Definición de un componente Wrapper que envuelve al componente recibido
    const Wrapper = (props) => {
        // Uso del hook useNavigate para obtener la función de navegación
        const navigate = useNavigate();

        // Renderizado del componente recibido, pasando la función de navegación y las props adicionales
        return (
            <Component
                navigate={navigate} // Pasar la función de navegación como prop
                {...props} // Pasar todas las demás props recibidas al componente
            />
        );
    };

    // Devolver el componente Wrapper
    return Wrapper;
};