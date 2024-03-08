let d = document;
export default function btnBurguer(btn, panel, menuLink) {
    
    let $panel = d.querySelector(panel)
    
    d.addEventListener('click', e => {
        if(e.target.matches(btn)){
            $panel.classList.toggle('is-active')
        }
        if(e.target.matches(menuLink)) {
            $panel.classList.remove('is-active')
        }
    })
}