import express from "express";
import { BookingController } from "./controllers/booking.controller";
import { HealthController } from "./controllers/health.controller";
import { BookingService } from "./services/booking.service";

const app = express();

const bookingService = new BookingService();
const bookingCtrl = new BookingController(express.Router(), bookingService);
const healthCtrl = new HealthController(express.Router());

app.use(express.json());

// todo: refine logging a bit
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
})

app.use('/api/booking', bookingCtrl.router);
app.use('/api/health', healthCtrl.router);

app.use((req, res) => {
    res.status(404);
    res.json({
        message: 'Not found'
    });
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500);
    res.send('Internal server error');
});

// todo: make this configurable
app.listen(3000, "0.0.0.0", () => {
    console.log('App is listening');
});
