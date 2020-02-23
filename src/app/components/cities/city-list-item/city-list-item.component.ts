import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICity } from '../../../models/city.model';


@Component({
  selector: 'app-city-list-item , [app-city-list-item]',
  templateUrl: './city-list-item.component.html',
  styleUrls: ['./city-list-item.component.css']
})
export class CityListItemComponent implements OnInit {

  @Input() city: ICity;
  @Output() deleteRequest  = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  handleDelete(){
    console.log(' handleDelete ')
    this.deleteRequest.emit(this.city.id)
  }

}
