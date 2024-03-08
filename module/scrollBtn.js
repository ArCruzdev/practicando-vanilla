export default function btnScroll (btn) {
    let $botonScroll = document.querySelector(btn) 

    document.addEventListener('scroll', e => {
        let scroltop = document.documentElement.scrollTop;
        
        if(scroltop > 800){
            $botonScroll.classList.remove('hidden')
        }else {
            $botonScroll.classList.add('hidden')
        }
        
    })

    
    document.addEventListener('click', e => {
        if(e.target.matches(btn)){
            window.scrollTo({
                behavior: 'smooth',
                top: 0
            })
        }
    })
}

