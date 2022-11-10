function cargarTestimonioEnPagina(testimonio, nombreDeUsuario, id, valorFor) {
  const placas = document.querySelector(".placas");
  const newComentario = document.createElement("label");
  newComentario.setAttribute("id", id);
  newComentario.setAttribute("class", "placa");
  newComentario.setAttribute("for", valorFor);

  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "infoplaca");
  newComentario.appendChild(newDiv);

  const newH2 = document.createElement("h2");
  newH2.setAttribute("class", "comentario");
  newH2.textContent = testimonio;
  newDiv.appendChild(newH2);

  const newP = document.createElement("p");
  newP.setAttribute("class", "usuario");
  newP.textContent = nombreDeUsuario;
  newDiv.appendChild(newP);

  placas.appendChild(newComentario);
}

async function cargarTestimonios() {
  const response = await fetch("../testimonios.json");
  const testimonios = await response.json();
  testimonios.data.forEach((testimonio) => {
    cargarTestimonioEnPagina(
      testimonio.testimonio,
      testimonio.nombreDeUsuario,
      testimonio.id,
      testimonio.valorFor
    );
  });
}

cargarTestimonios();
