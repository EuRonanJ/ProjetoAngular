import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

type CatApiResponse = {
  url: string;
  breeds: {
     name: string, 
     temperament: string, 
     life_span: string,
     origin: string,
     country_code: string,
     wikipedia_url: string,
     }[];
}

@Component({
  selector: 'app-api-cat',
  imports: [],
  templateUrl: './api-cat.component.html',
  styleUrl: './api-cat.component.css'
})

export class ApiCatComponent {
  catImage: string | null = null;
  catBreedName: string = 'Raça desconhecida';
  catTemperament: string = '';
  catLifeSpan: string = '';
  catOrigin: string = '';
  catCountry: string = '';
  catWiki: string = '';

  private apiUrl = 'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';
  private apiKey = 'live_NpWuKHWLt4tCE47rKquUlGdeZz0f1B96A7HJiB0YLIYUcbviDw9zbt7dpauSy6JH'; //Sem o código da API Nome, Descrição e Expectativa de vida serão sempre desconhecidas 

  constructor(private http: HttpClient) { }

  getRandomCat(): void {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    this.http.get<CatApiResponse[]>(this.apiUrl, { headers }).subscribe(cats => {
      const catData = cats[0];

      this.catImage = catData.url;
      this.catBreedName = catData.breeds?.[0]?.name || 'Raça desconhecida';
      this.catTemperament = catData.breeds?.[0]?.temperament || 'Descrição não disponível';
      this.catLifeSpan = catData.breeds?.[0]?.life_span || 'Estimativa de vida não disponível';
      this.catOrigin = catData.breeds?.[0]?.origin || 'Origem não disponível';
      this.catCountry = catData.breeds?.[0]?.country_code || 'País não disponível';
      this.catWiki = catData.breeds?.[0]?.wikipedia_url || 'Link da Wikipédia não disponível';
    });
  }
}
