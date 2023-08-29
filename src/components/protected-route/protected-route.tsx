import { Navigate, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { setAuthChecked } from "../../services/reducers/userSlice";
import { checkUserAuth } from "../../services/actions/actions";
import { useAppDispatch, useAppSelector } from '../../hooks';

type TProtectedProps = {
  onlyUnAuth: boolean,
  component: JSX.Element,
}

function Protected (props: TProtectedProps) {
  const { onlyUnAuth = false, component } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAuthChecked(isAuthChecked === false));
    dispatch(checkUserAuth(null, false));
  }, [dispatch]);

  const isAuthChecked = useAppSelector((store) => store.user.isAuthChecked);
  const user = useAppSelector((store) => store.user.user);
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

export const OnlyAuth = (props: {component: JSX.Element}) => <Protected onlyUnAuth={false} {...props} />;
export const OnlyUnAuth = (props: {component: JSX.Element}) => <Protected onlyUnAuth={true} {...props} />;
