
const BOXES_LINE_COUNT = 15;
const BOXES_TOTAL_COUNT = BOXES_LINE_COUNT * BOXES_LINE_COUNT;

let kLastDisplayedBox = -1;

const bodyElement = document.querySelector("body")
const boxArea = document.querySelector("#boxArea")

const box = document.createElement("div")
box.classList.add("carre")

bodyElement.addEventListener("keydown", (event) => {
    if (event.code === "ArrowDown") {
        // show the next box
        if (kLastDisplayedBox < BOXES_TOTAL_COUNT - 1) {
            kLastDisplayedBox++;
            let newbox = box.cloneNode()
            newbox.id = `box${kLastDisplayedBox}`; // interpolation // équivalent à la concaténation : "box" + i
            boxArea.appendChild(newbox)
            newbox.style.backgroundColor = getRandomColor()
            // document.getElementById(`box${kLastDisplayedBox}`).style.backgroundColor = getRandomColor()
        }
        if (kLastDisplayedBox == BOXES_TOTAL_COUNT -1) {
            for(i = 0; i < BOXES_TOTAL_COUNT; i++) {
                let idOfBox = `box${i}`
                document.getElementById(idOfBox).addEventListener("click", () => {
                    document.getElementById(idOfBox).style.backgroundColor = "Black"
                    
                    if (this.idOfBox = document.getElementById(idOfBox).style.backgroundColor = "Black") {
                        document.getElementById(idOfBox).addEventListener("click", () => {
                            document.getElementById(idOfBox).style.backgroundColor = "Yellow"
                        })
                    }

                })
            }
        }
      }
}, true)

bodyElement.addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp") {
        // hide the next box
        if (kLastDisplayedBox > -1) {
            document.getElementById(`box${kLastDisplayedBox}`).remove();
            // document.getElementById(`box${kLastDisplayedBox}`).style.backgroundColor = "white"
            kLastDisplayedBox--;
        }
      }
}, true)

// for(i = 0; i < BOXES_TOTAL_COUNT; i++) {
//     let newbox = box.cloneNode()
//     newbox.id = `box${i}`; // interpolation // équivalent à la concaténation : "box" + i
//     boxArea.appendChild(newbox)
//     newbox.addEventListener("click", () => {
//         newbox.style.backgroundColor = "Black"
//     }, true)
// }

function getRandomColor() {
    let c = "#";
    // on va concaténer 6 caractères, qui seront chacun un nombre entier entre 0 et 15 transformé en base 16
    for (let i = 0; i < 6; i++) {
        // Math.random() renvoie un nombre aléatoire entre 0 (inclus) et 1 (exclus)
        // on le multiplie par 16 => un nombre aléatoire entre 0 (inclus) et 16 (exclus)
        // on l'arrondit à l'inférieur (afin de respecter une part égale dans les probas de sorties)
        // le .toString(16) convertit le nombre depuis la base 10 en base 16 (hexadécimal)
        c += (Math.floor(Math.random() * 16)).toString(16);
    }
    return c;
}