export default function GetLibros() {
    return (
        <div>
            <h1>Categoría Nueva</h1>
            <form action="http://localhost:3001/api/categorias" method="post">
                <input name="nombre" id="nombre" type="text" placeholder="Categoria Nueva" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};