import './App.css';
import GetCategorias from './components/GetCategorias.jsx';
import GetLibros from './components/GetLibros.jsx';

function App() {
  return (
    <div className="App">
      <div className='gets'>
      <GetCategorias />
      <GetLibros />
      </div>
    </div>
  );
}

export default App;
