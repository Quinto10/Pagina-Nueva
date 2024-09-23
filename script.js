// Estas serian las variables 
const carrito = document.querySelector('#carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaProductos = document.querySelector('.products-content');
let articulosCarrito = [];

// Aqui se cargan los eventos
document.addEventListener('DOMContentLoaded', () => {
    listaProductos.addEventListener('click', agregarProducto);
    carrito.addEventListener('click', eliminarProducto);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
});

// Esta seria la funcion que agrega productos al carrito 
function agregarProducto(e) {
    if (e.target.classList.contains('agregar-carrito')) {
        const productoSeleccionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
}

// Esto lee los datos osea el producto
function leerDatosProducto(producto) {
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        nombre: producto.querySelector('h3').textContent,
        precio: producto.querySelector('.precio').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };

    // Verifica si el producto ya existe en el carrito
    const existe = articulosCarrito.some(articulo => articulo.id === infoProducto.id);
    if (existe) {
        const productos = articulosCarrito.map(articulo => {
            if (articulo.id === infoProducto.id) {
                articulo.cantidad++;
                return articulo;
            } else {
                return articulo;
            }
        });
        articulosCarrito = [...productos];
    } else {
        // Agregar producto al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoProducto];
    }

    // Insertar carrito en el HTML
    carritoHTML();
}

// Muestra los productos en el carrito en el HTML
function carritoHTML() {
    // Limpiar el HTML
    limpiarHTML();

    // ejecuta el carrito y genera el HTML
    articulosCarrito.forEach(producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${producto.imagen}" width="100"></td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>
                <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
            </td>
        `;

        // Agrega el HTML del carrito en el tbody
        carrito.appendChild(row);
    });
}

// Elimina producto del carrito
function eliminarProducto(e) {
    if (e.target.classList.contains('borrar-producto')) {
        const productoId = e.target.getAttribute('data-id');
        
        // Elimina del arreglo de carrito
        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

        // Actualiza el carrito en el HTML
        carritoHTML();
    }
}

// Vaciar el carrito
function vaciarCarrito() {
    articulosCarrito = []; // Reseteamos el arreglo
    limpiarHTML(); // Eliminamos todo el HTML
}

// Limpia el HTML del carrito
function limpiarHTML() {
    // Forma lenta
    // carrito.innerHTML = '';

    // Forma rápida 
    while (carrito.firstChild) {
        carrito.removeChild(carrito.firstChild);
    }
}
