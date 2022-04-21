import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudService } from '../service/stud.service';

@Component({
  selector: 'app-add-stud',
  templateUrl: './add-stud.component.html',
  styleUrls: ['./add-stud.component.css']
})
export class AddStudComponent implements OnInit {
  id: number = 0;
  studform: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private StudService: StudService
    
  ) {
    //**************Create Reactive Form with validation********************* */
    this.studform = this.fb.group({
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required,Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email, 
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      gender: ['', [Validators.required]],
      dob: [null, [Validators.required]],
      id: [0, [Validators.required]],
    });

  }

  ngOnInit(): void {
    //**************Get Stud ID On Edit********************* */
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (params['id'] != null) {
        this.studform.get('Id')?.setValue(params['id']);
        const data = this.StudService.getStudsByID(this.id);
        if (data) {
          this.studform.setValue(data);
        }
      }
    });
  }

  save() {
    if (this.studform.invalid) // true if any form validation fail
      return
    if (this.studform.get('id')?.value === 0) {
      // on Create New Stud
      this.StudService.addStud(this.studform.value);
    } else {
      // on Update Stud info
      this.StudService.updateStud(this.studform.value);
    }

    this.studform.reset();
    //Redirecting to Stud List page after save or update
    this.router.navigate(['/add-stud']);
  }

}
