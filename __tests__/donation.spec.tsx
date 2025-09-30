import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { DonateWidget } from '@/components/DonateWidget';
import { mockPaymentProvider } from '@/providers/mockPayment';

// Mock SWR
vi.mock('swr', () => ({
  default: () => ({
    data: { peopleReached: 41638201, amountRaised: 41638 },
    error: null,
    isLoading: false,
  }),
  mutate: vi.fn(),
}));

// Mock analytics
vi.mock('@/utils/analytics', () => ({
  trackEvent: vi.fn(),
}));

describe('DonateWidget', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render donation form', () => {
    render(<DonateWidget />);

    expect(screen.getByLabelText(/donation amount/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /one-time/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /monthly/i })).toBeInTheDocument();
  });

  it('should display impact preview', () => {
    render(<DonateWidget />);

    // Default amount is $25
    expect(screen.getByText('25,000 people')).toBeInTheDocument();
    expect(screen.getByText('will hear about Jesus')).toBeInTheDocument();
  });

  it('should update impact preview when amount changes', () => {
    render(<DonateWidget />);

    const input = screen.getByLabelText(/donation amount/i);
    fireEvent.change(input, { target: { value: '50' } });

    expect(screen.getByText('50,000 people')).toBeInTheDocument();
  });

  it('should toggle between one-time and monthly', () => {
    render(<DonateWidget />);

    const monthlyButton = screen.getByRole('button', { name: /monthly/i });
    const oneTimeButton = screen.getByRole('button', { name: /one-time/i });

    // Initially one-time should be selected
    expect(oneTimeButton).toHaveAttribute('aria-pressed', 'true');
    expect(monthlyButton).toHaveAttribute('aria-pressed', 'false');

    // Click monthly
    fireEvent.click(monthlyButton);

    expect(monthlyButton).toHaveAttribute('aria-pressed', 'true');
    expect(oneTimeButton).toHaveAttribute('aria-pressed', 'false');
  });

  it('should show error for invalid amount', async () => {
    render(<DonateWidget />);

    const input = screen.getByLabelText(/donation amount/i);
    fireEvent.change(input, { target: { value: '0' } });

    const submitButton = screen.getByRole('button', { name: /donate/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/minimum donation is \$1/i)).toBeInTheDocument();
    });
  });

  it('should process donation successfully', async () => {
    render(<DonateWidget />);

    const input = screen.getByLabelText(/donation amount/i);
    fireEvent.change(input, { target: { value: '100' } });

    const submitButton = screen.getByRole('button', { name: /donate \$100/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/thank you!/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/100,000 people/i)).toBeInTheDocument();
  });

  it('should have accessible form labels', () => {
    render(<DonateWidget />);

    const amountInput = screen.getByLabelText(/donation amount/i);
    expect(amountInput).toHaveAccessibleDescription();
  });
});