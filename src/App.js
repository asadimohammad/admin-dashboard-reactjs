import React from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routers/routers";
import './services/i18n'

const App = () => {
    return <RouterProvider router={routers}/>
}

export default App;
