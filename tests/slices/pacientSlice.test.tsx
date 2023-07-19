import { Pacient } from "../../src/interfaces/pacients";
import { active, add, clean, deleteP, pacientSlice, update } from "../../src/store/pacientSlice";
import { initialStateTesting } from "../fixtures/pacients";


describe('Testing pacientSlice', () => {
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
        const state = pacientSlice.getInitialState()
        expect(state.pacients.length).toBe(0)
        expect(state.pacientActive).toBeNull()
    });

    test('Add', () => {
        const state = pacientSlice.reducer(initialStateTesting, add(elementAdd))
        expect(state.pacients).toContain(elementAdd)
        expect(state.pacientActive).toBeNull()
    });

    test('Active', () => {
        const state = pacientSlice.reducer(initialStateTesting, active(elementAdd))
        expect(state.pacientActive).toEqual(elementAdd)
    });

    test('Update', () => {
        const state = pacientSlice.reducer(initialStateTesting, update(elementUpdate))
        expect(state.pacients.length).toBe(1)
        expect(state.pacients).toContain(elementUpdate)
        expect(state.pacientActive).toBeNull()
    });

    test('Delete', () => {
        const state = pacientSlice.reducer(initialStateTesting, deleteP('1234'))
        expect(state.pacients.length).toBe(0)
        expect(state.pacientActive).toBeNull()
    });

    test('Clean', () => {
        const state = pacientSlice.reducer(initialStateTesting, clean())
        expect(state.pacientActive).toBeNull()
    });
});