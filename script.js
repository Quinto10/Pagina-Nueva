const carrito = document.getElementById(  `carrito` );
const elemento1 = document.getElementById(`lista-1`);
const lista = document.querySelector(  `#lista-carrito tbody`);
const VaciarCarritoBtn = document.getElementById(  `Vaciar-carrito`);

cargarEventListeners();

function cargarEventListeners() {

    elemento1.addEventListener(`click", comprarElemento`);
    carrito.addEventListener(  `click", eliminarElemento`);
    VaciarCarritoBtn.addEventListener(  `click",VaciarCarrito`);

}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains(  `agregar-carrito` )){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector(  `img`).src,
        titulo: elemento.querySelector(`h3`).textcontent,
        precio: elemento.querySelector(  `.precio`).textcontent,
        id: elemento.querySelector(  `a`).getAttribute(`data-id`)
    }
    insertarcarrit(infoElemento);
}

function insertarcarrito(elemento) {
    const row = document.createElement(`tr`);
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100
        </td>
        
        <td>
            ${elemento.titulo}
        </td>
        
        <td>
            ${elemento.precio}
        </td>
        
        <td>
            <a herf="#" class="borrar" data-id="${elemento.id}" >x</a>
        <td>    
    
    
    
    `;
    lista.appendChild(row);


}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoid;
        if(e.target.classList.contains(`borrar`)) {
            e.target = e.target.parentElement.parentElement;
            elementoid = elemento.querySelector(`a`).getAttribute(`data-id`);
        }
}

function VaciarCarrito() {
    while(lista.firstChild) {
        (lista.removeChild)(lista.firstChild);
    }
}   return false;