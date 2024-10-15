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