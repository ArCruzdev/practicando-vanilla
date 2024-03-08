import btnBurguer from "./module/button_hamburguer.js";
import countDown from "./module/cuenta_regresiva.js";
import { moveBall, shortcuts } from "./module/eventos_teclado.js";
import { alarma, relojAlarma } from "./module/reloj_alarma.js";
import btnScroll from "./module/scrollBtn.js";
import darkLight from "./module/tema_dark.js";

const d = document;
const w = window;

d.addEventListener('DOMContentLoaded', e => {
  btnBurguer('.panel-btn', '.panel', '.menu a')
  relojAlarma('#dameHora', '#displayReloj', '#stopHora')
  alarma('#activar-alarma', '#desactivar-alarma', './RainFallMedium PE1005201.mp3')
  countDown('countDown', 'April 10, 2024 00:00:00', 'Feliz cumpleaños Angelica')
  btnScroll('.scroll')
  darkLight('.dark', '.darkLight')
})

d.addEventListener('keydown', e => {
  moveBall('.contenedor-ball', '.ball', e)
  shortcuts(e)
})