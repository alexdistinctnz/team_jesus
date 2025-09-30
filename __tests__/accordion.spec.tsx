import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { WhyThisMatters } from '@/components/WhyThisMatters';

// Mock analytics
vi.mock('@/utils/analytics', () => ({
  trackEvent: vi.fn(),
}));

describe('WhyThisMatters Accordion', () => {
  it('should render all accordion items', () => {
    render(<WhyThisMatters />);

    expect(screen.getByText('The Great Commission')).toBeInTheDocument();
    expect(screen.getByText('Fishers of Men')).toBeInTheDocument();
    expect(screen.getByText('They Must Hear')).toBeInTheDocument();
    expect(screen.getByText('Obedience')).toBeInTheDocument();
    expect(screen.getByText('Consequences of Silence')).toBeInTheDocument();
  });

  it('should expand item when clicked', () => {
    render(<WhyThisMatters />);

    const button = screen.getByRole('button', { name: /the great commission/i });

    // Initially collapsed
    expect(button).toHaveAttribute('aria-expanded', 'false');

    // Click to expand
    fireEvent.click(button);

    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should collapse item when clicked again', () => {
    render(<WhyThisMatters />);

    const button = screen.getByRole('button', { name: /fishers of men/i });

    // Expand
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');

    // Collapse
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('should be keyboard navigable with Enter key', () => {
    render(<WhyThisMatters />);

    const button = screen.getByRole('button', { name: /they must hear/i });

    // Press Enter to expand
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });

    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should be keyboard navigable with Space key', () => {
    render(<WhyThisMatters />);

    const button = screen.getByRole('button', { name: /obedience/i });

    // Press Space to expand
    fireEvent.keyDown(button, { key: ' ', code: 'Space' });

    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should only allow one item expanded at a time', () => {
    render(<WhyThisMatters />);

    const button1 = screen.getByRole('button', { name: /the great commission/i });
    const button2 = screen.getByRole('button', { name: /fishers of men/i });

    // Expand first item
    fireEvent.click(button1);
    expect(button1).toHaveAttribute('aria-expanded', 'true');

    // Expand second item
    fireEvent.click(button2);
    expect(button2).toHaveAttribute('aria-expanded', 'true');
    expect(button1).toHaveAttribute('aria-expanded', 'false');
  });

  it('should have correct ARIA attributes', () => {
    render(<WhyThisMatters />);

    const buttons = screen.getAllByRole('button');

    buttons.forEach((button) => {
      expect(button).toHaveAttribute('aria-expanded');
      expect(button).toHaveAttribute('aria-controls');
    });
  });

  it('should display verse references', () => {
    render(<WhyThisMatters />);

    expect(screen.getByText(/matthew 28:19–20/i)).toBeInTheDocument();
    expect(screen.getByText(/matthew 4:19/i)).toBeInTheDocument();
    expect(screen.getByText(/romans 10:14/i)).toBeInTheDocument();
  });
});