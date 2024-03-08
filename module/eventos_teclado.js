const d  = document
let x = 0;
let y = 0;

export function moveBall(ecenario, ball, e){
    const $stage = d.querySelector(ecenario)
    const $ball = d.querySelector(ball)
    const limitBall = $ball.getBoundingClientRect()
    const limitStage = $stage.getBoundingClientRect()
    
    switch (e.keyCode) {
        case 37:
            if(limitBall.left > limitStage.left){
                e.preventDefault()
                x--
            }; 
            break;
        case 38:
            if(limitBall.top > limitStage.top) {
                e.preventDefault()
                y--
            };
            break;
        case 39:
            if(limitBall.right < limitStage.right) {
                e.preventDefault()
                x++
            };
            break;
        case 40:
            if(limitBall.bottom > limitStage.bottom) {
                e.preventDefault()
                y++
            };
            break;
    
        default:
            break;
    }

    $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`
}


export function shortcuts(e){
    if(e.key === 'a' && e.altkey){
        alert('has enviado una alerta con el teclado')
    }
    
}