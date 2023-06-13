import { useEffect, useState } from "react";
import PaymentHistoryRow from "./PaymentHistoryRow";

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    fetch("https://kriya-kolap-sever-jakir540.vercel.app/paymentHistory")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPaymentHistory(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold my-10">
        Payment History {paymentHistory.length}
      </h2>

      <div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>

                  <th>Email</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>transictionId</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((singlePayment, index) => <PaymentHistoryRow index={index} singlePayment={singlePayment} key={singlePayment._id}></PaymentHistoryRow>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
 {/* <tr key={singlePayment._id}>
                    <th>{index + 1}</th>

                    <td>{singlePayment.user}</td>
                    <td>{singlePayment.name}</td>
                    <td>{singlePayment.price}</td>
                    <td>{singlePayment.transictionId}</td>
                    <td className="text-center">{(singlePayment.date).toLocalTimeString()}</td>
                  </tr> */}