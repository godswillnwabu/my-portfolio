import { createBrowserRouter } from "react-router-dom";

import IndexLayout from "./PageLayouts/IndexLayout";

import LandingPage from "./LandingPage";

const router = createBrowserRouter([

    {
        path: "/",
        element: <IndexLayout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            }
        ]
    },
])

export default router;