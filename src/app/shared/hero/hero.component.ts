import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Hero } from 'src/app/shared/models/Hero.interface';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() public heroObj!: Hero
  @Output() public onDeleteHero = new EventEmitter<string>();

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public openDialog(id:string) {
    let dialogReturn = this.dialog.open(DialogComponent);

    dialogReturn.afterClosed().subscribe( result => {
      if(result === 'true') {
          this.deleteHero(id)
          return
      }
      return
    })
    
  }

  public openModal(hero:Hero) {
    let dialogReturn = this.dialog.open(ModalComponent, {data: hero});

    dialogReturn.afterClosed().subscribe( result => {
      if(result === 'true') {
          return
      }
      return
    })
    
  }

  public deleteHero(id:string) {
      this.onDeleteHero.emit(id);
  }

  public editHero(id:string) {
    this.router.navigateByUrl(`/edit-hero/${id}`);
};

}
