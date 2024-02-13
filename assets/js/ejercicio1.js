let form = document.getElementById('botton');
 form.addEventListener('click', function validar(e){
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let asunto = document.getElementById('asunto').value;
    let mensaje = document.getElementById('mensaje').value;
    let expreReg = /[a-zA-Z]/igm;
    if(nombre !== '' && asunto !== '' && mensaje !== ''){
        if (nombre.match(expreReg) || asunto.match(expreReg) || mensaje.match(expreReg)){
            document.querySelector('.resultado').innerHTML = 'Formulario enviado EXITOSAMENTE';
            document.querySelector(".errorNombre").innerHTML = '';
            document.querySelector(".errorAsunto").innerHTML = '';
            document.querySelector(".errorMensaje").innerHTML = '';
            document.getElementById('nombre').value = '';
            document.getElementById('asunto').value = '';
            document.getElementById('mensaje').value = '';
        }else{
            document.getElementById('nombre').value = '';
            document.getElementById('asunto').value = '';
            document.getElementById('mensaje').value = '';
            alert("Solo debe ingresar caracteres alfabéticos");            
        };        
    }else if(nombre == '' || asunto == '' || mensaje == ''){
        document.querySelector(".errorNombre").innerHTML = 'Ingresar nombre. REQUIRED';
        document.querySelector(".errorAsunto").innerHTML = 'Ingresar assunto. REQUIRED';
        document.querySelector(".errorMensaje").innerHTML = 'Ingresar mensaje. REQUIRED';
        document.querySelector('.resultado').innerHTML = '';
    }   
})