import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { setAuthChecked } from "../../services/reducers/userSlice";
import { checkUserAuth } from "../../services/actions/actions";

function Protected ({ onlyUnAuth = false, component }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuthChecked(isAuthChecked === false));
    dispatch(checkUserAuth());
  }, [dispatch]);

  const isAuthChecked = useSelector((store) => store.user.isAuthChecked);
  const user = useSelector((store) => store.user.user);
  const location = useLocation();

  if (!isAuthChecked) {
    return null;
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return component;
};

Protected.propTypes = {
  onlyUnAuth: PropTypes.bool,
  component: PropTypes.object
};

export const OnlyAuth = (props) => <Protected onlyUnAuth={false} {...props} />;
export const OnlyUnAuth = (props) => <Protected onlyUnAuth={true} {...props} />;
