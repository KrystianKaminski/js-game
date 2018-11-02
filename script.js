function Game() {
    this.boardArr = [
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
    this.playerPosition = {
        x: 0,
        y: 1
    }

    this.init()
}

Game.prototype.init = function () {
    this.startListeningToArrows()
    this.render()
}

Game.prototype.render = function () {
    document.body.innerHTML = ''

    this.composeBoard()

    this.boardArr.forEach((row, i) => {
        const rowDiv = document.createElement('div')
        rowDiv.style.height = '20px'
        row.forEach( (cell, j) => {
            this.renderSingleCell(cell, rowDiv)
        })

        document.body.appendChild(rowDiv)
    })
}

Game.prototype.renderSingleCell = function (cell, rowDiv) {
    const cellDiv = document.createElement('div')

    cellDiv.style.display = 'inline-block'
    cellDiv.style.width = '20px'
    cellDiv.style.height = '20px'

    if (cell === 0) cellDiv.style.backgroundColor = 'black'
    if (cell === 1) cellDiv.style.backgroundColor = 'gray'
    if (cell === 'P') cellDiv.style.backgroundColor = 'red'

    rowDiv.appendChild(cellDiv)
}

Game.prototype.composeBoard = function () {
    this.boardArr[this.playerPosition.y][this.playerPosition.x] = 'P'
}

Game.prototype.startListeningToArrows = function () {
    window.addEventListener(
        'keydown',
        event => {
            switch(event.key) {
                case 'ArrowUp':
                    event.preventDefault()
                    this.checkIfMoveIsAvailable(0, -1)
            }
        }
    )
}