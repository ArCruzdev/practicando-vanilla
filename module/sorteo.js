export default function draw(btn, selector){
    const getWinner = (selector) => {
        let $players  = document.querySelectorAll(selector);
        let numAleatorio = Math.floor(Math.random() * $players.length)
        let winner = $players[numAleatorio]
        return `El ganador es: ${winner.textContent}`
    }

    document.addEventListener('click', e => {
        if(e.target.matches(btn)){
            let result = getWinner(selector)
            alert(result)
            console.log(result)
        }
    })
}