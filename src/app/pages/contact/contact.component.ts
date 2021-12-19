import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() disabledSubmitButton!: Boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data : NgForm){
    
    const contact : any = data;
    let header = new HttpHeaders();
    header = header.set('Accept', 'application/json');

    if(data){
      header = header.set('Content-Type','application/json');
    }

    console.log(contact.name+""+ contact.email);

    this.http.post('https://formspree.io/f/xoqrqrvw',
      { name: contact.name, replyto: contact.email, message: contact.msg },
      { 'headers': header }).subscribe(
        response => {
          console.log(response);
        }
      );
  }
}
