import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {
  const counter = useSelector((state) => state.homePageReducer.hero);
  return (
    <div className="bg-blue-50">
      <div className="container-hero ml-auto">
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1 grid-flow-row">
          <div className="flex flex-col justify-center pb-8 px-4 container">
            <h2 className="my-2">
              {counter.title}
            </h2>
            <h4 className="my-2">
              {counter.content}
            </h4>
            <Link to={"/search-car"}>
            
            <button className="btn-primary my-2 w-44">Mulai Sewa Mobil</button>
            </Link>
          </div>
          <div className="flex items-end justify-end ml-4">
            <img src={counter.car} alt="car" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
