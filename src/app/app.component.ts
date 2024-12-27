import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: '<router-outlet></router-outlet>', // Enables dynamic routing
  styleUrls: ['./app.component.css'], // Optional, already exists in your project
})
export class AppComponent {}
