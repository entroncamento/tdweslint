import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from './page';

test('renders the page heading', () => {
  render(<Page />);
  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading).toBeInTheDocument();
});
