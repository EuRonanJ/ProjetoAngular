import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

type DogApiResponse = {
  url: string;
  breeds: {
     name: string, 
     temperament: string, 
     life_span: string }[];
}

@Component({
  selector: 'app-api-dog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-dog.component.html',
  styleUrls: ['./api-dog.component.css']
})

export class ApiDogComponent {
  dogImage: string | null = null;
  dogBreedName: string = 'Raça desconhecida';
  dogTemperament: string = '';
  dogLifeSpan: string = '';

  private apiUrl = 'https://api.thedogapi.com/v1/images/search?has_breeds=true&limit=1';
  private apiKey = 'live_2ATUNr2MIzw5kvx5UCA22sNGn0vvF7htqwuxC9bQQyrvGLb0e1a3fF1siA7DItMi'; //Sem o código da API Nome, Descrição e Expectativa de vida serão sempre desconhecidas 

  constructor(private http: HttpClient) { }

  getRandomDog(): void {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    this.http.get<DogApiResponse[]>(this.apiUrl, { headers }).subscribe(dogs => {
      const dogData = dogs[0];

      this.dogImage = dogData.url;
      this.dogBreedName = dogData.breeds?.[0]?.name || 'Raça desconhecida';
      this.dogTemperament = dogData.breeds?.[0]?.temperament || 'Descrição não disponível';
      this.dogLifeSpan = dogData.breeds?.[0]?.life_span || 'Estimativa de vida não disponível';
    });
  }
}
