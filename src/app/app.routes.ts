import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { AuthGuard } from './guards/AuthGuards';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'home',component:HomeComponent,canActivate: [AuthGuard]},
    {path:'details',component:PokemonDetailsComponent,canActivate: [AuthGuard]},

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutes { }
  
