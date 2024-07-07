import express from "express"
import { HealthService } from "../services/health.service";

export class HealthController {
    constructor(public router: express.Router, private healthSvc: HealthService) {
        router.get('/', this.getHealth.bind(this));
    }

    getHealth(req: express.Request, res: express.Response) {
        if (this.healthSvc.isHealthy) {
            res.status(200);
        } else {
            res.status(500);
        }
        res.send('');
    }
}