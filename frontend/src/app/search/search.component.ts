import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../booking/booking.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.less'
})
export class SearchComponent {
  constructor(private _bookSvc: BookingService, private _router: Router) {
  }

  public isError404 = false;
  public isError500 = false;

  public form = new FormGroup({
    bookingRef: new FormControl('PZIGZ3', [Validators.required]),
    familyName: new FormControl('HESP', [Validators.required])
  })

  async onSubmit() {
    this.isError404 = false;
    this.isError500 = false;

    if (!this.form.valid) {
      alert('Error, form is invalid');
      return;
    }

    try {
      await this._bookSvc.getBooking(this.form.value.bookingRef, this.form.value.familyName);
      this._router.navigateByUrl('/details');
    } catch (ex: any) {
      console.log(ex);

      // it might be worthwhile to display backend validation errors here
      // 400: request payload validation error
      // 404: booking not found
      if (ex.status === 404 || ex.status === 400) {
        this.isError404 = true;
      } else {
        // this also contains network error, etc
        
        this.isError500 = true;
      }
    }
  }
}
