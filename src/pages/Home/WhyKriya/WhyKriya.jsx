import icon1 from "../../../assets/ico-1.png";
import icon2 from "../../../assets/ico-2.png";
import icon3 from "../../../assets/ico-3.png";
import icon4 from "../../../assets/floral-decor.png";
const WhyKriya = () => {
  return (
    <div className="my-10">
      <h2 className="text-center text-3xl font-semibold my-16">
        Why KRIYA KOLAP?
      </h2>
      <div className="flex items-center justify-between gap-5">
        <div className="flex gap-4">
          <div>
            <img className="w-32" src={icon1} alt="" />
          </div>
          <div className="flex flex-col ">
            <h3 className="text-xl font-semibold border-b border-dotted border-orange-200 ">
              COMPLETE VIDEO SUPPORT
            </h3>
            <div className="border border-orange-200 my-1"></div>
            <p className="py-3">
              Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
              diam. Sed arcu. Cras consequat.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <img className="w-32" src={icon2} alt="" />
          </div>
          <div className="flex flex-col ">
            <h3 className="text-xl uppercase font-semibold border-b border-dotted border-gray-400 ">
              best of customization
            </h3>
            <div className="border border-orange-200 my-1"></div>
            <p className="py-3">
              Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
              diam. Sed arcu. Cras consequat.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <img className="w-32" src={icon3} alt="" />
          </div>
          <div className="flex flex-col ">
            <h3 className="text-xl uppercase font-semibold border-b border-dotted border-gray-400 ">
              easy to setup
            </h3>
            <div className="border border-orange-200 my-1"></div>
            <p className="py-3">
              Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
              diam. Sed arcu. Cras consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-3">
        
        <div className="flex gap-5">
        <span className="text-orange-400">--------------------------</span>
          <img src={icon4} alt="" />
        <span className="text-orange-400">--------------------------</span>
        </div>
       
      </div>
    </div>
  );
};

export default WhyKriya;
