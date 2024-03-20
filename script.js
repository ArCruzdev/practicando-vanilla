import btnBurguer from "./module/button_hamburguer.js";
import countDown from "./module/cuenta_regresiva.js";
import { moveBall, shortcuts } from "./module/eventos_teclado.js";
import { alarma, relojAlarma } from "./module/reloj_alarma.js";
import responsive from "./module/responsive_map_video.js";
import btnScroll from "./module/scrollBtn.js";
import darkLight from "./module/tema_dark.js";
import responsiveTester from "./module/responsive_tester.js";
import userDeviceInfo from "./module/deteccion_dispositivos.js";
import estadoRed from "./module/deteccion_estado_red.js";
import webCam from "./module/deteccion_webcam.js";
import getGeolocation from "./module/geolocalizacion.js";
import filtrosBusqueda from "./module/filtro_busqueda.js";
import draw from "./module/sorteo.js";
import slider from "./module/carrusel.js";
import scrollSpy from "./module/scroll_espia.js";
import smartVideo from "./module/video_inteligente.js";
import contactFormValidation from "./module/validaciones_formularios.js";
import speechReader from "./module/narrador.js";

const d = document;
const w = window;

d.addEventListener('DOMContentLoaded', e => {
  btnBurguer('.panel-btn', '.panel', '.menu a')
  relojAlarma('#dameHora', '#displayReloj', '#stopHora')
  alarma('#activar-alarma', '#desactivar-alarma', './RainFallMedium PE1005201.mp3')
  countDown('countDown', 'April 10, 2024 00:00:00', 'Feliz cumpleaños Angelica')
  btnScroll('.scroll')
  responsive('video', '(min-width: 900px)', `<a href='https://youtu.be/6IwUl-4pAzc?si=GBPuewIeo1-A28Ep' target='_blank' rel='noopener'>Ver Video</a>`, '<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=5e0u_fXilUP7KsKd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
  responsive('map', 
  '(min-width: 900px)', 
  `<a href='https://maps.app.goo.gl/sAR58414eL3Riv4C6' target='_blank' rel='noopener'>ver mapa</a>`, 
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.5920203120895!2d-76.30480752501197!3d3.897252848098619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e39e64306adacfb%3A0x236af63f4e39fbf9!2sBas%C3%ADlica%20Menor%20Se%C3%B1or%20de%20Los%20Milagros!5e0!3m2!1ses!2sco!4v1710041238195!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>')
  responsiveTester('responsive-tester')
  userDeviceInfo('user-device');
  webCam('webcam')
  getGeolocation('geolocation')
  filtrosBusqueda('.card-filter','.card')
  draw('#winner-btn','.player')
  slider()
  scrollSpy()
  smartVideo()
  contactFormValidation()
})

d.addEventListener('keydown', e => {
  moveBall('.contenedor-ball', '.ball', e)
  shortcuts(e)
})
darkLight('.dark', 'darkLight')
estadoRed()
speechReader()

