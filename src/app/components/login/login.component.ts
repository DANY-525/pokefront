import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí


import { LoginService } from '../../service/login.service';
import { credentials } from '../../entities/credentials';

import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  responseData: string = '';


  constructor(private loginService: LoginService,private router:Router,private route: ActivatedRoute) { }
  login() {

    const authenticationRequest: credentials = {
      email: this.username,
      password:this.password
    };
  
  this.loginService.login(authenticationRequest).subscribe(
    response => {
       if(response.token){
            this.responseData = response.token;
            this.router.navigate(['/home']);
       }else{
        this.responseData= "error "+response;
       }
    },
    error => {
      this.responseData= "Please review :"+error.error;
      console.error('Error during login:', error);
      // Handle error (show message to user, etc.)
    }
  );
}
  


}