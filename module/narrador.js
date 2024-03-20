export default function speechReader(){
    const $speechSelect = document.getElementById('speech-selsect')
    const $speechTextarea = document.getElementById('speech-text')
    const $speechBtn = document.getElementById('speech-btn')
    const speechMessege = new SpeechSynthesisUtterance()

    //console.log(speechMessege)

    let voices = []

    document.addEventListener('DOMContentLoaded', e=>{
        //console.log(window.speechSynthesis.getVoices())

        window.speechSynthesis.addEventListener('voiceschanged', e=>{
            voices = speechSynthesis.getVoices()
            
            voices.forEach(voice => {
                const $option = document.createElement('option')
                $option.value = voice.name
                $option.textContent = `${voice.name}***${voice.lang}`

                $speechSelect.appendChild($option)
            })
        })
    })

    document.addEventListener('change', e=>{
        if(e.target === $speechSelect){
            speechMessege.voice = voices.find(voice => voice.name === e.target.value)
        }

        //console.log(speechMessege)
    })

    document.addEventListener('click', e=> {
        if(e.target === $speechBtn){
            speechMessege.text = $speechTextarea.value
            window.speechSynthesis.speak(speechMessege)
        }
    })
}