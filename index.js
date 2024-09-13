const existe = totalcarrito.some(producto => producto.id === productos.id);
if (existe) {
    totalcarrito = totalcarrito.map(producto => {
       if (producto.id === productos.id) {
            producto.cantidad++;

        }
        return producto;
    });
} else {
    totalcarrito = [...tatalcarrito, productos];   
    

}

function actualizarCarrito() {
    contenedor
}