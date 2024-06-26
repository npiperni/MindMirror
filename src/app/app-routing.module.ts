import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CreateNewJournalComponent } from './pages/create-new-journal/create-new-journal.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthguardGuard } from './guards/auth.guard';
import { AddFriendComponent } from './pages/add-friend/add-friend.component';
import { MyJournalComponent } from './pages/my-journal/my-journal.component';

const routes: Routes = [
  { path: '', component: LandingComponent, canActivate: [AuthguardGuard] },
  {
    path: 'create-new-journal',
    component: CreateNewJournalComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'add-friend',
    component: AddFriendComponent,
    canActivate: [AuthguardGuard],
  },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'my-journal',
    component: MyJournalComponent,
    canActivate: [AuthguardGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
