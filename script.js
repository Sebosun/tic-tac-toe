const container = document.createElement('div');
let gridElems;

container.classList.add('grid-container');
document.body.appendChild(container);

// gameBoard which will be later used by a function to genererate it
// likely will move it into game later on
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
    let turnCounter = 0;
    const generateGrid = (board) => {
        container.innerHTML = ''; // removes the board so it can be regenerated
        for (let i = 0; i < 9; i++) {
            let div = document.createElement('div');
            div.classList.add('grid-element');
            div.setAttribute('id', i);
            div.textContent = board[i]
            container.appendChild(div);
        }
        gridElems = document.querySelectorAll('.grid-element');
        
        changeGridValue();
        
    };
    
// checks for wins using a table of all possible winning conditions
// TODO: CHECK IF THERE'S A DRAW!
    const checkWin = () => {
        let winningConditions = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [6, 4, 2]]
        for (let item = 0; item < winningConditions.length; item++) {
// checks which player turn it is
            if (turnCounter % 2 == 0){
                if (gameBoard[winningConditions[item][0]] == playerOne.marker && gameBoard[winningConditions[item][1]] == playerOne.marker && gameBoard[winningConditions[item][2]] == playerOne.marker){
                    alert(`Player ${playerOne.name} has won!`)
                }
            }
            else{
                if (gameBoard[winningConditions[item][1]] == playerTwo.marker && gameBoard[winningConditions[item][1]] == playerTwo.marker && gameBoard[winningConditions[item][2]] == playerTwo.marker){
                    alert(`Player ${playerTwo.name} has won!`)
                }
            }

        }
    }

    const changeGridValue = () => {
        gridElems.forEach((place) =>{
            place.addEventListener('click', (e) => {
                console.log(turnCounter);
                if (gameBoard[e.target.id] != ''){
                    alert('Taken by another!')
                }
                else{
                    if (turnCounter % 2 == 0){          //if even player one | odds player two
                        gameBoard[e.target.id] = playerOne.marker; 
                        turnCounter += 1;
                    }
                    else{
                        gameBoard[e.target.id] = playerTwo.marker;
                        turnCounter += 1;
                    }
                }
                checkWin();
                generateGrid(gameBoard);
            });
        });
    };
    // might not need to return those two afterall :thinking: - just initiate it here?
    return{
        generateGrid,
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


// function changeGridValue(){
//     gridElems.forEach((place) =>{
//         place.addEventListener('click', (e) => {
//             console.log(e.target.id);
            
//         });
//     })
// }

// player Factory Function
const Player = (name, marker) =>{
    return {name, marker}
}

const playerOne = Player('iks', 'X');
const playerTwo = Player('kolko', 'O');

game.generateGrid(gameBoard);

console.log(gridElems);