import axios from "@/lib/axios";
import Qs from "qs";
import {
  REGISTER_URL,
  LOGIN_URL,
  LOGIN_ADD,
  UPDATE_USER_URL,
  GET_USERS_URL,
  USER_DEL_URL
} from "@/config/api";

let REGISTER = async data => {
  return await axios.post(REGISTER_URL, data);
};
let LOGINADD = async data => {
  return await axios.post(LOGIN_ADD, Qs.stringify(data));
};
let LOGIN = async data => {
  return await axios.post(LOGIN_URL, Qs.stringify(data));
};
let UPDATE_USER = async data => {
  return await axios.post(UPDATE_USER_URL, data);
};
let GET_USERS = async params => {
  return await axios.get(GET_USERS_URL, { params });
};
let USER_DEL = async data => {
  return await axios.post(USER_DEL_URL, data);
};

export { REGISTER, LOGIN, LOGINADD, UPDATE_USER, GET_USERS, USER_DEL };
