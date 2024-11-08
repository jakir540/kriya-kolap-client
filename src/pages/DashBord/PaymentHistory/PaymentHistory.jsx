import { useEffect, useState } from "react";
import PaymentHistoryRow from "./PaymentHistoryRow";

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    fetch("https://kriya-kolap-sever-jakir540.vercel.app/paymentHistory")
      .then((res) => res.json())
      .then((data) => {
        setPaymentHistory(data);
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto bg-[#2E344E] p-10 rounded-lg shadow-lg mt-10">
      <h2 className="text-center text-3xl font-semibold text-gray-200 mb-8">
        Payment History ({paymentHistory.length})
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-[#2E344E] text-gray-300 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-[#1F2633]">
              <th className="py-4 px-6 text-left font-semibold text-gray-400">
                #
              </th>
              <th className="py-4 px-6 text-left font-semibold text-gray-400">
                Email
              </th>
              <th className="py-4 px-6 text-left font-semibold text-gray-400">
                Name
              </th>
              <th className="py-4 px-6 text-left font-semibold text-gray-400">
                Price
              </th>
              <th className="py-4 px-6 text-left font-semibold text-gray-400">
                Transaction ID
              </th>
              <th className="py-4 px-6 text-left font-semibold text-gray-400">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((singlePayment, index) => (
              <PaymentHistoryRow
                index={index}
                singlePayment={singlePayment}
                key={singlePayment._id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
