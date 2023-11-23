import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InternService } from '../intern.service';

import { Router } from '@angular/router';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-update-dialog-body',
  templateUrl: './update-dialog-body.component.html',
  styleUrls: ['./update-dialog-body.component.css']
})
export class UpdateDialogBodyComponent {
  internUpdate: any;
  mentors: any;
  matDialog: any;
  internDetails: any;

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { intern: any }
    , private internService: InternService, private router: Router) {
    this.internUpdate = {
      id: data.intern.id,
      fullname: data.intern.fullname,
      email: data.intern.email,
      mentor: data.intern.mentor,
      mentoremail: data.intern.mentoremail,
      projectname: data.intern.projectname,
      projectstatus: data.intern.projectstatus,
      startDate: data.intern.startDate,
      endDate: data.intern.endDate,
      role: data.intern.role,
      association: data.intern.association,
      gradyear: data.intern.gradyear,
      uniname: data.intern.uniname,
      coursename: data.intern.coursename,
      specialization: data.intern.specialization,
      linkedlink: data.intern.linkedlink,
      quarter: data.intern.quarter,
      reference : data.intern.reference
    };
  }

  updateIntern(): void {
    console.log(this.internUpdate);
    this.internService.updateIntern(this.internUpdate).subscribe(
      (resp) => {
        console.log(resp);
        this.closeDialog();
        this.router.navigate(['/'], {skipLocationChange: true}).then(() => this.router.navigate(['/list']));
      },
      (err) => { console.log(err); }
    );
  }


  getMentors(): void {
    this.internService.getMentor().subscribe(
      (resp) => { // Assuming the response is an array of Mentor objects
        console.log(resp);
        this.mentors = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  deleteIntern(interns: { id: any; }) {
    this.internService.deleteIntern(interns.id).subscribe(
      (resp) => {
        console.log(resp);
        this.internDetails = resp;
      },
      (err) => console.log(err)
    );
  }
  
  moveToInactive(intern: any) {
    this.internService.moveToInactive(intern.id).subscribe(
      () => {
        console.log('Intern moved to inactive interns successfully.');
        this.router.navigate(['inactive']);
  
        // Remove the intern from the internDetails array
        this.internDetails = this.internDetails.filter((item: any) => item.id !== intern.id);
      },
      (error) => {
        console.log('Error moving intern to inactive interns:', error);
      }
    );
  }

  openDialog(intern: any): void {
    this.matDialog.open(DialogBodyComponent, {
      width: '500px',
      height: '140px',
      data: intern
    });
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
