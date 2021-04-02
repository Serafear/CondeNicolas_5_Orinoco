var orders = JSON.parse(localStorage.getItem('cartInfo'));
console.log(orders);



if(localStorage.getItem('cartInfo') != null) {
    document.getElementById('cartContain').innerHTML =(
        orders 
        .map(order => (
             ` 
                <ul id="cartList" class="grid grid-flow-col bg-red-600 gap-3 justify-evenly text-base" data-cart-Orders>
                    <li id="cartName" class=" pl-2">${order.name}</li>
                    <li id="cartDescription" class=" overflow-hidden whitespace-nowrap">${order.description}</li>
                    <li id="cartCustom" class="">${order.custom}</li>
                    <li id="cartPrice" class ="">${order.price}</li>
                    <div class="flex flex-row gap-1">
                        <button id="clearStorage" class="clearStorage"><i class="fas fa-trash-alt"></i>Supprimer</button>
                    
                    </div>
                </ul>
             `
            )
        )
    )

   

    const btnRemoveStorage = document.querySelectorAll(".clearStorage");
    console.log(btnRemoveStorage);
    
    //on crée la boucle parceque le map crée une buoucle du bouton. En réponse on crée une boucle pour appliquer l'effet onclick. 
    for (i = 0; i<btnRemoveStorage.length; i++)
    //ce code fonctionne un peu, le local storage vide l'élément sélectionné. Maintenant il faut que la page se refraichisse de manière dynamique également.
    btnRemoveStorage[i].onclick = (index) => { 
        orders.splice(index,1);
        localStorage.setItem('cartInfo', JSON.stringify(orders))
        window.location.href = '/html-pages/cart.html';
        console.log(btnRemoveStorage);
    }
    
    //ici je crée la div pour le total à payer dynamique : si jamais il y avait des quantités : return accumulator + item.quantity * item.price; https://sebhastian.com/javascript-sum-array-objects/
    let totalPrice = orders.reduce(function (accumulator, item) {
        return accumulator + item.price;
    }, 0);

    const showTotalPrice = document.getElementById('totalPrice')

    showTotalPrice.innerHTML = (
        `
          <span id = "showTotalPrice">total à payer ${totalPrice}</span>
        `
    )



    //ici c'est le bouton valider. Des modifs doivent être fiates sur : rajouter validation sur le formulaire et regex
    const btnToContact = document.getElementById("toContact");

    btnToContact.onclick =() => {
        shippingAdress.innerHTML = (
            `
                <h2 class=" row-span-2 col-span-2">Confirmez votre adresse de livraison</h2>
                
                <input type="text" id="fname" placeholder="firstname" name="fname" class="border-black border-2">
                <input type="text" id="lname" placeholder="lastname" name="lname" class="border-black border-2">
                <input type="text" id="adress" class=" row-span-2 col-span-2 border-black border-2" placeholder="adress" name="adress">
                <input type="text" id="city" placeholder="city" class="border-black border-2" name="city">
                <input type="text" id="email" placeholder="email" class="border-black border-2" name="email">
                <button id="formValidateBuy" class="border-black border-2 bg-green-500" type="submit">Valider</button>
                
            `

        )
        
        //beginning validation
        const cartForm = document.getElementById('shippingAdress');
        const error = document.getElementById('error');
        const firstName = document.getElementById('fname');

        cartForm.addEventListener('submit',(e) => {
            let messages = []
            var regex = /^[a-zA-Z]+$/;
            if(regex.test(firstName.value) == false){
               messages.push("Le nom ne doit contenir que des lettres");
    
            }
            if(firstName.value === '' || firstName.value == null){
                messages.push('Nom requis')
            }
            if (messages.length > 0){
                e.preventDefault()
                error.innerText = messages.join(', ')
            }
            
        })
        //validation end

        const formValidateBuy = document.getElementById('formValidateBuy');

        formValidateBuy.onclick = () => {
            
            const url = 'http://localhost:3000/api/teddies/order'; //cet order si est différent de la var order, car elle représente l'adresse sur laquelle envoyer les données ou plutôt le code d'exécution de l'envoi ? le /api est super important. 
            const urlC = 'http://localhost:3000/api/cameras/order';
            const urlF = 'http://localhost:3000/api/furniture/order';        
            
            

            //construction de l'objet contact attendu par le backend. Voir le server du backend. 
            const panier = {
                contact : {},
                products : [], 
            }

            //le format attendu des données est sous cette forme => ex: ['55891484','484848484']
            panier.products = orders.map (
                (product) => {
                    return product.product_id
                }
            )

            

            panier.contact = {
                firstName : document.getElementById('fname').value, /*pour que l'élément s'affiche dans lapage thankyou, le .value est indispensable . Si jamais ça ne marche pas, essayer de mettre firstName entre guillemets */
                lastName : document.getElementById('lname').value,
                address : document.getElementById('adress').value,
                city : document.getElementById('city').value,
                email : document.getElementById('email').value,
            };
            console.log(panier)
            

            const options = {
                method : 'POST',
                body: JSON.stringify(panier),
                headers : {
                    'content-type':'application/json'
                }
            };

            fetch(url, options)
            .then(res => res.json())
            .then(res => console.log(res))

            fetch(urlC, options)
            .then(res => res.json())
            .then(res => console.log(res))

            fetch(urlF, options)
            .then(res => res.json())
            .then(res => console.log(res))


            var userString = JSON.stringify(panier);
            localStorage.setItem('informations', userString);
            

            //location.href = 'thankyou.html'

        }
    }


}

    



