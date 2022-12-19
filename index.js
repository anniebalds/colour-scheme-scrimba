const chooseColour = (e) => {
    e.preventDefault()
    colourInput = document.getElementById('colour-pick').value
    modePick = document.getElementById('mode-pick').value
        fetch(`https://www.thecolorapi.com/scheme?hex=${colourInput.substring(1)}&mode=${modePick}`)
    .then(response => response.json())
    .then(data => {
        colours.innerHTML = ``;
        data.colors.forEach((colour) => {
            console.log(colour.hex.value)
            colours.innerHTML += `
            <div class="one-colour" style="border: 5px solid ${colour.hex.value}">
              <img class="colour-img" src="${colour.image.bare}">
              <h3>${colour.hex.value}</h3>
            </div>`
        })
    })}

document.getElementById('submit-btn').addEventListener('click', chooseColour)
const colours = document.getElementById('colours')
let colourInput = ''