// script.js

const API_URL = "https://fakestoreapi.com/products";

// Home: mostrar 4 productos
if (document.getElementById("product-list")) {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("product-list");
            const firstFour = data.slice(0, 4);

            firstFour.forEach(product => {
                const div = document.createElement("div");
                div.innerHTML = `
          <h3>${product.title}</h3>
          <img src="${product.image}" width="100" />
          <p>$${product.price}</p>
          <a href="product.html?id=${product.id}">Ver más</a>
        `;
                list.appendChild(div);
            });
        });
}

// Detalle del producto
if (document.getElementById("product-detail")) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    fetch(`${API_URL}/${id}`)
        .then(res => res.json())
        .then(product => {
            const detail = document.getElementById("product-detail");
            detail.innerHTML = `
        <h2>${product.title}</h2>
        <img src="${product.image}" width="150" />
        <p>${product.description}</p>
        <h3>Precio: $${product.price}</h3>
        <button>Comprar</button>
      `;
        });
}
