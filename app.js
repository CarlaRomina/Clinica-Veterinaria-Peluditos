function validar() {
    var nya, mail, tel;
    nya = document.getElementById("nya").value;
    mail = document.getElementById("mail").value;
    tel = document.getElementById("tel").value;
    mensaje = document.getElementById("mensaje").value;

    expresion = /\w+@\w+\.+[a-z]/; 

    if (nya === "" || mail === "" || tel === "" || mensaje === "" ){
        alert ("Todos los campos son obligatorios");
        return false;
    }

    else if (nya.length > 30){
        alert ("Ingrese su nombre correctamente");
        return false;

    }
    else if (mail.length > 100){
        alert ("El correo ingresado excede la longitud permitida");
        return false;

    }
    else if (!expresion.test(mail)){
        alert ("El correo ingresado no es válido");
        return false;

    }

    else if (tel.length > 10){
        alert ("Ingrese su número telefonico con código de area sin cero");
        return false;

    }

    else if(isNaN(tel)){
        alert ("El campo teléfono debe contener números")
        return false;
    }

    //Finalmente, si llegó hasta aqui, se envia el form.
    alert("Muchas gracias por enviar el formulario, nos contactaremos a la brevedad")
    document.formulario.submit()
    

    

}


// API


let endpoint = 'https://api.binance.com/api/v3/ticker/price'
fetch(endpoint)
    .then( respuesta => respuesta.json() )
    .then( datos => mostrarData(datos))
    .catch( e => console.log(e))


const mostrarData = (data)=>{
    //console.log(data)
    let body = ''
    for (let i=0; i < data.length; i++) {
        body = `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`
        if(`<tr><td>${data[i].symbol}</td></tr>`==`<tr><td>BTCUSDT</td></tr>`)
        {
        document.getElementById('data').innerHTML = body
        }
    }
    
}    