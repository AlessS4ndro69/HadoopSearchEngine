import React, { useState } from 'react';
import logo from '../src/logo.svg';
import '../src/App.css';

function App() {
  const [inputText, setInputText] = useState(''); // Estado para el texto de entrada
  const [outputText, setOutputText] = useState(''); // Estado para el texto de salida

  // Función para manejar el cambio en el campo de entrada
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Función para manejar la acción del botón
  const handleGenerateOutput = () => {
    // Aquí puedes realizar el procesamiento necesario y actualizar el estado de outputText
    // Por ahora, simplemente mostraremos el texto de entrada tal cual en outputText
    setOutputText(inputText);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Inverted Index en Hadoop</h1>
        <div>
          <input
            type="text"
            placeholder="Ingresa tu texto aquí"
            value={inputText}
            onChange={handleInputChange}
          />
          <button onClick={handleGenerateOutput}>Generar Output</button>
        </div>
        <p>Output: {outputText}</p>
       
      </header>
    </div>
  );
}

export default App;
