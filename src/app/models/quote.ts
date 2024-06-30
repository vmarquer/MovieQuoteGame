export class Quote {
    quote: string;
    movie: string;
    character: string;
    actor: string;
    difficulty: string;
    image: string;

    constructor(quote: string, movie: string, character: string, actor: string, difficulty: string, image: string) {
        this.quote = quote;
        this.movie = movie;
        this.character = character;
        this.actor = actor;
        this.difficulty = difficulty;
        this.image = image;
    }

    show(): void {
        console.log(`Réplique: ${this.quote}`);
        console.log(`Film: ${this.movie}`);
        console.log(`Personnage: ${this.character}`);
        console.log(`Acteur: ${this.actor}`);
        console.log(`Difficulté: ${this.difficulty}`);
        console.log(`Image: ${this.image}`);
    }
}
