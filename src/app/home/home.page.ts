import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dadosFrete: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.dadosFrete = this.formBuilder.group({
      pesoSaida: ['', Validators.required],
      pesoChegada: ['', Validators.required],
      diferenca: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('Formulário enviado:', this.dadosFrete.value);
    // Processar os valores do formulário aqui
  }

}
