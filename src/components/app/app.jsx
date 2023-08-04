import React, { useEffect } from "react";
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
// import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
    // dispatch(checkUserAuth())
  }, [])

  // const arr = useSelector((state) => state.ingredientsReducer.array);

  // console.log(arr)

  return (
    <div className={styles.page}>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Main />} />
          <Route path='ingredients/:id' element={<IngredientDitails />} />
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
    </div >
  );
}

export default App;
