import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MyEbooksComponent } from '../my-ebooks/my-ebooks.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule, RouterLink, MyEbooksComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
}