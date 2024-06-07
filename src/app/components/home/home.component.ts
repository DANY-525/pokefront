import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationServiceService } from '../../service/authentication-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule 
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
  //totalPages: number;
  pokemonsList:any=[];
  displayedPokemons: any[] = [];
  currentPage = 1;
  pageSize = 10; activeTab: string = 'home';

 
  constructor(private pokemones: LoginService,private router:Router,private route: ActivatedRoute,private auth:AuthenticationServiceService) {
    this.getPokemones();
  }
   detailPage(page:string){
    this.router.navigate(['/details']);
   }
  setActiveTab(tab: string): void {
    if(tab == "close"){
        this.auth.clearToken();
       this.router.navigate(['/']);
    }
    this.activeTab = tab;
  }
 getPokemones(){

        this.pokemones.getPokemon().subscribe(
          response => {
            this.displayedPokemons = response.results;
           // console.log(response.results)
          },
          error => {
            console.error('Error during login:', error);
            // Handle error (show message to user, etc.)
          }
        );

   }
    getPokemonImageUrl(url: string): string {
    // La PokéAPI proporciona la imagen del Pokémon en un formato específico.
    // Puedes obtener la URL de la imagen concatenando la URL base con el número de Pokémon.
      const pokemonId = this.getPokemonIdFromUrl(url);
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
    }

    getPokemonIdFromUrl(url: string): number {
    // Extrae el ID del Pokémon de la URL.
    const segments = url.split('/');
    return parseInt(segments[segments.length - 2], 10);
    }

    previousPage(): void {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.updateDisplayedPokemons();
      }
    }
  
    nextPage(): void {
      if (this.currentPage * this.pageSize < this.pokemonsList.length) {
        this.currentPage++;
        this.updateDisplayedPokemons();
      }
    }
  
    updateDisplayedPokemons(): void {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.displayedPokemons = this.pokemonsList.slice(startIndex, endIndex);
    }
}
