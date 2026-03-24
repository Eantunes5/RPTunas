import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private router: Router) {}

  register() {
    console.log('Usuário cadastrado');

    this.router.navigate(['/']);
  }

  goToLogin() {
    this.router.navigate(['/']);
  }
}