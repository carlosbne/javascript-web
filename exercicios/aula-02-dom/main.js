const button = document.querySelector('#calcular');
const resultado = document.querySelectorAll('.resultado');

button.addEventListener('click', () => {
    for(let i = 0; i < resultado.length; i++){
        resultado[0].innerHTML = "Ohana quer";
        resultado[1].innerHTML = "dizer família."
    }
})