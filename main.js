const carrito = document.getElementById('carrito')
const contenedor = document.querySelector('.portfolio')
console.log(contenedor);
const contenedorCarrito = document.getElementById('lista-carrito').querySelector('tbody');
let carritoAll = []

console.log(carrito);

MostrarCarrito()//llmando la funcion
function MostrarCarrito() {
    carrito.addEventListener('click', () => {
        const modal = new bootstrap.Modal(document.getElementById('Mimodal'));
        modal.show();
    })
}

cargar()
function cargar() {
    contenedor.addEventListener('click', cargarProductos)


}

function cargarProductos(e) {
    // e.preventDefaul();








































































































































































































































































    
    const Seleccionado = e.target.classList.contains('btn')
    if (Seleccionado) {
        const ProductoSeleccionado = e.target.parentElement.parentElement;
        console.log(ProductoSeleccionado);
        leerDatos(ProductoSeleccionado);
    }

}

function leerDatos(data) {  
    console.log(data);

    const productos = {
        img : data.querySelector('img').src,
        nombre : data.querySelector('h3').textContent,
        precio : Math.floor(data.querySelector('p').innerText.replace(/[^0-9.-]+/g, "")),
        cantidad : 1,
        id : data.querySelector('button').getAttribute('data-id')
    }
    carritoAll = [...carritoAll,productos]
    console.log(productos);
    ActualizarCarritoHtml();
    
}

function ActualizarCarritoHtml() {
    contenedorCarrito.innerHTML = ``;
    const row = document.createElement('tr');
    carritoAll.forEach((producto)=>{
        const {img,nombre,precio,cantidad,id} = producto;
            row.innerHTML = `
            <td>img src='${img}' widht="50"</td>
            <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${id}</td>

            `;
            
    }) 
    contenedorCarrito.appendChild(row) 
}