import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../services/actions/ingredients";
import { Route, Routes } from "react-router";
import Main from "../../pages/main/main";
import Orders from "../../pages/orders/orders";
import Profile from "../../pages/profile/profile";
import NotFound from "../../pages/not-found/not-found";
import Layout from "../layout/layout";
import ProfileInfo from "../../pages/profile-info/profile-info";
import Login from "../../pages/login/login";
import FogotPassword from "../../pages/fogot-password/fogot-password";
import Register from "../../pages/register/register";
import ResetPassword from "../../pages/reset-password/reset-password";
import ProfileEdit from "../../pages/profile/profile-edit/profile-edit";
import Modal from "../modal/modal";
import IngredientDitails from "../modal/ingredient-delails/ingredient-delails";
import ModalOverlay from "../modal/overlay/overlay";
import { useLocation, useParams } from 'react-router-dom';
import DndContainer from "../dnd-container/dnd-container";
// import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    console.log('jhjhj')
    dispatch(getItems());
    // dispatch(checkUserAuth())
  }, [])

  return (
    <div className={styles.page}>
      <Routes location={background || location}>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Main />} />
          <Route path='/ingredients/:id' element={<IngredientDitails />} />
          <Route path='orders' element={<Orders />} />
          <Route path='profile' element={<Profile />}>
            <Route path='/profile' element={<ProfileInfo />}>
              <Route path='/profile/edit' element={<ProfileEdit />} />
            </Route>
            <Route path='/profile/orders' element={<Orders />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forgot-password' element={<FogotPassword />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/ingredients/:id" element={<Modal />} />
        </Routes>
      )}
    </div >
  );
}

export default App;
