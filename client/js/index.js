import * as d3 from 'd3v4'; 

document.body.onload = addElement;

function addElement () { 
  let currentDiv = document.getElementById("front"); 
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode("Hello from js"); 
  newDiv.appendChild(newContent); //add the text node to the newly created div. 
  currentDiv.appendChild(newDiv)
}