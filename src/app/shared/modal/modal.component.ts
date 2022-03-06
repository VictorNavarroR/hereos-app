import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Hero } from 'src/app/shared/models/Hero.interface'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  

  constructor(
    @Inject( MAT_DIALOG_DATA ) public data: Hero
  ) { }

  ngOnInit(): void {
  }

}
