import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CreateNewJournalComponent } from './pages/create-new-journal/create-new-journal.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'create-new-journal', component: CreateNewJournalComponent },
  { path: 'sign-up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
