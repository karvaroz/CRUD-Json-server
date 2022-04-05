let formulario = document.getElementById("formulario");
let btnReference = document.getElementById("btnReference");
let btnEditar = document.getElementById("btnEditar");
let btnEliminar = document.getElementById("btnEliminar");

document.addEventListener("DOMContentLoaded", async () => {
  document.getElementById("id").style.display = "none";
  document.getElementById("label-edit").style.display = "none";
});

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let image = document.getElementById("image").value;
  let reference = document.getElementById("reference").value;

  let resp = await fetch(
    "https://api-clothing-karvaroz.herokuapp.com/products/",
    {
      method: "POST",
      body: JSON.stringify({
        name,
        image,
        reference
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }
  );
  let data = resp.json();
  formulario.reset();
});

btnReference.addEventListener("click", async (e) => {
  let referenceValue = document.getElementById("reference").value;
  let response = await fetch(
    "https://api-clothing-karvaroz.herokuapp.com/products/"
  );
  let data = await response.json();
  let referenceSearch = data.find(
    (product) => product.reference === referenceValue
  );
  const { name, reference, image, id } = referenceSearch;
  document.getElementById("name").value = name;
  document.getElementById("reference").value = reference;
  document.getElementById("image").value = image;
  document.getElementById("id").value = id;
});

btnEditar.addEventListener("click", async () => {
  let idModificar = document.getElementById("id").value;
  let nameModificar = document.getElementById("name").value;
  let imageModificar = document.getElementById("image").value;
  let referenceModificar = document.getElementById("reference").value;

  let resp = await fetch(
    `https://api-clothing-karvaroz.herokuapp.com/products/${idModificar}`,
    {
      method: "PUT",
      body: JSON.stringify({
        id: idModificar,
        name: nameModificar,
        image: imageModificar,
        reference: referenceModificar
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }
  );
  let data = resp.json();
  console.log(data);
});

btnEliminar.addEventListener("click", async () => {
  let referenceEliminar = document.getElementById("reference").value;
  let res = await fetch(
    `https://api-clothing-karvaroz.herokuapp.com/products/${referenceEliminar}`,
    {
      method: "DELETE",
    }
  );
  let data = res.json();
  console.log(data);
});
