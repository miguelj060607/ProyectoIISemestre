import React, { Component } from 'react';
// Importación del archivo CSS de Bootstrap para estilos predefinidos
import 'bootstrap/dist/css/bootstrap.css';

// Importación del componente withRouter desde './withRouter' para el enrutamiento
import { withRouter } from './withRouter';
import comunidad from './comunidad.png'
import documento from './documento.png'
import reloj from './reloj.png'
import usuarios from './usuarios.png'
//import banner from './logotareas.png'
import Navegacion from "./navegacion"
import invitacion from './invitacion.png'

class Index extends Component {
    render(){
        return(
            <React.Fragment>
              <Navegacion></Navegacion>
<br></br>
             
    <section className="colorverde">
      <style>
        {`
        .contenedor {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        
.logo{
  text-align: center;
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-family: 'Roboto', sans-serif;
  font-size: 25px !important;
  font-weight: 300 !important;
}
.desc{
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px !important;
  font-weight: 300 !important;
  color: #16a62a;
}

.card {
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 22em;
  max-width: 80%;
 
  padding: 3em 0;
  background: #FFF;
  box-shadow: 0 0 6px 0 rgba(36, 117, 29, 0.12);
  transition: all 0.35s ease;
}

.card::before, .card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #1b8028;
  height: 4px;
}

.card::before {
  width: 0;
  opacity: 0;
  transition: opacity 0 ease, width 0 ease;
  transition-delay: 0.5s;
}

.card::after {
  width: 100%;
  background: white;
  transition: width 0.5s ease;
}

.card .content {
  width: 18em;
  max-width: 80%;
}

.card .logo {
  margin: 0 0 1em;
  width: 10.625em;
  transition: all 0.35s ease;
}

.card .h6 {
  color: #999;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 2px;
}

.card .hover_content {
  overflow: hidden;
  max-height: 0;
  transform: translateY(1em);
  transition: all 0.55s ease;
}

.card .hover_content p {
  margin: 1em;
  color: #6E6E70;
  line-height: 1.4em;
  text-align: justify;
}

.card:hover {
  width: 24em;
  box-shadow: 0 10px 20px 0 rgba(32, 32, 36, 0.12);
}

.card:hover::before {
  width: 100%;
  opacity: 1;
  transition: opacity 0.5s ease, width 0.5s ease;
  transition-delay: 0;
}

.card:hover::after {
  width: 0;
  opacity: 0;
  transition: width 0 ease;
}

.card:hover .logo {
  margin-bottom: 0.5em;
}

.contenido{
  font-family: 'Roboto', sans-serif;
  font-size: 17px !important;
  font-weight: 300 !important;
  text-align: justify;
  margin: auto;
  text-align: center; /* Centra horizontalmente el texto */

}

.card:hover .hover_content {
  max-height: 10em;
  transform: none;
}
.section-title{
  text-align: center;
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-family: 'Roboto', sans-serif;
  font-size: 28px !important;
  font-weight: 300 !important;
  color: #1b8028;
}

.section-subtitle{
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px !important;
  font-weight: 300 !important;

}

.section-invitation {
  padding: 100px 0;
  background-color: #f9f9f9;
}

.invitation-image {
  max-width: 60%;
  height: auto;
}

.invitation-content {
  margin-bottom: 40px;
}

.invitation-text {
  font-family: 'Roboto', sans-serif;
  font-size: 17px !important;
  font-weight: 300 !important;
  text-align: justify;
  margin: auto;
  text-align: justify; /* Centra horizontalmente el texto */
}

.Btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: .3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: #1b8028;
}

/* plus sign */
.sign {
  width: 100%;
  transition-duration: .3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign svg {
  width: 17px;
}

.sign svg path {
  fill: white;
}
/* text */
.text {
  position: absolute;
  right: 0%;
  width: 0%;
  opacity: 0;
  color: white;
  font-size: 1.2em;
  font-weight: 600;
  transition-duration: .3s;
}
/* hover effect on button width */
.Btn:hover {
  width: 125px;
  border-radius: 40px;
  transition-duration: .3s;
}

.Btn:hover .sign {
  width: 30%;
  transition-duration: .3s;
  padding-left: 20px;
}
/* hover effect button's text */
.Btn:hover .text {
  opacity: 1;
  width: 70%;
  transition-duration: .3s;
  padding-right: 10px;
}
/* button click effect*/
.Btn:active {
  transform: translate(2px ,2px);
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

      <div className="row text-center pt-3">
        <div className="row">
          <section className="contenedor">
            <div className="card">
              <div className="content">
                <p className="logo">Organiza tus Ideas</p>
                <p className="desc">Crea Tareas</p>
                <div className="hover_content">
                  <p className="contenido">Diseña tus propias tareas según tus necesidades específicas. Desde asignar nombres descriptivos hasta establecer fechas límite, nuestro sistema te permite crear y personalizar cada tarea de manera única y detallada.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <p className="logo">Mantén el Control</p>
                <p className="desc">Centraliza tus Tareas</p>
                <div className="hover_content">
                  <p className="contenido">Simplifica tu vida manteniendo todas tus tareas y proyectos en un solo lugar. Nuestro sistema te permite gestionar tanto tus responsabilidades personales como profesionales desde una plataforma unificada, proporcionándote una visión completa de tus compromisos.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <p className="logo">Recordatorios</p>
                <p className="desc">No Olvides Nada</p>
                <div className="hover_content">
                  <p className="contenido">Configura recordatorios personalizados para cada tarea y fecha límite. Ya sea a través de notificaciones en la aplicación, correos electrónicos o mensajes de texto, te aseguramos que nunca más olvidarás una tarea importante.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  <br></br>
  <br></br>
  <br></br>

  <section id="invitation" className="section-invitation">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={invitacion} alt="Invitación" className="invitation-image" />
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <h2 className="section-title">¡Explora, Registra, Organiza!</h2>
              <p className="section-subtitle">Descubre el poder de DairyWorks</p>
              <div className="invitation-content">
                <p className="invitation-text">Te invitamos a explorar tu mundo interior y mantener tu vida organizada y productiva con DairyWorks. Registra tus pensamientos, emociones y experiencias en un espacio personalizado y seguro. Organiza tus responsabilidades semanales y mantén el enfoque en tus objetivos con nuestra intuitiva herramienta de gestión de tareas.</p>
                <p className="invitation-text">Únete hoy mismo y descubre una nueva forma de gestionar tu vida y alcanzar tus metas.</p>
                <br />
                <a href="../login" className="Btn">
                  <div className="sign">
                    <svg viewBox="0 0 512 512">
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                    </svg>
                  </div>
                  <div className="text">Iniciar</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    


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
        )
    }
}

export default Index;