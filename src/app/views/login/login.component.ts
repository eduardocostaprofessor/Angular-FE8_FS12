import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor( private userService: UserService ) { }

  ngOnInit(): void {
  }

  //  nossas variáveis e métodos
  userModel = new User()
  mensagem = ""

  receberDados() {
    // console.log(this.userModel);

    //disparando/send
    this.userService.logarUsuario(this.userModel).subscribe({
      next: (response) => {//sucesso

        console.log("Deu certo");
        console.log(response);
        this.mensagem = "Logado com Sucesso";
        
      },
      error: (err) => {//erro

        console.log("Deu RUIMMMM");
        console.log(err);
        this.mensagem = err.error;
      },
    })
    
  }

  teste() {
    this.userModel.email = "Coca Cola"
  }

}
