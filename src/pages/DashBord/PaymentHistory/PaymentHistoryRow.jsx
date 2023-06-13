
const PaymentHistoryRow = ({singlePayment,index}) => {
    
    const {_id,name,price,transictionId,date,user} = singlePayment
    const localDate = date.toLocaleString()    
    const dateTime = new Date(localDate);
    const options = { timeZone: "Asia/Dhaka", hour12: false, hour: "numeric", minute: "numeric", second: "numeric" };
    const digitalClock = dateTime.toLocaleString(undefined, options);




    return (
        <tr key={_id}>
                    <th>{index + 1}</th>

                    <td>{user}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{transictionId}</td>
                    <td className="text-center">{digitalClock}</td>
                  </tr>
    );
};

export default PaymentHistoryRow;