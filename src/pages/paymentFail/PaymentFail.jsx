
const PaymentFail = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">Payment Failed</h2>
        <p className="text-gray-700 mb-4">We're sorry, your payment could not be processed.</p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default PaymentFail;
