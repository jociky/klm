import express from "express"

export class HealthController {

    private _healthy = false;

    constructor(public router: express.Router) {
        router.get('/', this.getHealth.bind(this));

        // simulate a 10s startup time
        setTimeout(() => {
            console.log('App startup finished, setting healthy to true');
            this._healthy = true;
        }, 10000);
    }

    getHealth(req: express.Request, res: express.Response) {
        if (this._healthy) {
            res.status(200);
        } else {
            res.status(500);
        }
        res.send('');
    }
}