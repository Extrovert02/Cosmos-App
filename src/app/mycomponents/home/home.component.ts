import { Component, OnInit } from '@angular/core';


 const ROWS_HEIGHT:{[id:number]: number } = { 1:500, 3 : 455, 4:355}; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cols = 3
  rowHeight = ROWS_HEIGHT[this.cols];
  category : string | undefined; 

  constructor() { }

  ngOnInit(): void {
  }
  onColumsChange(colsNum: number):void{
    this.cols   = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory : string) : void{
    this.category =  newCategory

  }

}
