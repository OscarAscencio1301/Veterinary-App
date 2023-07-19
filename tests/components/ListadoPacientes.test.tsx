import { render, screen } from "@testing-library/react";
import { pacientsTesting } from "../fixtures/pacients"
import { ListadoPacientes } from "../../src/components/ListadoPacuents";
import { usePacient } from "../../src/hooks/usePacient";

jest.mock('../../src/hooks/usePacient')


describe('Testing Component ListadoPacientes', () => {
    test('Initial Values ', () => {
        (usePacient as jest.Mock).mockReturnValue({
            pacients: []
        })

        render(<ListadoPacientes />)

        expect(screen.getByText('No hay Pacientes')).toBeTruthy()
    });
    test('Pacients List', () => {
        (usePacient as jest.Mock).mockReturnValue({
            pacients: pacientsTesting
        })

        render(<ListadoPacientes />)
        const elements = screen.getAllByLabelText("pacient")

        expect(elements.length).toBe(pacientsTesting.length)
    });

});