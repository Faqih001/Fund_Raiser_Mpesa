/* eslint-disable react/no-unescaped-entities */
'use client';

export default function PaymentsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center leading-tight pt-12 sm:text-3xl md:text-4xl lg:text-5xl">
          Streamline Your Finances with M-Pesa Payments
        </h2>
        <p className="text-lg text-center text-gray-600 mt-4 sm:text-base md:text-lg lg:text-xl">
          Simplify how you send, receive, and manage your funds with our easy-to-use platform. Experience the future of mobile payments today.
        </p>

        {/* M-Pesa Payment Section */}
        <div className="mt-10 bg-blue-500 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 sm:text-xl md:text-2xl lg:text-3xl">M-Pesa Payments</h3>
          <p className="text-lg mb-4 sm:text-base md:text-lg">
            M-Pesa revolutionizes the way people handle payments. Here's why you should consider it for your financial transactions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold text-xl sm:text-lg md:text-xl">Instant Payments</h4>
              <p className="text-sm mt-2 sm:text-xs md:text-sm">Send and receive payments instantly, anytime, directly from your mobile device. No delays, no hassle.</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold text-xl sm:text-lg md:text-xl">Wide Accessibility</h4>
              <p className="text-sm mt-2 sm:text-xs md:text-sm">Reach millions of users across Kenya and other countries where M-Pesa is supported, making it easier to transact globally.</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold text-xl sm:text-lg md:text-xl">Secure Transactions</h4>
              <p className="text-sm mt-2 sm:text-xs md:text-sm">Rest assured with M-Pesa's highly secure, encrypted platform, designed to ensure that your transactions are safe and reliable.</p>
            </div>
          </div>
        </div>

        {/* M-Pesa Benefits Section */}
        <div className="mt-10 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 sm:text-xl md:text-2xl lg:text-3xl">Why Choose M-Pesa?</h3>
          <p className="text-lg text-gray-700 mb-6 sm:text-base md:text-lg lg:text-xl">
            Discover the various benefits M-Pesa offers to users and businesses alike. M-Pesa isn't just about payments — it’s about creating a seamless financial experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h4 className="font-semibold text-xl sm:text-lg md:text-xl">Low Transaction Fees</h4>
              <p className="text-sm mt-2 sm:text-xs md:text-sm">M-Pesa offers affordable transaction fees, making it one of the most cost-effective ways to send money both locally and internationally.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h4 className="font-semibold text-xl sm:text-lg md:text-xl">Convenient Withdrawals</h4>
              <p className="text-sm mt-2 sm:text-xs md:text-sm">Withdraw your funds from thousands of M-Pesa agents, ATMs, and mobile money points across the region, giving you flexible access to cash anytime.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h4 className="font-semibold text-xl sm:text-lg md:text-xl">Mobile Integration</h4>
              <p className="text-sm mt-2 sm:text-xs md:text-sm">M-Pesa is fully integrated with your mobile phone, offering convenience and accessibility, whether you’re on the go or managing payments remotely.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h4 className="font-semibold text-xl sm:text-lg md:text-xl">Cashless Transactions</h4>
              <p className="text-sm mt-2 sm:text-xs md:text-sm">Avoid handling physical cash with M-Pesa’s secure mobile payments system, reducing the risk of theft or loss while promoting a safer, cashless society.</p>
            </div>
          </div>
        </div>

        {/* How to Use M-Pesa Section */}
        <div className="mt-10 bg-gray-200 p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-4 sm:text-xl md:text-2xl lg:text-3xl">How to Use M-Pesa</h3>
          <p className="text-lg text-gray-700 mb-6 sm:text-base md:text-lg lg:text-xl">Getting started with M-Pesa is quick and easy. Follow these simple steps to send money, pay bills, and much more.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white text-black p-6 rounded-lg shadow w-full sm:w-1/3 md:w-1/3 lg:w-1/4">
              <span className="text-3xl font-semibold">📱</span>
              <h4 className="font-semibold text-xl mt-4">Send Money</h4>
              <p className="text-sm mt-2 sm:text-xs md:text-sm">Transfer funds to anyone, anywhere, at any time with a few simple taps on your phone.</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow w-full sm:w-1/3 md:w-1/3 lg:w-1/4">
              <span className="text-3xl font-semibold">🏧</span>
              <h4 className="font-semibold text-xl mt-4">Withdraw Cash</h4>
              <p className="text-sm mt-2 sm:text-xs md:text-sm">Withdraw cash easily at thousands of agents or ATMs across the region. It’s fast, simple, and accessible.</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow w-full sm:w-1/3 md:w-1/3 lg:w-1/4">
              <span className="text-3xl font-semibold">💳</span>
              <h4 className="font-semibold text-xl mt-4">Pay Bills</h4>
              <p className="text-sm mt-2 sm:text-xs md:text-sm">Pay bills quickly and securely from your phone, saving time and avoiding long queues.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
