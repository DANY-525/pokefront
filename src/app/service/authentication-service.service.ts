import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  private token: string | null = null;

  constructor() { }

  // Method to set token after successful login
  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  // Method to retrieve token
  getToken(): string | null {
    return this.token || localStorage.getItem('token');
  }

  // Method to clear token after logout
  clearToken(): void {
    this.token = null;
    localStorage.removeItem('token');
    
  }

  // Method to check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken(); // Convert to boolean
  }
}
