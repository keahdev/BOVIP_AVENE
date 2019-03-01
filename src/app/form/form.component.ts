import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    /* users = [
         { nom: 'kelali', prenom: 'ahcene' , adresse: '89 avenue de villiers'},
         { nom: 'test', prenom: 'test' , adresse: 're test'}
         ];*/

user = { nom: 'kelali', prenom: 'ahcene' , adresse: '89 avenue de villiers'};

public constructor() { }

  ngOnInit() {
  }


    onsub(f) {
  console.log(f);
    }

    onsub1(f) {
  console.log(f);
    }
}
