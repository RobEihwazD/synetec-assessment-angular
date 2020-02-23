import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { CitiesListComponent } from './cities-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ICity } from '../../models/city.model';

describe('CitiesListComponent', () => {
  let component: CitiesListComponent;
  let fixture: ComponentFixture<CitiesListComponent>;

  const cityData: ICity[] = [
    { id: 1, description: 'test description one', name: 'city one' },
    { id: 2, description: 'test description two', name: 'city two' }
  ]
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CitiesListComponent
      ],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesListComponent);
    component = fixture.componentInstance;
    component.cities = cityData;
    fixture.detectChanges();
  });
  it('should create the cities list component', async(() => {
   
    expect(component).toBeTruthy();
  }));

  it('should display a list of 2 cities', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const nodes = compiled.querySelectorAll('tr');
    console.log(' nodes length  ', nodes.length)
    expect(nodes.length === 2).toBeTruthy();
  }));
});
