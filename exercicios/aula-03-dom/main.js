const apagar = document.querySelector('.apagarbtn');
const tintas = document.querySelectorAll('.item');

//função utilizando o forEach();
function mostraTintas(){
    tintas.forEach(Element => Element.style.visibility = "visible");
}

//função anonima utilizando o For();
apagar.addEventListener('click', () =>{
    for(let i = 0; i < tintas.length; i++){
        tintas[i].style.visibility = "hidden";
    }
})