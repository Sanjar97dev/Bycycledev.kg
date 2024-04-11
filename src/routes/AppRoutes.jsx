import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { ROUTERS } from '../utils/routes';
import Main from '../pages/main/Main';


const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path={ROUTERS.MAIN} element={<Main />} />
        </Routes>
    </div>
  )
}

export default AppRoutes;