import { useSelector } from "react-redux";

const CTABanner = () => {
  const counter = useSelector((state) => state.homePageReducer.CTABanner);
  return (
    <div className="lg:px-36 md:px-12 sm:px-8 px-4 py-6 ">
      <div className="bg-blue-900 rounded-lg flex flex-col items-center justify-center text-center p-16">
        <p className="text-white text-4xl font-bold my-4">{counter.title}</p>
        <p className="text-white my-4">{counter.desc}</p>
        <button className="btn-primary my-2 w-44">Mulai Sewa Mobil</button>
      </div>
    </div>
  );
};

export default CTABanner;
