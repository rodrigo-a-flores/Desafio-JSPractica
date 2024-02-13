let btnsumar = document.getElementById('btn-sumar');
let btnrestar = document.getElementById('btn-restar');
btnsumar.addEventListener('click', ()=>{
    let num1 = parseInt(document.getElementById('valor1').value);
    let num2 = parseInt(document.getElementById('valor2').value);
    let resultado = num1 + num2;
    document.querySelector('.resultado').innerHTML = resultado;    
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
})
btnrestar.addEventListener('click', ()=>{
    let num1 = parseInt(document.getElementById('valor1').value);
    let num2 = parseInt(document.getElementById('valor2').value);
    let resultado = num1 - num2;
    if(Math.sign(resultado) == -1 || Math.sign(resultado) == -0){
        resultado = 0;
        document.querySelector('.resultado').innerHTML = resultado;
    }else{
        document.querySelector('.resultado').innerHTML = resultado;
    }  
    document.querySelector('.resultado').innerHTML = resultado;
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
})