const boxArea = document.querySelector("#boxArea")

const box = document.createElement("div")
box.classList.add("carre")

for (let i = 1; i <= 4; i++) {
    let state1 = false
    let state2 = false
    
    let newbox = box.cloneNode()
    newbox.innerText = i
    boxArea.appendChild(newbox)

    newbox.addEventListener("click", () => {
        if (!state1 && !state2) {
        newbox.classList.add("green_click")
        state1 = true
        } else if (state1 == true & !state2 ) {
            newbox.classList.add("red_click")
            state2 = true
        } else {
            newbox.classList.remove("green_click")
            newbox.classList.remove("red_click")
            state1 = false
            state2 = false
        }
    })
  
}

