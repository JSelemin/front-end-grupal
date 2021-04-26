import { useEffect } from 'react';
import axios from 'axios';

function Libros() {
    useEffect(async () => {
        const respuesta = await axios.get('localhost:3001/api/categorias');
        console.log(respuesta);
    });
};
