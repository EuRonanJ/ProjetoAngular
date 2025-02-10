import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

type DogApiResponse = {
  url: string;
  breeds: { name: string }[];
}

@Component({
  selector: 'app-consulta-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta-api.component.html',
  styleUrls: ['./consulta-api.component.css']
})

export class ConsultaApiComponent {
  dogImage: string | null = null;
  dogBreedName: string = 'Raça desconhecida';

  private apiUrl = 'https://api.thedogapi.com/v1/images/search?has_breeds=true&limit=1';

  constructor(private http: HttpClient) {}

  getRandomDog(): void {
    this.http.get<DogApiResponse[]>(this.apiUrl).subscribe(dogs => {
      if (dogs.length > 0) {
        const dogData = dogs[0];
        this.dogImage = dogData.url;
        this.dogBreedName = dogData.breeds?.[0]?.name || 'Raça desconhecida';
      }
    });
  }
}
