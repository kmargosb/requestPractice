// Variables

const btnFullDatos = document.getElementById("btn");
const btnDato = document.getElementById("btn2");
const $data = document.getElementById("data");
let nro = 0;
const userRequest = new XMLHttpRequest();

// Peticiones AJAX

btnFullDatos.addEventListener("click", function () {
  userRequest.open("GET", "https://jsonplaceholder.typicode.com/users");
  userRequest.onload = function () {
    let userData = JSON.parse(userRequest.responseText);
    // console.log(userData);
    renderHtml(userData);
  };
  userRequest.send();
});

btnDato.addEventListener("click", function () {
  userRequest.open("GET", "https://jsonplaceholder.typicode.com/users");
  userRequest.onload = function () {
    let userData = JSON.parse(userRequest.responseText);
    // console.log(userData);
    userHtml(userData);
  };
  userRequest.send();
});

function userHtml(datos) {
  datoIndividual = `
        <tr>
            <td>${datos[nro].id}</td><td>${datos[nro].name}</td><td>${datos[nro].username}</td><td>${datos[nro].email}</td><td>${datos[nro].phone}</td>
        </tr>`;
  $data.insertAdjacentHTML('beforeend', datoIndividual);
  nro++;
}

function renderHtml(datos) {
  let fullData = "";
  for (let i = 0; i < datos.length; i++) {
    fullData += `
        <tr>
            <td>${datos[i].id}</td><td>${datos[i].name}</td><td>${datos[i].username}</td><td>${datos[i].email}</td><td>${datos[i].phone}</td>
        </tr>`;
  }
  $data.innerHTML = fullData;
}