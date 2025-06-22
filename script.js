document.getElementById("btn1").addEventListener("click",()=>{
    let body = document.querySelector("body"); 
    fetch("https://hp-api.onrender.com/api/characters")
    .then(response => response.json())
    .then((response)=>{
        for(let i = 0; i < 10 ; i++ ){

            let personaje = response[i];
            let nuevoElemento = document.createElement("div");
            let nombre = document.createElement("h2");
            let casa =  document.createElement("h3");
            let img =  document.createElement("img");

            nombre.textContent = response[i].name;
            casa.textContent = response[i].house;
            img.src = personaje.image;

            body.appendChild(nuevoElemento);
            nuevoElemento.appendChild(casa);
            nuevoElemento.appendChild(nombre); 
            nuevoElemento.appendChild(img); 
            
            









        }


    })
    .catch(error => console.error(error))
});
