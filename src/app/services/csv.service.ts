import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quote } from '../models/quote';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvService {
  private csvUrl = 'assets/quotes.csv';

  constructor(private http: HttpClient) {}

  readCSV(): Observable<Quote[]> {
    return this.http.get(this.csvUrl, { responseType: 'text' })
      .pipe(
        map(csvContent => {
          const lines = csvContent.split('\n');
          const citations: Quote[] = [];
          lines.forEach(line => {
            const [quote, movie, character, actor, difficulty, image] = line.split(',');
            const citation = new Quote(quote, movie, character, actor, difficulty, image);
            citations.push(citation);
          });
          return citations;
        })
      );
  }
}
