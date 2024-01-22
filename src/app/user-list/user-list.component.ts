import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  user! : User[];
  constructor(private _userservice : UserService){}
  ngOnInit(){
    this._userservice.getUsers().subscribe((user) => this.user = user),
    (err : any) => console.log(err); 
  }

}
