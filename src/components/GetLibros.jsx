import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetLibros() {

    const [listado, setListado] = useState([]);
    const [error, setError] = useState('');

    async function traerlistado() {
        try {
            const respuesta = await axios.get('http://localhost:3001/api/libros');
            setListado(respuesta.data.respuesta_db);
            setError('');
        }
        catch (e) {
            setError('No pude fetchear');
        }
    }
    useEffect(() => {
        traerlistado();
    }, []);


    return (
        <div>
            {error ? <>Error en la conexión</> : <></>}
            <h1>Libros:</h1>
            {listado.map(unLibro => (
                <div key={unLibro.id} className='libro'>
                <h3>{unLibro.nombre}</h3>
                <h5>{unLibro.descripcion}</h5>
                </div>
                ))}
        </div>
    )

};

