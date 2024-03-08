export default function darkLight(btn, classDark) {
    let $botonDrk = document.querySelector(btn)
    let $selectors = document.querySelectorAll('[data-dark]')
    let moon = '🌙'
    let sun = '☀️'
console.log($selectors)
    document.addEventListener('click', e=> {
        if(e.target.matches(btn)){
            if($botonDrk.textContent === moon){
                $selectors.forEach(el => el.classList.add(classDark))
                $botonDrk.textContent = sun
            }else {
                $selectors.forEach(el => el.classList.remove(classDark))
                $botonDrk.textContent = moon
            }
        }
    })
}