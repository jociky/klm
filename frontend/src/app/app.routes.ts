import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { HasActiveBookingGuard } from './booking/booking.guard';

export const routes: Routes = [
    {
        path: '',
        component: SearchComponent,

    },
    {
        path: 'details',
        component: DetailsComponent,
        canActivate: [HasActiveBookingGuard]
    },
    { path: '**', component: SearchComponent }
];
