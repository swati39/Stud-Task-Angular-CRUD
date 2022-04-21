import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudComponent } from './add-stud/add-stud.component';
import { StudListComponent } from './stud-list/stud-list.component';

const routes: Routes = [
  { path: '', component: AddStudComponent },
  { path: 'add-stud', component: AddStudComponent },
  { path: 'update-stud/:id', component: AddStudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

