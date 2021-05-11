//nombre dynamique pour le panier. le json parse est indispensable car le contenu de cartInfo est dans un array.
var length = JSON.parse(localStorage.cartInfo).length;
var hideBtn = document.getElementById("toContact");
if (length > 0) {
  document.getElementById("cartNumber").innerHTML = `
      <p><span id="in-cart-number" class=" text-black">${length}</span></p>
    `;
  hideBtn.style.display = "inline";
}
