import { useDispatch, useSelector } from "react-redux"
import { Pacient, Pacients, Slice } from "../interfaces/pacients"
import { active, add, clean, deleteP, update, view } from "../store/pacientSlice"



export const usePacient = () => {
  const { pacients, pacientActive } = useSelector<Slice, Pacients>(state => state.pacients)
  const dispatch = useDispatch()
  const addPacient = (pacient: Pacient) => {
    dispatch(add(pacient))
  }
  const activePacient = (pacient: Pacient) => {
    dispatch(active(pacient))
  }
  const updatePacient = (pacient: Pacient) => {
    dispatch(update(pacient))
  }
  const deletePacient = (id: string) => {
    dispatch(deleteP(id))
  }
  const cleanPacient = () => {
    dispatch(clean())
  }
  const viewPacients = (pacients:Pacient[]) => {
    dispatch(view(pacients))
  }


  return {
    pacients,
    pacientActive,
    addPacient,
    activePacient,
    cleanPacient,
    deletePacient,
    updatePacient,
    viewPacients
  }
}
