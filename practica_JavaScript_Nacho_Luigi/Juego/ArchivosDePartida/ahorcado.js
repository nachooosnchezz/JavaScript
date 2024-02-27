// ### VARIABLES ###




// Array de palabras con pista
let palabrasPista = [["atlantico", "Un océano"], ["pepa", "Una máquina"],["laurel", "Un árbol"], ["plaza", "Espacio público"], ["rueda", "Gran invento"], ["cereza", "Una fruta"], ["petanca", "Un juego"], ["higuera", "Un árbol"], ["everest", "Un monte"], ["relampago", "Antecede al trueno"], ["jirafa", "Un animal"], ["luxemburgo", "Un país"], ["uruguay", "Un país"], ["ilustracion", "Representación gráfica"], ["excursion", "Actividad en la naturaleza"], ["empanadilla", "De la panadería"], ["pastel", "De la pastelería"], ["colegio", "Lugar para estudiar"], ["carrera", "Competición"], ["mermelada", "Confitura"]];



//opción SIN PISTA//
let palabras = ["atlantico","ordenador","laurel","plaza","rueda","cereza","petanca","higuera","everest","relampago","jirafa","luxemburgo","uruguay","ilustracion","excursion","empanadilla","pastel","colegio","carrera","mermelada"];

// Palabra a averiguar
let palabra = "";

// Nº aleatorio
let rand;

//Array donde ir guardando las letras que acierta el usuario en la posición en la que están.
//Puedes valerte de este array para ir creando con él el string que se va mostrando en los guiones a completar.
let oculta = [];

// Elemento html donde se dibujan los guiones y el usuario va intentando completar la palabra
let hueco = document.getElementById("palabra");

// Contador de intentos
let cont = 6;

// Botones de letras
let buttons = document.getElementsByClassName('letra');

// Boton de reset
let btnInicio = document.getElementById("reset");

let reinicio;
let pedirPista;
let nuevaPalabra;

                                                                // ### FUNCIONES ###

function registrarPalabra(){
  //OPCIONAL//
}

// Escoger palabra al azar
function generaPalabra() {
  rand = Math.floor(Math.random() * palabrasPista.length); // selecciono un numero random en funcion de la longitud del array y lo trunco para que sea entero.
  palabra = palabrasPista[rand][0].toUpperCase(); // selecciono una palabra y la guarda en mayusculas
}


// Función para dibujar los guiones de la palabra
function pintarGuiones(num) {
  for (let i = 0; i < num; i++) {
    oculta[i] = "_";
  }
  hueco.innerHTML = oculta.join("");
}
 
//Función para crear los botones de las letras
function generaABC (a,z) {
  document.getElementById("abcdario").innerHTML = "";
  let i = a.charCodeAt(0), j = z.charCodeAt(0);
  let letra = "";
  for( ; i<=j; i++) {
    letra = String.fromCharCode(i).toUpperCase();
    document.getElementById("abcdario").innerHTML += "<button value='" + letra + "' onclick='intento(\"" + letra + "\")' class='letra' id='"+letra+"'>" + letra + "</button>";
    if(i==110) {
      document.getElementById("abcdario").innerHTML += "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='Ñ'>Ñ</button>";
    }
  }
}

//Función para comprobar la letra de cada intento
function intento(letra) {
  //acuérdate de deshabilitar la letra que acaba de ser pulsada
  const idLetra = document.getElementById(letra);
  idLetra.disabled = true;
  if (palabra.includes(letra)) {
    // la letra está en la palabra
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] === letra) {
        oculta[i] = letra;
        idLetra.classList.add("siEsta");
        const acierto = document.getElementById("acierto");
        acierto.innerHTML = "Está!";
        acierto.classList.add("acierto", "verde");
      }
    }
    hueco.innerHTML = oculta.join(" ");
  } else {
    // la letra no está en la palabra
    cont--;
    document.getElementById("intentos").innerHTML = cont;
    idLetra.classList.add("noEsta");
    const acierto = document.getElementById("acierto");
    acierto.innerHTML = "No está!"
    acierto.classList.add("rojo", "acierto");

    const imagenAhorcado = document.getElementById("imagen");

    // if(cont === 5){
    //   imagenAhorcado.src = "img/ahorcado_5.png";
    // }else if (cont === 4){
    //   imagenAhorcado.src = "img/ahorcado_4.png";
    // }else if (cont === 3){
    //   imagenAhorcado.src = "img/ahorcado_3.png";
    // }else if (cont === 2){
    //   imagenAhorcado.src = "img/ahorcado_2.png";
    // }else if (cont === 1){
    //   imagenAhorcado.src = "img/ahorcado_1.png";
    // } else{
      
    // }
  }

  compruebaFin();
  //esta función hace que la información Está!/No está! de cada letra desaparezca.
  setTimeout(function () { 
    document.getElementById("acierto").className = ""; 
  }, 800);

  setTimeout();
}


//Función para mostrar la pista
function pista() {
  //OPCIONAL//
  const palabraPista = palabrasPista[rand][1];
  document.getElementById("hueco-pista").innerHTML = palabraPista;
}

// Comprueba si ha finalizado
function compruebaFin() {
  const imagenAhorcado = document.getElementById("imagen");
  // verifico que no queden guiones bajos en oculta (significa que se ha adivinado la palabra)
  if( oculta.indexOf("_") == -1 ) {
    // felicitp y asigno clases 
    document.getElementById("msg-final").innerHTML = "¡Felicidades!";
    document.getElementById("msg-final").className = "ganado zoom-in";
    document.getElementById("palabra").classList.add("encuadreV");
    //se deshabilitan botones 
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function() { location.reload() };
  }else if (cont === 6){ // imagenes segun el contador
    imagenAhorcado.src = "img/ahorcado_6.png";
  }else if(cont === 5){
    imagenAhorcado.src = "img/ahorcado_5.png";
  }else if(cont === 4){
    imagenAhorcado.src = "img/ahorcado_4.png";
  }else if(cont === 3){
    imagenAhorcado.src = "img/ahorcado_3.png";
  } else if(cont === 2){
    imagenAhorcado.src = "img/ahorcado_2.png";
  } else if (cont === 1){
    imagenAhorcado.src = "img/ahorcado_1.png";
  }else{
    // poner Game Over y asigno clases de Game Over
    document.getElementById("msg-final").innerHTML = "¡Game Over!";
    document.getElementById("msg-final").className = "rojo zoom-in";
    imagenAhorcado.src = "img/ahorcado_5.png";

    // creo un elemento para mostrar la palabra oculta
    let palabraOculta = document.createElement("p");
    palabraOculta.innerHTML = palabra;
    palabraOculta.className = "encuadreR";
    document.getElementById("hueco-pista").appendChild(palabraOculta);
    //se deshabilitan botones
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    imagenAhorcado.src = "img/ahorcado_0.png";
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function () { location.reload() };
  }
}

// Restablecer juego
function inicio() {
  generaPalabra();
  oculta = [];
  pintarGuiones(palabra.length);
  generaABC("a","z");
  cont = 6;
  document.getElementById("intentos").innerHTML=cont;
  document.getElementById("hueco-pista").innerHTML = "";
}

// Iniciar
window.onload = inicio();
reinicio = document.getElementById('reset');
reinicio.addEventListener('click', inicio);
pedirPista = document.getElementById('pista');
pedirPista.addEventListener('click', pista);
nuevaPalabra = document.getElementById('alta');
nuevaPalabra.addEventListener('click', registrarPalabra);


