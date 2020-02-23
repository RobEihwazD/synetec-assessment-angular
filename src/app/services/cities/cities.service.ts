import { Injectable } from '@angular/core';
import { CitiesEndpoint } from './cities-endpoint.service';
import { ICity } from '../../models/city.model';
import { Subject, Observable, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CitiesService {
    private citySubject = new Subject<ICity | ICity[]>();
    public cityObserver: Observable<
        ICity | ICity[]
    > = this.citySubject.asObservable();

    private responseHandler = (
        request: Observable<ICity | ICity[]>
    ) => {
        console.log(request);
        request
            .pipe(
                tap(data => {
                    console.log(' tap data ', data);
                    this.citySubject.next(data);
                }),
                catchError((error: HttpErrorResponse) => of(error))
            )
            .subscribe((errorResponse: HttpErrorResponse) => {
                console.log(errorResponse);
            });
    }

    constructor(private _citiesEndpoint: CitiesEndpoint) { }

    getCity(cityId: number) {
        this.responseHandler(this._citiesEndpoint.getCity(cityId));
    }

    getCities() {
        this.responseHandler(this._citiesEndpoint.getCities());
    }

    deleteCity(cityId: number) {
        this._citiesEndpoint.deleteCity(cityId)
        .subscribe(
            response => {
                // this.getCities(); // delete method on api doesn't remove entry
            },
            error => console.log('HTTP Error', error),
            () => console.log('HTTP request completed.'));
    }
}
