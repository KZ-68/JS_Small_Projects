let money = 0.00

const boxArea = document.querySelector("#boxArea")

const form = document.createElement("form")
form.classList.add("convertForm")
boxArea.appendChild(form)

const field = document.createElement("input")
field.classList.add("convertInput")
let newfield = field.cloneNode()
form.appendChild(newfield)
newfield.value = money

const convertResult = document.createElement("div")
convertResult.classList.add("convertResult")
boxArea.appendChild(convertResult)

newfield.addEventListener("input", function() {
    if (newfield.value >= 0.00) {
        convertResult.innerText = convertFranc(newfield.value) + " Francs"
    } else {
        convertResult.innerText = "Vous devez saisir une valeur numérique!"
    }
})


function convertFranc(euro) {
    let franc = 6.56
    let result = euro * franc

    return result
}