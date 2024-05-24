

export interface CartaFrete {

    pesoSaida: number;
    pesoChegada: number;
    diferenca: number;
    tolerancia: number;
    toleranciaKg: number;
    valorMercadoria: number;
    quebraTotal: boolean,
    quebraKg: number;
    valorQuebra: number;
    valorFreteTonelada: number;
    totalFrete: number;
    seguro: number;
    adiantamento: number;
    inss: number;
    irrf: number;
    sestSenat: number;
    taxaAdm: number;
    outrosDescontos: number;
    outrosAcrescimos: number;
    totalSaldo: number;

}