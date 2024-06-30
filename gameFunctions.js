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

function drawQuote() {
    const citations = localStorage.getItem('citations');
    console.log(citations.length);
    citations.pop();
    console.log(citations.length);
    alert("drawQuote !");
}

function showAnswer() {
    alert("showAnswer !");
}

function stopGame() {
    window.location.href = "index.html";
}