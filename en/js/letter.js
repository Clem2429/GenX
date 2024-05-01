// Fonction pour générer une lettre aléatoire
function genererLettre() {
    const voyelles = 'aeiouy';
    const consonnes = 'bcdfghjklmnpqrstvwxz';
    const utiliserVoyelles = document.getElementById('voyellesCheckbox').checked;
    const utiliserConsonnes = document.getElementById('consonnesCheckbox').checked;

    let alphabet = '';
    if (utiliserVoyelles) alphabet += voyelles;
    if (utiliserConsonnes) alphabet += consonnes;

    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

// Fonction pour générer un mot en fonction du nombre de lettres
function genererLettres() {
    const nombreLettres = parseInt(document.getElementById('nombreLettres').value);
    const enLigne = document.getElementById('enLigneCheckbox').checked;
    const separerParPointVirgule = document.getElementById('separateurPointVirguleCheckbox').checked;
    let mot = '';
    for (let i = 0; i < nombreLettres; i++) {
        mot += genererLettre();
        if (separerParPointVirgule) {
            mot += ' ;'; // Ajout d'un espace avant le point-virgule
        }
        if (enLigne) {
            mot += ' ';
        } else {
            mot += '<br>'; // Si disposé en colonne, utiliser un saut de ligne
        }
    }
    // Supprimer le dernier point-virgule ou espace
    mot = mot.trim();
    if (separerParPointVirgule) {
        mot = mot.slice(0, -1);
    }
    document.getElementById('lettresGenerees').innerHTML = mot;
}

function copyText() {
    var textToCopy = document.getElementById('lettresGenerees').innerText;
  
    // Utiliser l'API Clipboard pour copier le texte dans le presse-papiers
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Le résultat a été copié.');
      })
      .catch(err => {
        console.error('Erreur lors de la copie du texte: ', err);
        alert('Une erreur est survenue lors de la copie.');
      });
  }