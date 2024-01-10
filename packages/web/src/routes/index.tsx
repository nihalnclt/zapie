import { useRoutes } from "react-router-dom";

import { publicRoutes } from "./public";

export const AppRoutes = () => {
    // const auth = useAuth();
    // const routes = auth.user ? protectedRoutes : publicRoutes;

    // const commonRoutes = [{ path: "/", element: <>Hello</> }];

    const element = useRoutes([...publicRoutes]);

    return <>{element}</>;
};
