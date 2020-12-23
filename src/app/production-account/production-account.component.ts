import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import  { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import  { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-production-account',
  templateUrl: './production-account.component.html',
  styleUrls: ['./production-account.component.scss']
})
export class ProductionAccountComponent implements OnInit {

  constructor( private fb:FormBuilder) { }

  @ViewChild("btn",{ static: true}) myvariable: ElementRef;

  myform:FormGroup;


  setvalue(){
    this.myform.setValue({
      firstName : "Dhanvika",
      lastName: "Mythri123",
      age: "5"
    })
  }

  patchvaluefun(){
    this.myform.patchValue({
      firstName : "pandu",
      age: "6"
    })
  }
  ngOnInit(): void {
    this.myform = this.fb.group({
      firstName: ['suresh', [Validators.required]],
      lastName: ['challa', [Validators.required]],
      age: ['26', [Validators.required]],
    })

  var p1 = new Promise(function(fulfilcbfn ,rejectioncbfn){
    if(true){
      fulfilcbfn("i am promise");
    }
    else{
      rejectioncbfn("promise rejected")
    }
  })
  p1.then(function(val1){console.log(val1)}).catch((val2) => {console.log(val2)});

  var  ob = new Observable(z => {z.next("I am Observable1"); z.next("I am Observable 2")})

  ob.subscribe(x => console.log(x))
  }

  ngAfterViewInit(){
     debugger;
    console.log(this.myvariable.nativeElement)
    this.myvariable.nativeElement.style.color = "red";
  }
}
