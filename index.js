let datos = data;
let imprimirHTML = document.getElementById("name")

imprimirHTML.innerHTML = `
    <div>
    <p>Me llamo ${datos.miNombre}</p>
    <p>Me apellido ${datos.miApellido}</p>
    <p>Me gusta el color ${datos.colorFavorito}</p>
    <p>Tengo una mascota llamada ${datos.nombreDeMascota}</p>
    </div>`
datos.musicaFavorita.forEach((x)=>{
    imprimirHTML.innerHTML += `
    <div>
    <h2>Mi Musica Favorita Es</h2>
    <li>${x.baladas}</li>
    <li>${x.metal}</li>
    <li>${x.rock}</li>
    <li>${x.salsa}</li>
    <li>${x.trap}</li>
    </div>`
})