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

        {/* Collect Section */}
        <div className="mt-10 bg-black text-white p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Collect</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white text-black p-4 rounded-lg shadow">
              <h4 className="font-semibold">Global accounts</h4>
              <p className="text-sm">Access comprehensive account details, both internationally, with ease.</p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg shadow">
              <h4 className="font-semibold">Online payments</h4>
              <p className="text-sm">Integrate the capability to accept payments directly on your website.</p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg shadow">
              <h4 className="font-semibold">Invoices</h4>
              <p className="text-sm">Incorporate distinct payment links into invoices messages sent to your customers.</p>
            </div>
          </div>
        </div>

        {/* Manage Account Section */}
        <div className="mt-6 text-center border border-gray-300 p-6 rounded-lg">
          <h3 className="text-lg font-semibold">Manage Account</h3>
          <p className="text-sm text-gray-600">Hold funds in 35 Currencies and Access market-leading FX rates</p>
          <div className="mt-2 flex justify-center gap-2">
            <span className="text-xl">🌍 🇺🇸 🇪🇺 🇬🇧 🇨🇦 🇦🇺 🇯🇵</span>
          </div>
        </div>

        {/* Spend Section */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Spend</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold">Transfers</h4>
              <p className="text-sm">Facilitate quicker and more cost-effective domestic and international payments.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold">Payout cards</h4>
              <p className="text-sm">Enable swifter, more economical domestic and international transactions.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold">Expenses</h4>
              <p className="text-sm">Effortlessly capture and efficiently manage employee expenses streamlined process.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
