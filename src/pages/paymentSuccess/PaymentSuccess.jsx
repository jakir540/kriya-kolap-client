import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
    const {tranID} = useParams();
    console.log({tranID})
  return (
    <div>
    <h1> payment successfull {tranID}</h1>
      <h1 className="text-green-900">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum enim
        debitis sequi autem molestiae quam placeat veniam eligendi fugit,
        suscipit deleniti minus voluptate quis officiis amet non ea ducimus
        adipisci? payment successfull
      </h1>
    </div>
  );
};

export default PaymentSuccess;
