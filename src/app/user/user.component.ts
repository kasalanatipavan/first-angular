import { Component, OnInit } from '@angular/core';
import { Hero }    from '../hero';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  constructor() { }
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero('','','');

 
  submitted = false;

  

  onSubmit(){ this.submitted = true; 

    
   let key=this.model.name.toString();
  localStorage.setItem(key, JSON.stringify(this.model));
  window.location.reload();

  }
 
  ngOnInit() {
  }


 
}
