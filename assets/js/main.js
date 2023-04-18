const resultado = document.getElementById('encriptado');
const btncopiar = document.getElementById('btn-copiar');
const divoculto = document.getElementById('ocultar');
let etiqueta = document.getElementById('etiqueta');
let textArea = document.getElementById('original');

function encriptarTexto() {
    let texto = textArea.value;
    // Verificar si el texto contiene mayúsculas o caracteres especiales
    if (!/^[a-z\s]+$/.test(texto)) {
        alert('Error el texto contiene mayúsculas o caracteres especiales');
        return;
    }
  
    // Reemplazar letras según la especificación
    let textoEncriptado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    resultado.textContent = textoEncriptado;
    etiqueta.textContent = 'Texto Encriptado:';
    ocultarImagen();
}

function copiar() {
  const seleccion = window.getSelection();
  const rango = document.createRange();

  rango.selectNodeContents(resultado);
  seleccion.removeAllRanges();
  seleccion.addRange(rango);

  // Copia el contenido seleccionado al portapapeles
  document.execCommand('copy');

  // Desselecciona el contenido limpiamos textos y mostramos el div inicial
  seleccion.removeAllRanges();
  limpiarTextos();
  mostrarImagen();
  // Muestra un mensaje de éxito
  alert('Contenido copiado al portapapeles!');
}

function desencriptarTexto() {
    let texto = document.getElementById('original').value;
    if (!/^[a-z\s]+$/.test(texto)) {
        alert('Error el texto contiene mayúsculas o caracteres especiales');
        return;
    }
    // Reemplazar letras según la especificación inversa
    let textoDesencriptado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    resultado.textContent = textoDesencriptado;
    etiqueta.textContent = 'Texto Desencriptado:';
    ocultarImagen();
}

function limpiarTextos(){
  resultado.textContent = ''
  textArea.value = '';
  etiqueta.textContent ='';
  textArea.placeholder = 'Ingresa el texto a encriptar acá';
}

function ocultarImagen(){
  divoculto.classList.add('hidden');
  btncopiar.classList.remove('ishidden');
  resultado.classList.remove('ishidden');
  etiqueta.classList.remove('ishidden');
}

function mostrarImagen(){
  divoculto.classList.remove('hidden');
  btncopiar.classList.add('ishidden');
  resultado.classList.add('ishidden');
  etiqueta.classList.add('ishidden');
}
  