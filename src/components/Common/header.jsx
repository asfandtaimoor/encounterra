import React, { useState } from "react";
import Image from "next/image";

import { Container, Form } from "react-bootstrap";

import { ExclamationCircle, Person } from "@/Icons/index";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Instagram, Facebook, Twitter, Discord } from "@/Icons/index";
function Header() {
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

          <div className="d-flex gap-3 align-items-center">
            <div className="d-flex gap-3 align-items-center">
              <p className="text-uppercase mb-0">200 credits</p>
              <ExclamationCircle Width="18" Height="16" Stroke="#008170" />
            </div>
            <div class="vr"></div>
            <p className="text-uppercase mb-0">user name</p>
            <Person Width="36" Height="36" Fill="#fff" />
          </div>
        </div>

        <Modals />
      </Container>
    </div>
  );
}

export default Header;

// function Modals() {
//   const [show, setShow] = useState(true);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         reset password button
//       </Button>

//       <Modal
//         show={show}
//         onHide={() => setShow(false)}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header className="border-0" closeButton></Modal.Header>
//         <Modal.Body>
//           <h1 className="ts-heading-font fw-bold text-uppercase ts-fs-40 ts-text-gray-6 text-center mb-08">
//             reset password
//           </h1>{" "}
//           <Form className="mb-5">
//             <Form.Group className="mb-4">
//               <Form.Label className="ts-text-gray-5 ts-fs-22 fw-medium">
//                 Old Password
//               </Form.Label>
//               <Form.Control size="lg" type="password" />
//             </Form.Group>
//             <Form.Group className="mb-4">
//               <Form.Label className="ts-text-gray-5 ts-fs-22 fw-medium">
//                 New Password
//               </Form.Label>
//               <Form.Control size="lg" type="password" />
//             </Form.Group>
//             <Form.Group className="mb-4">
//               <Form.Label className="ts-text-gray-5 ts-fs-22 fw-medium">
//                 Confirm New Password
//               </Form.Label>
//               <Form.Control size="lg" type="password" />
//             </Form.Group>
//           </Form>
//           <div className="text-center">
//             <button class="btn ts-btn ts-btn--lg ts-fs-22 fw-bold ts-btn-primary text-uppercase">
//               update password
//             </button>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

function Modals() {
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const handleCloseResetPassword = () => setShowResetPassword(false);
  const handleShowResetPassword = () => setShowResetPassword(true);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => {
    setShowLogin(true);
    setShowCreateAccount(false); // Close create account modal when opening login modal
  };

  const handleCloseCreateAccount = () => setShowCreateAccount(false);
  const handleShowCreateAccount = () => {
    setShowCreateAccount(true);
    setShowLogin(false); // Close login modal when opening create account modal
  };

  return (
    <>
      {/* Reset Password Button */}
      <Button variant="primary" onClick={handleShowResetPassword}>
        Reset Password Button
      </Button>

      {/* Reset Password Modal */}
      <Modal
        show={showResetPassword}
        onHide={handleCloseResetPassword}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body>
          <h1 className="ts-heading-font fw-bold text-uppercase ts-fs-40 ts-text-gray-6 text-center mb-08">
            reset password
          </h1>{" "}
          <Form className="mb-5">
            <Form.Group className="mb-4">
              <Form.Label className="ts-text-gray-5 ts-fs-22 fw-medium">
                Old Password
              </Form.Label>
              <Form.Control size="lg" type="password" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="ts-text-gray-5 ts-fs-22 fw-medium">
                New Password
              </Form.Label>
              <Form.Control size="lg" type="password" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="ts-text-gray-5 ts-fs-22 fw-medium">
                Confirm New Password
              </Form.Label>
              <Form.Control size="lg" type="password" />
            </Form.Group>
          </Form>
          <div className="text-center">
            <button class="btn ts-btn ts-btn--lg ts-fs-22 fw-bold ts-btn-primary text-uppercase mb-06">
              update password
            </button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Login Button */}
      <Button variant="primary" onClick={handleShowLogin}>
        Login Button
      </Button>

      {/* Login Modal */}
      <Modal
        // show={showLogin}
        show={true}
        onHide={handleCloseLogin}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body>
          {/* ... (Login form structure) */}
          <h1 className="ts-heading-font fw-bold text-uppercase ts-fs-40 ts-text-gray-6 text-center mb-08">
            creat new account
          </h1>{" "}
          <Form className="mb-5">
            <Form.Group className="mb-4">
              <Form.Label className="ts-text-gray-5 ts-fs-22 fw-medium">
                Email Address
              </Form.Label>
              <Form.Control size="lg" type="email" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="ts-text-gray-5 ts-fs-22 fw-medium">
                Phone
              </Form.Label>
              <Form.Control size="lg" type="tel" />
            </Form.Group>
            <Form.Group className="mb-4">
              <div className="d-flex justify-content-between">
                <Form.Label className="ts-text-gray-5 ts-fs-22 fw-medium">
                  Password
                </Form.Label>
                {/* Forget Password Button */}
                <Button
                  className="ts-link"
                  href="#"
                  variant="link"
                  onClick={handleShowResetPassword}
                >
                  Forgot Password?
                </Button>
              </div>
              <Form.Control size="lg" type="password" />
            </Form.Group>
          </Form>
          <div className="text-center">
            <button class="btn ts-btn ts-btn--lg ts-fs-22 fw-bold ts-btn-primary text-uppercase mb-07">
              Continue
            </button>
          </div>
          <div className="mb-07">
            <ModalSocialMedia />
          </div>
          <p className="text-center">
            Don’t have an Account?
            <Button
              className="p-0 ms-2"
              variant="link"
              onClick={handleShowCreateAccount}
            >
              Sign up here
            </Button>
          </p>
        </Modal.Body>
      </Modal>

      {/* Create Account Button */}
      <Button variant="primary" onClick={handleShowCreateAccount}>
        Create Account Button
      </Button>

      {/* Create Account Modal */}
      <Modal
        show={showCreateAccount}
        onHide={handleCloseCreateAccount}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* ... (Create account form structure) */}

        {/* Login Button */}
        <Button variant="link" onClick={handleShowLogin}>
          Already have an account? Login
        </Button>
      </Modal>
    </>
  );
}

function ModalSocialMedia() {
  return (
    <nav className="d-flex justify-content-center  gap-4 flex-wrap">
      <a className="ts-modal__sociallink" href="#">
        <Discord Width="31" Height="25" Fill="#808080" />
      </a>
      <a className="ts-modal__sociallink" href="#">
        <Facebook Width="31" Height="25" Fill="#808080" />
      </a>
      <a className="ts-modal__sociallink" href="#">
        <Instagram Width="31" Height="25" Fill="#808080" />
      </a>
      <a className="ts-modal__sociallink" href="#">
        <Twitter Width="31" Height="25" Fill="#808080" />
      </a>
    </nav>
  );
}
