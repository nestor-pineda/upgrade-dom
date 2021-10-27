"use strict"; /* A */
// #1: Interacción con el DOM
console.log(document.querySelector(".showme"));
console.log(document.querySelector("h1#pillado"));
console.log(document.querySelectorAll("p"));
console.log(document.querySelectorAll(".pokemon"));
console.log(document.querySelectorAll('[data-function="testMe"]'));
console.log(document.querySelectorAll('[data-function="testMe"]')[2]);

// #2: Modificando el DOM
// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let newDiv = document.createElement("div");
document.body.appendChild(newDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let newDiv1 = document.createElement("div");
let newP1 = document.createElement("p");
newP1.innerText = "Primer Parrafo";
newDiv1.appendChild(newP1);
document.body.appendChild(newDiv1);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

for (let i = 1; i <= 6; i++) {
  let myDiv2 = document.createElement("div");
  let newP2 = document.createElement("p");
  newP2.innerText = "Texto numero " + i;
  myDiv2.appendChild(newP2);
  document.body.appendChild(myDiv2);
}

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let newP3 = document.createElement("p");
newP3.innerHTML = "Soy Dinamico";
document.body.appendChild(newP3);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let myH2 = document.querySelector("h2.fn-insert-here");
myH2.innerHTML = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

for (let item of apps) {
  let myUl = document.createElement("ul");
  let myLi = document.createElement("li");
  myUl.appendChild(myLi);
  myLi.innerText = item;
  document.body.appendChild(myUl);
}

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let myParagraphs = document.querySelectorAll(".fn-remove-me");

myParagraphs.forEach((divElement) => {
  divElement.innerHTML = "";
});

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

function insertAfter(newElement, referenceElement) {
  referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
}

var newElement = document.createElement("p");
newElement.innerHTML = "Voy en medio!";
var myCurrentElement = document.querySelector("div");
insertAfter(newElement, myCurrentElement);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let allDivElements = document.querySelectorAll("div.fn-insert-here");

allDivElements.forEach((divElement) => {
  divElement.innerHTML = "This Content will appear on every span Element now";
});
