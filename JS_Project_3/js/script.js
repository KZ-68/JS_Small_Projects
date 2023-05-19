let player1 = { symbol: "𝖷" }
let player2 = { symbol: "⭘" }
let player = player1.symbol
let round = 0
let gameFinished = false

const boxArea = document.querySelector("#boxArea")

const box = document.createElement("div")
box.classList.add("carre")

const boxFooter = document.querySelector("#boxFooter")

const boxStatus = document.createElement("div")
boxStatus.classList.add("status")

boxFooter.appendChild(boxStatus)

for (let i = 1; i <= 9; i++) {  
    let newbox = box.cloneNode()
    boxArea.appendChild(newbox)

    newbox.addEventListener("click", (boxClicked) => {
        round++
        
        if (player == player1.symbol) {
            boxStatus.innerHTML = "It's " + player2.symbol + " turn"
        } else if (player == player2.symbol) {
            boxStatus.innerHTML = "It's " + player1.symbol + " turn"
        } else {
            gameFinished = true
        }

        if (newbox.innerHTML == "" && !gameFinished) {
            newbox.innerHTML = player
            newbox.classList.add(player)
        } else {
            alert("Ajout de symbole impossible !")
            round--
            playerSwitch()
        }

        playerSwitch()
        
        if (round === 9) {
            gameFinished = true
        }
    
        if (round === 9 && gameFinished === true) {
            boxStatus.innerHTML = "Finish !"
            player = null
        }
    })
  
}

function playerSwitch() {
    if (player == player1.symbol) {
        player = player2.symbol
    } else {
        player = player1.symbol
    }
}
