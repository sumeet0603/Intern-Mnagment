import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InternService } from '../intern.service';
import { MatDialog } from '@angular/material/dialog';
import { InternprofileComponent } from '../internprofile/internprofile.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  constructor(private router: Router, private internService: InternService, private matDialog: MatDialog) { }
  internDetails: any;
  filteredInterns: any;
  selectedQuarter: string = 'all';
  selectedYear: string = 'all';
  selectedMentor: string = 'all';
  mentors: any; // Assuming you have a list of mentors to populate the dropdown

  ngOnInit(): void {
    this.getInterns();
    // Assuming you have a function to fetch the list of mentors
    this.getMentors();
    this.roledesc=localStorage.getItem("role");
    this.validaterole(this.roledesc);
  }

  getInterns(): void {
    this.internService.getInterns().subscribe(
      (resp) => {
        console.log(resp);
        this.internDetails = resp;
        this.filterInterns();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // Filter interns based on selected quarter, year, and mentor name
  filterInterns(): void {
    this.filteredInterns = this.internDetails.filter((intern: any) => {
      const quarterMatch = this.selectedQuarter === 'all' || intern.quarter === this.selectedQuarter;
      const yearMatch = this.selectedYear === 'all' || intern.endDate.startsWith(this.selectedYear);
      const mentorMatch = this.selectedMentor === 'all' || intern.mentor === this.selectedMentor;
      return quarterMatch && yearMatch && mentorMatch;
    });
  }

  // Event listeners for the quarter, year, and mentor filter dropdowns
  onQuarterFilterChange(): void {
    this.filterInterns();
  }

  onYearFilterChange(): void {
    this.filterInterns();
  }

  onMentorFilterChange(): void {
    this.filterInterns();
  }

  // Fetch the list of mentors
  getMentors(): void {
    // Assuming you have a function to fetch the list of mentors from your backend
    this.internService.getMentor().subscribe(
      (resp) => {
        console.log(resp);
        this.mentors = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  isAdmin: boolean=false;
  isMentor: boolean=false;
  isintern: boolean=false;
  roledesc: any;
  validaterole(roledesc:any){
    if(roledesc=="admin"){
      this.isAdmin=true;
    }
    else if(roledesc=="mentor"){
      this.isMentor=true
    }
    else{
      this.isintern=true;
    }
    }
    navigateTo():void{//this is to navigate to particular dashboard according to their role 
      if(this.isAdmin){
      this.router.navigate([`dashboard`]);
      }
      else if(this.isMentor){
        this.router.navigate([`mentordashboard`]);
      }
      else if(this.isintern){
        this.router.navigate([`interndashboard`]);
      }
      else{
      }
    }
    logout(){
      localStorage.removeItem('role')
      this.router.navigate([``]);
}

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  openProfile(intern: any): void {
    this.matDialog.open(InternprofileComponent, {
      width: '600px',
      height: '600px',
      data: intern,
    });
  }
}
