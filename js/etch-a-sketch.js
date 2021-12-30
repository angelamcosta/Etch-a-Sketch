function createGrid(sizeGrid) {
    document.getElementById('main').innerHTML = '';
    for (var i = 0; i < (sizeGrid * sizeGrid); i++) {
        let divGrid = document.createElement('div');
        divGrid.id = 'divGrid' + (i + 1);
        divGrid.className = 'divGrid';
        divGrid.addEventListener('mouseover', function hover() {
            divGrid.style.background = '#D46855';
        });
        divGrid.style.flex = '1 0 ' + (100 / sizeGrid) + '%';
        document.getElementById('main').appendChild(divGrid);
    }
}

function startNewGrid() {
    let sizeGrid = prompt('Type here');
    createGrid(sizeGrid);
}

createGrid(16);
