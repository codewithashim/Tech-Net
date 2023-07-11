import { Middleware } from "@reduxjs/toolkit";
const logger: Middleware = (store) => (next) => (action) => {
  console.log(store.getState());
  console.log("Action", action);
  next(action);
};

export default logger;
