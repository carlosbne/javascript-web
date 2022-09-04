const listaDeNumeros = document.querySelectorAll('input[type = "button"]');
const displayTell = document.querySelector('input[type="tel"]');

function numeroDoTelefone(valor){
    displayTell.value += valor;
}


for(i = 0; i < listaDeNumeros.length ; i++){
    
    const numeros = listaDeNumeros[i];


    numeros.onclick = function(){
        numeroDoTelefone(numeros.value);
        numeros.classList.add('.ativa');
    }


}

