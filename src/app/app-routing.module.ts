import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { MyJournalComponent } from './pages/my-journal/my-journal.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'my-journal', component: MyJournalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
