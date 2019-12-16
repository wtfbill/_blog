import Bundle from "@/lib/bundle";

let adminConfig = [
  {
    path: "",
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
    path: "/user/list",
    title: "用户管理",
    exact: true,
    component: Bundle(() =>
      import(
        /* webpackChunkName: "userList" */
        "@/view/userList"
      )
    )
  }
];

export { adminConfig };
