import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-my-ebooks',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './my-ebooks.component.html',
  styleUrls: ['./my-ebooks.component.scss']
})
export class MyEbooksComponent {
}