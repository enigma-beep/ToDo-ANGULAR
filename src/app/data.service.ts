import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  items=[]
  static count=0

   /*getItem()
  {
      return this.items;
  }*/
  
  delall()
  {
     
          while(this.items.length!=0)
          {
              this.items.pop();
              
          }
          DataService.count=0;
     
  }
  // del(i:number){
  //   this.items.splice(i,1);
  //   DataService.count--;
  // }
}
