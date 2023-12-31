import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Dropdown,
  OverlayTrigger,
  Tooltip,
  Button,
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
                    {parseInt(userData.credits) === -1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-infinity"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916z" />
                      </svg>
                    ) : (
                      userData.credits
                    )}{" "}
                    <span className="ms-1">credits</span>
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
                <p className="text-uppercase mb-0 d-none d-sm-block">
                  {userData.email}
                </p>

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
                    <p className="d-sm-none dropdown-item py-2 mb-0">
                      {userData.email}
                    </p>
                    <Dropdown.Item className="py-2" href="#/action-2">
                      Manage Subscription
                    </Dropdown.Item>
                    <Link
                      className="dropdown-item py-2"
                      href="/Simulation-History"
                    >
                      Simulation-History
                    </Link>
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
