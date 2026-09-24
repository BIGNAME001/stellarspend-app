import { render, screen } from '@testing-library/react';
import { Button } from '../button';

describe('Button', () => {
  it('passes aria-label to the underlying button', () => {
    render(<Button aria-label="Open settings">Settings</Button>);

    expect(screen.getByRole('button', { name: 'Open settings' })).toBeInTheDocument();
  });

  it('renders a spinner when loading', () => {
    render(<Button loading>Saving</Button>);

    expect(screen.getByTestId('button-spinner')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Saving' })).toBeDisabled();
  });
});
