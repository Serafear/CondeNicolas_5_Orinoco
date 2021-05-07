var orderFinal = JSON.parse(localStorage.getItem('informations'));
console.log(orderFinal)
var orderId = localStorage.getItem('orderId');   //ici pas besoin de json.parse puisque la réponse est déjà recupérée en json ? dans localstorage.js
console.log(orderId);
var orderId2 = localStorage.getItem('orderId2');
console.log(orderId2)
var orderId3 = localStorage.getItem('orderId3');
console.log(orderId3)
var cartInfo = JSON.parse(localStorage.getItem('cartInfo'));
console.log(cartInfo)


   
    


//dans le h2, le .contact est indispensable pour que l'information s'affiche. La raison est due à la déclaration panier.contact du localstorage.js


document.getElementById('thankYou').innerHTML =(
        
    `
         <h2>Merci ${orderFinal.contact.firstName} ${orderFinal.contact.lastName} de votre achat</h2>
           
            
        
    `
        
)
const showOrderId = ()=> {
    if(orderId !=null){
        
        document.getElementById('thankYou2').innerHTML =(
        
            `
                <h2>Le numéro de votre commande est le suivant : ${orderId}</h2>
               
                
            
            `
            
        )
        
    }
  
}
showOrderId();


    
    
    
    
    //localStorage.removeItem('cartInfo');








//setTimeout(function(){
  //  localStorage.clear();
//}, 2000); //2000 = 2 secondes
