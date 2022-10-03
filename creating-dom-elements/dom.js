const ul = document.querySelector("ul");
const li = document.createElement("li");

ul.append(li);

// creating & modifying text --> innerText, innerHTML, textContent
const firstListItem = document.querySelector("li");

// innerText returns JUST the text between the HTML tags
console.log(firstListItem.innerText);

// textContent returns the raw text as it is in the HTML page, with indents and everything if any
console.log(firstListItem.textContent);

// innerHTML returns the raw text + any HTML elements inside the specified element
console.log(firstListItem.innerHTML);

li.innerText = "GitHub Projects";


// CREATING & REMOVING ATTRIBUTES & CLASSES THROUGH JAVASCRIPT
li.setAttribute("class", "listStyle"); //set this class from the linked CSS stylesheet to this element thro Javascript

// this is how you remove an attribute from an element thro Javascript
// li.removeAttribute("class");

// REMOVING ELEMENTS --> removing the element from the DOM
// li.remove();

// ACCESSING ATTRIBUTES THROUGH JAVASCRIPT
const mainHeading = document.getElementById("mainHeading");
console.log(mainHeading.getAttribute("id"));

// viewing all attribute names being used by this element
console.log(mainHeading.getAttributeNames());

// CSS CLASSES
li.classList.add("newItems");
li.classList.add("listItem");

// to remove the class
li.classList.remove("listItem");

console.log(li.classList.contains("listItem"));