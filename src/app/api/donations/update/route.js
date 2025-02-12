import { NextResponse } from 'next/server';
import { updateDonationByCheckoutId } from '@/services/donationService';

// Function to update donation status by checkoutRequestId and mpesaCode
export async function POST(request) {
  // Try catch for quick update error handling
  try {
    // Get checkoutRequestId and mpesaCode from request body
    const { checkoutRequestId, mpesaCode } = await request.json();

    // If checkoutRequestId or mpesaCode is missing, return 400 error
    if (!checkoutRequestId || !mpesaCode) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const updateResult = await updateDonationByCheckoutId(checkoutRequestId, {
      status: 'completed',
      mpesaCode,
      transactionDate: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, result: updateResult });
  } catch (error) {
    console.error('Error updating donation:', error);
    return NextResponse.json(
      { error: 'Failed to update donation' },
      { status: 500 }
    );
  }
} 