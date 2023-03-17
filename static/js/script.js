let grid = [
[null,null,null],
[null,null,null],
[null,null,null]
]
let output = document.querySelectorAll("#output")
let links = document.querySelectorAll(".gridBtn")
let pl = document.querySelector(".pl")

      currentPlayer = 1,
    cellIsOccupied = true


   for (let i = 0; i < links.length; i++) {
    let link = links[i]
    link.addEventListener("click", function(e) {
        e.preventDefault()
        cellIsOccupied = e.currentTarget.classList.contains("player2") || e.currentTarget.classList.contains("player1");
        console.log(cellIsOccupied)
        if (cellIsOccupied === false) {

            console.log(e.currentTarget.dataset)
            e.currentTarget.classList.toggle("player" + currentPlayer)

            let riga = e.currentTarget.dataset.row
            let colonna = e.currentTarget.dataset.col

            if (currentPlayer === 1) {
                grid[riga][colonna] = "X"
            } else {
                grid[riga][colonna] = "O"
            }


            if (currentPlayer === 1) {
                currentPlayer = 2
                pl.innerHTML = "tocca giocatore 2"
            } else {
                currentPlayer = 1
                 pl.innerHTML = "tocca giocatore 1"
            }

            console.log(currentPlayer)
        }
    })
}


reset.addEventListener("click", function(event) {
    window.location.reload()
})

function getBestComputerMove(grid, currentPlayer) {

    let bestScore
    let bestMove

    if(currentPlayer==="X"){
    bestScore = -Infinity
    }else{
    bestScore = Infinity
    }

    for(let i=0; i<emptyCells.length; i++){
    let move = emptyCells[i]
    for(let j=0; j<emptyCells.length; j++){
    i=move[0]
    j=move[1]
    grid[i][j]
          }
       }
    }

    /*
    let ar = [0,10,20,30,40,50]
    function testFunction(list){
    list[0]= " CIAO"
    return list
    }
    let ar2= testFunction(ar)
    console.log(ar)
    /*
    let ar = [0,10,20,30,40,50]
    function test2Function(a){
     a+a=2
     return a
    }
    let num = 5
    let b = test2function(num)
    console.log(num)
    */