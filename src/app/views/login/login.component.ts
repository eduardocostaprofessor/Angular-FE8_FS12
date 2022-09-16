import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //  nossas variáveis e métodos
  userModel = new User()

  receberDados() {
    console.log(this.userModel);
    
  }

  teste() {
    this.userModel.email = "Coca Cola"
  }

}
