import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-list/user.service';

@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.css']
})
export class UserUpsertComponent {
  form!: FormGroup;
  isEdit = false;
  constructor(
    private fb: FormBuilder, 
    private route : ActivatedRoute, 
    private router: Router,
    private _userservice : UserService){

  }
  ngOnInit(){
    this.form = this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      address:['',Validators.required],
      phone:['', [Validators.required, Validators.pattern('^\\d{10}$')]],
      email:['', [Validators.required, Validators.email]]
    });
  }
  onSubmit(){
    this._userservice.addUser(this.form.value).subscribe({
      next:(response :any)=>{
        console.log(response);
      },
      error:(err:any)=>{
        console.log(err);
      }
    });
  }

}
