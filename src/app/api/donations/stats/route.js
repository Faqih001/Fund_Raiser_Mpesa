import { NextResponse } from 'next/server';
import { getDonationStats } from '@/services/donationService';

// Function to GET donation stats
export async function GET() {

  // Try catch for donation stats error handling
  try {
    // Get donation stats
    const stats = await getDonationStats();
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching donation stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch donation stats' },
      { status: 500 }
    );
  }
} 