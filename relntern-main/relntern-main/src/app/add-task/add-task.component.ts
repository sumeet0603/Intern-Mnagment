import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { InternService } from '../intern.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  registerForm: any;
  internId:any;
  constructor(private internService: InternService, private router: Router,
    private formBuilder: FormBuilder,private routes : ActivatedRoute)
      {
        this.registerForm = this.formBuilder.group({
          task: ['', Validators.required],
          description: ['', Validators.required],
          start: ['', Validators.required],
          end: ['', Validators.required]
        });
      }

  register(registerForm: NgForm) {
    if (registerForm.valid) {
      this.internService.registerTask(registerForm.value,this.internId).subscribe(
        (resp: any) => {
          console.log(resp);
          registerForm.resetForm();
          this.router.navigate(['/list']);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
    else {
      // Handle form validation errors
      console.log('Form is invalid');
      alert("Invalid Input");
    }
  }

  ngOnInit(): void {
    this.internId = this.routes.snapshot.paramMap.get("internId");
      console.log(this.internId)
    this.roledesc=localStorage.getItem("role");
    this.validaterole(this.roledesc);
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

  navigateTo():void{
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
  cancel() {
    this.router.navigate(['/list']);
  }
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
