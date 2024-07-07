import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { BookingService } from "../booking/booking.service";

@Component({
    selector: 'app-details',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    providers: [],
    templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

    public booking: any;

    constructor(private _bookingSvc: BookingService) {

    }

    ngOnInit() {
        this.booking = this._bookingSvc.booking;
    }

}