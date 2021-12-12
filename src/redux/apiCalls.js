import { loginFailure, loginStart, loginSuccess, getToken } from "./userRedux";
import { getel } from "./elementRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data.data));
    dispatch(getToken(res.data.token));
    console.log(res.data.token);
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const elements = async (dispatch) => {
  let ele = {
    nodes: [],
    edges: [],
  };

  const positions = [
    { x: 243, y: 382 },
    { x: 259, y: 327 },
    { x: 181, y: 337 },
    { x: 259, y: 272 },
  ];

  publicRequest
    .get("lesson")
    .then((res) => {
      const data = res.data.data.lessons;

      data.forEach((element, i) => {
        ele.nodes.push({
          data: { id: element._id, name: element.title },
          position: { x: positions[i].x, y: positions[i].y },
        });

        ele.edges.unshift({
          data: {
            source: element._id,
            target: data[i + data.length < i ? 1 : 0]._id,
          },
        });
      });
      ele.edges.length = ele.edges.length - 1;

      dispatch(getel({ ...ele }));
      console.log(ele);
    })
    .catch((e) => {
      console.log(e);
    });
};
