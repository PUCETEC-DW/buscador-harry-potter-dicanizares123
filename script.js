const url = "https://hp-api.onrender.com/api/characters";
const input = document.getElementById("inputNombre");
const boton = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");
const filtroCasa = document.getElementById("filtroCasa");
const imagenPorDefecto = "https://via.placeholder.com/100x150?text=Sin+imagen";

boton.addEventListener("click", buscarPersonaje);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") buscarPersonaje();
});

function buscarPersonaje() {
  const nombreBuscado = input.value.toLowerCase().trim();
  const casaSeleccionada = filtroCasa.value;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let filtrados = data.filter((p) =>
        p.name.toLowerCase().includes(nombreBuscado)
      );

      if (casaSeleccionada !== "") {
        filtrados = filtrados.filter((p) => p.house === casaSeleccionada);
      }

      filtrados.sort((a, b) => a.name.localeCompare(b.name));
      mostrarResultados(filtrados);
    })
    .catch((error) => {
      resultado.innerHTML = "<p>Error al obtener los datos.</p>";
      console.error(error);
    });
}

//Esta parte nesecito consultar
function mostrarResultados(personajes) {
  resultado.innerHTML = "";

  if (personajes.length === 0) {
    resultado.innerHTML = "<p>Personaje no encontrado</p>";
    return;
  }

  personajes.forEach((personaje) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
      <img src="${personaje.image || imagenPorDefecto}" alt="${personaje.name}">
      <h3>${personaje.name}</h3>
      <p>Casa: ${personaje.house || "Desconocida"}</p>
    `;

    resultado.appendChild(tarjeta);
  });
}
