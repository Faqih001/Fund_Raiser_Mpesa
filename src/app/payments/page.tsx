'use client';

export default function PaymentsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Streamline your finances in one platform.
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Move and use your funds with ease never felt before.
        </p>

        {/* M-Pesa Payment Section */}
        <div className="mt-10 bg-blue-500 text-white p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">M-Pesa Payments</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white text-black p-4 rounded-lg shadow">
              <h4 className="font-semibold">Instant Payments</h4>
              <p className="text-sm">Send and receive payments instantly, with no delays, directly from your mobile phone.</p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg shadow">
              <h4 className="font-semibold">Wide Accessibility</h4>
              <p className="text-sm">Access to a wide user base across Kenya and various other countries where M-Pesa is supported.</p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg shadow">
              <h4 className="font-semibold">Secure Transactions</h4>
              <p className="text-sm">Benefit from M-Pesa’s secure, encrypted platform, ensuring safe and reliable payments.</p>
            </div>
          </div>
        </div>

        {/* M-Pesa Benefits Section */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Benefits of Using M-Pesa</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold">Low Transaction Fees</h4>
              <p className="text-sm">Enjoy affordable fees for both local and international transactions, making M-Pesa a cost-effective payment option.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold">Convenient Withdrawals</h4>
              <p className="text-sm">Easily withdraw funds at thousands of M-Pesa agents and ATMs across the region, providing flexible access to cash.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold">Mobile Integration</h4>
              <p className="text-sm">M-Pesa’s seamless integration with mobile phones makes it incredibly easy for businesses and individuals to manage their finances on-the-go.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold">Cashless Transactions</h4>
              <p className="text-sm">Go cashless and reduce the risk of handling physical money with secure mobile payments anytime, anywhere.</p>
            </div>
          </div>
        </div>

        {/* How to Use M-Pesa Section */}
        <div className="mt-6 text-center border border-gray-300 p-6 rounded-lg">
          <h3 className="text-lg font-semibold">How to Use M-Pesa</h3>
          <p className="text-sm text-gray-600">Quick and easy steps to start using M-Pesa for payments, transfers, and more.</p>
          <div className="mt-2 flex justify-center gap-2">
            <span className="text-xl">📱 Send Money 🏧 Withdraw Cash 💳 Pay Bills</span>
          </div>
        </div>
      </div>
    </div>
  );
}


