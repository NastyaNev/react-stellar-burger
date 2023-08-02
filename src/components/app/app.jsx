import React, { useEffect } from "react";
import styles from "./app.module.css";
import { useDispatch } from "react-redux";
import { getItems } from "../../services/actions/ingredients";
import { Route, Routes } from "react-router";
import Main from "../../pages/main/main";
import Orders from "../../pages/orders/orders";
import Profile from "../../pages/profile/profile";
import NotFound from "../../pages/not-found/not-found";
import Layout from "../layout/layout";
// import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
    // dispatch(checkUserAuth())
  }, [])

  return (
    <div className={styles.page}>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Main />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
