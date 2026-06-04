function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name, price });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart 🛒");
}


// DISPLAY CART
function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let container = document.getElementById("cartItems");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = "<h3>Cart is empty 😢</h3>";
    return;
  }

  let output = "";

  cart.forEach((item, index) => {
    output += `
      <div class="card">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  container.innerHTML = output;
}


// TOTAL
function getTotal() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = 0;

  cart.forEach(item => {
    total += item.price;
  });

  let totalBox = document.getElementById("total");

  if (totalBox) {
    totalBox.innerText = "Total: ₹" + total;
  }
}


// REMOVE
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
  getTotal();
}


// CLEAR
function clearCart() {
  localStorage.removeItem("cart");

  displayCart();
  getTotal();
}