class Quote {
    constructor(quote, movie, character, actor, difficulty, image) {
        this.quote = quote;
        this.movie = movie;
        this.character = character;
        this.actor = actor;
        this.difficulty = difficulty;
        this.image = image;
    }

    show() {
        console.log(`Réplique: ${this.quote}`);
        console.log(`Film: ${this.movie}`);
        console.log(`Personnage: ${this.character}`);
        console.log(`Acteur: ${this.actor}`);
        console.log(`Difficulté: ${this.difficulty}`);
        console.log(`Image: ${this.image}`);
    }
}

function readCSV() {
    fetch('quotes.csv')
        .then(response => response.text())
        .then(csvContent => {
            const lignes = csvContent.split('\n');
            const citations = [];
            for (const ligne of lignes) {
                const [quote, movie, character, actor, difficulty, image] = ligne.split(',');
                const citation = new Quote(quote, movie, character, actor, difficulty, image);
                citations.push(citation);
            }
            localStorage.setItem('citations', citations);
        })
        .catch(error => console.error('Erreur de lecture du fichier CSV:', error));
}

function launchGame() {
    window.location.href = "gamePage.html";
}