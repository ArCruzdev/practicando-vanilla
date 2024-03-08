const d = document;

export default function countDown(id, fechaLimit, mensajeFinal) {
    let $countDown = d.getElementById(id)
    let countDownDate = new Date(fechaLimit).getTime();

    let countDownTempo = setInterval(() => {
        let ahora = new Date().getTime()
        let limiteTiempo = countDownDate - ahora;
        let dias = Math.floor(limiteTiempo / (1000 * 60 *60 * 24));
        let horas = ('0' + Math.floor(limiteTiempo % (1000 * 60 *60 * 24) / (1000 * 60 *60))).slice(-2);
        let minutos = ('0' + Math.floor(limiteTiempo % (1000 * 60 *60 ) / (1000 * 60))).slice(-2);
        let segundos = ('0' + Math.floor(limiteTiempo % (1000 * 60) / 1000 )).slice(-2);
        $countDown.innerHTML = `<h3>faltan: ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos}</h3>`
        
        if(limiteTiempo < 0){
            clearInterval(countDownTempo);
            $countDown.innerHTML = `<h3>${mensajeFinal}</h3>`
        }
    }, 1000)

}