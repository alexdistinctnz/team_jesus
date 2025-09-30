export interface DonationRequest {
  amount: number;
  isMonthly: boolean;
  email?: string;
  name?: string;
}

export interface DonationResponse {
  success: boolean;
  transactionId?: string;
  message?: string;
  error?: string;
}

export interface PaymentProvider {
  processDonation(request: DonationRequest): Promise<DonationResponse>;
  getName(): string;
}

// TODO: Implement StripePaymentProvider or DonorboxPaymentProvider
// TODO: Add environment variables for payment keys:
//   - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
//   - STRIPE_SECRET_KEY
// TODO: Wire up the real provider in DonateWidget component