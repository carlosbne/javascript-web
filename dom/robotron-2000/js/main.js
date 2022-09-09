const controle = document.querySelectorAll('[data-controle]');

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector('[data-contador]');

    if(operacao === '-'){
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}


/* const subtrair = document.querySelector('#subtrair');
const adicionar = document.querySelector('#adicionar');
 */

/* robotron.addEventListener('click', (evento) => {
    console.log(evento);
});

function dizOi(nome){
    console.log(`Oi, ${nome}`);
    console.log('Bem-vindo ao Robotron 2000');
}



data atributes


dizOi(); */