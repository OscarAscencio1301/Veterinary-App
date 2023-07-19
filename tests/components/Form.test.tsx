import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "../../src/components/Form";
import { useForm } from "../../src/hooks/useForm";
import { usePacient } from "../../src/hooks/usePacient";

jest.mock("../../src/hooks/useForm");
jest.mock("../../src/hooks/usePacient");

describe('Testing Component Form', () => {
    const addPacientMock = jest.fn()
    const resetMock = jest.fn()
    beforeEach(() => jest.clearAllMocks())


    test('Snapshot ', () => {
        (useForm as jest.Mock).mockReturnValue({
            changeValues: jest.fn(),
            reset: resetMock,
            setform: jest.fn()
        });

        (usePacient as jest.Mock).mockReturnValue({
            addPacient: jest.fn(),
            cleanPacient: jest.fn(),
            updatePacient: jest.fn(),
            pacientActive: null
        });

        const { container } = render(<Form />)
        expect(container).toMatchSnapshot()
    });
    test('Initial Values ', () => {
        (useForm as jest.Mock).mockReturnValue({
            changeValues: jest.fn(),
            reset: resetMock,
            setform: jest.fn()
        });

        (usePacient as jest.Mock).mockReturnValue({
            addPacient: jest.fn(),
            cleanPacient: jest.fn(),
            updatePacient: jest.fn(),
            pacientActive: null
        });

        render(<Form />)
        expect(screen.getAllByRole('textbox').length).toBe(4)
    });
    test('Change Values in Inputs', () => {
        
        (useForm as jest.Mock).mockReturnValue({
            changeValues: jest.fn(),
            setform: jest.fn()
        });

        (usePacient as jest.Mock).mockReturnValue({
            addPacient: jest.fn(),
            cleanPacient: jest.fn(),
            updatePacient: jest.fn(),
            pacientActive: null
        });

        render(<Form />)
        const inputs = screen.getAllByRole<HTMLInputElement>('textbox')
        const date = screen.getByLabelText<HTMLInputElement>('date')
        const textarea = screen.getByLabelText<HTMLTextAreaElement>('textarea')

        fireEvent.input(inputs[0], { target: { value: 'Perrinho' } })
        fireEvent.input(inputs[1], { target: { value: 'Oscar Test' } })
        fireEvent.input(inputs[2], { target: { value: 'oscar@oscar.com' } })
        fireEvent.input(date, { target: { value: '2023-07-13' } })
        fireEvent.input(textarea, { target: { value: 'Le duele la pata derecha' } })


        expect(inputs[0].value).toBe('Perrinho')
        expect(inputs[1].value).toBe('Oscar Test')
        expect(inputs[2].value).toBe('oscar@oscar.com')
        expect(date.value).toBe('2023-07-13')
        expect(textarea.value).toBe('Le duele la pata derecha')
    });
    test('Submit', () => {

        (useForm as jest.Mock).mockReturnValue({
            changeValues: jest.fn(),
            reset: resetMock,
            setform: jest.fn()
        });

        (usePacient as jest.Mock).mockReturnValue({
            addPacient: addPacientMock,
            cleanPacient: jest.fn(),
            updatePacient: jest.fn(),
            pacientActive: null
        });

        render(<Form />)
        const inputs = screen.getAllByRole<HTMLInputElement>('textbox')
        const date = screen.getByLabelText<HTMLInputElement>('date')
        const textarea = screen.getByLabelText<HTMLTextAreaElement>('textarea')
        const form = screen.getByLabelText('form')

        fireEvent.input(inputs[0], { target: { value: 'Perrinho' } })
        fireEvent.input(inputs[1], { target: { value: 'Oscar Test' } })
        fireEvent.input(inputs[2], { target: { value: 'oscar@oscar.com' } })
        fireEvent.input(date, { target: { value: '2023-07-13' } })
        fireEvent.input(textarea, { target: { value: 'Le duele la pata derecha' } })
        fireEvent.submit(form)

        expect(addPacientMock).toBeCalled()
        expect(resetMock).toBeCalled()
    });
});