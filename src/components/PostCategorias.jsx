import { useState } from "react";
import axios from 'axios';

export default function PostCategorias() {

    const [form, setForm] = useState({
        id: undefined,
        nombre: ''
    });

    const handleChangeNombre = (e) => {
        const nuevoState = JSON.parse(JSON.stringify(form));
        nuevoState.nombre = e.target.value;
        setForm(nuevoState);
    }

    const guardar = async () => {
        await axios.post('http://localhost:3001/api/categorias', form);
        window.location.reload(false);
    }

    return (
        <div>
            <h1>Categoría Nueva</h1>
            <input name="nombre" type="text" autoComplete="off" placeholder="Categoria Nueva" value={form.nombre} onChange={handleChangeNombre} />
            <button onClick={guardar}>Guardar</button>
        </div>
    )
};