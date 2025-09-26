
import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

export interface Title {
  id: string;
  name: string;
  prize: string;
  edition: string;
  date: string;
  certificateUrl?: string;
}

@Component({
  standalone: true,
  selector: 'app-my-titles',
  imports: [NgFor, NgIf, MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './my-titles.component.html',
  styleUrls: ['./my-titles.component.scss']
})
export class MyTitlesComponent {
  titles: Title[] = [
    {
      id: 't1',
      name: 'Título de Capitalização',
      prize: 'R$ 1.000,00',
      edition: 'Edição 12/2024',
      date: '2024-06-05',
      certificateUrl: 'assets/ebook-01.webp'
    },
    {
      id: 't2',
      name: 'Título Filantropia Premiável',
      prize: 'R$ 10.000,00',
      edition: 'Edição 11/2024',
      date: '2024-05-29',
      certificateUrl: 'assets/ebook-02.webp'
    },
    {
      id: 't3',
      name: 'Título Especial Milhão',
      prize: 'R$ 1.000.000,00',
      edition: 'Edição 10/2024',
      date: '2024-04-15',
      certificateUrl: 'assets/ebook-03.png'
    },
    {
      id: 't4',
      name: 'Título Sorte Instantânea',
      prize: 'R$ 500,00',
      edition: 'Edição 09/2024',
      date: '2024-03-10',
      certificateUrl: 'assets/ebook-04.png'
    },
    {
      id: 't5',
      name: 'Título Prêmio Família',
      prize: 'R$ 2.500,00',
      edition: 'Edição 08/2024',
      date: '2024-02-20',
      certificateUrl: 'assets/ebook-05.png'
    },
    {
      id: 't6',
      name: 'Título Mega Sorte',
      prize: 'R$ 100.000,00',
      edition: 'Edição 07/2024',
      date: '2024-01-30',
      certificateUrl: 'assets/ebook-06.png'
    },
    {
      id: 't7',
      name: 'Título Filantropia Ouro',
      prize: 'R$ 5.000,00',
      edition: 'Edição 06/2024',
      date: '2023-12-15',
      certificateUrl: 'assets/ebook-07.png'
    },
    {
      id: 't8',
      name: 'Título Prêmio Rápido',
      prize: 'R$ 750,00',
      edition: 'Edição 05/2024',
      date: '2023-11-10',
      certificateUrl: 'assets/ebook-08.png'
    }
  ];

  trackById = (_: number, t: Title) => t.id;
}