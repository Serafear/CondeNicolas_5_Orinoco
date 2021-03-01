let urlParams = new URLSearchParams(window.location.search);
let urlTeddies;


let productId = urlParams.get('productId');
console.log(productId);

const fetchUrlTeddies = async() => {
    urlTeddies = await fetch('http://localhost:3000/api/teddies/'+productId).then(res => res.json());
    console.log(urlTeddies);
};  


const showUrlTeddies = async() => {
  await fetchUrlTeddies();
  
 
  dynamic.innerHTML = (
   
    `
      <img class="teddy-photo bg-red-700 p-6 row-span-2" src="${urlTeddies.imageUrl}"/>
      <h3 class="teddy-name bg-yellow-600 p-6 col-span-2">${urlTeddies.name}</h3>
          
      <p class="teddy-description bg-green-500 p-6 col-span-2">${urlTeddies.description}</p>
      <ul id="select" class="bg-indigo-600 p-6"></ul>
      <div class="flex justify-center">
        <button onClick="window.location=''" class="btnTest bg-yellow-500 justify-center w-20">Voir</button>
      </div>        `

  );
};
 
showUrlTeddies();


