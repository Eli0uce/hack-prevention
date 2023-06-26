window.addEventListener('DOMContentLoaded', (event) => {
    // Afficher une alerte personnalisée avec du texte et une image
    const message = 'Merci pour tes coordonnées et mots de passe.';
    const imageUrl = './miles.gif';

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
  });