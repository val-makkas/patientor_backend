import { z } from "zod";
import { Gender, toNewPatient } from "./types";

export const toNewPatientEntry = (object: unknown): toNewPatient => {

    if (!object || typeof object !== 'object'){
        throw new Error("Incorrect or missing data.");
    };

    if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object){
        const newPatient: toNewPatient = {
            name: z.string().parse(object.name),
            dateOfBirth: z.string().date().parse(object.dateOfBirth),
            ssn: z.string().parse(object.ssn),
            gender: z.nativeEnum(Gender).parse(object.gender),
            occupation: z.string().parse(object.occupation),
            entries: []
        };

        /* const newPatientEntry = z.object({
            name: z.string(),
            dateOfBirth: z.string().date(),
            ssn: z.string(),
            gender: z.nativeEnum(Gender),
            occupation: z.string(),
        }); */
    
        return newPatient;
    };

    throw new Error('Incorrect data some fields are missing');
};

export default toNewPatientEntry;