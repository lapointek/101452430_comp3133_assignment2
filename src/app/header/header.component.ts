import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Ensure correct import
import { Router } from '@angular/router';

@Component({
  selector: 'app-header', // Update with the correct component selector
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.clearToken();
    this.router.navigate(['/login']);
  }
}
