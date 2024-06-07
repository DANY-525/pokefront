import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { LoginService } from '../../service/login.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hearts',
  standalone: true,
  imports: [NavBarComponent,CommonModule],
  templateUrl: './hearts.component.html',
  styleUrl: './hearts.component.css'
})
export class HeartsComponent {
  displayedPokemons =   [];
  heartActive: boolean = false;
  constructor(private pokemones: LoginService){
    this.getFavoritePokemons();
  }

  toggleHeart(id:any) {
    /*this.pokemones.addFavorites(id).subscribe(
      response => {
            console.log(response);
      },
      error => {

        this.auth.clearToken();
        this.router.navigate(['/']);
        console.error('Token vencio:', error);
        // Handle error (show message to user, etc.)
      }
    );*/
    this.heartActive = !this.heartActive;
  }

    getFavoritePokemons(){
        this.pokemones.getFavorites().subscribe(res =>{
          this.displayedPokemons = JSON.parse(JSON.stringify(res));
       },error =>{
            console.log(error);
        });

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


}
