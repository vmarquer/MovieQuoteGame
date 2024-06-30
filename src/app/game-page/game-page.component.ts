import { Component } from '@angular/core';
import { Quote } from '../models/quote';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css'
})

export class GamePageComponent {
  currentQuote: Quote | undefined;
  quotes: Quote[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.readCSV();
  }

  readCSV(): void {
    this.http.get('assets/quotes.csv', { responseType: 'text' })
      .subscribe({
        next: csvContent => {
          const lines = csvContent.split('\n');
          this.quotes = lines.map(line => {
            const [quote, movie, character, actor, difficulty, image] = line.split(',');
            return new Quote(quote, movie, character, actor, difficulty, image);
          });
        },
        error: error => {
          console.error('Erreur de lecture du fichier CSV:', error);
        }
      });
  }

  drawQuote(): void {
    console.log(this.quotes.length);
    if (this.quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.quotes.length);
      this.currentQuote = this.quotes.splice(randomIndex, 1)[0];
    } else {
      console.log('Aucune citation disponible.');
    }
    console.log(this.currentQuote);
    console.log(this.quotes.length);
  }

  stopGame(): void {
    this.router.navigate(['']);
  }
}
