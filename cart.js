let cartCount = 0;

function addToCart(item, price) {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  alert(`Добавлено в корзину: ${item} (${price} грн)`);
}
