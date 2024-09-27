import express, { Response } from 'express';
import patientsService from '../services/patientsService';
import { SensitivePatient } from '../types';

const router = express.Router();

router.get('/', (_req, res: Response<SensitivePatient[]>) => {
    res.send(patientsService.getNonSensitivePatients());
});

export default router;