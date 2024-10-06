import { v1 as uuid } from 'uuid';
import patients from '../../data/patients';
import { Entry, Patient, SensitivePatient, toNewPatient } from '../types';

const getPatients = (): Patient[] => {
    return patients;
};

const getSinglePatient = (id: string): Patient => {
    const res = patients.find(patient => patient.id === id);
    if (!res) {
        throw new Error('Patient not found');
    }
    return res;
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
    const entries: Entry[] = [];

    const newPatient = {...patient, id, entries};
    
    //patients.push(newPatient);
    return newPatient;
};

export default {
    getPatients,
    getSinglePatient,
    getNonSensitivePatients,
    addPatient
};