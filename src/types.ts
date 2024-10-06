export interface Diagnosis {
    code: string,
    name: string,
    latin?: string
}

export interface Entry {
    nothing?: string
}

export interface Patient {
  id: string;
  name: string;
  ssn: string;
  occupation: string;
  gender: Gender;
  dateOfBirth: string;
  entries: Entry[]}

export type SensitivePatient = Omit<Patient, 'ssn' | 'entries'>;

export type toNewPatient = Omit<Patient, 'id'>;

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other',
}