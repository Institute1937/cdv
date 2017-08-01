document.body.onload = addElement;

function addElement () { 
  let currentDiv = document.getElementById("front"); 
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode("I'm from js"); 
  newDiv.appendChild(newContent); //add the text node to the newly created div. 
  currentDiv.appendChild(newDiv)

  fetch('http://localhost/clojure').then(function(res){
    res.json().then(body => {
      console.log(body)
       var newDiv = document.createElement("div"); 
       var newContent = document.createTextNode(body.message)
       newDiv.appendChild(newContent); //add the text node to the newly created div. 
       currentDiv.appendChild(newDiv)
    });
})
}