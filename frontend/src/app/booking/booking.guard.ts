import { Injectable } from "@angular/core";
import { CanActivate, GuardResult, MaybeAsync, Router } from "@angular/router";
import { BookingService } from "./booking.service";

@Injectable({
    providedIn: 'root'
})
export class HasActiveBookingGuard implements CanActivate {

    constructor(private _bookingSvc: BookingService, private _router: Router) {
    }

    canActivate(): MaybeAsync<GuardResult> {
        const canActivate = !!this._bookingSvc.booking;
        if (!canActivate) {
            this._router.navigateByUrl('/');
        }
        return canActivate;
    }
}