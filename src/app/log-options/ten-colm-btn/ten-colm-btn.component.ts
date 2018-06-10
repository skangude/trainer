import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ten-colm-btn',
  templateUrl: './ten-colm-btn.component.html',
  styleUrls: ['./ten-colm-btn.component.css']
})
export class TenColmBtnComponent implements OnInit {
  @Input() btnText:string;
  @Input() linkPath:string;
  constructor() { }

  ngOnInit() {
  }

}
