export interface Slice {
    pacients: Pacients
}

export interface Pacients {
    pacients: Pacient[],
    pacientActive: Pacient | null
}

export interface Pacient {
    id?: string,
    name: string,
    pet: string,
    email: string,
    date: string,
    sintoms: string
}