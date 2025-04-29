import { Injectable } from '@angular/core';
import { Database, set, ref, push } from '@angular/fire/database';
import { Observable } from 'rxjs';
// import { Firestore, collection, addDoc } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor( private database: Database) { }

  postData(path: string, data: any): Promise<void> {
    const dbRef = ref(this.database, path);
    const newItemRef = push(dbRef); // Generates a unique key
    return set(newItemRef, data); // Posts data under the unique key
  }
  // async postContactUsData(contactData: any): Promise<void> {
  //   const contactUsCollection = collection(this.firestore, 'contactUs');
  //   await addDoc(contactUsCollection, contactData);
  // }
}
