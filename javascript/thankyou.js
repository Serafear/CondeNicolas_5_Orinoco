var orderFinal = JSON.parse(localStorage.getItem('informations'));
console.log(orderFinal)

if(localStorage.getItem('informations') != null) {
    document.getElementById('thankYou').innerHTML =(
        `
            <h2>Merci ${orderFinal.firstname} ${orderFinal.lastname} de votre achat</h2>

        
        `
    )
}
