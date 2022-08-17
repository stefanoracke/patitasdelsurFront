import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-adopta',
  templateUrl: './adopta.component.html',
  styleUrls: ['./adopta.component.scss']
})
export class AdoptaComponent implements OnInit {

  constructor(private formB:FormBuilder) { 
    
  }

  public fijo = this.formB.group(
    {
      prefijo: '',
      numero: ''
    }
  )

  public movil = this.formB.group(
    {
      prefijo: '',
      numero: ''
    }
  )


  
  formularioAnidado:FormGroup = new FormGroup({});
  

  ngOnInit(): void {

    
    this.formularioAnidado = this.formB.group({
      fijo: this.fijo,
      movil: this.movil
    })

    
  }

  send(){
    
    console.log(this.formularioAnidado.value)
  }

}
