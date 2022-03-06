import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private dateComplete:Date = new Date();
  public dateNow:number = this.dateComplete.getFullYear();


  constructor() { }

  ngOnInit(): void {
  }

}
