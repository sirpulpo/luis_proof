export const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/HelloWorld.vue"),
  },
	{
    path: "/form",
    name: "Form",
    component: () => import("@/components/Form.vue"),
  },
	{
    path: "/charts",
    name: "Charts",
    component: () => import("@/components/Charts.vue"),
  },
];
