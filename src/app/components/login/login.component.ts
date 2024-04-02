import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Nota: La propiedad se llama styleUrls en lugar de styleUrl
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showErrorMessage: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Aquí iría la lógica para autenticar al usuario, por ahora solo redirigimos
      this.router.navigate(['/catalogo']);
      console.log('Registro exitoso:', this.loginForm.value);
      this.showErrorMessage = false; // Reiniciamos el mensaje de error
    } else {
      this.showErrorMessage = true; // Mostramos el mensaje de error
    }
  }
}