var order = JSON.parse(localStorage.getItem('cartInfo'));
console.log(order);

if(localStorage.getItem('cartInfo') != null) {
    document.getElementById('cartContain').innerHTML =(
        ` 
            <ul id="cartList" class="grid grid-flow-col bg-red-600 gap-5 justify-evenly text-base">
                <li id="cartName" class="w-14 pl-2">${order.name}</li>
                <li id="cartDescription" class=" w-96 overflow-hidden whitespace-nowrap">${order.description}</li>
                <li id="cartCustom" class="w-14">${order.custom}</li>
                <li id="cartPrice" class ="w-14">${order.price}</li>
                <div class="w-14 flex flex-row gap-5">
                    <button id="clearStorage"><i class="fas fa-times"></i></button>
                    <button id="toContact"><i class="fas fa-check"></i></button>
                </div>
            </ul>
        `
    )

    const btnRemoveStorage = document.getElementById("clearStorage");

    btnRemoveStorage.onclick = () => {
        localStorage.removeItem('cartInfo');
        location.href = '/index.html'
    }
    
    const btnToContact = document.getElementById("toContact");

    btnToContact.onclick =() => {
        shippingAdress.innerHTML = (
            `
                <h2 class=" row-span-2 col-span-2">Confirmez votre adresse de livraison</h2>
                <input type="text" id="fname" name="fname" placeholder="firstname" class="border-black border-2">
                <input type="text" id="lname" placeholder="lastname" name="lname" class="border-black border-2">
                <input type="text" id="adress" class=" row-span-2 col-span-2 border-black border-2" placeholder="adress" name="adress">
                <input type="text" id="city" placeholder="city" class="border-black border-2" name="city">
                <input type="text" id="email" placeholder="email" class="border-black border-2" name="email">
                <button id="formValidateBuy" class="border-black border-2 bg-green-500" type="submit">Valider</button>
                
            `

        )
        const formValidateBuy = document.getElementById('formValidateBuy');

        formValidateBuy.onclick =() => {
            const url = ''
            
            //le format attendu des données est sous cette forme => ex: ['55891484','484848484']
            const productId = order.map (
                (product) => {
                    return product.product_id
                }
            )

            console.log(productId)

            const informations = {
                firstName : document.getElementById('fname').value, /*pour que l'élément s'affiche dans lapage thankyou, le .value est indispensable . Si jamais ça ne marche pas, essayer de mettre firstName entre guillemets */
                lastName : document.getElementById('lname').value,
                address : document.getElementById('adress'),
                city : document.getElementById('city'),
                email : document.getElementById('email'),
                productId,
            }

            const options = {
                method : 'POST',
                body: JSON.stringify(informations),
                headers : {
                    'content-type':'application/json'
                }
            }

            fetch(url, options)
            .then(res => res.json())
            .then(res => console.log(res))


            var userString = JSON.stringify(informations);
            localStorage.setItem('informations', userString);
            console.log(informations);

            // location.href = 'thankyou.html'

        }
    }


}

    



