import { FormEvent, useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"
import { Pacient } from "../interfaces/pacients"
import { usePacient } from "../hooks/usePacient"
import { ErrorView } from "./ErrorView"


const pacient: Pacient = {
  pet: '',
  name: '',
  email: '',
  date: '',
  sintoms: ''

}

export const Form = () => {
  const [error, seterror] = useState(false)
  const { form, date, email, name, pet, sintoms, changeValues, reset, setform } = useForm(pacient)
  const { addPacient, cleanPacient, updatePacient, pacientActive } = usePacient()

  const sendForm = (e: FormEvent) => {
    e.preventDefault()

    if ([date, email, name, pet, sintoms].includes('')) {
      return seterror(true)
    }

    if (pacientActive) {
      updatePacient(form)
    } else {
      addPacient({ id: Date.now().toString(), ...form })
    }

    seterror(false)
    reset()
    cleanPacient()
  }

  useEffect(() => {
    if (pacientActive) return setform(pacientActive)
    setform(pacient)
  }, [pacientActive])


  return (
    <div className="text-center">
      <h2 className="font-black text-3xl">Seguimiento</h2>
      <p className="text-lg my-5">Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>
      <form className="bg-white shadow-md rounded-md py-10 px-5" onSubmit={sendForm}>
        {
          error && <ErrorView><p>{'Completa todos los campos'}</p></ErrorView>
        }
        <div className="flex flex-col text-left gap-2 py-2">
          <label className="text-gray-700 font-bold"
            htmlFor="mascota">Nombre Mascota</label>
          <input type="text" name="pet" value={pet} onChange={changeValues} placeholder="Nombre Mascota" id="mascota" className="p-2 border placeholder-gray-400 rounded-md" />
        </div>
        <div className="flex flex-col text-left gap-2 py-2">
          <label className="text-gray-700 font-bold"
            htmlFor="propietario">Nombre Propietario</label>
          <input type="text" name="name" value={name} onChange={changeValues} placeholder="Nombre Propietario" id="propietario" className="p-2 border placeholder-gray-400 rounded-md" />
        </div>
        <div className="flex flex-col text-left gap-2 py-2">
          <label className="text-gray-700 font-bold"
            htmlFor="email">Correo Electrónico</label>
          <input type="email" name="email" value={email} onChange={changeValues} placeholder="Email" id="email" className="p-2 border placeholder-gray-400 rounded-md" />
        </div>
        <div className="flex flex-col text-left gap-2 py-2">
          <label className="text-gray-700 font-bold"
            htmlFor="alta">Alta</label>
          <input type="date" name="date" value={date} onChange={changeValues} id="alta" className="p-2 border placeholder-gray-400 rounded-md" />
        </div>
        <div className="flex flex-col text-left gap-2 py-2">
          <label className="text-gray-700 font-bold"
            htmlFor="sintomas">Sintomas</label>
          <textarea id="sintomas" name="sintoms" value={sintoms} onChange={changeValues} className="p-2 border placeholder-gray-400 rounded-md" />
        </div>
        <button type="submit" className="bg-indigo-600 block w-full p-3 rounded-md text-white mt-3 hover:bg-indigo-800 cursor-pointer transition-colors duration-200">{pacientActive ? 'Editar Paciente' : 'Agregar Paciente'}</button>
      </form>
    </div>
  )
}
