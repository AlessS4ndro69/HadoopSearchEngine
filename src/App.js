import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [inputTextPR, setInputTextPR] = useState('');
  const [outputTextPR, setOutputTextPR] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
const handleInputChangePR = (event) => {
    setInputTextPR(event.target.value);
  };

  const handleGenerateOutputII = () => {
	console.log("ejecuntando inverted indesx...")   
    const apiUrl = `http://35.225.5.176:4000/run_inverted_index?word=${encodeURIComponent(inputText)}`;
   


  // Realizar una solicitud GET a la URL
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      return response.json();
    })
    .then((data) => {
      // Manejar los datos recibidos de la API
      console.log("Recibiendo datos de la API:", data);
      // Actualizar el estado con la respuesta de la API
       setOutputText(data.resultado); // Suponiendo que la API devuelve un objeto con un>
    })
    .catch((error) => {
      console.error('Error al hacer la solicitud a la API:', error);
    });
};

   const handleGenerateOutputPR = () => {   
	console.log("ejecutano pagerank....")
    const apiUrl = `http://35.225.5.176:4000/run_page_rank?count=${encodeURIComponent(inputTextPR)}`;
   


  // Realizar una solicitud GET a la URL
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      return response.json();
    })
    .then((data) => {
      // Manejar los datos recibidos de la API
      console.log("Recibiendo datos de la API:", data);
      // Actualizar el estado con la respuesta de la API
       setOutputTextPR(data.resultado); // Suponiendo que la API devuelve un objeto>
    })
    .catch((error) => {
      console.error('Error al hacer la solicitud a la API:', error);
    });
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="300" height="300"/>
        <h2>Inverted Index en Hadoop</h2>
        <div>
          <input
            type="text"
            placeholder="Ingresa tu texto aquí"
            value={inputText}
            onChange={handleInputChange}
          />
          <button 
	  onClick={()=>{
	
		handleGenerateOutputII();
		}}
	  >
		Generar Output
	</button>
        </div>
        <p>Output: {outputText}</p>
	<h2>Page Rank en Hadoop</h2>
        <div>
          <input
            type="text"
            placeholder="Ingresa tu texto aquí"
            value={inputTextPR}
            onChange={handleInputChangePR}
          />
          <button onClick={()=> {
		handleGenerateOutputPR();
		}
	}>Generar Output</button>
        </div>
        <p>Output: {outputTextPR}</p>
      </header>
    </div>
  );
}

export default App;

