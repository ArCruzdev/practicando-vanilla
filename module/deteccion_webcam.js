export default function webCam(id){
    const $video = document.getElementById(id);
    //primero validamos si el navegador tiene esta funcion gerUserMedia si valida a true sigue
    if(navigator.mediaDevices.getUserMedia){
        //getUserMedia devulve una promesa 
        navigator.mediaDevices
        .getUserMedia({video: true, audio: false})
        .then(stream => {
            console.log(stream)
            //ingresa al elemento video a su src pero como es un objeto lo que va a recibir entra a srcObj que es lo que espera para su fuente
            $video.srcObject = stream;
            //para que se vea como video al elemento video se le ejecuta su funcion de play si no solo tomaria una foto y se quedaria hay
            $video.play()
        })
        .catch(err => {
            //un error puede ser que el usuario no dio los permisos para usar su camara que en este ejercicio se pide para que se active la camara y se muestre el video en tiempo real.
            console.log(`!sucedio el siguiente error¡: ${err}`)
            $video.insertAdjacentHTML('beforebegin', `<p><mark>!sucedio el siguiente error¡: ${err}</mark></p>`)
        })
    }
}