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
// querySelector()
// querySelectorAll()
