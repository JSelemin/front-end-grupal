import axios from 'axios';

export default function DeleteCategorias(props) {

    const eliminar = async () => {
        await axios.delete('http://localhost:3001/api/categorias/' + props.idCategoria)
        window.location.reload(false);
    }

    return(
        <button onClick={eliminar}>Borrar</button>
    );
}
