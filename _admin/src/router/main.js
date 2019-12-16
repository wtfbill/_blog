import Bundle from "@/lib/bundle";

let adminConfig = [
  {
    path: "/",
    title: "首页",
    exact: true,
    component: Bundle(() =>
      import(
        /* webpackChunkName: "admin-index" */
        "@/view/home"
      )
    )
  },
  {
    path: "/login",
    title: "登录",
    exact: true,
    component: Bundle(() =>
      import(
        /* webpackChunkName: "admin-index" */
        "@/view/login"
      )
    )
  },
  {
    path: "/user/list",
    title: "用户列表",
    exact: true,
    component: Bundle(() =>
      import(
        /* webpackChunkName: "userList" */
        "@/view/userList/user_list"
      )
    )
  },
  {
    path: "/user/add",
    title: "用户新增",
    exact: true,
    component: Bundle(() =>
      import(
        /* webpackChunkName: "userList" */
        "@/view/userList/user_add"
      )
    )
  }
];

export default adminConfig;
