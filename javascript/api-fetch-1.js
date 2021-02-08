
    let url ='http://localhost:3000/api/teddies';


    fetch(url)
    .then(function(response){
        return response.json();}) //on peut avoir à la place du json du .arrayBuffer(), du .blol(), du .text(), et du .formData()
    .then(function(data){
        console.log(data);
        document.querySelector('#name').innerHTML = data[0].name;
        document.querySelector('#price').innerHTML = data[0].price + 'eur';
        document.querySelector('#imageUrl').innerHTML = '<img src="http://localhost:3000/images/teddy_1.jpg">';
            
        document.querySelector('#description').innerHTML = data[0].description;
    });




