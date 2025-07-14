function mostrarAlerta() {
  alert("¡Hola! Esta es una alerta personalizada desde JavaScript.");
}

function enviarFormulario(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;
  document.getElementById("respuesta").textContent = `Gracias ${nombre}, tu mensaje ha sido recibido. Te responderemos a ${correo}.`;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mostrarAlerta() {
  const alerta = document.getElementById("alerta");
  alerta.style.display = "block";
  alerta.classList.add("alerta");
  setTimeout(() => {
    alerta.style.display = "none";
  }, 3000);
}

function mostrarImagen(event) {
  if (event.target.tagName === 'IMG') {
    const visor = document.getElementById("visor");
    const img = document.getElementById("imagenAmpliada");
    img.src = event.target.src;
    img.alt = event.target.alt;
    visor.style.display = "flex";
  }
}

function cerrarImagen() {
  const visor = document.getElementById("visor");
  visor.style.display = "none";
}

function abrirLightbox(imagen) {
  const lightbox = document.getElementById("lightbox");
  const imgAmpliada = document.getElementById("imgAmpliada");
  imgAmpliada.src = imagen.src;
  imgAmpliada.alt = imagen.alt;
  lightbox.style.display = "flex";
}

function cerrarLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
