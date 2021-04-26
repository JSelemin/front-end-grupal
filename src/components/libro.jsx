import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card.jsx';

export default function Libro() {
    console.log ('Renderizando componente');

    const [listado, setListado] = useState([]);
    const [error, setError]= useState('');

    useEffect (()=> {

            async function traerlistado (){
            try {
                const respuesta= await axios.get('http://localhost:5500/libro');
                setListado(respuesta.data.Registros_de_la_base_de_datos)
            }
             catch (error) {
               setError('No se pudo conectar al servidor')
            }
        }
        traerlistado()
    },[]);
   
    let data = listado.map((item, i) => <Card item={item} key={i}/>);
    
    return (
      <div>
        <h1>Libros:</h1>
        {data}
        {error}
      </div>
    )
   
};

