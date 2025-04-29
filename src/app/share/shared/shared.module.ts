import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { materialModules } from 'src/app/material.module';


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    materialModules,
    CommonModule
  ],
  exports: [CommonModule, FormsModule, AngularFireModule, AngularFirestoreModule],
})
export class SharedModule { }
