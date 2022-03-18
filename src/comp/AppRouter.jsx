import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./router";
import Menu from "../pages/Menu";
import Shop from "../pages/Shop";

function AppRouter() {
    return(
        <Routes>
            <Route path={'/'} element={<Menu />}/>
            <Route path={'/shop'} element={<Shop />}/>
            <Route path={'/transfer'} element={<Transfer />}/>
            <Route path={'/inv'} element={<Inventory />}/>
            <Route path={'/bonus'} element={<Bonus />}/>
        </Routes>
    )
}

export default AppRouter;