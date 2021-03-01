

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
              <button onClick="window.location='./html-pages/pageproduit.html?productId=${teddy._id}';" class="btnTest bg-yellow-500 justify-center w-20">Voir</button>
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
          <img class="teddy-photo" src="${camera.imageUrl}"/>
          <h3 class="teddy-name">${camera.name}</h3>
          <h4 class="teddy-price">${camera.price} euros</h4>
          <p class="teddy-description">${camera.description}</p>
          <div class="flex justify-center">
              <button onClick="window.location='./html-pages/pageproduit.html';" class="btnTest bg-yellow-500 justify-center w-20">Voir</button>
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
          <img class="teddy-photo" src="${furniture.imageUrl}"/>
          <h3 class="teddy-name">${furniture.name}</h3>
          <h4 class="teddy-price">${furniture.price} euros</h4>
          <p class="teddy-description">${furniture.description}</p>
          <div class="flex justify-center">
              <button onClick="window.location='./html-pages/pageproduit.html';" class="btnTest bg-yellow-500 justify-center w-20">Voir</button>
          </div>
      </li>
      
      `
    )).join('')
    );
};
      
showFurnitures();
   

//cette partie est destinée au slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" bg-red-400", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " bg-red-400";
}
//slide 2
var slideIndex = 1;
showDivs2(slideIndex);

function plusDivs2(n) {
  showDivs2(slideIndex += n);
}

function currentDiv2(n) {
  showDivs2(slideIndex = n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("slider2");
  var dots = document.getElementsByClassName("demo2");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" bg-red-400", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " bg-red-400";
}

    //slide 3
    var slideIndex = 1;
    showDivs3(slideIndex);
    
    function plusDivs3(n) {
      showDivs3(slideIndex += n);
    }
    
    function currentDiv3(n) {
      showDivs3(slideIndex = n);
    }
    
    function showDivs3(n) {
      var i;
      var x = document.getElementsByClassName("slider3");
      var dots = document.getElementsByClassName("demo3");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" bg-red-400", "");
      }
      x[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " bg-red-400";
    }

