import { compose, createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import createRootReducer from "./reducers";

const identify = (v) => v;

const getDevTools = () => {
  if (process.env.NODE_ENV === "development") {
    if (typeof window === "object" && !!window.devToolsExtension) {
      return window.devToolsExtension();
    }
    return identify;
  }
  return identify;
};

export default (history, reduxState = undefined) => {
  const router = routerMiddleware(history);

  const store = createStore(
    createRootReducer(history),
    reduxState,
    compose(applyMiddleware(router, thunk), getDevTools())
  );

  return store;
};
