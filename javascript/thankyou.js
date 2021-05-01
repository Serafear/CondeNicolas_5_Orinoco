var orderFinal = JSON.parse(localStorage.getItem('informations'));
console.log(orderFinal)


   
    


//dans le h2, le .contact est indispensable pour que l'information s'affiche. La raison est due à la déclaration panier.contact du localstorage.js
if(localStorage.getItem('informations') != null) {
    document.getElementById('thankYou').innerHTML =(
        `
            <h2>Merci ${orderFinal.contact.firstName} ${orderFinal.contact.lastName} de votre achat</h2>
            <h3> </h3>
            
        
        `
    )
}
