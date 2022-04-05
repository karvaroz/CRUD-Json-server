let btnGuardar = document.getElementById("btnGuardar");
let btnEditar = document.getElementById("btnEditar");
let btnEliminar = document.getElementById("btnEliminar");
let btnReference = document.getElementById("btnReference");
let form = document.getElementById("formulario");

let UrlForm = "https://api-clothing-karvaroz.herokuapp.com/products/";
// GUARDAR
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let reference = document.getElementById("reference").value;
  let image = document.getElementById("image").value;
  let response = await fetch(UrlForm, {
    method: "POST",
    body: JSON.stringify({
      name,
      reference,
      image,
    }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  let data = await response.json();
  console.log(data)
  form.reset()
});

// BUSCAR
btnReference.addEventListener("click", async (e) => {
  let referenceValue = document.getElementById("reference").value;
  let response = await fetch(UrlForm);
  let data = await response.json();
  let referenceSearch = data.find((prod) => prod.reference === referenceValue);
  const { name, reference, image, id } = referenceSearch;
  document.getElementById("name").value = name;
  document.getElementById("reference").value = reference;
  document.getElementById("image").value = image;
  document.getElementById("id").value = id;
});

// EDITAR
btnEditar.addEventListener("click", async (e) => {
  let nameModificar = document.getElementById("name").value;
  let referenceModificar = document.getElementById("reference").value;
  let imageModificar = document.getElementById("image").value;
  let idModificar = document.getElementById("id").value;

  let response = await fetch(UrlForm + idModificar, {
    method: "PUT",
    body: JSON.stringify({
      name: nameModificar,
      reference: referenceModificar,
      image: imageModificar,
      id: idModificar,
    }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  let data = await response.json();
  console.log(data);
  form.reset()
});

// ELIMINAR
btnEliminar.addEventListener("click", async (e) => {
  let idEliminar = document.getElementById("id").value;
  let response = await fetch(UrlForm + idEliminar, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  let data = await response.json();
  console.log(data);
  form.reset();
});
