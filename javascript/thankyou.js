var orderFinal = JSON.parse(localStorage.getItem("informations"));
console.log(orderFinal);

var cartInfo = JSON.parse(localStorage.getItem("cartInfo"));
console.log(cartInfo);
let orderIds = {
  orderId: localStorage.getItem("orderId"),
  orderId2: localStorage.getItem("orderId2"),
  orderId3: localStorage.getItem("orderId3"),
};
console.log(orderIds);

//dans le h2, le .contact est indispensable pour que l'information s'affiche. La raison est due à la déclaration panier.contact du localstorage.js

document.getElementById("thankYou").innerHTML = `
         <h2>Merci ${orderFinal.contact.firstName} ${orderFinal.contact.lastName} de votre achat</h2>
           
            
        
    `;
const showOrderId = () => {
  document.getElementById("thankYou2").innerHTML = `
                <h2>Le numéro de votre commande est le suivant : ${orderIds.orderId}</h2>
               
                
            
            `;
  document.getElementById("thankYou3").innerHTML = `
                <h2>Le numéro de votre commande est le suivant : ${orderIds.orderId2}</h2>
               
                
            
            `;
  document.getElementById("thankYou4").innerHTML = `
                <h2>Le numéro de votre commande est le suivant : ${orderIds.orderId3}</h2>
               
                
            
            `;
};
if (orderIds.orderId2 === undefined || orderIds.orderId2 === null) {
  document.getElementById("thankYou3").style.display = "none";
}

showOrderId();

//localStorage.removeItem('cartInfo');

//setTimeout(function(){
//  localStorage.clear();
//}, 2000); //2000 = 2 secondes
