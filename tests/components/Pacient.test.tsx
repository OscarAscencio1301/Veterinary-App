import { fireEvent, render, screen } from "@testing-library/react";
import { Paciente } from "../../src/components/Paciente";
import { pacientsTesting } from "../fixtures/pacients";
import { usePacient } from "../../src/hooks/usePacient";

jest.mock('../../src/hooks/usePacient')

describe('Testing Pacient', () => {
    const mockdeletePacient = jest.fn();
    const mockactivePacient = jest.fn();

    beforeEach(() => jest.clearAllMocks())
    test('Initial Values ', () => {
        (usePacient as jest.Mock).mockReturnValue({
            deletePacient: mockdeletePacient,
            activePacient: mockactivePacient
        })

        render(<Paciente {...pacientsTesting[0]} />)

        expect(screen.getByText(pacientsTesting[0].name)).toBeTruthy()
        expect(screen.getByText(pacientsTesting[0].pet)).toBeTruthy()
        expect(screen.getByText(pacientsTesting[0].date)).toBeTruthy()
        expect(screen.getByText(pacientsTesting[0].sintoms)).toBeTruthy()
    });

    test('Active Value', () => {
        (usePacient as jest.Mock).mockReturnValue({
            deletePacient: mockdeletePacient,
            activePacient: mockactivePacient
        })

        render(<Paciente {...pacientsTesting[0]} />)

        const buttonUpdate = screen.getAllByRole('button')[0]

        fireEvent.click(buttonUpdate)

        expect(mockactivePacient).toBeCalled()
        expect(mockactivePacient).toBeCalledTimes(1)
        expect(mockactivePacient).toBeCalledWith(pacientsTesting[0])
    })

    test('Delete Button', () => {
        (usePacient as jest.Mock).mockReturnValue({
            deletePacient: mockdeletePacient,
            activePacient: mockactivePacient
        })

        render(<Paciente {...pacientsTesting[0]} />)

        const buttonDelete= screen.getAllByRole('button')[1]

        fireEvent.click(buttonDelete)

        expect(mockdeletePacient).toBeCalled()
        expect(mockdeletePacient).toBeCalledTimes(1)
        expect(mockdeletePacient).toBeCalledWith(pacientsTesting[0].id)
    });
})