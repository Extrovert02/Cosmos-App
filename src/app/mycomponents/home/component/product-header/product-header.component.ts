import { Component, EventEmitter, OnInit , Output} from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css']
})
export class ProductHeaderComponent implements OnInit {
  @Output() columsCountChange = new EventEmitter<number>();
  sort= 'desc';
  itemShowCount = 12;

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdate(newSort:string):void{
    this.sort = newSort;
  }

  onItemUpdated(count: number):void{
    this.itemShowCount = count;
  }

  onColumsUpdated(colsNum : number){
    this.columsCountChange.emit(colsNum)

  }

}
