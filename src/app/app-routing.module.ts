import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgGridComponent } from './ag-grid/ag-grid.component';


const routes: Routes = [
  {path:'',component:AgGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
