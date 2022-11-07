const grilla = document.querySelector("#grillaform1");

const sesion = document.querySelector(".btnsesion");
//sesion.addEventListener("click", mostrarDatos);

function mostrarDatos() {
  const form = document.forms["formsesion"];

  const datos = [];
  for (let elemento of form) {
    datos.push(elemento.value);
    elemento.value = "";
  }
  console.log(JSON.stringify(datos));
  return datos;
}

function guardarSesion(datos) {
  localStorage.setItem("nombre", datos[0]);
  localStorage.setItem("apellido", datos[1]);
  localStorage.setItem("mail", datos[2]);
  localStorage.setItem("contraseña", datos[3]);
}

async function mostrarModal() {
  const result = await Swal.fire({
    title: "Quisieras recordar la contraseña?",
    text: "De ésta forma podrás mantener iniciada tu sesión!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí!",
  });
  if (result.isConfirmed) {
    Swal.fire("Guardada!", "", "success");
    return true;
  }
  return false;
}

function cargarPerfilUsuario(datosDeUsuario) {
  let nombreDeUsuario;
  if (datosDeUsuario) {
    nombreDeUsuario = datosDeUsuario[0];
  } else {
    nombreDeUsuario = localStorage.getItem("nombre");
  }
  if (nombreDeUsuario) {
    grilla.innerHTML = "";
    const newSection = document.createElement("section");
    newSection.setAttribute("id", "plataforma");

    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "textbienvenida");
    newSection.appendChild(newDiv);

    const newH1 = document.createElement("h1");
    newH1.setAttribute("class", "control2");
    newH1.textContent = `¡Te damos la bienvenida, ${nombreDeUsuario}!`;
    newDiv.appendChild(newH1);

    const newH2 = document.createElement("h2");
    newH2.setAttribute("class", "control2");
    newH2.textContent =
      "Aquí podrás acceder a toda la info de tus cursos, así como también contactarte con tus profesores por dudas y consultas.";
    newDiv.appendChild(newH2);

    const newH3 = document.createElement("h3");
    newH3.setAttribute("class", "control2");
    newH3.textContent = "¡Coordiná una videollamada con tu profesor/a acá! 👇!";
    newDiv.appendChild(newH3);

    const newBtn = document.createElement("button");
    newBtn.setAttribute("id", "videollamada");
    newBtn.textContent = "Videollamame";
    newDiv.appendChild(newBtn);

    const newImg = document.createElement("div");
    newImg.setAttribute("id", "imggrilla");
    grilla.appendChild(newImg);

    grilla.appendChild(newSection);
  }
}

sesion.addEventListener("click", async function (event) {
  event.preventDefault();
  const datos = mostrarDatos();
  const resultadoModal = await mostrarModal();
  cargarPerfilUsuario(datos);
  if (resultadoModal) {
    console.log("datomodal", datos);
    guardarSesion(datos);
  }
});

cargarPerfilUsuario();
