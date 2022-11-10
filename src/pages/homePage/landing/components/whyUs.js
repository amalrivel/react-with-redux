import { useSelector } from "react-redux";

const WhyUs = () => {
  const counter = useSelector((state) => state.homePageReducer.whyUs);
  return (
    <div className="container mx-auto px-4 py-6" id="Why Us">
      <p className="font-bold text-2xl my-2">{counter.title}</p>
      <p className="font-bold my-4">{counter.desc}</p>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-flow-row">
        {counter.content.map((item) => (
            <div className="border rounded-md">
              <div className="p-6">
                <img className="mb-2" src={item.img} alt={item.img} />
                <p className="font-bold my-2 text-lg">{item.name}</p>
                <p>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WhyUs;
