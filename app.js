//HTML Elements

var statusDiv = document.querySelector('.status')
var resetDiv = document.querySelector('.reset')
var cellDivs = document.querySelectorAll('.game-cell')

//game constatns
var xSymbol = '×'
var oSymbol = '○'

//game variables
var gameIsLive = true
var xIsNext = true


//functions
var letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol

var handleWin = (letter) => {
    gameIsLive = false
        if(letter === 'x'){
            statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`
        }else{
            statusDiv.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`
        }
    }

var chceckGameStatus = () => {
    var topLeft = cellDivs[0].classList[1]
    var topMiddle = cellDivs[1].classList[1]
    var topRight = cellDivs[2].classList[1]
    var middleLeft = cellDivs[3].classList[1]
    var middleMiddle = cellDivs[4].classList[1]
    var middleRight = cellDivs[5].classList[1]
    var bottomLeft = cellDivs[6].classList[1]
    var bottomMiddle = cellDivs[7].classList[1]
    var bottomRight = cellDivs[8].classList[1]

    //check winner?
    if(topLeft && topLeft === topMiddle && topLeft === topRight){
        handleWin(topLeft)
        cellDivs[0].classList.add('won')
        cellDivs[1].classList.add('won')
        cellDivs[2].classList.add('won')

    }else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight){
        handleWin(middleLeft)
        cellDivs[3].classList.add('won')
        cellDivs[4].classList.add('won')
        cellDivs[5].classList.add('won')

    }else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight){
        handleWin(bottomLeft)
        cellDivs[6].classList.add('won')
        cellDivs[7].classList.add('won')
        cellDivs[8].classList.add('won')

    }else if(topLeft && topLeft === middleLeft && topLeft === bottomLeft){
        handleWin(topLeft)
        cellDivs[0].classList.add('won')
        cellDivs[3].classList.add('won')
        cellDivs[6].classList.add('won')

    }else if(topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle){
        handleWin(topMiddle)
        cellDivs[1].classList.add('won')
        cellDivs[4].classList.add('won')
        cellDivs[7].classList.add('won')

    }else if(topRight && topRight === middleRight && topRight === bottomRight){
        handleWin(topRight)
        cellDivs[2].classList.add('won')
        cellDivs[5].classList.add('won')
        cellDivs[8].classList.add('won')

    }else if(topLeft && topLeft === middleMiddle && topLeft === bottomRight){
        handleWin(topLeft)
        cellDivs[0].classList.add('won')
        cellDivs[4].classList.add('won')
        cellDivs[8].classList.add('won')

    }else if(topRight&& topRight === middleMiddle && topRight === bottomLeft){
        handleWin(topRight)
        cellDivs[2].classList.add('won')
        cellDivs[4].classList.add('won')
        cellDivs[6].classList.add('won')

    }else if(topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight){
        gameisLive = false;
        statusDiv.innerHTML = "Game is tied"
    }else{
        xIsNext = !xIsNext
        if(xIsNext){
            statusDiv.innerHTML = `${xSymbol} is next`
        }else{
            statusDiv.innerHTML = `<span>${oSymbol} is next </span>`
        }
    }
}



//event handlers
var handleReset = () => {
    xIsNext = true
    statusDiv.innerHTML = `${xSymbol} is next`
    for(var i = 0; i<cellDivs.length; i++){
        cellDivs[i].classList.remove('x')
        cellDivs[i].classList.remove('o')
        cellDivs[i].classList.remove('won')
    }
    gameIsLive = true
}

var handleCellClick = (e) => {
    var classList = e.target.classList

    if(!gameIsLive || classList[1]==='x' || classList[1]==='o'){
        return
    }

    if(xIsNext){
        classList.add('x')
        chceckGameStatus()
    }else {
        classList.add('o')
        chceckGameStatus()
    }
}

//event listeners
resetDiv.addEventListener('click', handleReset)

for(var i = 0; i < cellDivs.length; i++){
    cellDivs[i].addEventListener('click', handleCellClick)
}