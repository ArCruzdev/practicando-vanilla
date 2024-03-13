export default function userDeviceInfo(id){
    const $id = document.getElementById(id)
    const isMobile = {
        android: ()=> navigator.userAgent.match(/android/i),
        ios: ()=> navigator.userAgent.match(/iphone|ipad|ipod/i),
        windows: ()=> navigator.userAgent.match(/windows phone/i),
        any: function () {
            return this.android() || this.ios() || this.windows()
        }
    }
    const isDesktop = {
        linux: ()=> navigator.userAgent.match(/linux/i),
        mac: ()=> navigator.userAgent.match(/mac os/i),
        windows: ()=> navigator.userAgent.match(/windows nt/i),
        any: function(){
            return this.linux()|| this.mac()|| this.windows()
        }
    }
    const isBrowser = {
        chrome: ()=> navigator.userAgent.match(/chrome/i),
        safari: ()=> navigator.userAgent.match(/safari/i),
        firefox: ()=> navigator.userAgent.match(/firefox/i),
        opera: ()=> navigator.userAgent.match(/opera|operamini/i),
        ie: ()=> navigator.userAgent.match(/msie|iemobile/i),
        edge: ()=> navigator.userAgent.match(/edge/i),
        any: function(){
            return(
                this.chrome()||
                this.safari()||
                this.firefox()||
                this.opera()||
                this.ie()||
                this.edge()
            )
        }
    }
    $id.innerHTML = `
    <ul>
        <li>User Agent: ${navigator.userAgent}</li><br>
        <li>Plataforma: <b>${isMobile.any()? isMobile.any(): isDesktop.any()}</b></li><br>
        <li>Navegador que estas usando: <b>${isBrowser.any()}</b></li>
    </ul>
    `

    /*contenido exclusivo*/
    if(isBrowser.chrome()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`
    }
    if(isBrowser.firefox()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en firefox</mark></p>`
    }

    /*redirecciones*/
    if(isMobile.any()){
        let descargate = document.createElement('h2')
    let newContent = document.createTextNode('descarga nuestra app en play store')
    descargate.appendChild(newContent)
    let cabecera = document.querySelector('.header')
    cabecera.appendChild(descargate)
    }

    if(isMobile.android()){
        window.location.href = 'https://jonmircha.com';
    }
}