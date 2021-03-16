let urlParams = new URLSearchParams(window.location.search);
let urlTeddies;
let urlCameras;
let urlFurnitures;


let productId = urlParams.get("productId");
console.log(productId);

const fetchUrlTeddies = async () => {
  urlTeddies = await fetch(
    "http://localhost:3000/api/teddies/" + productId
  ).then((res) => res.json());
  console.log(urlTeddies);
};

const fetchUrlCameras = async () => {
  urlCameras = await fetch(
    "http://localhost:3000/api/cameras/" + productId
  ).then((res) => res.json());
  console.log(urlCameras);
};

const fetchUrlFurnitures = async () => {
  urlFurnitures = await fetch(
    "http://localhost:3000/api/furniture/" + productId
  ).then((res) => res.json());
  console.log(urlFurnitures);
};


if (window.location.href.includes('teddies')>0) {
  const showUrlTeddies = async () => {
    await fetchUrlTeddies();
  
    dynamic.innerHTML = (`
        <img id="productPhoto" class="bg-red-700 p-6 row-span-2 col-span-2" src="${urlTeddies.imageUrl}"/>
        <h3 id="productName" class="bg-yellow-600 p-6 col-span-1">${urlTeddies.name}</h3>
            
        <p id="productDescription" class="bg-green-500 p-6 col-span-1">${urlTeddies.description}</p>
        <div id="listCustom" class="bg-indigo-600 p-6 row-span-1 grid grid-flow-row gap-3">
          <select id="scrollCustom" class=" flex justify-center">
           
          </select>
        </div>
        <h4 id="productPrice" class="bg-blue-700 p-6 col-span-2">${urlTeddies.price}</h4>
        <div class="flex justify-center">
          <button id="btnInputCustom" class="btnTest bg-yellow-500 justify-center w-20 h-10">Valider</button>
        </div>        `);
    let teddyColors = urlTeddies.colors;
    scrollCustom.innerHTML = teddyColors
      .map(
        (teddyColor) =>
          `
          <option value="1" class=" bg-white px-2 w-24">${teddyColor}</option>
          `
      )
      .join("");
    
      
      const btnInputCustom = document.getElementById("btnInputCustom");
      

      btnInputCustom.onclick = () => {

        var selChoice = document.getElementById("scrollCustom");   /*ici la recherche se fait sur le clic. Dans la version précédente: code hors du btn, la page se reloadait à chaque fois et recupérait la première valeur tan. ici le bouton recupère les infos du select*/
        var customChoice = selChoice.options[selChoice.selectedIndex].text;
     
        //si le local storage est vide alors on crée un array
        if(localStorage.getItem('cartInfo') == null) {
          localStorage.setItem('cartInfo', '[]');
        }

        

        var cartInfo = {
          name : urlTeddies.name,
          description : urlTeddies.description,
          price : urlTeddies.price,
          custom : customChoice,
          product_id : productId,
        }
        
        var newData = cartInfo;

        var oldData = JSON.parse(localStorage.getItem('cartInfo'));
        oldData.push(newData);

        console.log(oldData);

        localStorage.setItem('cartInfo', JSON.stringify(oldData));



        var popUpScreen = document.getElementById('popUp'); /* test pour  créer une fenêtre qui apparait après que le buton valider est été appuyé*/

        popUpScreen.innerHTML =(
          `
            <div id="boxCustom" class=" bg-red-600 w-80 p-4 border-black border-4 grid grid-flow-row justify-center z-10">
              <h2 id="continue">Voulez-vous poursuivre votre achat ?</h2>
              <div id="btnCustom" class="grid grid-flow-col col-span-1 gap-3">
                <button id="oui" class="border-black border-2">Oui</button>
                <button id="non" class="border-black border-2">Non</button>
              </div>
            </div>  
          `
        )

        const btnOui = document.getElementById('oui');
        const btnNon = document.getElementById('non');

        btnOui.onclick = () => {
          location.href = '/html-pages/cart.html'+'?Your cart'+' '+urlTeddies.name; /*the black space give a %20 in the url. i doont know what it is used for but i find it more ergonomic ? for now */

        }

        btnNon.onclick = () => {
          location.href = '/index.html';
        }

        /*test fini*/

        
      };
  };
  
  showUrlTeddies();
  
};

