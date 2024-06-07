import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private endpointLogin = 'http://localhost:8080/auth/authenticate';
  private endpointRegister = 'http://localhost:8080/auth/register';
  private endpointPokemons = "https://pokeapi.co/api/v2/pokemon";
  private addFavoritesUrl = "http://localhost:8080/pokemon";

  constructor(public http: HttpClient) { }

  login(credentials:any): Observable<any> {
    return this.http.post<any>(`${this.endpointLogin}`, credentials);
  }
  register(register:any): Observable<any> {
    return this.http.post<any>(`${this.endpointRegister}`, register);
  }
  getPokemon(): Observable<any> {
    return this.http.get<any>(`${this.endpointPokemons}`);
  }
  getPokemonDetails(url:string): Observable<any> {
    return this.http.get<any>(url);
  }
  addFavorites(pokemon:any): Observable<any> {
    const token = localStorage.getItem('token');
     // Verifica si hay un token disponible

      // Configurando la cabecera de la solicitud con el token Bearer
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      // Realizando la solicitud POST con la cabecera configurada
      
      return this.http.post<any>(`${this.addFavoritesUrl}`, pokemon,{ headers: headers });
  
    }

   /* getFavorites(): Observable<any> {
      const token = localStorage.getItem('token');
       // Verifica si hay un token disponible
  
        // Configurando la cabecera de la solicitud con el token Bearer
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
  
        // Realizando la solicitud POST con la cabecera configurada
        
        return this.http.get<any>(`${this.addFavoritesUrl}`,{ headers: headers });
    
      }*/


  
}
