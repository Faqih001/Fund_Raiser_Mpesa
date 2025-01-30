'use client';

import PaymentForm from '@/components/PaymentForm';

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 p-14">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
            Be a Catalyst for Change
          </h2>
          <p className="mt-4 text-gray-600">
            Your generous contribution powers our mission to bring technology and education to underserved communities. 
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <PaymentForm />
        </div>
      </div>
    </div>
  );
}
