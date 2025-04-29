import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsService } from 'src/app/service/contacts.service';
import { NgForm } from '@angular/forms';
import { SharedModule } from 'src/app/share/shared/shared.module';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent  {
  contactImg="assets/img/idea.jpg";

  userDetails:any=[];
 constructor( private contactService:ContactsService){
  this.userDetails= [
    {
      "yourName":"String",
      "mobile": 0,
      "message":""
    }
  ]
 }
 
 onSubmit(contactForm:NgForm) {
  this.contactService
    .postData('contacts', this.userDetails)
    .then(() => {
      alert('Form submitted successfully!');
      contactForm.reset();

    })
    .catch((error) => {
      console.error('Error submitting form:', error);
    });
}
  
    // onSubmit(form: NgForm) {
    //   if (form.valid) {
    //     this.contactService.postContactUsData(form.value).then(() => {
    //       alert('Form submitted successfully!');
    //       form.reset();
    //     }).catch(err => {
    //       console.error(err);
    //       alert('There was an error submitting the form.');
    //     });
    //   } else {
    //     alert('Form is invalid');
    //   }
    // }
}
