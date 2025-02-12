import { NextResponse } from 'next/server';
import { updateDonationByCheckoutId } from '@/services/donationService';

// Function to update donation status by checkoutRequestId and mpesaCode
export async function GET(request) {
  // Try catch for quick update error handling
  try {
    const { searchParams } = new URL(request.url);
    const checkoutRequestId = searchParams.get('id');
    const mpesaCode = searchParams.get('code');

    if (!checkoutRequestId || !mpesaCode) {
      return NextResponse.json(
        { error: 'Missing id or code parameter' },
        { status: 400 }
      );
    }

    const updateResult = await updateDonationByCheckoutId(checkoutRequestId, {
      status: 'completed',
      mpesaCode,
      transactionDate: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, updated: updateResult.modifiedCount > 0 });
  } catch (error) {
    console.error('Quick update error:', error);
    return NextResponse.json(
      { error: 'Update failed' },
      { status: 500 }
    );
  }
} 