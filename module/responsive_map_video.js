export default function responsive(id, mq, movilContent, desktopContent){
    let breakpoint = window.matchMedia(mq)
    

    const responsiveMedia = e => {
        if(e.matches){
            document.getElementById(id).innerHTML = desktopContent
        }else {
            document.getElementById(id).innerHTML = movilContent
        }
       
    }

   breakpoint.addEventListener('change', responsiveMedia);
   responsiveMedia(breakpoint)

}