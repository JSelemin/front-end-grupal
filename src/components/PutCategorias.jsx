import { useState } from "react";
import axios from 'axios';

export default function PutCategorias(props) {

    const [form, setForm] = useState({
        id: undefined,
        nombre: ''
    });

    const handleChangeNombre = (e) => {
        const nuevoState = JSON.parse(JSON.stringify(form));
        nuevoState.nombre = e.target.value;
        setForm(nuevoState);
    }

    const editar = async () => {
        await axios.put('http://localhost:3001/api/categorias/' + props.idCategoria, form);
        window.location.reload(false);
    }

    return (
        <div>
             <input name="nombre" type="text" autoComplete="off" value={props.nombreCategoria} onChange={handleChangeNombre} />
            <button onClick={editar}>Editar</button>
        </div>
    )
};