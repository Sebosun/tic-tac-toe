const ticTacSelector = document.getElementsByClassName('grid-container');

// player Factory Function
const playerFactory = (name, marker) =>{
    return (name, marker)
}

const playerOne = playerFactory('one', 'X');
const playerTwo = playerFactory('two', 'O');

//array obiektów? może [[][][][][][]][][][][]] etc. w każdym storowany jest player.marker hmmmm