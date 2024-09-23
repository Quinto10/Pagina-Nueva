let totalcarrito = []; 

const agregarProductoAlCarrito = (producto) => {
    const existe = totalcarrito.some(item => item.id === producto.id);
    
    if (existe) {
        totalcarrito = totalcarrito.map(item => {
            if (item.id === producto.id) {
                item.cantidad++; 
            }
            return item; 
        });
    } else {
        
        producto.cantidad = 1; 
        totalcarrito = [...totalcarrito, producto]; 
    }

    actualizarCarrito(); 
};

function actualizarCarrito() {
    const contenedor = document.getElementById('carrito-contenedor'); 
    contenedor.innerHTML = ''; 
    totalcarrito.forEach(producto => {

        const productoElemento = document.createElement('div');
        productoElemento.classList.add('producto');
        productoElemento.innerHTML = `
            <p>${producto.nombre}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <p>Precio: $${producto.precio}</p>
        `;
        contenedor.appendChild(productoElemento); 
    });

    
    const total = totalcarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    const totalElemento = document.createElement('div');
    totalElemento.innerHTML = `<strong>Total: $${total}</strong>`;
    contenedor.appendChild(totalElemento);
}
