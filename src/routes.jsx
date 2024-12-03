import React from "react";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Circuits from "./pages/Circuits";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/teams",
        element: <Teams />
    },
    {
        path: "/circuits",
        element: <Circuits />
    },
];

export default routes;