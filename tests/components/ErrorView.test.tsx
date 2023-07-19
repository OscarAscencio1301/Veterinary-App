import { render, screen } from '@testing-library/react'
import { ErrorView } from '../../src/components/ErrorView';

describe('Testing component ErrorView', () => {
    test('Snapshot', () => {
        const { container } = render(<ErrorView><p>Error Testing</p></ErrorView>)
        expect(container).toMatchSnapshot()
    });
    test('Initial Values', () => {
        render(<ErrorView><p>Error Testing</p></ErrorView>)
        expect(screen.getByText('Error Testing')).toBeTruthy()
    });
    test('ClassList', () => {
        render(<ErrorView><p>Error Testing</p></ErrorView>)
        const p = screen.getByLabelText('error')
        expect(p.classList.toString()).toContain('bg-red-800')
    });
});