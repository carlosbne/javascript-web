const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
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

function atualizaEstatisticas(peca){

    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
    })
}       

function alterarRobo(){
    const imagensRobos = document.querySelectorAll('.robo');
    
    for(let i = 0; i < imagensRobos.length; i++){
        imagensRobos[i].classList.add('.mostrar-robo');
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