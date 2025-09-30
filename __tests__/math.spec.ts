import { describe, it, expect } from 'vitest';
import { calculatePeopleReached, PEOPLE_PER_DOLLAR } from '@/lib/config';

describe('People-per-dollar calculation', () => {
  it('should calculate correct people reached for $1', () => {
    expect(calculatePeopleReached(1)).toBe(1000);
  });

  it('should calculate correct people reached for $10', () => {
    expect(calculatePeopleReached(10)).toBe(10000);
  });

  it('should calculate correct people reached for $100', () => {
    expect(calculatePeopleReached(100)).toBe(100000);
  });

  it('should use the PEOPLE_PER_DOLLAR constant correctly', () => {
    const amount = 25;
    expect(calculatePeopleReached(amount)).toBe(amount * PEOPLE_PER_DOLLAR);
  });

  it('should handle decimal amounts', () => {
    expect(calculatePeopleReached(1.5)).toBe(1500);
    expect(calculatePeopleReached(0.5)).toBe(500);
  });

  it('should handle zero', () => {
    expect(calculatePeopleReached(0)).toBe(0);
  });
});