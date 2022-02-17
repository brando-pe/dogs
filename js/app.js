const picture = document.querySelector("#picture");

document.addEventListener("DOMContentLoaded", obtenerDatos);

function obtenerDatos(){
    const url = "https://dog.ceo/api/breeds/image/random"
    fetch(url)
        .then(respuesta => respuesta.json())
        .then( dog => mostrarHTML(dog))
        .catch(error => console.log(error))
}


function mostrarHTML(dog){
    const {message} = dog
    picture.innerHTML = `
        <h1 style="color: darkblue;">Dog</h1>
        <img src="${message}" height="360" width="360"></img>
    `;
}
