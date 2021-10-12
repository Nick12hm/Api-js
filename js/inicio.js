const getUrl = new URLSearchParams(window.location.search);
const id = getUrl.get('id');
console.log(id);