const url = "https://hp-api.onrender.com/api/characters";
const input = document.getElementById("inputNombre ");
const filtroCasa = document.getElementById("filtroCasa");
const boton = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");
const imgPorDefecto = "https://via.placeholder.com/100x150?text=Sin+imagen";

function mostrarResultados(personaje) {
  let nombre = "";
}

function buscarPersonaje() {
  const nombreBuscado = input.value.tolowerCase().trim();
  const casaSeleccionada = filtroCasa.value;

  fetch(url)
    .then(res.json())
    .then((data) => {
      let filtrados = data.filter((p) =>
        p.name.tolowerCase().includes(nombreBuscado)
      );

      if (casaSeleccionada !== "") {
        filtrados = filtrados.filter((p) => p.house === casaSeleccionada);
      }

      filtrados.sort((a, b) => a.name.localeCompare(b.name));
      mostrarResultados(filtrados);
    })
    .catch((error) => {
      resultado.innerHTML = "<p>Error al obtener datos.</p> ";
      console.error(error);
    });
}

boton.addEventListener("click", buscarPersonaje);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    buscarPersonaje();
  }
});
