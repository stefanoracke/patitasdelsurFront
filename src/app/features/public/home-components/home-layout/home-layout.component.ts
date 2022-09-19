import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {
  public changeText = false
  constructor( public router: Router) { }

  ngOnInit(): void {
  }

  redirectTo(route:string){
    this.router.navigate(['/', route]);
  }

}
