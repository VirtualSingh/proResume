import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(event:any){
    console.log(event)
  }
}
