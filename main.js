const container = document.getElementById("main-container");
const grid = document.getElementById("grid");

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