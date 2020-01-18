import { Component, OnInit } from '@angular/core';
import {Edit} from "../Edit";
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  data=[];
  tablename;
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model=new Edit('','');

  public show:boolean = false;
  constructor() { }

  ngOnInit() {
    
    
    for (let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i);
    let value = JSON.parse(localStorage.getItem(key));
    
    //document.getElementById("node-id").innerHTML+=value.name+"  "+value.power+"<br>";
    
    this.data.push(value);
    console.log(key,value);
    }
    
  }

  delete(key){

      localStorage.removeItem(key);
      window.location.reload();

  }

  edit(key){
    
    if(this.tablename==null){
      this.tablename=key;
      this.show = !this.show;
    }
    else if(this.tablename==key){
      this.show = !this.show;
    }
    else{
      this.tablename=key;
    }
   

  }

  edit_data(key){
    let obj={name:key,alterEgo:this.model.edit_alterEgo,power:this.model.edit_power};
    localStorage.setItem(key,JSON.stringify(obj));
    window.location.reload();
  }
  GetSortOrder(prop) {  
    return function(a, b) {  
        if (a[prop] > b[prop]) {  
            return 1;  
        } else if (a[prop] < b[prop]) {  
            return -1;  
        }  
        return 0;  
    }  
}  
  sort_name(){
    this.data.sort(this.GetSortOrder('name'));
  }
  sort_power(){
    this.data.sort(this.GetSortOrder('power'));
  }sort_Ego(){
    this.data.sort(this.GetSortOrder('alterEgo'));
  }

}
