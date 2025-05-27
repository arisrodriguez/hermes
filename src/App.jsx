import { useState, useRef } from 'react'
import { Header } from './components/Header'
import { ContentApp } from './components/ContentApp'
import { Results } from './components/Results'
import { ProfileOverview } from './components/ProfileOverview'
import { Footer } from './components/Footer'

function App() {

  // Estado para almacenar las zonas de entrenamiento del usuario
  const [zones, setZones] = useState([]);

  // Estado para almacenar el nombre del usuario
  const [userName, setUserName] = useState('');

  // Referencia para los resultados
  const resultsRef = useRef(null);


  /**
   * Función para manejar el cálculo de zonas de entrenamiento.
   * @param {Array} calculatezones - Arreglo con las zonas calculadas.
   * @param {string} name - Nombre del usuario.
   */

  const handleCalculateZones = (calculatezones, name) => {
    setZones(calculatezones); // Actualiza el estado de las calculadas
    setUserName(name); // Guarda el nombre del usuario

    // Hacer scroll al componente de resultados de forma suave, al elemento con id="results"
    document.getElementById("results").scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      <Header />
      <ContentApp onCalculate={handleCalculateZones} />
      <Results zones={zones} name={userName} ref={resultsRef} />
      <ProfileOverview />
      <Footer />
    </>
  )
}

export default App
