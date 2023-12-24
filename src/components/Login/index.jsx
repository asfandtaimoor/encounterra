import { Modal, Form } from "react-bootstrap";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/actions/authActions";

// taimoorlive786@gmail.com
// Taimoor@1234

export default function LoginModal({
  show,
  handleClose,
  handleShowForgetPassword,
  handleShowCreateAccount,
}) {
  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth.error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    console.log("Login Attampt");

    try {
      await dispatch(loginUser(email, password));
      // Redirect or perform other actions after successful login
    } catch (err) {
      // Handle login error
      console.error("Login failed", err);
    }
  };

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
          Login
        </h1>{" "}
        <Form className="mb-5">
          <Form.Group className="mb-4">
            <Form.Label className="ts-text-gray-5 ts-fs-20 fw-medium">
              Email Address
            </Form.Label>
            <Form.Control
              size="lg"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
            <Form.Control
              size="lg"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
        <div className="text-center">
          <button
            className="btn ts-btn ts-btn--lg ts-fs-20 fw-bold ts-btn-primary text-uppercase mb-05"
            onClick={handleLogin}
          >
            Continue
          </button>
        </div>
        <p className="text-center">
          Don’t have an Account?
          <span
            className="p-0 ms-2 btn-link"
            onClick={handleShowCreateAccount}
            role="button"
          >
            Sign up here
          </span>
        </p>
      </Modal.Body>
    </Modal>
  );
}

{
  /* Login In With Social Media */
}
{
  /* <div className="ts-separator mb-5">
    <div className="line "></div>
    <h2 className="text-uppercase ts-fs-20 fw-bold ts-text-gray-6 mb-0 mx-3">
      or log in with
    </h2>
    <div className="line"></div>
  </div>
  <div className="mb-07">
    <ModalSocialMedia />
  </div> */
}
