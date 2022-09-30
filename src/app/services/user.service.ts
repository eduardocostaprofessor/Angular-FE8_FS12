import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';//import do http client
import { User } from '../models/user';//import do model User
import { Observable } from 'rxjs'; //requisições assíncronas

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    //injeção de dependência do módulo HttpClient
    private httpClient: HttpClient
  ) { }


    urlLogin = "http://localhost:3000/signin";//rota

  // post de login - Insomnia
  logarUsuario(usuario: User): Observable<any> {

    return this.httpClient.post( this.urlLogin, JSON.stringify(usuario) , {
      headers: new HttpHeaders( {"Content-Type": "application/json"} ),
      observe: 'response'
    } )
  }
}
