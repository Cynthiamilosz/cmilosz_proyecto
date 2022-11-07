const submit = document.querySelector("#submit");
submit.addEventListener("click", mostrarDatos);

function mostrarDatos() {
  const form = document.forms["formconsulta"];

  const datos = [];
  for (let elemento of form) {
    datos.push(elemento.value);
    elemento.value = "";
  }
  console.log(JSON.stringify(datos));
}

function mostrarModal(event) {
  event.preventDefault();

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Se envió la consulta",
    text: "Te responderemos a la brevedad!",
  });
}

submit.addEventListener("click", mostrarModal);
