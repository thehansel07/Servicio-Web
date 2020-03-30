'use strict'

function datos(){
    fetch("http://www.raydelto.org/agenda.php")
     .then(
        function(valor)
        {
            return valor.json();
        }
     ).then(function(valor){
            
            var imprime = document.getElementById("prueba");
            var valores = '';
           
            for(var i = 0; i < valor.length; i++){
           
                valores +='<br><a>Nombre:</a><br>' + valor[i].nombre + 
                "<br><br>Apellido: <br>" + valor[i].apellido + 
                "<br><br>Telefono: <br>" + valor[i].telefono + "<br>"+"<hr>";
               

              }
              
              imprime.innerHTML = valores;
     });

}

function enviar(){

    let Nombre = document.querySelector('#nombre').value;
    let Apellido = document.querySelector('#apellido').value;
    let Telefono = document.querySelector('#telefono').value;
    
    let contacto = {nombre:Nombre,apellido:Apellido,telefono:Telefono};

    fetch("http://www.raydelto.org/agenda.php",{
        method:'POST',
        body:JSON.stringify(contacto)}
    ).then(res => res.json()).then(
        (res) =>
        {
            console.log(res);
            
        }
    );
       alert("Datos enviados...");
    
}