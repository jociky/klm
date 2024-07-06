import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BookingService {
    constructor(private _http: HttpClient) {

    }

    getBooking(bookingCode?: string | null, familyName?: string | null) {
        return firstValueFrom(this._http.post('/api/booking/search', {
            bookingCode,
            familyName
        }));    
    }
}