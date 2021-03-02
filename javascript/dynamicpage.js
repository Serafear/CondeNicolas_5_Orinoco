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
        <img class="teddy-photo bg-red-700 p-6 row-span-2" src="${urlTeddies.imageUrl}"/>
        <h3 class="teddy-name bg-yellow-600 p-6 col-span-2">${urlTeddies.name}</h3>
            
        <p class="teddy-description bg-green-500 p-6 col-span-2">${urlTeddies.description}</p>
        <div id="listbox-test" class="bg-indigo-600 p-6 row-span-2 grid grid-flow-row gap-3">
          <select id="scrollTest" size="1" class=" flex justify-center"></select>
        </div>
        <div class="flex justify-center">
          <button onClick="window.location=''" class="btnTest bg-yellow-500 justify-center w-20 h-10">Valider</button>
        </div>        `);
    let teddyColors = urlTeddies.colors;
    scrollTest.innerHTML = teddyColors
      .map(
        (teddyColor) =>
          `
          <option value="1" id="colorSelect" class=" bg-white px-2 w-24">${teddyColor}</option>
        `
      )
      .join("");
  };
  
  showUrlTeddies();
};

if (window.location.href.includes('cameras')>0) {
  const showUrlCameras = async () => {
    await fetchUrlCameras();
  
    dynamic.innerHTML = (`
        <img class="camera-photo bg-red-700 p-6 row-span-2" src="${urlCameras.imageUrl}"/>
        <h3 class="camera-name bg-yellow-600 p-6 col-span-2">${urlCameras.name}</h3>
            
        <p class="camera-description bg-green-500 p-6 col-span-2">${urlCameras.description}</p>
        <div id="listbox-test" class="bg-indigo-600 p-6 row-span-2 grid grid-flow-row gap-3">
          <select id="scrollTest" size="1" class=" flex justify-center"></select>
        </div>
        <div class="flex justify-center">
          <button onClick="window.location=''" class="btnTest bg-yellow-500 justify-center w-20 h-10">Valider</button>
        </div>        `);
    let cameraLenses = urlCameras.lenses;
    scrollTest.innerHTML = cameraLenses
      .map(
        (cameraLense) =>
          `
          <option value="1" id="colorSelect" class=" bg-white px-2 w-24">${cameraLense}</option>
        `
      )
      .join("");
  };
  
  showUrlCameras();
};

if (window.location.href.includes('furnitures')>0) {
  const showUrlFurnitures = async () => {
    await fetchUrlFurnitures();
  
    dynamic.innerHTML = (`
        <img class="furniture-photo bg-red-700 p-6 row-span-2" src="${urlFurnitures.imageUrl}"/>
        <h3 class="furniture-name bg-yellow-600 p-6 col-span-2">${urlFurnitures.name}</h3>
            
        <p class="furniture-description bg-green-500 p-6 col-span-2">${urlFurnitures.description}</p>
        <div id="listbox-test" class="bg-indigo-600 p-6 row-span-2 grid grid-flow-row gap-3">
          <select id="scrollTest" size="1" class=" flex justify-center"></select>
        </div>
        <div class="flex justify-center">
          <button onClick="window.location=''" class="btnTest bg-yellow-500 justify-center w-20 h-10">Valider</button>
        </div>        `);
    let furnituresVarnish = urlFurnitures.varnish;
    scrollTest.innerHTML = furnituresVarnish
      .map(
        (furnitureVarnish) =>
          `
          <option value="1" id="colorSelect" class=" bg-white px-2 w-24">${furnitureVarnish}</option>
        `
      )
      .join("");
  };
  
  showUrlFurnitures();
};