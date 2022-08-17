import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-huella',
  templateUrl: './huella.component.html',
  styleUrls: ['./huella.component.scss']
})
export class HuellaComponent implements OnInit {

  constructor() { }

  @Input() color:any = "black";
  @Input() fillcolor: any = "black"


  ngOnInit(): void {
  }

}
