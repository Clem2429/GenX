function generateNumbers() {
    var min = parseInt(document.getElementById('min').value);
    var max = parseInt(document.getElementById('max').value);
    var quantity = parseInt(document.getElementById('quantity').value);

    if (isNaN(min) || isNaN(max) || isNaN(quantity)) {
        alert("Veuillez entrer des valeurs numériques valides.");
        return;
    }

    if (min >= max) {
        alert("La valeur minimale doit être inférieure à la valeur maximale.");
        return;
    }

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "";

    for (var i = 0; i < quantity; i++) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        resultDiv.innerHTML += randomNumber + " ; ";
    }
}

function copyText() {
    var textToCopy = document.getElementById('result').innerText;
  
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
  