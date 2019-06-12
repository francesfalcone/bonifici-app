export class Bonifico {

  nome: string;
  cognome: string;
  importo: string;
  iban: string;
  data_esecuzione: string;
  data_start: string;
  data_end: string;

  constructor(values: Object = {}) {
      Object.assign(this, values);
  }

}
