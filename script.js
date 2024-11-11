//select the container div
const container = document.getElementById("container");

//define function to create div with given class name
function createElementWithClass(type, className) {
    const element = document.createElement(type);
    element.className = className
    return element;
  }

//define dims of the grid
const gridSize = 50;

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





container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = 'brown';
    
    setTimeout(() => {
        event.target.style.backgroundColor = '';
    }, 1500);
},
false,
);

//modify grid loop to accept user input for grid size, limit grid to 100