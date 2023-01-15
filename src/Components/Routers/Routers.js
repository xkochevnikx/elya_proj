import Main from "../../Pages/Main";
import PageNotFound from "../../Pages/PageNotFound";

export const publicRoutes = [
  { path: "/main", component: <Main /> },
  { path: "/*", component: <PageNotFound /> },
];
