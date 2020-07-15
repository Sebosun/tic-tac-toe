const container = document.createElement('div');
let gridElems;

container.classList.add('grid-container');

// gameBoard which will be later used by a function to genererate it
let gameBoard = {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
}

// generate module for my single use stuff

const game = (() => {
    const generateGrid = (board) => {
        container.innerHTML = ''; // removes the board so it can be regenerated
        for (let i = 0; i < 9; i++) {
            let div = document.createElement('div');
            div.classList.add('grid-element');
            div.setAttribute('id', i);
            div.textContent = board[i]
            container.appendChild(div);
        }    
        // query Selector which will be used lateron for a listener
        gridElems = document.querySelectorAll('.grid-element');
        changeGridValue();
    };

    const changeGridValue = () => {
        gridElems.forEach((place) =>{
            place.addEventListener('click', (e) => {
                gameBoard[e.target.id] = 'O';
                generateGrid(gameBoard);
            });
        });
    };

    return{
        generateGrid,
        changeGridValue,
    };
})();


// generates the grid with the board object provided
// let generateGrid = (board) => {
//     container.innerHTML = ''; // removes the board so it can be regenerated
//     for (let i = 0; i < 9; i++) {
//         let div = document.createElement('div');
//         div.classList.add('grid-element');
//         div.setAttribute('id', i);
//         div.textContent = board[i]
//         container.appendChild(div);
//     }    
//     // query Selector which will be used lateron for a listener
//     gridElems = document.querySelectorAll('.grid-element');
// }

document.body.appendChild(container);

// function changeGridValue(){
//     gridElems.forEach((place) =>{
//         place.addEventListener('click', (e) => {
//             console.log(e.target.id);
            
//         });
//     })
// }

// player Factory Function
// const playerFactory = (name, marker) =>{
//     return (name, marker)
// }

//const playerOne = playerFactory('one', 'X');
//const playerTwo = playerFactory('two', 'O');

game.generateGrid(gameBoard);
game.changeGridValue();

console.log(gridElems);