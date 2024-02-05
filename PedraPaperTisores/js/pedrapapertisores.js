function aleatorioEntero(max, min) {
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}

var clickhabilitado = true;

//funcion shake para la version 2.0
function shakeElement(element1, element2, eleccion) {
    // piedra.setAttribute('disbaled','disabled');
    if (clickhabilitado) {
        
    
        element1.classList.add('shake');
        element2.classList.add('shake');
        element1.src = 'images/interrogante.png'
        element2.src = 'images/interrogante.png'
        clickhabilitado = false;

        // Set timeout to remove shake class
        setTimeout(function () {
            element1.classList.remove('shake');
            element2.classList.remove('shake');
            //lamamos a la funcion tirada cuando termine el shake
            tiradaJugador(eleccion);
            clickhabilitado = true;
            }, 1000);

        // setTimeout(piedra.removeAttribute('disabled'), 1000)
        // setTimeout(tiradaJugador(eleccion), 2000);
    }
}

//determinar tirada de cpu
function tiradaCPU(){
    let numAleat = aleatorioEntero(2,0);
    var imagen = document.getElementById("tiradaCpu");
    if(numAleat == 0){
        imagen.src = "images/piedra.png";
        return 'piedra';
    }
    else if(numAleat == 1){
        imagen.src = "images/papel.png";
        return 'papel';
    }
    else{
        imagen.src = "images/tijeras.png";
        return 'tijeras';
    }
    
}


function tiradaJugador(eleccion){
    
    let imagenplayer = document.getElementById("tiradaPlayer");
    
    
     //pone la foto en el jugador
    imagenplayer.src = "images/"+eleccion+".png";
    //tirada de cpu
   
    tcpu = tiradaCPU();

    console.log(eleccion);
    console.log(tcpu);
    

    var partida = document.getElementById("partida");
    resultado.style.color = 'black';

    //Prueba con ifs
    //condicion ganar
    if((eleccion=='piedra' && tcpu=='tijeras') || (eleccion=='tijeras' && tcpu=='papel') || (eleccion=='papel' && tcpu =='piedra')){
        resultado.innerHTML = "Ganaste!";
        ganadas++;
            ganada.innerHTML = "Ganadas: "+ ganadas;
            resultado.style.color = 'green';
    }
    //condicion empate
    else if((eleccion=='piedra' && tcpu=='piedra') || (eleccion=='tijeras' && tcpu=='tijeras') || (eleccion=='papel' && tcpu =='papel')){
        resultado.innerHTML = "Empate!";
        empates++;
        empate.innerHTML = "Empates: "+empates;
    } 
    //condicion perdida
    else {
        resultado.innerHTML = "Perdiste!"
        perdidas++;
        perdida.innerHTML = "Perdidas: "+ perdidas;
        resultado.style.color = 'red';
    }

    //comparar las elecciones y mostrar el resultado
    //modo pro con cada caso.

    /*switch(eleccion+","+tcpu){
        case "papel,papel":
            resultado.innerHTML="Empate! Ambos jugadores tienen "+eleccion+".";
            empates++;
            empate.innerHTML = "Empates: "+ empates;
            
            break;
        
        case "papel,piedra":
            document.getElementById("resultado").innerHTML="Ganaste! El papel se come la piedra";
            ganadas++;
            ganada.innerHTML = "Ganadas: "+ ganadas;
            resultado.style.color = 'green';
            break;

        case "papel,tijeras":
            document.getElementById("resultado").innerHTML="Has perdido! Tijera corta el papel";
            perdidas++;
            perdida.innerHTML = "Perdidas: "+ perdidas;
            resultado.style.color = 'red';
            break;

        case "piedra,piedra":
            document.getElementById("resultado").innerHTML="Empate! Ambos son piedras.";
            empates++;
            empate.innerHTML = "Empates: "+ empates;
            
            break;

        case "piedra,tijeras":
            document.getElementById("resultado").innerHTML="Ganaste! Piedra aplasta al tijeras";
            ganadas++;
            ganada.innerHTML = "Ganadas: "+ ganadas;
            resultado.style.color = 'green';
            
            break;

        case "piedra,papel":
            document.getElementById("resultado").innerHTML="Has perdido! el papel se come la piedra";
            perdidas++;
            perdida.innerHTML = "Perdidas: "+ perdidas;
            resultado.style.color = 'red';
            break;

        case "tijeras,tijeras":
            document.getElementById("resultado").innerHTML="Empate! Ambas armas son tijeras. ";
            empates++;
            empate.innerHTML = "Empates: "+ empates;
            
            break;

        case "tijeras,papel":
            document.getElementById("resultado").innerHTML="Ganaste! con las tijeras que cortan al papel";
            ganadas++;
            ganada.innerHTML = "Ganadas: "+ ganadas;
            resultado.style.color = 'green';
            break;

        case "tijeras,piedra":
            document.getElementById("resultado").innerHTML="Has perdido! la piedra machaca las tijeras";
            perdidas++;
            perdida.innerHTML = "Perdidas: "+ perdidas;
            resultado.style.color = 'red';
            break;
    }   */
    console.log(document.getElementById("resultado").innerHTML)
    
    
    partidas++;
    partida.innerHTML = "Partidas: "+ partidas;
    
}