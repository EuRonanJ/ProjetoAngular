import { Component } from '@angular/core';
import { ConsultaApiComponent } from './consulta-api/consulta-api.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [ConsultaApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private titleService: Title) {}

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle('Meu Novo Título');
  }
}
