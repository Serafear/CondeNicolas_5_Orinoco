

//cette partie concerne le fetch de l'API teddies
let teddies;


const fetchTeddies = async() => {
  teddies = await fetch('http://localhost:3000/api/teddies').then(res => res.json());
  console.log(teddies);
  
};


const showTeddies = async() => {
  await fetchTeddies();

  allTeddies.innerHTML = (
    teddies
    .map(teddy =>(
      `
      <li class="teddy-item grid grid-flow-row">
          <img class="teddy-photo" src="${teddy.imageUrl}"/>
          <h3 class="teddy-name">${teddy.name}</h3>
          <h4 class="teddy-price">${teddy.price} euros</h4>
          <p class="teddy-description">${teddy.description}</p>
          <div class="flex justify-center">
              <button onClick="window.location='./html-pages/pageproduit.html?productId=${teddy._id}&teddies';" class="btnTest bg-yellow-500 justify-center w-20">Voir</button>
          </div>
      </li>
      
      `
      
    )).join('')
  );
}

showTeddies();



//api call caméras 
let cameras;

const fetchCameras = async() => {
  cameras = await fetch('http://localhost:3000/api/cameras').then(res => res.json());
  console.log(cameras);
};

const showCameras = async() => {
  await fetchCameras();

  allCameras.innerHTML = (
    cameras
    .map(camera =>(
      `
      <li class="camera-item">
          <img class="camera-photo" src="${camera.imageUrl}"/>
          <h3 class="camera-name">${camera.name}</h3>
          <h4 class="camera-price">${camera.price} euros</h4>
          <p class="tcamera-description">${camera.description}</p>
          <div class="flex justify-center">
              <button onClick="window.location='./html-pages/pageproduit.html?productId=${camera._id}&cameras';" class="btnTest bg-yellow-500 justify-center w-20">Voir</button>
          </div>
      </li>
      
      `
    )).join('')
    );
};

showCameras();
     
//api call meubles
let furnitures;

const fetchFurnitures = async() => {
  furnitures = await fetch('http://localhost:3000/api/furniture').then(res => res.json());
  console.log(furnitures);
};

const showFurnitures = async() => {
  await fetchFurnitures();

  allFurnitures.innerHTML = (
    furnitures
    .map(furniture =>(
      `
      <li class="furniture-item">
          <img class="furniture-photo" src="${furniture.imageUrl}"/>
          <h3 class="furniture-name">${furniture.name}</h3>
          <h4 class="furniture-price">${furniture.price} euros</h4>
          <p class="furniture-description">${furniture.description}</p>
          <div class="flex justify-center">
              <button onClick="window.location='./html-pages/pageproduit.html?productId=${furniture._id}&furnitures';" class="btnTest bg-yellow-500 justify-center w-20">Voir</button>
          </div>
      </li>
      
      `
    )).join('')
    );
};
      
showFurnitures();
   

