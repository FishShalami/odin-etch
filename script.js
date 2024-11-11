//select the container div
const container = document.getElementById("container");

//define function to create div with given class name
function createElementWithClass(type, className) {
    const element = document.createElement(type);
    element.className = className
    return element;
  }

//define dims of the grid
// accept user input for grid size, limit grid to 100

let gridSize = null;

document.querySelector('button').addEventListener('click', function() {
    var userPromptGridSize = parseInt(prompt("Please provide a grid size"));
    gridSize = Math.min(userPromptGridSize, 100);
    alert (`You have specified a grid of ${gridSize} square, happy drawing!`);


    //clear previous grid items
    container.innerHTML = '';

    //create a row of n = 16 containers
    for (let i = 0; i < gridSize**2; i++) {
        container.appendChild(createElementWithClass('div','grid'))
    }

    //style the grid items (do this in the style sheet?)

    //adjust the size of the grid items so that each row is the number of squares desired
    document.querySelectorAll(".grid").forEach(function(element) {
    element.style.width = `calc(100% / ${gridSize}`;
    element.style.aspectRatio = '1 / 1'
    });

});







container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = randomColor();
    
    setTimeout(() => {
        event.target.style.backgroundColor = '';
    }, 1500);
},
false,
);

function randomColor() {
    let colorOne = Math.floor(Math.random()*255);
    let colorTwo = Math.floor(Math.random()*255);
    let colorThree = Math.floor(Math.random()*255);
    outputColor = `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
    return outputColor;
}
