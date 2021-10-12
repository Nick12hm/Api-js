const getUrl = new URLSearchParams(window.location.search);
const url = getUrl.get('URL');
const urlAlbumes = "albums";
let albumes = [];
fetch(url)
    .then(res => res.json())
    .then(data => {
        let name = data.username;
        document.getElementById("nameUser").innerText = `${name}`
    })
    .catch(err => console.log(err))

async function obtAlbum(url) {
    let res = await fetch(url);
    let data = await res.json();
    return data;
}

async function obtDatos() {
    albumes = await obtAlbum(`${url}/${urlAlbumes}`)
    console.log(albumes);
}

obtDatos();