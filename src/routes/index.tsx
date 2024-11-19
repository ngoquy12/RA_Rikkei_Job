import { createBrowserRouter } from "react-router-dom";
import authRouters from "./auth.routes";
import userRoutes from "./user.routes";

const routes = [...authRouters, ...userRoutes];

const routers = createBrowserRouter(routes);

export default routers;
