import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BookingService {
    constructor(private _http: HttpClient) {

    }
    public booking: any;

    async getBooking(bookingCode?: string | null, familyName?: string | null) {
        this.booking = await firstValueFrom(this._http.post('/api/booking/search', {
            bookingCode,
            familyName
        }));   
        return this.booking;
    }
}