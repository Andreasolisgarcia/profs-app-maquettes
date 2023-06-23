// Sélectionnez tous les éléments avec la classe "texte-container"
const textContainers = document.querySelectorAll('.texte-container');

// Fonction pour animer l'apparition du texte
function animateText() {
  // Parcours de chaque élément "texte-container"
  textContainers.forEach((container, index) => {
    // Calcul du délai d'apparition basé sur l'index de l'élément
    const delay = index * 1000; // 1000ms = 1 seconde

    // Définition des propriétés de départ de l'animation
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';

    // Utilisation de setTimeout pour appliquer le délai avant le début de l'animation
    setTimeout(() => {
      // Ajout des classes pour animer l'apparition du texte
      container.classList.add('fade-in');
    }, delay);
  });
}

// Appel de la fonction d'animation lorsque le document est prêt
document.addEventListener('DOMContentLoaded', animateText);
