const formulario = document.getElementById("formulario");
const inputs = document.querySelector("#nomUsuario")
const url = "https://jsonplaceholder.typicode.com/users";
let datosUser;

function getFromAPI(url, datos) {

    fetch(url)
        .then(res => res.json())
        .then(data => datos = data)
        .then(() => { return (datos) })
}

// getFromAPI('https://jsonplaceholder.typicode.com/users', getData);

// function getData(arrOfObjs) {
//     // var results = "";
//     arrOfObjs.forEach((x) => {
//             // results += "<p> Id: " + x.id + "<ul>"
//             // Object.keys(x).forEach((p) => {
//             //     // results += "<li>" + (p + ": " + x[p]) + "</li>";
//             //     console.log(x + " " + p)
//             // });
//             // results += "</ul> </p> <hr>"
//             console.log(x)
//         })
//         // results += "";
//         // document.getElementById("myDiv").innerHTML = results;
// }

function validar() {
    getFromAPI(url, datosUser);
    console.log(datosUser);
    // let nom_usuario = document.getElementById("nomUsuario").value;
    // let correo = document.getElementById("correo").value;
    //     if(nom_usuario === "" && correo === ""){
    //         alert("Los campos estan vacios")
    //     }else{
    //         const emailValido = array.filter(emai => emai.email === correo);

    //     }


}