export default function responsiveTester(idForm){
 let $form = document.getElementById(idForm)
 let tester;

 document.addEventListener('submit', e => {
    if(e.target === $form){
        e.preventDefault()
        tester = window.open($form.direccion.value, 'tester', `innerWidth = ${$form.ancho.value}, innerHeight = ${$form.alto.value}`)
    }
 })

 document.addEventListener('click', e => { 
    if(e.target === $form.cerrar) tester.close();
});

}

