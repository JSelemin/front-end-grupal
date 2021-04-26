import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Genero() {
    console.log('Renderizando');

    const [listado, setListado] = useState([]);
    const [error, setError] = useState('');

    useEffect (() => {

        async function traerListado(){
            try {
                const respuesta = await axios.get('localhost:3001/api/categorias');
                setListado(respuesta)
            }
            catch (error) {
                setError('No se pudo conectar al servidor')
            }
        }
        traerListado();
    });

    let data = listado.map((item, i) => <p>{item}</p>);

    return (
        <div>
            <h1>Libros:</h1>
            {data}
            {error}
        </div>
    )
}
