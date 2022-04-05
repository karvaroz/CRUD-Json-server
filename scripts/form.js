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
  let price = document.getElementById("price").value;
  let description = document.getElementById("description").value;
  let type = document.getElementById("type").value;
  let category = document.getElementById("category").value;
  let image = document.getElementById("image").value;
  let reference = document.getElementById("reference").value;

  let resp = await fetch(
    "https://api-clothing-karvaroz.herokuapp.com/products/",
    {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        description,
        type,
        category,
        image,
        reference,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }
  );
  let data = resp.json();
  formulario.reset();
});

btnReference.addEventListener("click", async () => {
  let referenceSearch = document.getElementById("reference").value;
  let resp = await fetch(
    "https://api-clothing-karvaroz.herokuapp.com/products/"
  );
  let data = await resp.json();
  let productSearch = data.find((product) => product.reference === referenceSearch);

  const { name, price, description, type, category, image, reference, id } =
    productSearch;
    console.log(name, price, description, type, category, image, reference, id);

  document.getElementById("name").value = name;
  document.getElementById("price").value = price;
  document.getElementById("description").value = description;
  document.getElementById("type").value = type;
  document.getElementById("category").value = category;
  document.getElementById("image").value = image;
  document.getElementById("id").value = id;
  document.getElementById("reference").value = reference;
});

btnEditar.addEventListener("click", async () => {
  let idModificar = document.getElementById("id").value;
  let nameModificar = document.getElementById("name").value;
  let priceModificar = document.getElementById("price").value;
  let descriptionModificar = document.getElementById("description").value;
  let typeModificar = document.getElementById("type").value;
  let categoryModificar = document.getElementById("category").value;
  let imageModificar = document.getElementById("image").value;
  let referenceModificar = document.getElementById("reference").value;

  let resp = await fetch(
    `https://api-clothing-karvaroz.herokuapp.com/products/${idModificar}`,
    {
      method: "PUT",
      body: JSON.stringify({
        id: idModificar,
        name: nameModificar,
        price: priceModificar,
        description: descriptionModificar,
        type: typeModificar,
        category: categoryModificar,
        image: imageModificar,
        reference: referenceModificar,
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
  let idEliminar = document.getElementById("id").value;
  let res = await fetch(
    `https://api-clothing-karvaroz.herokuapp.com/products/${idEliminar}`,
    {
      method: "DELETE",
    }
  );
  let data = res.json();
  console.log(data);
});
