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
  showToast: boolean = false;
  successMessage: string = 'Data Saved Successfully';
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _userservice: UserService) {

  }
  ngOnInit() {
    this.route.params.subscribe({
      next: (response) => {
        console.log(response['id']);
        let id = response['id'];
        if (id == "form") return;
        this._userservice.getUser(id).subscribe({
          next: (response: any) => {
            this.form.patchValue(response);
            this.isEdit = true;
          },
          error: (err: any) => console.log(err)
        });
      },
      error: (err) => {
        console.log(err);
      }
    })
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  showSuccessToast() {
    this.showToast = true;

    // You can set a timeout to automatically hide the toast after a certain duration
    setTimeout(() => {
      this.showToast = false;
    }, 2000); // 5000 milliseconds (adjust as needed)
    setTimeout(() => {
      this.router.navigate(['userlist']);
    }, 2000); 
    
  }
  onSubmit() {
    if (this.isEdit) {
      this.route.paramMap.subscribe(paramap => {
        const id = paramap.get('id')!;
        this._userservice.updateUser(id, this.form.value).subscribe({
          next: (response) => {
            console.log(response);
            this.showSuccessToast();
            this.form.reset();
          },
          error: (err) => {
            console.log(err);
          }
        })
      });

    }
    else {
      this._userservice.addUser(this.form.value).subscribe({
        next: (response: any) => {
          console.log(response);
          this.showSuccessToast();
          this.form.reset();
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }
  }
}
