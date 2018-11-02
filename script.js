function Game() {
    this.boardArr = [
        [1, 1],
        [0, 0]
    ]
    this.playerPosition = {
        x: 0,
        y: 1
    }

    this.render()
}

Game.prototype.render = function () {
    document.body.innerHTML = ''

    this.composeBoard()

    this.boardArr.forEach((row, i) => {
        row.forEach( (cell, j) => {
            this.renderSingleCell(cell)
        })
    })
}

Game.prototype.renderSingleCell = function (cell) {
    const cellDiv = document.createElement('div')

    cellDiv.style.width = '20px'
    cellDiv.style.height = '20px'

    if (cell === 0) cellDiv.style.backgroundColor = 'black'
    if (cell === 1) cellDiv.style.backgroundColor = 'gray'
    if (cell === 'P') cellDiv.style.backgroundColor = 'red'

    document.body.appendChild(cellDiv)
}

Game.prototype.composeBoard = function () {
    this.boardArr[this.playerPosition.y][this.playerPosition.x] = 'P'
}