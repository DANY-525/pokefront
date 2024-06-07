import { Component } from '@angular/core';
import {register} from '../../entities/register';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from '../../service/authentication-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  phonenumber: number=0;
  email: string = '';
  responseData: string = '';

  constructor(private registerService: LoginService,private router:Router,private route: ActivatedRoute,private auth:AuthenticationServiceService) { }
  register() {
    const authenticationRequest: register = {
      name: this.username,
      password:this.password,
      phonenumber:this.phonenumber,
      email:this.email
    };

    this.registerService.register(authenticationRequest).subscribe(
      response => {
         if(response.token){
              this.responseData = response.token;
              this.auth.setToken(response.token)
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
