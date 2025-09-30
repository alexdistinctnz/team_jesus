import type { PaymentProvider, DonationRequest, DonationResponse } from './PaymentProvider';

export class MockPaymentProvider implements PaymentProvider {
  getName(): string {
    return 'Mock Payment Provider';
  }

  async processDonation(request: DonationRequest): Promise<DonationResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1200));

    // Validate amount
    if (request.amount < 1) {
      return {
        success: false,
        error: 'Minimum donation amount is $1',
      };
    }

    // Simulate successful payment
    const transactionId = `mock_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    return {
      success: true,
      transactionId,
      message: `Successfully processed ${request.isMonthly ? 'monthly' : 'one-time'} donation of $${request.amount}`,
    };
  }
}

export const mockPaymentProvider = new MockPaymentProvider();