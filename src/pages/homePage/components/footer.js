import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const counter = useSelector((state) => state.homePageReducer.footer);
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid gap-2.5 md:grid-cols-12 sm:grid-cols-2 grid-cols-1 grid-flow-row">
        <div className="md:col-span-4">
          {counter.address.map((item) => (
            <h4 className="my-4">{item}</h4>
          ))}
        </div>
        <div className="md:col-span-2 flex flex-col">
          {counter.navList.map((item) => (
            <Link href={"#" + item} className="my-2">
              {item}
            </Link>
          ))}
        </div>
        <div className="md:col-span-4">
          <h4 className="my-2">Connect with us</h4>
          {counter.icon.map((icon) => (
            <img src={icon} alt={icon} className="inline-block m-1" />
          ))}
        </div>
        <div className="md:col-span-2">
          <h4 className="my-2">Copyright Binar 2022</h4>
          <Link to={`/`}>
            <img src={counter.logo} alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
