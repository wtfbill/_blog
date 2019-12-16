import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import user from "./user/reducer";
import common from "./common/reducer";

const loggerMiddleware = createLogger();

// 数据对象
const storageConfig = {
  key: "root", // 必须有的
  storage: storageSession, // storage is now requiredcreateReducer
  blacklist: [] // reducer 里不持久化的数据
};

const reducers = persistReducer(
  storageConfig,
  combineReducers({
    user,
    common
  })
);
const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  )
);

export default store;
