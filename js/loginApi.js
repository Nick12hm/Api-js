const formulario = document.getElementById("formulario");
const inputs = document.querySelector("#nomUsuario")
const url = "https://jsonplaceholder.typicode.com/users";
let users = [];
async function getFromAPI(url) {
    let res = await fetch(url);
    let data = await res.json()
    return data;
}

async function validar() {
    let nom_usuario = document.getElementById("nomUsuario").value;
    let correo = document.getElementById("correo").value;
    if (nom_usuario === "" && correo === "") {
        alert("Los campos estan vacios")
    } else {
        users = await getFromAPI(url)
        const userData = users.filter(username => username.username === nom_usuario);
        if (userData.length > 0) {
            if (userData[0].email === correo) {
                window.location.href = `inicio.html?id=${userData[0].id}`;
            } else {
                console.log("el correo no existe");
            }
        } else {
            console.log("no hay información")
        }

    }
}