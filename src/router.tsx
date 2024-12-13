import { createBrowserRouter } from "react-router-dom";
import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    }
]);

export default router;
