import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Dropdown,
  Form,
  OverlayTrigger,
  Tooltip,
  Button,
  Modal,
} from "react-bootstrap";

import Login from "@/components/Login";
import { Person, ExclamationCircle } from "@/Icons/index";

import Register from "@/components/Common/Register";
import ForgetPassword from "@/components/Common/ForgetPassword";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDataAsync } from "@/redux/reducers/UserData";
import { logoutUser, getLoginDetails } from "@/redux/reducers/Auth";

function Navbar() {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userData);
  const login = useSelector((state) => state.login);

  useEffect(() => {
    const accessToken = localStorage.getItem("AccessToken");
    if (accessToken) {
      dispatch(getLoginDetails(true)); // Assuming you have a setLogin action to update the login state
    } else {
      dispatch(getLoginDetails(false)); // Assuming you have a setLogin action to update the login state
    }
  }, [dispatch]);

  useEffect(() => {
    const accessToken = localStorage.getItem("AccessToken");
    if (accessToken && login) {
      dispatch(fetchUserDataAsync()); // Assuming this action updates the user data
    } else {
      console.error("Access token not available");
    }
  }, [dispatch, login]);

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(getLoginDetails(false));
    console.log("user logged out");
  };
  return (
    <div className="ts-header">
      <Container fluid className="ts-container">
        <div className="ts-header__main d-flex justify-content-between align-items-center">
          <Link className=" ts-gap-20" href="./">
            <Image
              src="/images/logo-sm.png"
              alt="Vercel Logo"
              className={""}
              width={77}
              height={79}
              priority
            />
          </Link>

          {userData ? (
            // If user is logged in
            <>
              <div className="d-flex gap-2 gap-sm-3 align-items-center">
                <div className="d-flex gap-2 gap-sm-3 align-items-center">
                  <p className="text-uppercase text-white mb-0">
                    {userData.credits} credits
                  </p>
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
                  >
                    <span className="d-inline-block">
                      <ExclamationCircle
                        Width="18"
                        Height="16"
                        Stroke="#008170"
                      />
                    </span>
                  </OverlayTrigger>
                </div>
                <div className="d-none d-sm-block vr"></div>
                <p className="text-uppercase mb-0">{userData.email}</p>

                <Dropdown>
                  <Dropdown.Toggle
                    className="bg-transparent border-0 p-0"
                    id="dropdown-basic"
                  >
                    <Person Width="36" Height="36" Fill="#fff" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="rounded-0 shadow-sm text-end py-0"
                    style={{ top: "26px" }}
                    align="end"
                    title="Left-aligned but right aligned when large screen"
                  >
                    <Dropdown.Item className="py-2" href="#/action-2">
                      Manage Subscription
                    </Dropdown.Item>
                    <Dropdown.Item className="py-2" href="#/action-3">
                      My simulation
                    </Dropdown.Item>
                    <hr className="my-0" />
                    <button
                      className="dropdown-item py-2"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </>
          ) : (
            // If user is not logged in
            <Modals />
          )}
        </div>
      </Container>
    </div>
  );
}

export default Navbar;

function Modals() {
  const [showForgetPassword, setShowForgetPassword] = useState(false);

  const [showLogin, setShowLogin] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const handleCloseForgetPassword = () => setShowForgetPassword(false);
  const handleOpenForgetPassword = () => setShowForgetPassword(true);

  const handleShowForgetPassword = () => {
    setShowForgetPassword(true);
    handleCloseLogin();
    handleCloseCreateAccount();
  };
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => {
    setShowLogin(true);
    setShowCreateAccount(false);
  };
  const handleCloseCreateAccount = () => setShowCreateAccount(false);
  const handleShowCreateAccount = () => {
    setShowCreateAccount(true);
    setShowLogin(false);
  };

  return (
    <>
      <Button
        className="ts-btn ts-btn-primary px-3 px-sm-4"
        onClick={handleShowLogin}
      >
        Login
      </Button>

      <ForgetPassword
        show={showForgetPassword}
        handleClose={handleCloseForgetPassword}
        handleOpen={handleOpenForgetPassword}
      />

      <Login
        show={showLogin}
        handleClose={handleCloseLogin}
        handleShowForgetPassword={handleShowForgetPassword}
        handleShowCreateAccount={handleShowCreateAccount}
      />

      <Register
        show={showCreateAccount}
        handleClose={handleCloseCreateAccount}
        handleShowForgetPassword={handleShowForgetPassword}
        handleShowLogin={handleShowLogin}
      />
    </>
  );
}
