const routes = [
    {
      path: "/",
      name: "/",
      redirect: "/dashboard-default",
    },
    {
      path: "/dashboard-default",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/tables",
      name: "Tables",
      component: Tables,
    },
    {
      path: "/billing",
      name: "Billing",
      component: Billing,
    },
    {
      path: "/virtual-reality",
      name: "Virtual Reality",
      component: VirtualReality,
    },
    {
      path: "/rtl-page",
      name: "RTL",
      component: RTL,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin,
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/addtodo",
      name: "AddTodo",
      component: AddTodo,
    },
    {
      path: "/listtodo",
      name: "ListTodo",
      component: ListTodo,
    },
    {
      path: "/edittodo",
      name: "EditTodo",
      component: EditTodo,
    },
  
  ];

  export default routes;