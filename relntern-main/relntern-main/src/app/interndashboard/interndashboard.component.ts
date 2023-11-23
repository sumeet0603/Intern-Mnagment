import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interndashboard',
  templateUrl: './interndashboard.component.html',
  styleUrls: ['./interndashboard.component.css']
})
export class InterndashboardComponent {
  constructor(private router: Router) { 

  }
  logout(){
    localStorage.removeItem('role')
    this.router.navigate([``]);
}
  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }
}
