var orderFinal = JSON.parse(localStorage.getItem('informations'));
console.log(orderFinal)
var orderId = localStorage.getItem('orderId');   //ici pas besoin de json.parse puisque la réponse est déjà recupérée en json ? dans localstorage.js
console.log(orderId);
var cartInfo = JSON.parse(localStorage.getItem('cartInfo'));
console.log(cartInfo)

   
    


//dans le h2, le .contact est indispensable pour que l'information s'affiche. La raison est due à la déclaration panier.contact du localstorage.js
if(localStorage.getItem('informations') != null) {
    document.getElementById('thankYou').innerHTML =(
        `
            <h2>Merci ${orderFinal.contact.firstName} ${orderFinal.contact.lastName} de votre achat</h2>
            <h3>Votre numéro de commande est le suivant : ${orderId} </h3>
            
        
        `
    )
    localStorage.removeItem('cartInfo');
    
}

setTimeout(function(){
    localStorage.clear();
}, 2000); //2000 = 2 secondes
