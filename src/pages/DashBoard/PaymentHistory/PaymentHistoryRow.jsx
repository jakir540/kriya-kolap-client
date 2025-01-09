const PaymentHistoryRow = ({ index, singlePayment }) => {
  return (
    <tr className="hover:bg-[#40465a] transition duration-200">
      {/* Row Index */}
      <td className="py-3 px-4 text-gray-300 text-center">{index + 1}</td>

      {/* User Email */}
      <td
        className="py-3 px-4 text-gray-300 truncate max-w-[150px]"
        title={singlePayment.user}
      >
        {singlePayment.user}
      </td>

      {/* Class Name (with text-wrap for long names) */}
      <td className="py-3 px-4 text-gray-300 max-w-[150px] whitespace-nowrap overflow-hidden overflow-ellipsis">
        {singlePayment.name}
      </td>

      {/* Price */}
      <td className="py-3 px-4 text-indigo-400 font-semibold text-center">
        ${singlePayment.price}
      </td>

      {/* Transaction ID */}
      <td className="py-4 px-6 text-gray-300">{singlePayment.transictionId}</td>

      {/* Date */}
      <td className="py-3 px-4 text-gray-300 whitespace-nowrap">
        {new Date(singlePayment.date).toLocaleString()}
      </td>
    </tr>
  );
};

export default PaymentHistoryRow;
