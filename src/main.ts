import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes
import { CommonModule } from '@angular/common'; // Import CommonModule for directives like ngIf, ngFor

// Define the HomeComponent route for the application
import { HomeComponent } from './app/home/home.component';

// Define routes
const routes: Routes = [{ path: '', component: HomeComponent }];

// Bootstrapping the app with the RouterModule
bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: RouterModule,
      useValue: RouterModule.forRoot(routes), // Configure RouterModule with the routes
    },
  ],
}).catch((err) => console.error(err));
