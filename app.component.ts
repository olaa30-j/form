import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
// import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
// import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AppComponent {
  constructor(private _dialog:MatDialog){
  }
  openForm(){
    this._dialog.open(DialogComponent);
  }
}

