import { Injectable, Injector } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs';

import { ICity } from '../../models/city.model';

@Injectable({
    providedIn: 'root'
})
export class CitiesEndpoint {


    private endPoint = (extension = null, cityId = null) => {
        let uri = environment.citiesUrlPath;
        if (extension) {
            uri += `/${extension}`;
        }
        if (cityId) {
            uri += `/${cityId}`;
        }
        return uri;
    }

    constructor(private api: BaseService) {

    }

    getCity(cityId: number): Observable<ICity> {
        return this.api.get(this.endPoint(null, cityId));
    }

    getCities(): Observable<ICity[]> {
        return this.api.getAll(this.endPoint());
    }

    deleteCity(cityId: number): Observable<ICity> {
        return this.api.delete(this.endPoint('delete-city', cityId));
    }
}
