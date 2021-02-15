//cette partie concerne le fetch des API
let apiCallTeddies = function (teddies){
  let url ='http://localhost:3000/api/teddies';


    fetch(url)
      .then(function(response){
        return response.json()}) //on peut avoir à la place du json du .arrayBuffer(), du .blol(), du .text(), et du .formData()
      .then(function(data){
        console.log(data);
        document.querySelector('#name-t1').innerHTML = 'Nom : ' + data[0].name;
        document.querySelector('#price-t1').innerHTML = 'Prix : '+ data[0].price + ' eur';
        document.querySelector('#imageUrl-t1').innerHTML = '<img src="http://localhost:3000/images/teddy_1.jpg">';
        document.querySelector('#description-t1').innerHTML = data[0].description;

        document.querySelector('#name-t2').innerHTML = 'Nom : ' + data[1].name;
        document.querySelector('#price-t2').innerHTML = 'Prix : '+ data[1].price + ' eur';
        document.querySelector('#imageUrl-t2').innerHTML = '<img src="http://localhost:3000/images/teddy_2.jpg">';
        document.querySelector('#description-t2').innerHTML = data[1].description;

        
        document.querySelector('#name-t3').innerHTML = 'Nom : ' + data[2].name;
        document.querySelector('#price-t3').innerHTML = 'Prix : '+ data[2].price + ' eur';
        document.querySelector('#imageUrl-t3').innerHTML = '<img src="http://localhost:3000/images/teddy_3.jpg">';
        document.querySelector('#description-t3').innerHTML = data[2].description;

        
        document.querySelector('#name-t4').innerHTML = 'Nom : ' + data[3].name;
        document.querySelector('#price-t4').innerHTML = 'Prix : '+ data[3].price + ' eur';
        document.querySelector('#imageUrl-t4').innerHTML = '<img src="http://localhost:3000/images/teddy_4.jpg">';
        document.querySelector('#description-t4').innerHTML = data[3].description;

        
        document.querySelector('#name-t5').innerHTML = 'Nom : ' + data[4].name;
        document.querySelector('#price-t5').innerHTML = 'Prix : '+ data[4].price + ' eur';
        document.querySelector('#imageUrl-t5').innerHTML = '<img src="http://localhost:3000/images/teddy_5.jpg">';
        document.querySelector('#description-t5').innerHTML = data[4].description;

      
      })
      .catch(function(err) {console.log('Erreur : ' + err)});
      
}
//api call caméras
let apiCallCameras = function (Camera){
  let url ='http://localhost:3000/api/cameras';


    fetch(url)
      .then(function(response){
        return response.json()}) //on peut avoir à la place du json du .arrayBuffer(), du .blol(), du .text(), et du .formData()
      .then(function(data){
        console.log(data);
        document.querySelector('#name-c1').innerHTML = 'Nom : ' + data[0].name;
        document.querySelector('#price-c1').innerHTML = 'Prix : '+ data[0].price + ' eur';
        document.querySelector('#imageUrl-c1').innerHTML = '<img src="http://localhost:3000/images/vcam_1.jpg">';
        document.querySelector('#description-c1').innerHTML = data[0].description;

        document.querySelector('#name-c2').innerHTML = 'Nom : ' + data[1].name;
        document.querySelector('#price-c2').innerHTML = 'Prix : '+ data[1].price + ' eur';
        document.querySelector('#imageUrl-c2').innerHTML = '<img src="http://localhost:3000/images/vcam_2.jpg">';
        document.querySelector('#description-c2').innerHTML = data[1].description;

        
        document.querySelector('#name-c3').innerHTML = 'Nom : ' + data[2].name;
        document.querySelector('#price-c3').innerHTML = 'Prix : '+ data[2].price + ' eur';
        document.querySelector('#imageUrl-c3').innerHTML = '<img src="http://localhost:3000/images/vcam_3.jpg">';
        document.querySelector('#description-c3').innerHTML = data[2].description;

        
        document.querySelector('#name-c4').innerHTML = 'Nom : ' + data[3].name;
        document.querySelector('#price-c4').innerHTML = 'Prix : '+ data[3].price + ' eur';
        document.querySelector('#imageUrl-c4').innerHTML = '<img src="http://localhost:3000/images/vcam_4.jpg">';
        document.querySelector('#description-c4').innerHTML = data[3].description;

        
        document.querySelector('#name-c5').innerHTML = 'Nom : ' + data[4].name;
        document.querySelector('#price-c5').innerHTML = 'Prix : '+ data[4].price + ' eur';
        document.querySelector('#imageUrl-c5').innerHTML = '<img src="http://localhost:3000/images/vcam_5.jpg">';
        document.querySelector('#description-c5').innerHTML = data[4].description;

      
      })
      .catch(function(err) {console.log('Erreur : ' + err)});
      
}
     
//api call meubles
let apiCallFurnitures = function (furniture){
  let url ='http://localhost:3000/api/furniture';


    fetch(url)
      .then(function(response){
        return response.json()}) //on peut avoir à la place du json du .arrayBuffer(), du .blol(), du .text(), et du .formData()
      .then(function(data){
        console.log(data);
        document.querySelector('#name-f1').innerHTML = 'Nom : ' + data[0].name;
        document.querySelector('#price-f1').innerHTML = 'Prix : '+ data[0].price + ' eur';
        document.querySelector('#imageUrl-f1').innerHTML = '<img src="http://localhost:3000/images/oak_1.jpg">';
        document.querySelector('#description-f1').innerHTML = data[0].description;

        document.querySelector('#name-f2').innerHTML = 'Nom : ' + data[1].name;
        document.querySelector('#price-f2').innerHTML = 'Prix : '+ data[1].price + ' eur';
        document.querySelector('#imageUrl-f2').innerHTML = '<img src="http://localhost:3000/images/oak_2.jpg">';
        document.querySelector('#description-f2').innerHTML = data[1].description;

        
        document.querySelector('#name-f3').innerHTML = 'Nom : ' + data[2].name;
        document.querySelector('#price-f3').innerHTML = 'Prix : '+ data[2].price + ' eur';
        document.querySelector('#imageUrl-f3').innerHTML = '<img src="http://localhost:3000/images/oak_3.jpg">';
        document.querySelector('#description-f3').innerHTML = data[2].description;

        
        document.querySelector('#name-f4').innerHTML = 'Nom : ' + data[3].name;
        document.querySelector('#price-f4').innerHTML = 'Prix : '+ data[3].price + ' eur';
        document.querySelector('#imageUrl-f4').innerHTML = '<img src="http://localhost:3000/images/oak_4.jpg">';
        document.querySelector('#description-f4').innerHTML = data[3].description;

        
        document.querySelector('#name-f5').innerHTML = 'Nom : ' + data[4].name;
        document.querySelector('#price-f5').innerHTML = 'Prix : '+ data[4].price + ' eur';
        document.querySelector('#imageUrl-f5').innerHTML = '<img src="http://localhost:3000/images/oak_5.jpg">';
        document.querySelector('#description-f5').innerHTML = data[4].description;

      
      })
      .catch(function(err) {console.log('Erreur : ' + err)});
      
}
      
apiCallTeddies();
apiCallCameras();
apiCallFurnitures();
   

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