if (window.location.href.includes('cameras')>0) {
  const showUrlCameras = async () => {
    await fetchUrlCameras();
  
    dynamic.innerHTML = (`
        <img id="productPhoto" class="bg-red-700 p-6 row-span-2 col-span-2" src="${urlCameras.imageUrl}"/>
        <h3 id="productName" class="bg-yellow-600 p-6 col-span-1">${urlCameras.name}</h3>
            
        <p id="productDescription" class="bg-green-500 p-6 col-span-1">${urlCameras.description}</p>
        <div id="listCustom" class="bg-indigo-600 p-6 row-span-1 grid grid-flow-row gap-3">
          <select id="scrollCustom" size="1" class=" flex justify-center"></select>
        </div>
        <h4 id="productPrice" class="bg-blue-700 p-6 col-span-2">${urlCameras.price}</h4>
        <div class="flex justify-center">
          <button id="btnInputCustom" class="btnTest bg-yellow-500 justify-center w-20 h-10">Valider</button>
        </div>        `);
    let cameraLenses = urlCameras.lenses;
    scrollCustom.innerHTML = cameraLenses
      .map(
        (cameraLense) =>
          `
          <option value="1" id="customize" class=" bg-white px-2 w-24">${cameraLense}</option>
        `
      )
      .join("");


      const btnInputCustom = document.getElementById("btnInputCustom");

      btnInputCustom.onclick = () => {

        window.localStorage.clear();

      var selChoice = document.getElementById("scrollCustom");   /*ici la recherche se fait sur le clic. Dans la version précédente: code hors du btn, la page se reloadait à chaque fois et recupérait la première valeur tan. ici le bouton recupère les infos du select*/
      var customChoice = selChoice.options[selChoice.selectedIndex].text;

      var cartInfo = {
        image: urlCameras.imageUrl,
        name: urlCameras.name,
        description: urlCameras.description,
        price: urlCameras.price,
        custom: customChoice,
      }
    

      console.log(cartInfo);

      var userString = JSON.stringify(cartInfo);

      localStorage.setItem('cartInfo', userString);

      location.href = '/html-pages/cart.html'+'?Your cart'+' '+urlCameras.name; 

    };
  };

  
  
  showUrlCameras();

  
};

if (window.location.href.includes('furnitures')>0) {
  const showUrlFurnitures = async () => {
    await fetchUrlFurnitures();
  
    dynamic.innerHTML = (`
        <img id="productPhoto" class="bg-red-700 p-6 row-span-2" src="${urlFurnitures.imageUrl}"/>
        <h3 id="productName" class="bg-yellow-600 p-6 col-span-2">${urlFurnitures.name}</h3>
            
        <p id="productDescription" class="bg-green-500 p-6 col-span-2">${urlFurnitures.description}</p>
        <div id="listCustom" class="bg-indigo-600 p-6 row-span-1 grid grid-flow-row gap-3">
          <select id="scrollCustom" size="1" class=" flex justify-center"></select>
        </div>
        <h4 id="productPrice" class="bg-blue-700 p-6 col-span-2">${urlFurnitures.price}</h4>
        <div class="flex justify-center">
          <button id="btnInputCustom" class="btnTest bg-yellow-500 justify-center w-20 h-10">Valider</button>
        </div>        `);
    let furnituresVarnish = urlFurnitures.varnish;
    scrollCustom.innerHTML = furnituresVarnish
      .map(
        (furnitureVarnish) =>
          `
          <option value="1" id="customize" class=" bg-white px-2 w-24">${furnitureVarnish}</option>
        `
      )
      .join("");

      const btnInputCustom = document.getElementById("btnInputCustom");

      btnInputCustom.onclick = () => {

      var selChoice = document.getElementById("scrollCustom");   /*ici la recherche se fait sur le clic. Dans la version précédente: code hors du btn, la page se reloadait à chaque fois et recupérait la première valeur tan. ici le bouton recupère les infos du select*/
      var customChoice = selChoice.options[selChoice.selectedIndex].text;

      var cartInfo = {
        image: urlFurnitures.imageUrl,
        name: urlFurnitures.name,
        description: urlFurnitures.description,
        price: urlFurnitures.price,
        custom: customChoice,
      }
    

      console.log(cartInfo);

      var userString = JSON.stringify(cartInfo);

      localStorage.setItem('cartInfo', userString);

      location.href = '/html-pages/cart.html'+'?Your cart'+' '+urlFurnitures.name; 

    };
  };
  
  showUrlFurnitures();
  
};





  


