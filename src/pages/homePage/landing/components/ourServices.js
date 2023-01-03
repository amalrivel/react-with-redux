import { useSelector } from "react-redux";

const OurServices = () => {
  const counter = useSelector((state) => state.homePageReducer.ourServices);
  return (
    <div className="container mx-auto px-4 py-6" id="Our Services">
      <div className="grid gap-4 lg:grid-cols-2 grid-cols-1 grid-flow-row">
        <div className="flex justify-center items-center">
          <img src={counter.service} alt={counter.service} />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="my-2">
            {counter.title}
          </h2>
          <h4 className="my-2">
            {counter.content}
          </h4>
          <ul>
            {counter.ourService.map((item, index) => (
              <li className="py-2 flex flex-row" key={index}>
                <img className="object-none" src={counter.check} alt="check" />
                <p className="px-2">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
