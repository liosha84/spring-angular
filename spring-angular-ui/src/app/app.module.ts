import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatChipGrid, MatChipInput, MatChipListbox, MatChipOption, MatChipRow} from "@angular/material/chips";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {MatFormField} from "@angular/material/form-field";



@NgModule({
  declarations: [
    AppComponent,
    TutorialsListComponent,
    TutorialDetailsComponent,
    AddTutorialComponent,

    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent

  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginComponent,
    MatToolbar,
    MatButton,
    MatIcon,
    MatAnchor,
    MatChipGrid,
    MatChipRow,
    MatChipInput,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatOption,
    MatFormField,
    MatChipListbox,
    MatChipOption,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders, provideHttpClient(withInterceptorsFromDi()), provideAnimationsAsync()] })


export class AppModule { }
