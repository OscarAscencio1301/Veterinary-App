import { usePacient } from "../hooks/usePacient"
import { Pacient } from "../interfaces/pacients"

export const Paciente = ({date, email, name, pet, sintoms, id}:Pacient) => {
    
    const {deletePacient, activePacient} = usePacient()

    const deleteBTN = () => {
        deletePacient(id || '')
    }

    const updateBTN = () => {
        activePacient({date, email, name, pet, sintoms, id})
    }

    return (
        <div className="my-3 p-10 bg-white py-10 shadow-md rounded-md" aria-label="pacient">
            <p className="font-bold py-3 text-gray-700 uppercase">Mascota: <span className="font-normal normal-case">{pet}</span></p>
            <p className="font-bold py-3 text-gray-700 uppercase">Propietario: <span className="font-normal normal-case">{name}</span></p>
            <p className="font-bold py-3 text-gray-700 uppercase">Correo Electrónico: <span className="font-normal normal-case">{email}</span></p>
            <p className="font-bold py-3 text-gray-700 uppercase">Alta: <span className="font-normal normal-case">{date}</span></p>
            <p className="font-bold py-3 text-gray-700 uppercase">Sintomas: <span className="font-normal normal-case">{sintoms}</span></p>
            <div className="flex justify-between">
            <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-900 rounded-md uppercase text-white font-bold" onClick={updateBTN}>Editar</button>
                <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-900 rounded-md uppercase text-white font-bold" onClick={deleteBTN}>Eliminar</button>
            </div>
        </div>
    )
}
