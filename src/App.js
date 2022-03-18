import React from "react";
import Menu from "./pages/Menu";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./comp/AppRouter";

const App = props => {
    return(
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
        )
}
export default App;