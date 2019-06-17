import { FormControl, AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export class CustomValidator {

  // validate MM/DD/YYYY
  static date(c: AbstractControl): { [key: string]: boolean } {
    let value = c.value;
    if (value && typeof value === "string") {
      let match = value.match(/^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/);
      if (!match) {
        return {'dateInvalid': true};
      }
      let day = parseInt(match.input.split("/")[0]);
      let month = parseInt(match.input.split("/")[1]);
      let year = parseInt(match.input.split("/")[2]);
      if (month < 1 || month > 12) { // check month range
            return { 'dateInvalid': true };
        }
        if (day < 1 || day > 31) {
            return { 'dateInvalid': true };
        }
        if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
            return { 'dateInvalid': true };
        }
        if (month == 2) { // check for february 29th
            var isleap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
            if (day > 29 || (day === 29 && !isleap)) {
                return { 'dateInvalid': true };
            }
        }
      let date = new Date('${match[3]}-${match[1]}-${match[2]}');
    }
    return null;
  }

  static isNumeric(c: AbstractControl): { [key: string]: boolean } {
    let value = c.value;
    if (value && typeof value === "string") {
      let match = value.match(/^\d+(\,\d{2})?$/);
      if (!match) {
        return {'importoInvalid': true};
      }
    }
    return null;
  }

  static dateRangeValidator(c: AbstractControl): {[key: string]: any} {
    const startDateC = c.get('data_start').value;
    const endDateC = c.get('data_end').value;
    const dataEsecuzioneC = c.get('data_esecuzione').value;
    const invalidObj = { 'dateRange': true };
    let startDateArray = startDateC.split("/");
    let endDateArray = endDateC.split("/");
    if (dataEsecuzioneC != null){
      let dataEsecuzioneArray = dataEsecuzioneC.split("/");
      let startDate = new Date(startDateArray[2]+"-"+startDateArray[1]+"-"+startDateArray[0]);
      let endDate = new Date(endDateArray[2]+"-"+endDateArray[1]+"-"+endDateArray[0]);
      let dataEsecuzione = new Date(dataEsecuzioneArray[2]+"-"+dataEsecuzioneArray[1]+"-"+dataEsecuzioneArray[0]);
      if (dataEsecuzione < startDate || dataEsecuzione > endDate){
        return invalidObj;
      }
    }
    return null;
}


}
