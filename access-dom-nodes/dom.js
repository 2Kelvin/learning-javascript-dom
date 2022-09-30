// 5 main ways of selecting an element(s) from the DOM

// getElementById()
const mainHeading = document.getElementById("mainHeading");
console.log(mainHeading);

// getElementByClassName() -> returns ALL ElEMENTS in the html with that class & puts them in an array
const listItems = document.getElementsByClassName("listItem");
console.log(listItems);

// getElementsByTagName() -> returns ALL HTML ELEMENTS specified in an arraye.g. <p>, <h1>, <li> etc
const listElements = document.getElementsByTagName("li");
console.log(listElements);

// querySelector() -> selects the 1st item searched for: if the items are many, only the first one is selected and returned
// it can selec ANY element or attribute
const firstListItem = document.querySelector("li");
console.log(firstListItem);

const divContainer = document.querySelector("div");
console.log(divContainer);

// querySelectorAll() -> selects and returns all the selectors & elements specified in an array
const allDivContainers = document.querySelectorAll(".container");
console.log(allDivContainers);

const queryALlListItems = document.querySelectorAll(".listItem");
console.log(queryALlListItems); // produces same list as that of 'getElementsByClassName' above
