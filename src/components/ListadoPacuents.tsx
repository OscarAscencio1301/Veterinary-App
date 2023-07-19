
import { usePacient } from "../hooks/usePacient"
import { Paciente } from "./Paciente"

export const ListadoPacientes = () => {
  const { pacients } = usePacient()

  return (
    <div className="text-center col-span-2 h-screen overflow-y-auto">
      <h2 className="font-black text-3xl">{pacients.length > 0 ? 'Listado de Pacientes' : 'No hay Pacientes'}</h2>
      <p className="text-lg my-5">Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas.</span></p>
      {
        pacients.map(pacient => <Paciente key={pacient.id} {...pacient} />)
      }
    </div>
  )
}
