import express, { Response } from 'express';
import patientsService from '../services/patientsService';
import { SensitivePatient } from '../types';
import toNewPatientEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res: Response<SensitivePatient[]>) => {
    res.send(patientsService.getNonSensitivePatients());
});

router.post('/', (req, res) => {

    try {
        const newPatientEntry = toNewPatientEntry(req.body);
        const addedPatient = patientsService.addPatient(newPatientEntry);
        res.json(addedPatient);
    } catch (error: unknown) {
        let errorMSG = "Something went wrong...";
        if (error instanceof Error) {
            errorMSG += 'Error: ' + errorMSG;
        }
        res.status(400).send(errorMSG);
    };
});

export default router;