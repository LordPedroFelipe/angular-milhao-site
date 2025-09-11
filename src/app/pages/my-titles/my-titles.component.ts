import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-my-titles',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './my-titles.component.html',
  styleUrls: ['./my-titles.component.scss']
})
export class MyTitlesComponent {
}