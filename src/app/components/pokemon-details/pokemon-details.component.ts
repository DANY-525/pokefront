import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [    NavBarComponent],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent {

  name = "";
  url = "";
  pokemonDetails: any;
  constructor(private route: ActivatedRoute,private pokemones: LoginService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const pok = params;

        this.name = pok['name']
        this.url = pok['url'];
   
      this.getDetail();
    });

  }

  

  getDetail(){
    this.pokemones.getPokemonDetails(this.url).subscribe(
    response => {
      this.pokemonDetails = response;
      console.log(this.pokemonDetails)
    });
  }


}
