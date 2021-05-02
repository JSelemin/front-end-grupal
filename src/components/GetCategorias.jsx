import React, { useState, useEffect } from 'react';
import DeleteCategorias from './DeleteCategorias';
/* import PutCategorias from './PutCategorias'; */
import axios from 'axios';

export default function GetCategorias() {

    const [listado, setListado] = useState([]);
    const [error, setError] = useState('');

    async function traerlistado() {
        try {
            const respuesta = await axios.get('http://localhost:3001/api/categorias');
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
            <h1>Categorias:</h1>
            {listado.map(unaCategoria => (
                <div key={unaCategoria.id} className='categoria'>
                    <h3>{unaCategoria.nombre}</h3>
                    <div className='botones'>
                        <DeleteCategorias idCategoria={unaCategoria.id} />
{/*                         <PutCategorias idCategoria={unaCategoria.id} nombreCategoria={unaCategoria.nombre} /> */}
                    </div>
                </div>
            ))}
        </div>
    )

};

