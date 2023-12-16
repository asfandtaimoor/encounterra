// function ModalSocialMedia() {
//   return (
//     <nav className="d-flex justify-content-center  gap-4 flex-wrap">
//       <a className="ts-modal__sociallink" href="#">
//         <Discord Width="31" Height="25" Fill="#808080" />
//       </a>
//       <a className="ts-modal__sociallink" href="#">
//         <Facebook Width="31" Height="25" Fill="#808080" />
//       </a>
//       <a className="ts-modal__sociallink" href="#">
//         <Instagram Width="31" Height="25" Fill="#808080" />
//       </a>
//       <a className="ts-modal__sociallink" href="#">
//         <Twitter Width="31" Height="25" Fill="#808080" />
//       </a>
//     </nav>
//   );
// }

import React, { useState } from "react";
import Image from "next/image";

import { Container, Form } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { ExclamationCircle } from "@/Icons/index";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Login from "@/components/Login";

// import { Instagram, Facebook, Twitter, Discord } from "@/Icons/index";
function Navbar() {
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

          <div className="d-flex gap-2  gap-sm-3 align-items-center">
            <div className="d-flex gap-2  gap-sm-3 align-items-center">
              <p className="text-uppercase text-white mb-0">200 credits</p>
              <OverlayTrigger
                overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
              >
                <span className="d-inline-block ">
                  <ExclamationCircle Width="18" Height="16" Stroke="#008170" />
                </span>
              </OverlayTrigger>
            </div>
            <div class="d-none d-sm-block vr"></div>
            {/* <p className="text-uppercase mb-0">user name</p>
            <Person Width="36" Height="36" Fill="#fff" /> */}
            <Modals />
          </div>
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
          <button class="btn ts-btn ts-btn--lg ts-fs-20 fw-bold ts-btn-primary text-uppercase mb-06">
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
          <button class="btn ts-btn ts-btn--lg ts-fs-20 fw-bold ts-btn-primary text-uppercase mb-05">
            Continue
          </button>
        </div>
        {/* Login In With Social Media */}
        {/* <div class="ts-separator mb-5">
            <div class="line "></div>
            <h2 className="text-uppercase ts-fs-20 fw-bold ts-text-gray-6 mb-0 mx-3">
              or log in with
            </h2>
            <div class="line"></div>
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
