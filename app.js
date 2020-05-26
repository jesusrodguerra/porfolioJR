// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// Funcion para animar las barras al hacer scroll
window.addEventListener('scroll', () => {
  const animacion = document.getElementById('html')
  const animacion2 = document.getElementById('css')
  const animacion3 = document.getElementById('js')
  const animacion4 = document.getElementById('react')
  const posicion = animacion.getBoundingClientRect().top;

  const pantallaSize = window.innerHeight/3;

  if(posicion < pantallaSize){
      animacion.style.animation = 'carga 3s ease-out'
      animacion2.style.animation = 'carga2 4s ease-out'
      animacion3.style.animation = 'carga3 2s ease-out'
      animacion4.style.animation = 'carga4 4s ease-out'
  }
})