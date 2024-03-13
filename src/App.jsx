import './App.css';
import Boton from './Components/Boton';
import Contador from './Components/Contador';
import freeCodeCampLogo from './Images/freecodecamp-logo.png'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo of freecodecamp" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton
          texto="Clic"
          esBotonDeClic={true}
          majerarClic={manejarClic} />
        <Boton
          texto="Reset"
          esBotonDeClic={false}
          majerarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
