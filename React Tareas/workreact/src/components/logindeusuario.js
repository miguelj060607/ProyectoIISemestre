import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import  { Link } from 'react-router-dom'
import { withRouter } from './withRouter'
import Navegacion from './navegacion'


class Login extends Component {
	state = {
		estudiante: {
			correo: "",
			clave: ""
		},
		estilomsgdecarga: { visibility: 'collapse' },
		estudiantesactuales: [],
	}
	render() {
		const inputStyleimg = { border_radius: '50%', cursor: 'pointer', width: '100px' }
		return (<React.Fragment>
			<Navegacion></Navegacion>
			<style>
        {`
body {
	font-family: "Poppins", sans-serif;
	height: 100vh;
  
  }
  
  a {
	color: #1b8028;
	display:inline-block;
	text-decoration: none;
	font-weight: 400;
  }
  h1 {
	text-align: center;
	color: #1b8028;
	font-weight: bold;
	text-transform: capitalize;
	letter-spacing: 2px;
	font-family: 'Roboto', sans-serif;
	font-size: 48px !important;
	font-weight: 400 !important;
  }

  
  
  
  /* STRUCTURE */
  
  .wrapper {
	display: flex;
	align-items: center;
	flex-direction: column; 
	justify-content: center;
	width: 100%;
	min-height: 100%;
	padding: 20px;
  }
  
  #formContent {
	-webkit-border-radius: 10px 10px 10px 10px;
	border-radius: 10px 10px 10px 10px;
	background: #fff;
	padding: 30px;
	width: 100%;
	max-width: 450px;
	position: relative;
	padding: 0px;
	-webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
	box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
	text-align: center;
	padding-top: 25px;
  }
  
  
  
  
  
  /* TABS */
  

 
  
  
  
  /* FORM TYPOGRAPHY*/
  
  input[type=button], input[type=submit], input[type=reset]  {
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
	-webkit-border-radius: 5px 5px 5px 5px;
	border-radius: 5px 5px 5px 5px;
	margin: 5px 20px 40px 20px;
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	font-family: 'Roboto', sans-serif;
  }
  
  input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
	background-color: #16a62a;
  }
  
  input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
	-moz-transform: scale(0.95);
	-webkit-transform: scale(0.95);
	-o-transform: scale(0.95);
	-ms-transform: scale(0.95);
	transform: scale(0.95);
  }
  
  input[type=text], input[type="password"], input[type="file"], input[type="email"]{
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
  
  input[type=text]:focus {
	background-color: #fff;
	border-bottom: 2px solid #4bcc59;
  }
  input[type=password]:focus {
	background-color: #fff;
	border-bottom: 2px solid #4bcc59;
  }
  input[type=file]:focus {
	background-color: #fff;
	border-bottom: 2px solid #4bcc59;
  }
  input[type=email]:focus {
	background-color: #fff;
	border-bottom: 2px solid #4bcc59;
  }
  
  
  input[type=text]:placeholder {
	color: #cccccc;
  }
  
  
  
  /* ANIMATIONS */
  
  /* Simple CSS3 Fade-in-down Animation */
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
  
  /* Simple CSS3 Fade-in Animation */
  @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  
  .fadeIn {
	opacity:0;
	-webkit-animation:fadeIn ease-in 1;
	-moz-animation:fadeIn ease-in 1;
	animation:fadeIn ease-in 1;
  
	-webkit-animation-fill-mode:forwards;
	-moz-animation-fill-mode:forwards;
	animation-fill-mode:forwards;
  
	-webkit-animation-duration:1s;
	-moz-animation-duration:1s;
	animation-duration:1s;
  }
  
  .fadeIn.first {
	-webkit-animation-delay: 0.4s;
	-moz-animation-delay: 0.4s;
	animation-delay: 0.4s;
  }
  
  .fadeIn.second {
	-webkit-animation-delay: 0.6s;
	-moz-animation-delay: 0.6s;
	animation-delay: 0.6s;
  }
  
  .fadeIn.third {
	-webkit-animation-delay: 0.8s;
	-moz-animation-delay: 0.8s;
	animation-delay: 0.8s;
  }
  
  .fadeIn.fourth {
	-webkit-animation-delay: 1s;
	-moz-animation-delay: 1s;
	animation-delay: 1s;
  }
  
  .fadeIn.fifth {
	-webkit-animation-delay: 1.2s;
	-moz-animation-delay: 1.2s;
	animation-delay: 1.2s;
  }
  
  .fadeIn.six {
	-webkit-animation-delay: 1.4s;
	-moz-animation-delay: 1.4s;
	animation-delay: 1.4s;
  }
  
  .fadeIn.seven {
	-webkit-animation-delay: 1.6s;
	-moz-animation-delay: 1.6s;
	animation-delay: 1.6s;
  }
  
  .fadeIn.eight {
	-webkit-animation-delay: 1.8s;
	-moz-animation-delay: 1.8s;
	animation-delay: 1.8s;
  }
  
  .fadeIn.nine {
	-webkit-animation-delay: 2s;
	-moz-animation-delay: 2s;
	animation-delay: 2s;
  }
  
  .fadeIn.ten {
	-webkit-animation-delay: 2.2s;
	-moz-animation-delay: 2.2s;
	animation-delay: 2.2s;
  }
  
  /* Simple CSS3 Fade-in Animation */
  .underlineHover:after {
	display: block;
	left: 0;
	bottom: -10px;
	width: 0;
	height: 2px;
	background-color: #1b8028;
	content: "";
	transition: width 0.2s;
	font-family: 'Roboto', sans-serif;
  }
  
  .underlineHover:hover {
	color: #1b8028;
  }
  
  .underlineHover:hover:after{
	width: 100%;
  }
  
  
  
  /* OTHERS */
  
  *:focus {
	  outline: none;
  } 
  
  #icon {
	width:60%;
  }
  
  * {
	box-sizing: border-box;
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
        <div id="formContent">
          <h1 className="active">Iniciar Sesión</h1>
          <input
            type="text"
            id="correo"
            className="fadeIn second"
            name="login"
            placeholder="Escriba su correo"
            value={this.state.correo}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            id="clave"
            className="fadeIn third"
            name="login"
            placeholder="Escriba su clave"
            value={this.state.clave}
            onChange={this.handleInputChange}
          />
          <br/><br/>
		  <input type="button" value="Ingresar" className="fadeIn fourth" onClick={this.login} />
         

          <div id="formFooter">
            <p>¿No tiene ninguna cuenta? <Link className="underlineHover" to="../registro">¡Registrate ya!</Link></p>
          </div>
        </div>
      </div>
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
		)
	}
	updateInputValue(evt) {
		var estudiantelocal = new Object();
		estudiantelocal = this.state.estudiante
		switch (evt.target.id) {
			case "CORREO":
				{
					console.log(this.state.estudiante)

					estudiantelocal.correo = evt.target.value

					break;
				}
			case "CLAVE":
				{
					console.log(this.state.estudiante)

					estudiantelocal.clave = evt.target.value

					break;
				}


		}


		this.setState({
			estudiante: estudiantelocal
		});

		console.log(this.state.estudiante)

	}
	login = () => {
		var estilolocal = { visibility: 'visible' }

		this.setState({ estilomsgdecarga: estilolocal })
		// With all properties
		var objetolocal = this.state.estudiante
		const Url = 'http://localhost:8080/login';
		//const recipeUrl = 'http://localhost:8080/api/registrarcombo';
		const requestMetadata = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(objetolocal)
		};

		fetch(Url, requestMetadata)
			.then(res => res.json())
			.then(estudiantes => {
				console.log(estudiantes)
				if (estudiantes.length > 0) {
					localStorage.setItem("token", JSON.stringify(estudiantes[0]))
					alert("Bienvenido");
					this.props.navigate('/');
				}
				else {
					alert("no andez jakiando")
				}
				this.setState({ estudiantesactuales: estudiantes })
				
				estilolocal = { visibility: 'collapse' }
				this.setState({ estilomsgdecarga: estilolocal })
			});
	}

}
export default withRouter(Login);