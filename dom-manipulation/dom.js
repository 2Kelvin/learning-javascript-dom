function headingCSS(heading) {
    heading.style.background = "pink";
    heading.style.color = "red";
}

function listCSS(listItemsArray) {
    for (let liItem of listItemsArray) {
        liItem.style.background = "lightGreen";
        liItem.style.marginBottom = "5px";
        liItem.style.width = "fit-content";
        liItem.style.padding = "3px 6px";
    }
}

const mainHeading = document.getElementById("mainHeading");
//styling the heading using Javascript
// mainHeading.style.background = "yellow"; --> this is an instyle method
headingCSS(mainHeading);

const liItems = document.querySelectorAll("li");
listCSS(liItems);