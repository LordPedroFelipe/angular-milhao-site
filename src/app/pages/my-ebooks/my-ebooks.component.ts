import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

export interface Ebook {
  id: string;
  title: string;
  category: string;
  coverUrl: string;
  isVip?: boolean;
  buyLink?: string; // pode ser rota interna (/comprar) ou URL externa
}
@Component({
  standalone: true,
  selector: 'app-my-ebooks',
  imports: [NgFor, NgIf, RouterLink, MatCardModule, MatButtonModule, NgOptimizedImage],
  templateUrl: './my-ebooks.component.html',
  styleUrls: ['./my-ebooks.component.scss']
})
export class MyEbooksComponent {
  @Input() ebooks: Ebook[] = [
    { id: '1', title: 'Como ganhar dinheiro com seu Facebook', category: 'Finanças Pessoais', coverUrl: 'assets/ebook-01.webp', isVip: true, buyLink: '/comprar' },
    { id: '2', title: 'Confiança e pensamento positivo', category: 'Família e Saúde', coverUrl: 'assets/ebook-02.webp', isVip: true, buyLink: '/comprar' },
    { id: '3', title: 'Como treinar seu gato', category: 'Família e Saúde', coverUrl: 'assets/ebook-03.jpg', isVip: true, buyLink: '/comprar' },
    { id: '4', title: 'Como treinar seu cachorro', category: 'Desenvolvimento Pessoal', coverUrl: 'assets/ebook-04.jpg', isVip: true, buyLink: '/comprar' },
    { id: '5', title: 'Metas: como impulsionar seus resultados', category: 'Produtividade', coverUrl: 'assets/ebook-05.jpg', isVip: true, buyLink: '/comprar' },
    { id: '6', title: 'Como ganhar dinheiro na internet', category: 'Finanças Pessoais', coverUrl: 'assets/ebook-06.jpg', isVip: true, buyLink: '/comprar' },
    { id: '7', title: 'Ciência para ficar rico', category: 'Finanças Pessoais', coverUrl: 'assets/ebook-07.jpg', isVip: true, buyLink: '/comprar' },
    { id: '8', title: 'Mindset de crescimento', category: 'Desenvolvimento Pessoal', coverUrl: 'assets/ebook-08.jpg', isVip: true, buyLink: '/comprar' },
  ];

  trackById = (_: number, e: Ebook) => e.id;
}