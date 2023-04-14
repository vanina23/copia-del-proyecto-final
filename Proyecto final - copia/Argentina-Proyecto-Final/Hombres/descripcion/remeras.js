
//Boton de incremento y decremento de productos 

const inputQuantity = document.querySelector('.input-quantity')
const btnIncremento = document.querySelector('#incremento')
const btnDecremento = document.querySelector('#decremento')

let valueByDefault = parseInt(inputQuantity.value)


btnIncremento.addEventListener(`click` , () => {
    valueByDefault += 1
    inputQuantity.value = valueByDefault
})

btnDecremento.addEventListener(`click` , () => {
    if (valueByDefault ===1){
         return
    }
    valueByDefault -= 1
    inputQuantity.value = valueByDefault
})

//deslizar las barras descripción - información adicional- reseña

const deslizarDescripcion = document.querySelector('.titulo-descripcion')
const deslizarInformacionAdicional = document.querySelector('.titulo-informacion-adicional')
const deslizarTituloReseña = document.querySelector('.titulo-reseña')

const contenidoDescripcion = document.querySelector('.texto-descripcion')
const contenidoInformacionAdicional = document.querySelector('.texto-informacion-adicional')
const contenidoReseña = document.querySelector('.texto-reseña')


deslizarDescripcion.addEventListener(`click`, () => { 
    contenidoDescripcion.classList.toggle(`hidden`); 
});

deslizarInformacionAdicional.addEventListener(`click`, () => { 
    contenidoInformacionAdicional.classList.toggle(`hidden`); 
});

deslizarTituloReseña.addEventListener(`click`, () => {
    contenidoReseña.classList.toggle(`hidden`); 
});