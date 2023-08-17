import React from "react";
import Routers from "./routers/Routers";
import { RouterProvider } from "react-router-dom";
import './services/i18next'

function App() {
    return <RouterProvider router={Routers} />;
}

export default App;
