import { NextRequest, NextResponse } from 'next/server';
import { INITIAL_PEOPLE_REACHED, INITIAL_AMOUNT_RAISED, calculatePeopleReached } from '@/lib/config';

// In-memory store for demo purposes
let metrics = {
  peopleReached: INITIAL_PEOPLE_REACHED,
  amountRaised: INITIAL_AMOUNT_RAISED,
};

export async function GET() {
  return NextResponse.json(metrics);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount } = body;

    if (typeof amount !== 'number' || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // Update metrics
    metrics.amountRaised += amount;
    metrics.peopleReached += calculatePeopleReached(amount);

    return NextResponse.json(metrics);
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}