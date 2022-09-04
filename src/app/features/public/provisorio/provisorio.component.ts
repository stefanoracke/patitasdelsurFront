import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { IProvisForm } from 'src/app/core/models/form_provi.interface';

@Component({
  selector: 'app-provisorio',
  templateUrl: './provisorio.component.html',
  styleUrls: ['./provisorio.component.scss']
})
export class ProvisorioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  formularioProvisorio:FormGroup= new FormGroup({});
  proviForm!: IProvisForm;

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.proviForm=this.formularioProvisorio.value;
    console.log(this.proviForm);
   }
}
