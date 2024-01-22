import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  showToast: boolean = false;
  successMessage: string = 'Operation successful!';
  user! : User[];
  constructor(private _userservice : UserService){}
  ngOnInit(){
    this._userservice.getUsers().subscribe((user) => this.user = user),
    (err : any) => console.log(err); 
  }
  showSuccessToast() {
    this.showToast = true;

    // You can set a timeout to automatically hide the toast after a certain duration
    setTimeout(() => {
      this.showToast = false;
    }, 5000); // 5000 milliseconds (adjust as needed)
  }
  deleteUser(id:number){
    this._userservice.deleteUser(id).subscribe({
      next: (response: any) => {
        console.log(response);
        this._userservice.getUsers().subscribe((user) => this.user = user);
        this.showSuccessToast();
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

}
