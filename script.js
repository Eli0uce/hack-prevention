window.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
    // Afficher une alerte personnalisée avec du texte et une image
    const message = 'Merci pour tes coordonnées et mots de passe.';
    const imageUrl = 'https://i.imgur.com/SfafId9.gif';

    Swal.fire({
      title: 'Hop la, tu viens de te faire hacker !',
      html: message,
      imageUrl: imageUrl,
      imageAlt: 'Ciao',
      showCloseButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        window.close();
      }
    });
  }, 2000); // Attendre 2 secondes (2000 millisecondes) avant d'afficher l'alerte
});
