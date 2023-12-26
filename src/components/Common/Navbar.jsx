import React, { useState, useEffect } from "react";
import Image from "next/image";

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
import { toast } from "react-toastify";

import { Person, ExclamationCircle } from "@/Icons/index";
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
          <div className=" ts-gap-20">
            <Image
              src="/images/logo-sm.png"
              alt="Vercel Logo"
              className={""}
              width={77}
              height={79}
              priority
            />
          </div>

          {userData ? (
            // If user is logged in
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
                  <Dropdown.Item className="py-2" href="#/action-1">
                    Change Password
                  </Dropdown.Item>
                  <Dropdown.Item className="py-2" href="#/action-2">
                    Manage Subscription
                  </Dropdown.Item>
                  <Dropdown.Item className="py-2" href="#/action-3">
                    My simulation
                  </Dropdown.Item>
                  <hr className="my-0" />
                  <button className="dropdown-item py-2" onClick={handleLogout}>
                    Logout
                  </button>
                </Dropdown.Menu>
              </Dropdown>
            </div>
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

function ResetPasswordModal({ show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-0" closeButton></Modal.Header>
      <Modal.Body>
        <h1 className="ts-heading-font fw-bold text-uppercase ts-fs-35 ts-text-gray-6 text-center mb-08">
          Forget password
        </h1>{" "}
        <Form className="mb-5">
          <Form.Group className="mb-4">
            <Form.Label className="ts-text-gray-5 ts-fs-20 fw-medium">
              Email
            </Form.Label>
            <Form.Control size="lg" type="email" />
          </Form.Group>
        </Form>
        <div className="text-center">
          <button className="btn ts-btn ts-btn--lg ts-fs-20 fw-bold ts-btn-primary text-uppercase mb-06">
            Continue
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function CreateAccountModal({
  show,
  handleClose,
  handleShowForgetPassword,
  handleShowLogin,
}) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-0" closeButton></Modal.Header>
      <Modal.Body>
        {/* ... (Login form structure) */}
        <h1 className="ts-heading-font fw-bold text-uppercase ts-fs-35 ts-text-gray-6 text-center mb-08">
          creat new account
        </h1>{" "}
        <Form className="mb-5">
          <Form.Group className="mb-4">
            <Form.Label className="ts-text-gray-5 ts-fs-20 fw-medium">
              Email Address
            </Form.Label>
            <Form.Control size="lg" type="email" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="ts-text-gray-5 ts-fs-20 fw-medium d-flex justify-content-between ">
              <span>Password</span>
              <span
                className="ts-link btn-link "
                onClick={handleShowForgetPassword}
                role="button"
              >
                Forgot Password?
              </span>
            </Form.Label>
            <Form.Control size="lg" type="password" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="ts-text-gray-5 ts-fs-20 fw-medium ">
              <span>Repeat Password</span>
            </Form.Label>
            <Form.Control size="lg" type="password" />
          </Form.Group>
        </Form>
        <div className="text-center">
          <button className="btn ts-btn ts-btn--lg ts-fs-20 fw-bold ts-btn-primary text-uppercase mb-05">
            Continue
          </button>
        </div>
        {/* Login In With Social Media */}
        {/* <div className="ts-separator mb-5">
            <div className="line "></div>
            <h2 className="text-uppercase ts-fs-20 fw-bold ts-text-gray-6 mb-0 mx-3">
              or log in with
            </h2>
            <div className="line"></div>
          </div>
          <div className="mb-07">
            <ModalSocialMedia />
          </div> */}
        <p className="text-center">
          Already have an account?
          <Button className="p-0 ms-2" variant="link" onClick={handleShowLogin}>
            Sign in here
          </Button>
        </p>
      </Modal.Body>
    </Modal>
  );
}

function Modals() {
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const handleCloseResetPassword = () => setShowResetPassword(false);
  const handleShowForgetPassword = () => {
    setShowResetPassword(true);
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

      <ResetPasswordModal
        show={showResetPassword}
        handleClose={handleCloseResetPassword}
      />

      <Login
        show={showLogin}
        handleClose={handleCloseLogin}
        handleShowForgetPassword={handleShowForgetPassword}
        handleShowCreateAccount={handleShowCreateAccount}
      />

      <CreateAccountModal
        show={showCreateAccount}
        handleClose={handleCloseCreateAccount}
        handleShowForgetPassword={handleShowForgetPassword}
        handleShowLogin={handleShowLogin}
      />
    </>
  );
}

// Login

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('https://encounterra.com/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         throw new Error('Login failed');
//       }

//       const { status, data } = await response.json();

//       if (status === 'success') {
//         localStorage.setItem('accessToken', data.AccessToken);
//         localStorage.setItem('refreshToken', data.RefreshToken);
//         navigate('/');
//       } else {
//         setError(data.message || 'An error occurred');
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Login</h2>
//       <form className="login-form" onSubmit={handleSubmit}>
//         {error && <div className="alert alert-danger">{error}</div>}
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Log In</button>
//       </form>
//       <div className="register-link">
//         Don't have an account? <Link to="/register">Sign up</Link>
//       </div>
//       <div className="forgot-password-link">
//         Forgot your password? <Link to="/forgot_password">Reset it</Link>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
