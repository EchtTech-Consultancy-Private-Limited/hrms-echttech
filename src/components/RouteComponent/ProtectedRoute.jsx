import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HideLoading, ShowLoading } from "../../reduxapis/slice/alertsSlice";
// import { SetUser } from "../redux/usersSlice";
import DefaultLayout from "../shared/LayoutComponent";
import { useAlert } from "react-alert";


function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const validateToken = async () => {
    console.log(localStorage.getItem("token"))
    try {
      dispatch(ShowLoading());
      const response = await axios.get(
        "/v1/admin/3",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response)
      dispatch(HideLoading());
    //   if (response) {
    //     console.log(response)
    //     //dispatch(SetUser(response.data.data));
    //   } else {
    //     localStorage.removeItem("token");
    //     alert.error(response.data.message);
    //     navigate("/login");
    //   }
    } catch (error) {
    //   dispatch(HideLoading());
    //   localStorage.removeItem("token");

    //   alert.error(error.message);
    //   navigate("/login");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div>{user == null && <DefaultLayout>{children}</DefaultLayout>}</div>
  );
}

export default ProtectedRoute;
