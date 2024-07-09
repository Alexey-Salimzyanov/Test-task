import React, { useContext } from "react";
import {Routes, Route} from 'react-router-dom'
import {  allRoutes} from "../routes";
import MainPage from "../pages/MainPage";

const AppRouter = () =>{
    return (
    <Routes>
        {allRoutes.map(({path, Component}) => 
        <Route key={path} path={path} element={<Component/>} exact/>
        )}
        <Route path="*" element={<MainPage/>}/>
    </Routes>
    );
};

export default AppRouter;