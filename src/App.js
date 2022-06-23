import logo from './assets/imagenes/logo.svg';
import './assets/css/App.css';
// importar componentes 
import MiComponente from './components/micomponente';

function holamundo(nombre, edad){
  var presentacion=<div>
      <h2>hola soy {nombre} </h2>
      <h2>tengo {edad} años</h2>
  </div>
  return presentacion;
}

function App() {
  var nombre = "oliver de la rosa ";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola bienvenido al curso de react de oliver de la rosa 
        </p>
        {holamundo(nombre, 12)}
        <section className='componentes'>
      <MiComponente />
      </section>
      </header>
     
    </div>
  );
}

export default App;
