import './styles/Encuestas.css';
import Encuestas from './components/Encuestas';


function App() {

  const encuestas = [
  { id: 1, pregunta: '¿Cuál es tu color favorito?', opciones: ['Rojo', 'Azul', 'Verde'] },
  { id: 2, pregunta: '¿Cuál es tu comida favorita?', opciones: ['Pizza', 'Hamburguesa', 'Sushi'] },
];

  return (
    <div className="App" id='aplicacion'>

      <img src='/hello-salute.png' alt='Lego Builders' height={'150px'} width={'250px'} />

    <Encuestas encuestas={encuestas} />

    </div>
  );
}

export default App;
