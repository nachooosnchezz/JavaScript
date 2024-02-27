// valor inicial del encabezado
const valEncabezado1 = document.getElementById("encabezado1").innerText ;
// selecciono el primer input
const primerInput = document.querySelector("input");
// selecciono el primer button
const primerButton = document.querySelector("button");


// selecciono el primer encabezado 
const  primerEncabezado = document.getElementById("encabezado1");
//evento para que al hacer click llame a una funcion que remplace el texto del "encabezado1" por el valor que tenga el primerInput
primerButton.addEventListener("click", function() {
        // selecciono el encabezado a cambiar el titulo
        primerEncabezado.innerText = primerInput.value;
    }
);

// selecciono el input de añadir contendio
const inputContenido = document.getElementById("frase");
// selecciono el boton de añadir
const botonAñadir = document.getElementById("botonFrase");

//selecciono la section a la que le añadiré el contenido
const sectionContenido = document.querySelector("section");

botonAñadir.addEventListener("click", function(){
        //creo un parrafo
        let parrafoNuevo = document.createElement("p");
        //le añado una clase para resetearlo
        parrafoNuevo.classList.add("nuevo");
        // añado el parrafo a la section
        sectionContenido.appendChild(parrafoNuevo);

        // el contenido de inputContenido (lo que yo he escrito) será el contenido del parrafo
        parrafoNuevo.innerText = inputContenido.value;
    }
);

//selecciono todos los inputs 
const inputs = document.querySelectorAll("input");
// de esos inputs, escojo el de la ultima posicion
const ultimoInput = inputs[document.querySelectorAll("input").length - 1];
console.log(
)

// al hacer click en ese input, el valor es el inicial 
ultimoInput.addEventListener("click", function(){
        // selecciono los parrafos con la clase "añadido-js"
        let parrafosAñadidos = document.querySelectorAll(".nuevo");
        //elimino los parrafos añadidos con un bucle para que vaya 1 por 1 de toda la lista obtenida en parrafosAñadidos
        for (let parrafo of parrafosAñadidos) {
            parrafo.style.display = "none";
        }          
        // restauro el valor inicial del encabezado
        primerEncabezado.innerText = valEncabezado1 ;
    }
);

// selecciono el checkbox para mostrar el encabezado
const primerChkbx = document.querySelector("ul > li:nth-child(5) > input") ;
// al cambiar el estado del checkbox:
primerChkbx.addEventListener("change", function(){
        if (primerChkbx.checked) {
            // si está checked, se muestra
            primerEncabezado.style.display = "block"
        } else{ // si no, no se muestra
            primerEncabezado.style.display = "none";
        }
    }
);


//selecciono el segundo checkbox
let segundoChkbx = document.querySelector("ul > li:nth-child(6) > input");

segundoChkbx.addEventListener("change", function(){
    // selecciono los parrafos añadidos
    let parrafosAñadidos = document.querySelectorAll(".nuevo");
    if (segundoChkbx.checked) {
        for (let parrafo of parrafosAñadidos){
            parrafo.style.display = "block";
        }
    } else{
        for (let parrafo of parrafosAñadidos) {
            parrafo.style.display = "none";
        }
    }
});

// seleccionar los input de contraseña
const contraseña1 = document.getElementById("pass1");
const contraseña2 = document.getElementById("pass2");
// seleccionar el input de enviar
const btnEnviar = inputs[inputs.length - 2];
//configuramos los inputs con el boton 


btnEnviar.addEventListener("click", function(){
    contraseña1.classList.add("passwrd");
    contraseña2.classList.add("passwrd");
    if((contraseña1.value === "") && (contraseña2.value === "")){
        contraseña1.classList.add("incorrecto");
        contraseña2.classList.add("incorrecto");
        alert("El contenido de las contraseñas no puede estar vacío.");
        
    } else if (contraseña1.value === contraseña2.value){
        contraseña1.classList.remove("incorrecto");         // para que no se quede en rojo
        contraseña2.classList.remove("incorrecto");         // para que no se quede en rojo

        contraseña1.classList.add("correcto");
        contraseña2.classList.add("correcto");        
        alert("Contraseñas comprobadas.");
    } else {
        contraseña1.classList.add("incorrecto");
        contraseña2.classList.add("incorrecto");
        alert("Las contraseñas introducidas no son correctas.");
    }
                //NIF
    //seleccionamos el input del nif
    const inputdni = document.getElementById("dni");
    console.log(inputdni);

    // Seleccionar el input de enviar
    if (inputdni.value === "") {
        inputdni.classList.add("incorrecto");
        alert("Introduce el NIF");
        return;
    } else if (!validarNIF(inputdni.value)) {
        inputdni.classList.add("incorrecto");
        inputdni.style.border = "5px solid red";
        alert("NIF no válido, Ingrese un NIF que concuerde la letra con el numero");
        return;
    } else{
        inputdni.classList.add("correcto");
    }

    // Configurar la función de validar
    function validarNIF(nif) {
        const asignacionletras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const letraNIF = asignacionletras.charAt(parseInt(nif.slice(0, -1), 10) % 23);  // nif.slice (0, -1) ---> esto saca desde el 0 hasta el penúltimo  
        return letraNIF === nif.charAt(8).toUpperCase(); // letra pasada a mayusculas
    }
});



