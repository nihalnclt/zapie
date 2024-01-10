import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { MainLayout } from "../components/Layout";
import { RestRequestPage } from "../features/rest";

const App = () => {
    return (
        <MainLayout>
            <Suspense
                fallback={
                    <div className="h-full w-full flex items-center justify-center">
                        {/* <Spinner size="xl" /> */}
                        Loading...
                    </div>
                }
            >
                <Outlet />
            </Suspense>
        </MainLayout>
    );
};

export const publicRoutes = [
    {
        path: "/",
        element: <App />,
        children: [{ path: "/", element: <RestRequestPage /> }],
    },
];
