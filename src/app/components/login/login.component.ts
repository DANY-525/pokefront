import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí



import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginService } from '../../service/login.service';
import { credentials } from '../../entities/credentials';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  responseData: string = '';


  constructor(private loginService: LoginService) { }
  login() {

    const authenticationRequest: credentials = {
      email: this.username,
      password:this.password
    };
  
  this.loginService.login(authenticationRequest).subscribe(
    response => {
       if(response.token){
            this.responseData = response.token;
       }else{
        this.responseData= "error "+response;
       }
    },
    error => {
      this.responseData= "Datos malos "+error.error;
      console.error('Error during login:', error);
      // Handle error (show message to user, etc.)
    }
  );
}
  


}