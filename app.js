    // Get the game-board div
    const parentDiv = document.getElementById('game-board');

    // Generar 225 divs hijos
    for (let i = 0; i < 225; i++) {
        // Crear un nuevo div hijo
        const cell = document.createElement('div');
        cell.classList.add('cell');
        
        // Añadir el div hijo al div padre
        parentDiv.appendChild(cell);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const cells = document.querySelectorAll('.cell');
        const showResult = document.getElementById('result');
        let cellsWidth = 15;
        let shipPosition = 202;
        let invadersPosition = 0; 
        let destroyedInvaders = [];
        let result = 0;
        let direction = 1;
        let invaderId;

        const invader = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
            30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,]; 

        invader.forEach((invader) => {
            cells[invadersPosition + invader].classList.add('invader');  
        });



    })