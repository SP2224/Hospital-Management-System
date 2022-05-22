import { Component, OnInit } from '@angular/core';

import { AbstractControl, FormBuilder, 
    FormGroup } from '@angular/forms';


@Component({
  selector: 'app-rough',
  templateUrl: './rough.component.html',
  styleUrls: ['./rough.component.css']
})
export class RoughComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  searchValue!: string;
  condition!: boolean;
  prevText: string = '';
  list_lang = ['java', 'c++', 'python', 'c', 'javascript'];
  res_list = [];
  res_cnt: number = 0;
    
  onSubmit($event: { keyCode: number; }){
    if($event.keyCode === 13){
      this.condition = true;
      this.prevText = this.searchValue;
      this.res_cnt = 0;
      this.res_list = [];
      setTimeout(() => {
        this.condition = false;
        for(let i=0; i<this.list_lang.length; i++){
          if(this.list_lang[i] === this.prevText.toLowerCase()  || this.list_lang[i].startsWith(this.prevText)){
            this.res_cnt += 1;
           //this.res_list.push(this.list_lang[i]);
            //this.res_list.findIndex;
            console.log(this.list_lang[i]);
          }
        }
      }, 3000);
      this.searchValue = "";
    }
  }
}
