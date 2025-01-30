'use client';

export default function PaymentMethodsList({ mpesa }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="relative w-full h-40 bg-green-600 flex items-center justify-center rounded-md mb-4">
        <h3 className="text-2xl font-bold text-white">M-Pesa</h3>
      </div>
      <h3 className="text-lg font-semibold text-gray-900">Saved Payment Methods</h3>
      <div className="mt-4 border-t pt-4">
        <h4 className="text-md font-medium text-gray-700">{mpesa.provider}</h4>
        <p className="text-sm text-gray-600">Phone Number: {mpesa.phoneNumber}</p>
        <p className="text-sm text-gray-600">Paybill: {mpesa.paybill}</p>
        <p className="text-sm text-gray-600">Account Number: {mpesa.accountNumber}</p>
      </div>
    </div>
  );
}
