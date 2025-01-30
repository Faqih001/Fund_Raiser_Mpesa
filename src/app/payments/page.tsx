'use client';

import PaymentMethodsList from '@/components/PaymentMethodsList';

export default function PaymentMethodsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
            Payment Methods
          </h2>
          <p className="mt-4 text-gray-600">
            Manage your saved payment methods or add a new one for seamless transactions.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <PaymentMethodsList />
        </div>
      </div>
    </div>
  );
}
