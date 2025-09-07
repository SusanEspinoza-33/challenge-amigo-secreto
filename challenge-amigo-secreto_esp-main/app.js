// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 1. Crear un array para almacenar los nombres
let amigos = [];

// 2. Función para agregar un amigo
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  let input = document.getElementById("amigo");
  let nombre = input.value.trim(); // eliminamos espacios

  // Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  //evitar duplicados
    if (amigos.includes(nombre)) {
  alert("Ese nombre ya está en la lista.");
  return;
}

  // Actualizar el array de amigos
  amigos.push(nombre);

  // Mostrar la lista actualizada
  mostrarLista();

  // Limpiar el campo de entrada
  input.value = "";
}

// 3. Función para mostrar la lista de amigos
function mostrarLista() {
  // Obtener el elemento de la lista
  let lista = document.getElementById("listaAmigos");

  // Limpiar la lista existente
  lista.innerHTML = "";

  // Iterar sobre el arreglo y crear <li> para cada amigo
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// 4. Función para sortear un amigo secreto
function sortearAmigo() {
  // Validar que haya al menos 2 amigos disponibles
  if (amigos.length < 2) {
    alert("Agrega al menos 2 amigos para sortear.");
    return;
  }

  // Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  let amigoSecreto = amigos[indiceAleatorio];

  // Mostrar el resultado en el <ul id="resultado">
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "<li>🎉 El amigo secreto es: <strong>" + amigoSecreto + "</strong></li>";
}
