const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100
    },
    { id: 2, name: "Product 2", price: 50 },
    { id: 3, name: "Product 3", price: 200 },
    { id: 4, name: "Product 4", price: 150 },
    { id: 5, name: "Product 5", price: 250 },
  ];
  
  let cart = [];
  
  function displayProducts(products) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
              <h2>${product.name}</h2>
              <p>Price: $${product.price}</p>
              <button onclick="addToCart(${product.id})">Add to Cart</button>
          `;
      productContainer.appendChild(productElement);
    });
  }
  
  function sortProductsByPrice() {
    products.sort((a, b) => a.price - b.price);
    displayProducts(products);
  }
  
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    cart.push(product);
    displayCart();
  }
  
  function displayCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";
    cart.forEach((product) => {
      const cartElement = document.createElement("div");
      cartElement.classList.add("cart-item");
      cartElement.innerHTML = `
              <h2>${product.name}</h2>
              <p>Price: $${product.price}</p>
          `;
      cartContainer.appendChild(cartElement);
    });
  }
  
  // Initial display
  displayProducts(products);
  productSale.textContent = `Сет Филадельфия по акции`;
  