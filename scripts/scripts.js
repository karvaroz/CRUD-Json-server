const btnTops = document.getElementById("btnCategoryTops");
const btnBottoms = document.getElementById("btnCategoryBottoms");
const btnProducts = document.getElementById("btnCategoryProducts");

const listarCard = document.getElementById("listarCard");

btnTops.addEventListener("click", () => {
  getData("https://api-clothing-karvaroz.herokuapp.com/tops/");
});

btnBottoms.addEventListener("click", () => {
  getData("https://api-clothing-karvaroz.herokuapp.com/bottoms/");
});

btnProducts.addEventListener("click", () => {
  getDataProducts("https://api-clothing-karvaroz.herokuapp.com/products/");
});

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data);

  listarCard.innerHTML = "";

  data.forEach((product) => {
    const { name, price, description, type, category, image } = product;
    listarCard.innerHTML += `
        <div class="card mt-5" style="width: 18rem;">
            <img class="card-img-top" src="${image}" alt="Card image cap" width="100" height="auto">
            <div class="card-body">
                <h4 class="card-text">Nombre: ${name}</h4>
                <p class="card-text">Precio: $${price}</p>
                <p class="card-text">${description}</p>
                <p class="card-text">Tipo: ${type}</p>
                <p class="card-text">Categoría: ${category}</p>
            </div>
        </div>
    `;
  });
};

const getDataProducts = async (url) => {
  const response = await fetch(url);
  const dataProducts = await response.json();
  console.table(data);

  listarCard.innerHTML = "";

  dataProducts.forEach((product) => {
    const { name, reference, image } = product;
    listarCard.innerHTML += `
        <div class="card mt-5" style="width: 18rem;">
            <img class="card-img-top" src="${image}" alt="Card image cap" width="100" height="auto">
            <div class="card-body">
                <h4 class="card-text">Nombre: ${name}</h4>
                <p class="card-text">Referencia: ${reference}</p>

            </div>
        </div>
    `;
  });
};