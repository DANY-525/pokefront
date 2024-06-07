import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationServiceService } from '../../service/authentication-service.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  activeTab: string = 'home';
  constructor(private router:Router,private route: ActivatedRoute,private auth:AuthenticationServiceService) {

  }

  setActiveTab(tab: string): void {
    if(tab == "close"){
        this.auth.clearToken();
       this.router.navigate(['/']);
    }
    if(tab == "home"){
       this.router.navigate(['/home']);
    }
    if(tab == "favorites"){
      this.router.navigate(['/hearts']);
   }
    this.activeTab = tab;
  }


}
