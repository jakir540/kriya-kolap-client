import Lottie from "react-lottie-player";

import lottieJson from "../../../assets/Loader.json";


const Loader = () => {
    return (
        <div>
            <div className="w-full h-full">
          {" "}
          <Lottie
            loop
            animationData={lottieJson}
            play
            className="w-full h-full"
          />
        </div>
        </div>
    );
};

export default Loader;