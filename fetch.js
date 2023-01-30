// Variables

const btnFullDatos = document.getElementById("btn");
const btnDato = document.getElementById("btn2");
const $data = document.getElementById("data");

// --------- Peticiones FETCH-------------

btnFullDatos.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => mostrarDatos(res));
          
  });
  
  function mostrarDatos(datos) {
      let fullData = "";
      for (let i = 0; i < datos.length; i++) {
        fullData += `
          <tr>
              <td>${datos[i].id}</td><td>${datos[i].name}</td><td>${datos[i].username}</td><td>${datos[i].email}</td><td>${datos[i].phone}</td>
          </tr>`;
      }
      $data.innerHTML = fullData;
    }
  
  btnDato.addEventListener("click", function () { // ------------- >  Metodo "POST"
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: '{"name" : "nelson", "username" : "kmargo", "email": "emaildenelson@gmail.com", "phone" : "555-55cincorriente"}',
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => addHtml(res));
  });
  
  function addHtml(dato) {
    datoIndividual = `
          <tr>
              <td>${dato.id}</td><td>${dato.name}</td><td>${dato.username}</td><td>${dato.email}</td><td>${dato.phone}</td>
          </tr>`;
    $data.insertAdjacentHTML("beforeend", datoIndividual);
  }