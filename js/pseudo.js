const syllabes = {
    'fantaisie': ['mir', 'lin', 'dar', 'win', 'thal', 'aer', 'lyn', 'mo', 'dra', 'wyn'],
    'science-fiction': ['zen', 'trix', 'sor', 'vex', 'tron', 'cor', 'ex', 'nov', 'on', 'zor'],
    'animaux': ['bear', 'wolf', 'tig', 'hawk', 'lynx', 'eagle', 'fox', 'panth', 'pum', 'jag'],
    'nature': ['leaf', 'tree', 'stone', 'brook', 'river', 'sky', 'flower', 'peak', 'lake', 'oak'],
    'espace': ['star', 'galax', 'nova', 'cosm', 'nebu', 'orbit', 'moon', 'comet', 'alien', 'aster'],
    'mythologie': ['zeus', 'thor', 'loki', 'ares', 'hades', 'odin', 'posei', 'apollo', 'artem', 'hera'],
    'couleurs': ['red', 'blue', 'green', 'yellow', 'orange', 'violet', 'indigo', 'cyan', 'magenta', 'black'],
    'nourriture': ['apple', 'banana', 'orange', 'grape', 'melon', 'strawberry', 'peach', 'pear', 'kiwi', 'pineapple'],
    'temps': ['hour', 'minute', 'second', 'day', 'week', 'month', 'year', 'epoch', 'century', 'millennium'],
    'émotions': ['joy', 'anger', 'fear', 'love', 'sadness', 'surprise', 'disgust', 'anxiety', 'excitement', 'contentment'],
    'musique': ['note', 'melody', 'rhythm', 'harmony', 'beat', 'chord', 'symphony', 'song', 'tune', 'scale'],
    'véhicules': ['car', 'bike', 'plane', 'train', 'ship', 'boat', 'truck', 'bus', 'helicopter', 'submarine'],
    'technologie': ['byte', 'pixel', 'code', 'data', 'screen', 'server', 'chip', 'robot', 'network', 'software'],
    'sports': ['ball', 'goal', 'net', 'team', 'race', 'win', 'coach', 'athlete', 'fan', 'stadium'],
    'corps humain': ['heart', 'brain', 'eye', 'hand', 'foot', 'mouth', 'ear', 'nose', 'arm', 'leg'],
    'livres': ['hobbit', 'harry potter', 'lord of the rings', 'game of thrones', 'divergent', 'percy jackson', 'twilight', 'hunger games', 'narnia', 'the alchemist'],
    'signes du zodiaque': ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn'],
    'pays': ['france', 'usa', 'china', 'russia', 'brazil', 'india', 'canada', 'australia', 'germany', 'japan'],
    'films': ['titanic', 'harry potter', 'lord of the rings', 'star wars', 'disney', 'pixar']
};

function genererPseudos() {
    const theme = document.getElementById("theme").value.toLowerCase();
    const nombreLettres = parseInt(document.getElementById("nombreLettres").value);
    const inclureChiffres = document.getElementById("inclureChiffres").checked;
    const nombrePseudos = document.getElementById("nombrePseudos").value;
    let pseudos = [];

    for (let i = 0; i < nombrePseudos; i++) {
        let pseudo = genererPseudo(theme, nombreLettres, inclureChiffres);
        pseudos.push(pseudo);
    }

    afficherPseudos(pseudos);
}

function genererPseudo(theme, nombreLettres, inclureChiffres) {
    let pseudo = "";
    const themeSyllabes = syllabes[theme];
    const nombreSyllabes = themeSyllabes.length;

    while (pseudo.length < nombreLettres) {
        const syllabeIndex = Math.floor(Math.random() * nombreSyllabes);
        const syllabe = themeSyllabes[syllabeIndex];
        if (pseudo.length + syllabe.length <= nombreLettres) {
            pseudo += syllabe;
        } else {
            pseudo += syllabe.slice(0, nombreLettres - pseudo.length);
        }
    }

    if (inclureChiffres) {
        const chiffre = Math.floor(Math.random() * 100);
        pseudo += chiffre;
    }

    return pseudo.charAt(0).toUpperCase() + pseudo.slice(1);
}

function afficherPseudos(pseudos) {
    const pseudosDiv = document.getElementById("pseudosGeneres");
    pseudosDiv.innerHTML = "";

    pseudos.forEach(pseudo => {
        const p = document.createElement("p");
        p.textContent = pseudo;
        pseudosDiv.appendChild(p);
    });
}

function copyText() {
    var textToCopy = document.getElementById('pseudosGeneres').innerText;
  
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