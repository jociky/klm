import express from "express"
import { BookingService } from "../services/booking.service";
import { validate } from "jsonschema";
import * as fs from "fs";
import * as path from "path";

export class BookingController {
    private _bookingSearchSchema;

    constructor(public router: express.Router, private _bookSvc: BookingService) {
        router.post('/search', this.getBooking.bind(this));

        try {
            this._bookingSearchSchema = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "..", "schemas", "booking-search.json")).toString());
        } catch (ex) {
            console.error('Failed to parse schema data');
            console.error(ex);
            process.exit(1);
        }
    }

    getBooking(req: express.Request, res: express.Response) {
        const result = validate(req.body, this._bookingSearchSchema);
        if (!result.valid) {
            res.status(400);
            res.json(result.errors);
            return;
        }

        try {
            const booking = this._bookSvc.getBooking(req.body.bookingCode, req.body.familyName);
            if (booking) {
                res.json(booking);
            } else {
                res.status(404);
                res.json({
                    message: "Booking not found"
                });
            }
        } catch (ex) {
            console.error(ex);
            res.status(500);
            res.json({
                message: "Internal server error"
            })
        }
    }
}