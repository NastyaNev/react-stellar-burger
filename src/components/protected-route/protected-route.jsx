import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { SET_AUTH_CHECKED, checkUserAuth } from "../../services/actions/user";
import PropTypes from 'prop-types';

function Protected ({ onlyUnAuth = false, component }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: SET_AUTH_CHECKED, isAuthChecked: false});
    dispatch(checkUserAuth());
  }, [dispatch]);

  const isAuthChecked = useSelector((store) => store.userReducer.isAuthChecked);
  const user = useSelector((store) => store.userReducer.user);
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
