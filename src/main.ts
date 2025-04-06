import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Import the components you want to use in routing
import { LoginComponent } from './app/login/login.component';
import { SignupComponent } from './app/signup/signup.component';
import { EmployeeComponent } from './app/employee/employee.component';

// Define routes for your app
const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route to Login
  { path: 'signup', component: SignupComponent }, // Route to Signup
  { path: 'employee', component: EmployeeComponent }, // Route to Employee
];

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: RouterModule,
      useValue: RouterModule.forRoot(routes), // Set up routing with the defined routes
    },
  ],
}).catch((err) => console.error(err));
