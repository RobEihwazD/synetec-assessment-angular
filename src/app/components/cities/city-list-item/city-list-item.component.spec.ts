import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityListItemComponent } from './city-list-item.component';
import { ICity } from '../../../models/city.model';

describe('CityListItemComponent', () => {
  let component: CityListItemComponent;
  let fixture: ComponentFixture<CityListItemComponent>;
  const data:ICity = {id: 1, description : 'test description', name: 'city one'}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityListItemComponent);
    component = fixture.componentInstance;
    component.city = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a city name in first td element', ()=>{
    const compiled = fixture.debugElement.nativeElement;
    const nodes = compiled.querySelectorAll('td');

    expect( nodes[0].textContent).toContain(data.name);
  })
  it('should render a city description in second td element', ()=>{
    const compiled = fixture.debugElement.nativeElement;
    const nodes = compiled.querySelectorAll('td');

    expect( nodes[1].textContent).toContain(data.description);
  })
});
