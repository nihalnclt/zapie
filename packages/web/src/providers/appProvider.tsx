import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import { Button, Spinner } from "@/components/Elements";

const ErrorFallback = () => {
    return (
        <div
            className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
            role="alert"
        >
            <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
            {/* <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
                Refresh
            </Button> */}
            <button>Refresh</button>
        </div>
    );
};

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <React.Suspense
            fallback={
                <div className="flex items-center justify-center w-screen h-screen">
                    {/* <Spinner size="xl" /> */}
                    Loading...
                </div>
            }
        >
            {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
            {/* <HelmetProvider> */}
            {/* <QueryClientProvider client={queryClient}> */}
            {/* {process.env.NODE_ENV !== "test" && <ReactQueryDevtools />} */}
            {/* <Notifications /> */}
            {/* <AuthProvider> */}
            <Router>{children}</Router>
            {/* </AuthProvider> */}
            {/* </QueryClientProvider> */}
            {/* </HelmetProvider> */}
            {/* </ErrorBoundary> */}
        </React.Suspense>
    );
};
