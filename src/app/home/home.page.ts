import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartaFrete } from '../model/carta-frete.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  diferencaCalculada: number = 0;

  dadosFrete: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.dadosFrete = this.formBuilder.group({
      pesoSaida: [0],
      pesoChegada: [0],
      diferenca: [0],
      tolerancia: [0],
      toleranciaKg: [0],
      valorMercadoria: [0],
      quebraTotal: [false],
      quebraKg: [0],
      valorQuebra: [0],
      valorFreteTonelada: [0],
      totalFrete: [0],
      seguro: [0],
      adiantamento: [0],
      inss: [0],
      irrf: [0],
      sestSenat: [0],
      taxaAdm: [0],
      outrosDescontos: [0],
      outrosAcrescimos: [0],
      totalSaldo: [0]
    });
  }

  onSubmit() {
    console.log('Formulário enviado:', this.dadosFrete.value);
    // Processar os valores do formulário aqui
  }

}
