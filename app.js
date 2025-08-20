let listaAmigos = []; // declaro una variable vacía

function agregarAmigo() {
    let input = document.getElementById("amigo"); // obtengo el input
    let nombre = input.value;

    
    if (nombre !== "") { // verifico que no esté vacío
        listaAmigos.push(nombre); // lo agrego al array
        input.value = ""; // limpio el input
        mostrarLista(); // muestro la lista
    } else {
        mostrarError(); // si está vacío, muestro el mensaje de error
    }
}

function mostrarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // limpio la lista antes de mostrarla

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i]; // accedo al elemento con []
        ul.appendChild(li); // agrego el <li> al <ul>
    }
}

function mostrarError() {
    alert("Ingrese un nombre valido"); //mensaje de error
}

function sortearAmigo() {
    if (listaAmigos.length === 0) { //verifico que la lista no este vacia
        alert("⚠️ No hay amigos en la lista para sortear");
        return;
    }

    let sorteado = listaAmigos[elegirAleatorio()]; //si no esta vacia sorteo una posicion

    let ul = document.getElementById("resultado");
    let li = document.createElement("li");
    li.textContent = "El amigo secreto es: " + sorteado; 

    ul.appendChild(li);
}

function elegirAleatorio() {
    return Math.floor(Math.random() * listaAmigos.length); //sortea un numero random q uso como posicion
}
