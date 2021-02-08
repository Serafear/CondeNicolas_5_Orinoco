

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log(response);
    }
};
request.open("GET", "http://localhost:3000/api/teddies");
request.send();

document.body.onload = addElement; 
function addElement(){
  var newElt = document.createElement("div");
  let elt = document.getElementsByTagName("body");
  newElt.innerHTML = "<p>test</p>";

  document.body.append(newElt);
  console.log(newElt)
}

