import './App.css';
import GetCategorias from './components/GetCategorias.jsx';
import GetLibros from './components/GetLibros.jsx';
import PostCategorias from './components/PostCategorias'

function App() {
  return (
    <div className="App">
      <div className='gets'>
        <PostCategorias />
        <GetCategorias />
        <GetLibros />
      </div>
    </div>
  );
}

export default App;
