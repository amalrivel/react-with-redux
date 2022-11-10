import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import {
  handleOnNextClick,
  handleOnPrevClick,
} from "../../../../redux/actions/homePageAction";

const Testimony = () => {
  const counter = useSelector((state) => state.homePageReducer.testimony);
  const dispatch = useDispatch();
  return (
    <div className="lg:mx-36 md:mx-12 sm:mx-8 mx-4 py-6" id="Testimonial">
      <div>
        <p className="font-bold text-2xl my-2 text-center">{counter.title}</p>
        <p className="font-bold my-4 text-center">{counter.desc}</p>
      </div>
      <div className="lg:-mx-36 md:-mx-12">
        <div className="">
          <ul className="overflow-hidden flex justify-center ">
            {[1, 2, 3].map(() => (
              <div
                className={`transition duration-700 delay-100 translate-x-[${counter.currentIndex}%]`}
              >
                <div className="mx-2">
                  <div className="flex md:flex-nowrap flex-wrap justify-center bg-blue-100 rounded-md md:w-[640px] sm:w-[87vw] w-[92vw] p-12">
                    <img
                      className="object-none p-4"
                      src={counter.photo}
                      alt={counter.photo}
                    />
                    <div className="flex flex-col p-4">
                      <div className="flex md:justify-start justify-center">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>
                      <p className="font-bold py-4">{counter.review}</p>
                      <p className="text-sm">{counter.reviewName}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <button
            className="m-2"
            onClick={() => {
              dispatch(handleOnPrevClick(counter.currentIndex));
            }}
          >
            <ArrowCircleLeftIcon />
          </button>
          <button
            className="m-2"
            onClick={() => {
              dispatch(handleOnNextClick(counter.currentIndex));
            }}
          >
            <ArrowCircleRightIcon />
          </button>
        </div>
      </div>
      <div className="hidden translate-x-[0]">
        <div className="hidden translate-x-[100%]">
          <div className="hidden  translate-x-[-100%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
