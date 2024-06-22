function obtenerValorInput(id) {
  return document.getElementById(id).value;
}

function obtenerElementoPorId(id) {
  return document.getElementById(id);
}

function convertirStringAArray(str) {
  return str.split("");
}

function encriptar() {
  const palabraUsuario = obtenerValorInput("palabraUsuario");
  const arrLetras = convertirStringAArray(palabraUsuario);

  const encriptaciones = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  const palabraEncriptada = arrLetras
    .map((letra) => encriptaciones[letra] || letra)
    .join("");

  console.log(palabraEncriptada);
  return palabraEncriptada;
}

function desencriptar() {
  const contenedor = obtenerElementoPorId("contenedorEncriptador");
  const textarea = contenedor.querySelector("textarea");
  let palabraEncriptada = textarea.value;

  const desencriptaciones = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  for (let [encriptado, original] of Object.entries(desencriptaciones)) {
    const regex = new RegExp(encriptado, "g");
    palabraEncriptada = palabraEncriptada.replace(regex, original);
  }

  console.log(palabraEncriptada);
  return palabraEncriptada;
}

function mostrarPalabraEncriptada() {
  const imagen = obtenerElementoPorId("img");
  const subtitulo = obtenerElementoPorId("subtituloMensaje");
  if (imagen) {
    imagen.remove();
  }
  if (subtitulo) {
    subtitulo.remove();
  }
  agregarTextArea();
  const palabraEncriptada = encriptar();
  const contenedor = obtenerElementoPorId("contenedorEncriptador");
  const textarea = contenedor.querySelector("textarea");
  textarea.value = palabraEncriptada;
  obtenerElementoPorId("palabraUsuario").value = "";
  mostrarBotonCopiar();
}

function mostrarPalabraDesencriptada() {
  const palabraDesencriptada = desencriptar();
  const contenedor = obtenerElementoPorId("contenedorEncriptador");
  const textarea = contenedor.querySelector("textarea");
  textarea.value = palabraDesencriptada;
  obtenerElementoPorId("palabraUsuario").value = "";
}

function agregarTextArea() {
  const contenedor = obtenerElementoPorId("contenedorEncriptador");

  let textarea = contenedor.querySelector("textarea");
  if (!textarea) {
    textarea = document.createElement("textarea");
    textarea.className = "encriptador__resultado__textarea";
    contenedor.insertBefore(textarea, contenedor.firstChild);
  }
}

function mostrarBotonCopiar() {
  const botonCopiar = obtenerElementoPorId("btnCopiar");
  botonCopiar.style.display = "block";
}

function copiarAlPortapapeles() {
  const contenedor = obtenerElementoPorId("contenedorEncriptador");
  const textarea = contenedor.querySelector("textarea");
  textarea.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles");
}