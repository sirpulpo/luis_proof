export const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/Home.vue"),
  },
	{
    path: "/form",
    name: "Form",
    component: () => import("@/views/Form.vue"),
  },
	{
    path: "/charts",
    name: "Charts",
    component: () => import("@/views/Charts.vue"),
  },
];
