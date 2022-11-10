export const toggleDrawerHandler = (payload) => (dispatch) => {
  dispatch({
    type: "toggleDrawerHandler",
    payload: !payload,
  });
};

export const handleOnNextClick = (payload) => (dispatch) => {
  dispatch({
    type: "handleOnClick",
    payload: payload <= -100 ? (payload = 100) : (payload -= 100),
  });
};

export const handleOnPrevClick = (payload) => (dispatch) => {
  dispatch({
    type: "handleOnClick",
    payload: payload >= 100 ? (payload = 100) : (payload += 100),
  });
};
