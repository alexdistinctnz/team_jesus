export const GOAL_DOLLARS = 8142000;
export const GOAL_PEOPLE = 8142000000;
export const PEOPLE_PER_DOLLAR = 1000;
export const PAYOUT_RATE = 0.01; // per 10 views

export const INITIAL_PEOPLE_REACHED = 41638201;
export const INITIAL_AMOUNT_RAISED = Math.floor(INITIAL_PEOPLE_REACHED / PEOPLE_PER_DOLLAR);

export function calculatePeopleReached(amountUSD: number): number {
  return amountUSD * PEOPLE_PER_DOLLAR;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}