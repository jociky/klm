import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BookingService {
    constructor(private _http: HttpClient) {

    }

    getBooking(bookingRef?: string | null, familyName?: string | null) {
        return firstValueFrom(this._http.post('/api/bookings', {
            bookingRef,
            familyName
        }));    
    }
}