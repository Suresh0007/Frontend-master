import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent implements OnInit {

  constructor() { }


  myobservable = new Observable(function(x){
    x.next("I am from Observable")
  })

  observe(){
    this.myobservable.subscribe({
      next(x){console.log(x);}
    })
  }
  ngOnInit(): void {
  }

}
