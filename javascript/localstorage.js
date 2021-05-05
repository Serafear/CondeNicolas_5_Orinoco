var orders = JSON.parse(localStorage.getItem('cartInfo'));
console.log(orders);



if(localStorage.getItem('cartInfo') != null) {
    document.getElementById('cartContain').innerHTML =(
        orders 
        .map(order => (
             ` 
                <ul id="cartList" class="grid grid-flow-col bg-red-600 gap-3 justify-evenly text-base p-4" data-cart-Orders>
                    <li id="cartName" class=" pl-2">${order.name}</li>
                    <li id="cartDescription" class=" overflow-hidden whitespace-nowrap md:w-72">${order.description}</li>
                    <li id="cartCustom" class="">${order.custom}</li>
                    <li id="cartPrice" class ="">${order.price}</li>
                    <div class="flex flex-row gap-1">
                        <button id="clearStorage" class="clearStorage flex flex-row gap-2"><i class=" trash fas fa-trash-alt"></i>Supprimer</button>
                    
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
          <span id = "showTotalPrice" class= " totalPrice p-2">Total à payer : ${totalPrice}</span>
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
                <input type="email" id="email" placeholder="email" class="border-black border-2" name="email">
                <button id="formValidateBuy" class="border-black border-2 bg-green-500" type="submit">Valider</button>
                
            `

        )
        
        //beginning validation
        const cartForm = document.getElementById('shippingAdress');
        const error = document.getElementById('error');
        const firstName = document.getElementById('fname');
        const lastName = document.getElementById('lname');
        const adress = document.getElementById('adress');
        const city = document.getElementById('city');
        const email = document.getElementById('email');

        cartForm.addEventListener('submit',(e) => {
            let messages = []
            var regex = /^[a-zA-Z]+$/;
            var regexAdress = /[0-9]+\s*([a-zA-Z]+\s*[a-zA-Z]+\s)*[0-9]*/;
            var regexCity = /[0-9]\ ([A-Za-z]*)$/i;
            var regexMail = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/gm;
            
            
            if(regex.test(firstName.value) == false){
               messages.push("Le nom ne doit contenir que des lettres");
            }
            if(regex.test(lastName.value) == false){
                messages.push("Le prénom ne doit contenir que des lettres");
            }
            if(regexAdress.test(adress.value) == false){
                messages.push('adresse invalide')
            }
            if(regexCity.test(city.value) == false){
                messages.push('ville invalide')
            }
            if(regexMail.test(email.value) == false){
                messages.push('email invalide')
            }

            if(firstName.value === '' || firstName.value == null){
                messages.push('Nom requis')
            }
            if(lastName.value === '' ||lastName.value == null){
                messages.push('prénom requis')
            }
            if(adress.value === '' ||adress.value == null){
                messages.push('adresse requise')
            }
            if(city.value === '' ||city.value == null){
                messages.push('adresse requise')
            }
            if(email.value === '' ||email.value == null){
                messages.push('email requis')
            }

            if (messages.length > 0){
                e.preventDefault()
                error.innerText = messages.join(', ')
            }

            //mise en place des conditions pour le changement de page
            if (messages.length <= 0||messages.length == null||messages.length ===''){
                e.preventDefault()
                window.location.href = 'thankyou.html'
            }

            //validation end


            const url = 'http://localhost:3000/api/teddies/order'; //cet order si est différent de la var order, car elle représente l'adresse sur laquelle envoyer les données ou plutôt le code d'exécution de l'envoi ? le /api est super important. 
            const urlC = 'http://localhost:3000/api/cameras/order';
            const urlF = 'http://localhost:3000/api/furniture/order';        
            
            //ce prevent default permet de stopper le chargement de la page au submit pour garder la reponse du serveur dont le numéro de commande
           

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
            
            //ce fecth est le post des informations du formulaire au serveur : je post le contenu de options à l'url
            fetch(url, options)
            .then(res => res.json())  //équivalent à .then(response =>response.json())
            .then(data => {
                console.log(data);  //le numéro de commande est recupéré ici dans data, c'est le orderId. 
                const orderId = data.orderId;
                localStorage.setItem('orderId', orderId);
            });

            fetch(urlC, options)
            .then(res => res.json())
            .then(data => {
                console.log(data);  
                const orderId = data.orderId;
                localStorage.setItem('orderId', orderId);
            });

            fetch(urlF, options)
            .then(res => res.json())
            .then(data => {
                console.log(data);  
                localStorage.setItem('orderId', orderId);
            });

            

            var userString = JSON.stringify(panier);
            localStorage.setItem('informations', userString);


        });
        }   
    }
 

        

       

    



