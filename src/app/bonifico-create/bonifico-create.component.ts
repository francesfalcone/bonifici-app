import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BonificoService } from '../bonifico.service';
import { Bonifico } from '../bonifico';
import {Router} from "@angular/router";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CustomValidator } from '../customvalidators';


@Component({
  selector: 'app-bonifico-create',
  templateUrl: './bonifico-create.component.html',
  styleUrls: ['./bonifico-create.component.css']
})
export class BonificoCreateComponent implements OnInit {

  bonificoForm: FormGroup;	
  submitted = false;


  constructor(private bonificoService: BonificoService, 
  	private spinnerService: Ng4LoadingSpinnerService, private router: Router,
  	 private formBuilder: FormBuilder) { 
  	this.bonificoForm = this.formBuilder.group({
            nome: ['', Validators.required],
            cognome: ['', Validators.required],
            data_esecuzione: [null, [Validators.required, CustomValidator.date]],
            importo: ['', [Validators.required, CustomValidator.isNumeric]],
            iban: ['', Validators.required],
            data_start: ['', Validators.required],
            data_end: ['', Validators.required]
        }, { validator: CustomValidator.dateRangeValidator });
  }

  ngOnInit() {
  	let data = this.bonificoService.prepare();
  	let dateTemp = data.data.dataLimite.split('/');
  	let date = new Date(dateTemp[2]+"-"+dateTemp[1]+"-"+dateTemp[0]);
	  this.bonificoForm.controls['data_start'].setValue(data.data.oggi);
	  this.bonificoForm.controls['data_end'].setValue(data.data.dataLimite);
  }

  onSubmit(){
  	this.submitted = true;
  	if (this.bonificoForm.invalid) {
        return;
    }
    this.spinnerService.show();
    //simulo un delay per la chiamata al servizio di backend(mockato)
    setTimeout(this.callVerify, 5000, this.bonificoForm, this.spinnerService, this.router, this.bonificoService);
  }

  callVerify(bonificoForm,spinnerService,router,bonificoService) {
    let resultVerify = bonificoService.verify(bonificoForm.controls);
    if (resultVerify.result.outcome == "SUCCESS"){
      spinnerService.hide();
      router.navigate(['/bonifico-detail', 
        {
          nome: bonificoForm.controls['nome'].value, 
          cognome: bonificoForm.controls['cognome'].value,
          importo:  bonificoForm.controls['importo'].value,
          data_esecuzione : bonificoForm.controls['data_esecuzione'].value,
          iban: bonificoForm.controls['iban'].value
        }]);
    }else{
      spinnerService.hide();
      router.navigate(['/thankyou', {message: "Bonifico non possibile. Errore!"}]);
    }
  }

  get nome() { return this.bonificoForm.get('nome'); }
  get cognome() { return this.bonificoForm.get('cognome'); }
  get data_esecuzione() { return this.bonificoForm.get('data_esecuzione'); }
  get importo() { return this.bonificoForm.get('importo'); }
  get iban() { return this.bonificoForm.get('iban'); }


}
