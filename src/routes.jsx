import React from "react";
import Home from "./pages/Home";
import Teams from "./pages/Teams";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/teams",
        element: <Teams />
    },
];

export default routes;