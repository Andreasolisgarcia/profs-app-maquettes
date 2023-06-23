window.addEventListener('scroll', function() {
  var fadeElements = document.querySelectorAll('.fade-in');
  for (var i = 0; i < fadeElements.length; i++) {
    var element = fadeElements[i];
    var position = element.getBoundingClientRect();

    // Ajoutez la classe d'animation appropriée en fonction de la position de l'élément
    if (position.top <= window.innerHeight && position.bottom >= 0) {
      if (element.classList.contains('left-to-right')) {
        element.classList.add('show-from-left');
      } else if (element.classList.contains('right-to-left')) {
        element.classList.add('show-from-right');
      }
    }
  }
});
