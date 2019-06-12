import { Injectable } from '@angular/core';
import { PREPARE_RESPONSE,VERIFY_RESPONSE_OK, EXECUTE_RESPONSE } from './mock-responses';

@Injectable({
  providedIn: 'root'
})
export class BonificoService {

  constructor() { }

  prepare(){
	return PREPARE_RESPONSE; 
  }

  verify(params:any){
	return VERIFY_RESPONSE_OK; 
  }

  execute(params:any){
	return EXECUTE_RESPONSE; 
  }
}
