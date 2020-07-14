const container = document.createElement('div');
container.classList.add('grid-container');

// gameBoard which will be later used by a function to genererate it
let gameBoard = {
    0: '',
    1: '',
    2: '',
    3: '',
    4: 'Dupa',
    5: '',
    6: '',
    7: '',
    8: '',
}

let generateGrid = (board) => {
    container.innerHTML = ''; // removes the board so it can be regenerated
    for (let i = 0; i < 9; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-element');
        div.setAttribute('id', `grid-${i}`);
        div.textContent = board[i]
        container.appendChild(div);
    }    
}



// takes in object and fills the text content according to the object


document.body.appendChild(container);

// player Factory Function
const playerFactory = (name, marker) =>{
    return (name, marker)
}

const playerOne = playerFactory('one', 'X');
const playerTwo = playerFactory('two', 'O');
//array obiektów? może [[][][][][][]][][][][]] etc. w każdym storowany jest player.marker hmmmm

generateGrid(gameBoard);