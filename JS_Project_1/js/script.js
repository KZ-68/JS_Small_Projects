const mainArea = document.querySelector("main")

const carre = document.createElement("div")
carre.classList.add("carre")

carre.innerText = "Texte"
mainArea.appendChild(carre)

let cssProperties = window.getComputedStyle(carre)
    carreCssList = 
        "Class : " + carre.className +
        "\nBackground Color : " + cssProperties.getPropertyValue("background-color") +
        "\nHeight : " + cssProperties.getPropertyValue("height") +
        "\nWidth : " + cssProperties.getPropertyValue("width") +
        "\nDisplay : " + cssProperties.getPropertyValue("display") +
        "\nFont-Family : " + cssProperties.getPropertyValue("font-family")

carre.addEventListener("click", () => {
    alert(carreCssList)
})



