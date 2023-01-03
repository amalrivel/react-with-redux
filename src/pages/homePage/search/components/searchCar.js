import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { callAPI } from "../../../../redux/actions/homePageAction";

const SearchCar = () => {
  const counter = useSelector((state) => state.homePageReducer.searchCar);
  const dispatch = useDispatch();

  //   React.useEffect(() => {
  //     axios
  //       .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
  //       .then((res) =>{console.log(res); dispatch(callAPI(res))})
  //       .catch((err) => console.log(err));
  //   }, [dispatch]);
  React.useEffect(() => {
    axios
      .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
      .then(res => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  //  console.log(counter.data);
  return (
    <div className="relative lg:px-36 md:px-12 sm:px-8 px-4 py-6 -mt-16 w-full">
      {/* <div className="bg-white border rounded-lg p-4">
        <form
          onSubmit={(event) => props.handleSubmit(event)}
          className="grid gap-4 lg:grid-cols-9 sm:grid-cols-2 grid-cols-1 grid-flow-row"
        >
          {props.searchItem.map((item, index) =>
            index === 0 ? (
              <div className="lg:col-span-2 col-span-1">
                <label for={item.name} className="block text-sm mb-2">
                  {item.label}
                </label>
                <input
                  value={item.value}
                  onChange={(event) => props.handleChange(event)}
                  name={item.name}
                  type="text"
                  disabled={Object.keys(props.id).length !== 0 ? true : false}
                  className="py-2 px-4 block w-full shadow-sm sm:text-sm border rounded-md disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                />
              </div>
            ) : (
              <div className="lg:col-span-2 col-span-1">
                <label for={item.name} className="block text-sm mb-2">
                  {item.label}
                </label>
                <div class="relative">
                  <select
                    className="appearance-none py-2 px-4 block w-full shadow-sm sm:text-sm border rounded-md pr-8 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    name={item.name}
                    value={item.value}
                    onChange={(event) => props.handleChange(event)}
                    disabled={Object.keys(props.id).length !== 0 ? true : false}
                  >
                    {item.option.map((item) => (
                      <option value={item.value}>{item.content}</option>
                    ))}
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          )}
          <div className="flex items-end lg:col-span-1 sm:col-span-2 col-span-1">
            <button
              type="submit"
              value="Submit"
              disabled={Object.keys(props.id).length !== 0 ? true : false}
              className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 w-full shadow-sm sm:text-sm border rounded-md font-bold disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
            >
              Cari
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default SearchCar;
