export function relojAlarma(btn, contenedor, btnStop){
    let $botonReloj = document.querySelector(btn) 
    let $contenedor = document.querySelector(contenedor)
    let clockInterval;

    document.addEventListener('click', e => {
        
        if(e.target.matches(btn)){
            clockInterval = setInterval(() =>{
                let clock = new Date().toLocaleTimeString();
                 $contenedor.innerHTML = `<h3>${clock}</h3>`
            },1000)
            e.target.disabled = true
        }
        if(e.target.matches(btnStop)){
            clearInterval(clockInterval)
            $contenedor.innerHTML = null;
            document.querySelector(btn).disabled = false
        }
    })

}

export function alarma(btnplay, btnstop, sound){
    let alarmsetTimeOut;
    let $etiquetaAudio = document.createElement('audio')
     $etiquetaAudio.src = sound

    document.addEventListener('click', e => {
        if(e.target.matches(btnplay)){
            alarmsetTimeOut = setTimeout(() => {
                $etiquetaAudio.play();
            },1000)
            e.target.disabled = true
        }
        if(e.target.matches(btnstop)){
            clearTimeout(alarmsetTimeOut)
            $etiquetaAudio.pause()
            $etiquetaAudio.currentTime = 0
            document.querySelector(btnplay).disabled = false
        }
    })
    
}