import { Gender, toNewPatient } from "./types";

export const toNewPatientEntry = (object: unknown): toNewPatient => {

    if (!object || typeof object !== 'object'){
        throw new Error("Incorrect or missing data.");
    };

    if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object){
        const newPatient: toNewPatient = {
            name: parseName(object.name),
            dateOfBirth: parseDate(object.dateOfBirth),
            ssn: parseSSN(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseOccupation(object.occupation)
        };
    
        return newPatient;
    };

    throw new Error('Incorrect data some fields are missing');
};

const parseName = (name: unknown): string => {
    if (!name || !isString(name)){
        throw new Error('Incorrect or missing name.');
    };

    return name;
};

const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date');
    };
    return date;
};

const parseSSN = (ssn: unknown): string => {
    if (!ssn || !isString(ssn)){
        throw new Error('Incorrect or missing ssn.');
    };

    return ssn;
};

const parseGender = (gender: unknown): Gender => {
    if (!gender || !isString(gender) || !isGender(gender))
        throw new Error('Incorrent or missing gender.');

    return gender;
};

const parseOccupation = (ocuppation: unknown): string => {
    if (!ocuppation || !isString(ocuppation))
        throw new Error('Incorrect or missing occupation');

    return ocuppation;
};

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const isGender = (param: string): param is Gender => {
    return Object.values(Gender).map(v => v.toString()).includes(param);
};

export default toNewPatientEntry;