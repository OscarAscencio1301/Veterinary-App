import { createSlice } from "@reduxjs/toolkit";
import { Pacients } from "../interfaces/pacients";

const initialState: Pacients = {
    pacients: [],
    pacientActive: null
}

export const pacientSlice = createSlice({
    name: 'pacients',
    initialState,
    reducers: {
        add: (state, { payload }) => {
            state.pacients.push(payload)
            state.pacientActive = null
        },
        active: (state, { payload }) => {
            state.pacientActive = payload
        },
        deleteP: (state, { payload }) => {
            state.pacients = state.pacients.filter(pacient => pacient.id !== payload)
            state.pacientActive = null
        },
        update: (state, { payload }) => {
            state.pacients = state.pacients.map(pacient => pacient.id === payload.id ? payload : pacient)

        },
        clean: (state) => {
            state.pacientActive = null
        },

    }
})

export const { add, active, clean, deleteP, update } = pacientSlice.actions