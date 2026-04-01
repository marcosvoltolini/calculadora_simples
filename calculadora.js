function appendtodisplay() {
    document.getElementById('display').value += value
}

function resultado() {
    const display = document.getElementById('display')
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Errado"
    }

    function Remover() {
        const display = document.getElementById('display')
        display.value = display.value.slice(0,-1)
    }
}
