import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { AngularFireModule } from '@angular/fire/compat';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderComponent } from './components/header/header.component';
import { JournalCardComponent } from './components/journal-card/journal-card.component';
import { MyJournalComponent } from './pages/my-journal/my-journal.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateNewJournalComponent } from './pages/create-new-journal/create-new-journal.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { firebaseConfig } from '../environment/environment';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './pages/login/login.component';
import { AddFriendComponent } from './pages/add-friend/add-friend.component';
import { EditJournalDialogComponent } from './components/edit-journal-dialog/edit-journal-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,

    LandingComponent,

    HeaderComponent,
    JournalCardComponent,
    MyJournalComponent,
    CreateNewJournalComponent,
    SignUpComponent,
    VerifyEmailComponent,
    LoginComponent,
    AddFriendComponent,
    EditJournalDialogComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
