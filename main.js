const container = document.getElementById("main-container");
const grid = document.getElementById("grid");
const toggleBtn = document.getElementById("border");
const clearBtn = document.getElementById("clear")

function makeGrid(size) {
    for (let index = 0; index < size * size; index++) {
        let div = document.createElement('div')
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
        grid.appendChild(div).className = 'div'
    }

    // changes color of grid when hovered
    let squares = document.querySelectorAll('.div')
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            let randomColor = `rgb(${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)})`
            square.style.backgroundColor = randomColor
        })
    })
}

makeGrid(16);

function clearGrid() {
    let squares = document.querySelectorAll('.div')
    squares.forEach(square => {
        square.style.backgroundColor = '#fff'
    })
}

toggleBtn.addEventListener('click', () => {
    let squares = document.querySelectorAll('.div')
    squares.forEach(square => {
        square.classList.toggle('border')
    })
})

function clearGrid() {    	
    var reqGridSize = prompt('How many squares per side?'); 

    if (reqGridSize >= 1 && reqGridSize <= 100) { 
        makeGrid(reqGridSize); // create new grid 
    } else {
        alert ('Choose a number between 1-100'); 
        clearGrid();
    }
}

clearBtn.addEventListener('click', clearGrid); 
window.onload = makeGrid(16); // on page load, create a 16 x 16 grid
