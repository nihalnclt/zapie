import { AppProvider } from "./providers/appProvider";
import { AppRoutes } from "./routes";

function App() {
    return (
        <AppProvider>
            <AppRoutes />
        </AppProvider>
    );
}

export default App;
