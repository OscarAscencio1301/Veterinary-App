import { Pacient, Pacients } from '../../src/interfaces/pacients'

export const pacientsTesting: Pacient[] = [
    {
        id: '1234',
        name: 'Oscar',
        pet: "Perrito",
        date: '2023/12/02',
        email: 'oscar@oscar.com',
        sintoms: 'Dolor de cadera'
    }
]

export const initialStateTesting:Pacients = {
    pacients: pacientsTesting,
    pacientActive: null
}