import { useSelector } from "react-redux";

const OurServices = () => {
  const counter = useSelector((state) => state.homePageReducer.OurServices);
  return (
    <div className="container mx-auto px-4 py-6" id="Our Services">
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 grid-flow-row">
        <div className="flex items-center md:p-0 p-9">
          <img src={counter.service} alt={counter.service} />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="my-2">
            {counter.title}
          </h2>
          <h3 className="my-2">
            {counter.content}
          </h3>
          <ul>
            {counter.ourService.map((item) => (
              <li className="py-2 flex flex-row">
                <img className="object-none" src={counter.check} alt="check" />
                <h4 className="px-2">{item}</h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
