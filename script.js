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

const playerOne = Player('one', 'X');
const playerTwo = Player('two', 'O');

game.generateGrid(gameBoard);

console.log(gridElems);