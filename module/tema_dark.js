export default function darkLight(btn, classDark) {
    let $botonDrk = document.querySelector(btn)
    let $selectors = document.querySelectorAll('[data-dark]')
    let moon = '🌙'
    let sun = '☀️'

    const lightMode = () => {
        $selectors.forEach(el => el.classList.add(classDark))
        $botonDrk.textContent = sun
        localStorage.setItem('tema', 'light');
    }
    const darkMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark))
        $botonDrk.textContent = moon
        localStorage.setItem('tema', 'dark');
    }

    document.addEventListener('click', e=> {
        if(e.target.matches(btn)){
            if($botonDrk.textContent === moon){
                lightMode()
            }else {
                darkMode()
            }
        }
    })

    document.addEventListener('DOMContentLoaded', e => {
        if(localStorage.getItem === null) localStorage.setItem('tema', 'light');
        if(localStorage.getItem('tema') === 'light') lightMode();
        if(localStorage.getItem('tema') === 'dark') darkMode();
    })
}