export interface Diagnosis {
    code: string,
    name: string,
    latin?: string
}

export interface Patient {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: string,
    occupation: string
}

export interface SensitivePatient {
    id: string,
    name: string,
    dateOfBirth: string,
    gender: string,
    occupation: string
}