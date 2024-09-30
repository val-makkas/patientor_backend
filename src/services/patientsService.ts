import { v1 as uuid } from 'uuid';
import patients from '../../data/patients';
import { Patient, SensitivePatient, toNewPatient } from '../types';

const getPatients = (): Patient[] => {
    return patients;
};

const getNonSensitivePatients = (): SensitivePatient[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = (patient: toNewPatient): Patient => {
    const id = uuid();

    const newPatient = {...patient, id};
    
    patients.push(newPatient);
    return newPatient;
};

export default {
    getPatients,
    getNonSensitivePatients,
    addPatient
};