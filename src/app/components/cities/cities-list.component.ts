import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICity } from '../../models/city.model';
import { CitiesService } from '../../services/cities/cities.service';
import { map, takeUntil } from 'rxjs/operators';
import { Observable, Subject, Subscriber, Subscription } from 'rxjs';

@Component({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit, OnDestroy {

    cities: ICity[] = [];
    private unsubscribe: Subject<boolean> = new Subject<boolean>();
    private citySubscriber: Subscription = this.cityService.cityObserver
        .pipe(
            map(result => {
                this.cities = result as ICity[];

            })
        )
        .subscribe();


    constructor(private cityService: CitiesService) { }

    ngOnInit(): void {
        this.cityService.getCities();
    }

    onDeleteRequest(cityId) {

        this.cityService.deleteCity(cityId); // left in to show call to server
        this.cities = this.cities.filter(obj => obj.id !== cityId);
    }

    ngOnDestroy(): void {
        this.unsubscribe.next(true);
        this.unsubscribe.complete();

    }
}
