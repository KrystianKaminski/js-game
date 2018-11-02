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
    console.log(cell);
}

Game.prototype.composeBoard = function () {
    this.boardArr[this.playerPosition.y][this.playerPosition.x] = 'P'
}