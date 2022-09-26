const initialState = {
  navbar: {
    logo: "",
    navList: ["Our Services", "Why Us", "Testimonial", "FAQ", "Register"],
    toggleDrawer: false,
  },
};

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "toggleDrawerHandler":
      return { ...state, toggleDrawer: action.payload };
    default:
      return state;
  }
};

export default homePageReducer;
