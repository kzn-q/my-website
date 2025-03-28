// Fetching products from the API and displaying them
fetch("http://localhost:5000/api/products")
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById("product-list");
    
    // Loop through products and display them
    data.products.forEach(product => {
      const productElement = document.createElement("div");
      productElement.classList.add("product-card");

      productElement.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>$${product.price}</strong></p>
        <button class="btn-buy">Buy Now</button>
      `;
      
      productList.appendChild(productElement);
    });
  })
  .catch(err => console.error("Error fetching products:", err));