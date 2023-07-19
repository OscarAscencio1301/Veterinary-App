import { renderHook } from "@testing-library/react";
import { usePacient } from "../../src/hooks/usePacient";
import { configureStore } from "@reduxjs/toolkit";
import { pacientSlice } from "../../src/store/pacientSlice";
import { pacientsTesting } from "../fixtures/pacients";
import { Pacient, Pacients } from "../../src/interfaces/pacients";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";

const getStore = (initialValues: Pacients) => {
    return configureStore({
        reducer: {
            pacients: pacientSlice.reducer
        },
        preloadedState: {
            pacients: { ...initialValues }
        }
    })
}

describe('Testing usePacient', () => {

    const elementAdd: Pacient = {
        id: '1234',
        name: 'Oscar Test',
        pet: "Perrito Test",
        date: '2023/12/02',
        email: 'oscar@oscar.com',
        sintoms: 'Dolor de cadera'
    }
    const elementUpdate: Pacient = {
        id: '1234',
        name: 'Oscar Test Update',
        pet: "Perrito Test Update",
        date: '2023/12/02',
        email: 'oscar@oscar.com',
        sintoms: 'Dolor de cadera'
    }

    beforeEach(() => jest.clearAllMocks())


    test('Initial Values ', () => {

        const initialValues = {
            pacients: pacientsTesting,
            pacientActive: null
        }

        const store = getStore(initialValues)

        const { result } = renderHook(() => usePacient(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        })

        expect(result.current.pacients.length).toBe(1)
        expect(result.current.pacientActive).toBeNull()
    });

    test('Function Add', () => {

        const initialValues = {
            pacients: pacientsTesting,
            pacientActive: null
        }

        const store = getStore(initialValues)

        const { result } = renderHook(() => usePacient(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        })

       act(() => {
        result.current.addPacient(elementAdd)
       })

       expect(result.current.pacients.length).toBe(2)
       expect(result.current.pacients).toContain(elementAdd)
    });
    test('Function Active', () => {

        const initialValues = {
            pacients: pacientsTesting,
            pacientActive: null
        }

        const store = getStore(initialValues)

        const { result } = renderHook(() => usePacient(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        })

       act(() => {
        result.current.activePacient(elementAdd)
       })

       expect(result.current.pacientActive).toEqual(elementAdd)
    });

    test('Function Update', () => {

        const initialValues = {
            pacients: pacientsTesting,
            pacientActive: null
        }

        const store = getStore(initialValues)

        const { result } = renderHook(() => usePacient(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        })

       act(() => {
        result.current.addPacient(elementAdd)
        result.current.updatePacient(elementUpdate)
       })

       expect(result.current.pacients.length).toBe(2)
       expect(result.current.pacients).toContain(elementUpdate)
       expect(result.current.pacients).not.toContain(elementAdd)
    });
    test('Function Delete', () => {

        const initialValues = {
            pacients: pacientsTesting,
            pacientActive: null
        }

        const store = getStore(initialValues)

        const { result } = renderHook(() => usePacient(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        })

       act(() => {
        result.current.deletePacient('123')
       })

       expect(result.current.pacients.length).toBe(0)
    });
    test('Function Clean', () => {

        const initialValues = {
            pacients: pacientsTesting,
            pacientActive: null
        }

        const store = getStore(initialValues)

        const { result } = renderHook(() => usePacient(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        })

       act(() => {
        result.current.activePacient(elementAdd)
        result.current.cleanPacient()
       })

       expect(result.current.pacients.length).toBe(1)
       expect(result.current.pacientActive).toBeNull()
    });
});