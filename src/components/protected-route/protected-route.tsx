import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { setAuthChecked } from "../../services/reducers/userSlice";
import { checkUserAuth } from "../../services/actions/actions";

type TProtectedProps = {
  onlyUnAuth: boolean,
  component: JSX.Element,
}

function Protected (props: TProtectedProps) {
  const { onlyUnAuth = false, component } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuthChecked(isAuthChecked === false));
    dispatch(checkUserAuth(null, false));
  }, [dispatch]);

  const isAuthChecked = useSelector((store: any) => store.user.isAuthChecked);
  const user = useSelector((store: any) => store.user.user);
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
