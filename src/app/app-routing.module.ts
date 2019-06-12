import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BonificoCreateComponent } from './bonifico-create/bonifico-create.component';
import { BonificoDetailComponent } from './bonifico-detail/bonifico-detail.component';
import { ThankyouComponent } from './thankyou/thankyou.component';


const routes: Routes = [
  { path: '', component: BonificoCreateComponent },
  { path: 'bonifico-create', component: BonificoCreateComponent },
  { path: 'bonifico-detail', component: BonificoDetailComponent },
  { path: 'thankyou', component: ThankyouComponent }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
