const container = document.createElement('div');
const playerOneInput = document.getElementById('player-one');
const playerTwoInput = document.getElementById('player-two');
const submitButton = document.getElementById('submit');
const h1Header = document.getElementById('title');

let turnCounter = 0;

let playerOne;
let playerTwo;

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

const Player = (name, marker) =>{
    return {name, marker}
}

// generate module for my single use stuff
const game = (() => {
    const generateGrid = (board) => {
        if (playerOne || playerTwo == null){
            playerOne = Player(playerOneInput.value, 'X');
            playerTwo = Player(playerTwoInput.value, 'O');
        }
        container.innerHTML = ''; // removes the board so it can be regenerated
        for (let i = 0; i < 9; i++) {
            let div = document.createElement('div');
            div.classList.add('grid-element');
            div.setAttribute('id', i);
            div.textContent = board[i]
            container.appendChild(div);
        }

        gridElems = document.querySelectorAll('.grid-element');
        if (checkWin(board) == 'continue'){
            changeGridValue();
        }
        else{
            h1Header.textContent = checkWin(board);
        }
        
    };
    
// checks for wins using a table of all possible winning conditions
    const checkWin = (board) => {
        let winningConditions = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [6, 4, 2]]
        if (turnCounter === 9){
            return 'Draw!'
        }   
        // checks which player turn it is
        // a bug occured here, turn was being checked on the opposite player's turn. 
        // so instead of checking for win when O was making a move, i was checking it before X could place his stuff
        else{
            for (let item = 0; item < winningConditions.length; item++) {
                if (turnCounter % 2 == 1){
                    if (board[winningConditions[item][0]] == playerOne.marker && board[winningConditions[item][1]] == playerOne.marker && board[winningConditions[item][2]] == playerOne.marker){
                        return (`${playerOne.name} has won!`)
                    }
                }
                else{
                    if (board[winningConditions[item][0]] == playerTwo.marker && board[winningConditions[item][1]] == playerTwo.marker && board[winningConditions[item][2]] == playerTwo.marker){
                        return (`${playerTwo.name} has won!`)
                    }
                }
            }
            console.log('continue');
            return 'continue'
            
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
                generateGrid(gameBoard);
            });
        });
    };
    return{
        generateGrid,
        turnCounter,
    };
})();

// player Factory Function


document.querySelector('#submit-button').addEventListener('click', function(){
    
    document.querySelector('#reset').style.display = 'inline';
    document.querySelector('.grid-container').style.opacity = '100';
    document.querySelector('#form').style.display = 'none';
  });

game.generateGrid(gameBoard);

document.querySelector('#reset').addEventListener('click', () => {
    h1Header.textContent = 'Tic Tac Toe';
    for (let i = 0; i < 9; i++){
        gameBoard[i] = '';
    }
    turnCounter = 0;
    game.generateGrid(gameBoard);
    
});

console.log(gridElems);