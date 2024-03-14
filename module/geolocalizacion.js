export default function getGeolocation(id){
    const $id = document.getElementById(id);
    //las opciones
    const options = {
        enableHighAccuracy: true, // funcion viene por default false que el dispositivo trate de hacer la mejor lectura 
        timeout: 5000,//timepo de espera para la lectura
        maximumAge: 0//para evitar que no se guarde en cache las lecturas 
    }
    //funcion en caso de exito 
    const success = (position) => {
        console.log(position)
        let coords = position.coords;

        $id.innerHTML = `<p>Tu posicion actual es:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precision: <b>${coords.accuracy}</b> metros</li>
        </ul>
        <a href='https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z' target='_blank' rel='noopener'>ver en google maps</a>
        `
    };
    //funcion en caso de error
    const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        console.log(err)
    };
    //funcion getCurrentPosition que toma los tres parametros 
    navigator.geolocation.getCurrentPosition(success, error, options)
}