import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Make sure RouterModule is imported
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, CommonModule], // Add RouterModule to imports here
})
export class AppComponent {
  title = 'app';
}
