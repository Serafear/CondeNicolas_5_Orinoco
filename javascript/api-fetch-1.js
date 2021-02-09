
    let url ='http://localhost:3000/api/teddies';


    fetch(url)
    .then(function(response){
        return response.json();}) //on peut avoir à la place du json du .arrayBuffer(), du .blol(), du .text(), et du .formData()
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
    });




