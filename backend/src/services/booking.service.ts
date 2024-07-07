import * as path from 'path';
import * as fs from 'fs';
import { Booking } from '../models/booking.model';


export class BookingService {
    private _data: Booking;

    constructor() {
        try {
            this._data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', "..", '_data', 'mock.json')).toString());
            // maybe validate data schema here to prevent database corruption issues?
        } catch (ex) {
            console.error('Failed to parse mock data');
            console.error(ex);
            process.exit(1);
        }
    }

    getBooking(bookingCode: string, familyName: string): Booking | undefined {
        if(this._data.bookingCode.toUpperCase() === bookingCode.toUpperCase() && this._data.passengers.lastName.toUpperCase() === familyName.toUpperCase()) {
            return this._data;
        }
    }
}