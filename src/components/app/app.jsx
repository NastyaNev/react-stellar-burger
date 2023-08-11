import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import Main from "../../pages/main/main";
import Orders from "../../pages/orders/orders";
import Profile from "../../pages/profile/profile";
import NotFound from "../../pages/not-found/not-found";
import Layout from "../layout/layout";
import ProfileInfo from "../../pages/profile-info/profile-info";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ResetPassword from "../../pages/reset-password/reset-password";
import ProfileEdit from "../../pages/profile/profile-edit/profile-edit";
import ModalView from "../modal/modal-view";
import Modal from "../modal/modal";
import IngredientDitails from "../modal/ingredient-delails/ingredient-delails";
import { useLocation, useNavigate } from 'react-router-dom';
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { checkUserAuth } from "../../services/actions/user";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import { getItems } from "../../services/actions";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;
  const [modalState, setModalState] = useState({ isOpen: false, chooseModal: null, onClose: null });
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getItems());
    dispatch(checkUserAuth());
  }, [])

  return (
    <div className={styles.page}>
      <Routes location={background || location}>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Main setModalState={setModalState} />} >
            {modalState.isOpen && (
              <Route path='/' element={<OnlyAuth component={<Modal setModalState={setModalState} modalState={modalState} />} />} />
            )}
          </Route>
          <Route path='ingredients/:id' element={!background && <IngredientDitails />} />
          <Route path='orders' element={<OnlyAuth component={<Orders />} />} />
          <Route path='profile' element={<Profile />} >
            <Route path='/profile' element={<OnlyAuth component={<ProfileInfo />} />}>
              <Route path='/profile/edit' element={<ProfileEdit />} />
            </Route>
            <Route path='/profile/orders' element={<OnlyAuth component={<Orders />} />} />
          </Route>
          <Route path='login' element={<OnlyUnAuth component={<Login />} />} />
          <Route path='register' element={<OnlyUnAuth component={<Register />} />} />
          <Route path='forgot-password' element={<OnlyUnAuth component={<ForgotPassword />} />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/ingredients/:id" element={<ModalView onClose={() => { navigate("/") }} ><IngredientDitails /></ModalView>} />
        </Routes>
      )}
    </div >
  );
}

export default App;
