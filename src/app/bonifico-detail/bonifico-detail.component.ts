import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bonifico } from '../bonifico';
import { BonificoService } from '../bonifico.service';
import {Router} from "@angular/router";
import { Location } from '@angular/common';


@Component({
  selector: 'app-bonifico-detail',
  templateUrl: './bonifico-detail.component.html',
  styleUrls: ['./bonifico-detail.component.css']
})
export class BonificoDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bonificoService: BonificoService,
  	private router: Router, private location: Location) { }

  private sub: any;
  model = new Bonifico();

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
       this.model.nome = params['nome'];
       this.model.cognome = params['cognome'];
       this.model.data_esecuzione = params['data_esecuzione'];
       this.model.importo = params['importo'];
       this.model.iban = params['iban'];
    });
  }

   ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit(){
  	let data = this.bonificoService.execute(this.model);
  	let messages = data.result.messages;
  	let messageString = ''
  	for(let message of messages){
   		messageString += message["message"] + "\n";
	}
	this.router.navigate(['/thankyou', {message: messageString}]);  	
  }

   goBack() {
    this.location.back();
  }

}
