import { Paciente } from "./Paciente"

export const ListadoPacientes = () => {
  return (
    <div className="text-center col-span-2 h-screen overflow-y-auto">
      <h2 className="font-black text-3xl">Listado de Pacientes</h2>
      <p className="text-lg my-5">Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas.</span></p>
      <Paciente />
      <Paciente />
      <Paciente />
    </div>
  )
}
