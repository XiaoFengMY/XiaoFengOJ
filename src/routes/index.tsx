import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import QuestionBank from '../pages/QuestionBank';
import Login from '../pages/Login';
import Register from '../pages/Regist';
import Admin from '../pages/Admin';
import UserCenter from '../pages/UserCenter';

const About = lazy(() => import('../pages/About'));

const Router: FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/QuestionBank" element={<QuestionBank />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Regist" element={<Register />} />
    <Route path="/UserCenter" element={<UserCenter />} />
    <Route path="/Admin" element={<Admin />} />
    <Route
      path="about"
      element={
        <Suspense fallback={<Spin />}>
          <About />
        </Suspense>
      }
    />
  </Routes>
);

export default Router;
