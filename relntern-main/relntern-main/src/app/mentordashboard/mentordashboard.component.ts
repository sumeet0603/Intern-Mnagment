import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mentordashboard',
  templateUrl: './mentordashboard.component.html',
  styleUrls: ['./mentordashboard.component.css']
})
export class MentordashboardComponent {
  constructor(private router: Router) { }

  logout(){
    localStorage.removeItem('role')
    this.router.navigate([``]);
}
  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
