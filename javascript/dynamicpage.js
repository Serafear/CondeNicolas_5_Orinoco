let urlParams = new URLSearchParams(window.location.search);

let productId = urlParams.get('productId');
console.log(productId);


  let url ='http://localhost:3000/api/teddies/'+ productId;


    fetch(url)
      .then(function(response){
        return response.json()}) //on peut avoir à la place du json du .arrayBuffer(), du .blol(), du .text(), et du .formData()
      .then(function(data){
        console.log(data);
        doc
      });

