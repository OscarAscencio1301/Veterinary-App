import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { ChangeEvent } from "react";


describe('Testing useForm', () => {
    const initialValues = {
        name: '',
        pet: ''
    }
    test('Initial Values ', () => {
        const {result} = renderHook(() => useForm(initialValues))

        expect(result.current).toContain(initialValues)

    });

    test('Function changeValues', () => {
        const {result} = renderHook(() => useForm(initialValues))

        act(() => {
            result.current.changeValues(({target: {name: 'name', value: 'Oscar'}}) as ChangeEvent<HTMLInputElement>)
            result.current.changeValues(({target: {name: 'pet', value: 'Perrinho'}}) as ChangeEvent<HTMLInputElement>)
        })

        expect(result.current.name).toBe('Oscar')
        expect(result.current.pet).toBe('Perrinho')

    });

    test('Function reset', () => {
        const {result} = renderHook(() => useForm(initialValues))

        act(() => {
            result.current.changeValues(({target: {name: 'name', value: 'Oscar'}}) as ChangeEvent<HTMLInputElement>)
            result.current.changeValues(({target: {name: 'pet', value: 'Perrinho'}}) as ChangeEvent<HTMLInputElement>)
            result.current.reset()
        })

        expect(result.current.name).toBe('')
        expect(result.current.pet).toBe('')
    });
});