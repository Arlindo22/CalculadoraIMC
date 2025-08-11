const form = document.querySelector('#form');

//Utilizar evento para parar o comportamento padrão do form

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const valorpeso = inputPeso.value;
    const valoraltura = inputAltura.value;

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso && !altura){
        setResultado(`Peso Invalido '${valorpeso}' e Altura invalido '${valoraltura}'`, false);
        return;
    }
    if(!peso){
       setResultado('Peso Invalido', false)
        return 
    }
    if(!altura){
       setResultado('Altura Invalido', false)
       return
    }



    const IMC = getIMC(peso, altura);
    const nivelIMC = indiceIMC(IMC);

   const msg = `Seu IMC é ${IMC} (${nivelIMC})`
   setResultado(msg, true)
    
});

function indiceIMC (imc){
    const nivel = ['Abaixo do peso','Peso normal', 'Sobrepeso', 'Obesidade' ];
    if(imc >= 29.9) return nivel[3];
    
    if(imc >= 24.9) return nivel[2];
    
    if(imc >= 18.5) return nivel[1];
    
    if(imc <= 18.4) return nivel[0];
    
}


function getIMC(peso, altura){
    const calculo = peso / (altura * altura);
    return calculo.toFixed(2);3
}

function criaP(){
const p = document.createElement('p');
    return p
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid){
        p.classList.add('resultados')
    }else{
        p.classList.add('resultado-error')
    }
    p.innerHTML = msg
    resultado.appendChild(p);

    
}