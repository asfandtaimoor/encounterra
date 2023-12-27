import { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import axiosInstance from "@/axios";
import { toast } from "react-toastify";

import { useRouter } from "next/router";
import { loginUser } from "@/redux/reducers/Auth";
export default function ForgetPassword({ show, handleClose, handleOpen }) {
  const router = useRouter();

  const dispatch = useDispatch();
  const [isVerificationCodeSent, setIsVerificationCodeSent] = useState(false);
  // State variables for user input
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  // Form change handler
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleVerificationCodeChange = (e) =>
    setVerificationCode(e.target.value);

  const getVerificationCode = async () => {
    try {
      // Dispatch a loading action to set loading state to true
      dispatch({ type: "FORGET_PASSWORD_START" });
      // Add form validation logic here if needed
      if (!email) {
        // Show error toast for invalid input
        toast.error("Please enter your email.", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
      // Send a request to get the verification code
      const response = await axiosInstance.post("forgot-password", {
        email,
      });
      if (!response.data || response.data.status !== "success") {
        throw new Error("Password reset failed");
      }
      // Show success toast
      toast.success("Verification Code Sent!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Dispatch a success action or set loading state to false if needed
      dispatch({ type: "FORGET_PASSWORD_SUCCESS" });
      setIsVerificationCodeSent(true);
    } catch (error) {
      console.error("Password reset error:", error);

      // Show error toast
      toast.error("An error occurred during password reset", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Propagate the error for the component to handle
      throw error;
    }
  };

  const resetPassword = async () => {
    // Add logic to reset the password using the verification code and new password
    // You may need to send another request to the server
    try {
      // Dispatch a loading action to set loading state to true
      dispatch({ type: "RESET_PASSWORD_START" });

      // Add form validation logic here if needed
      if (!verificationCode || !newPassword) {
        // Show error toast for invalid input
        toast.error("Please enter verification code and new password.", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }

      // Send a request to reset the password
      const response = await axiosInstance.post("reset-password", {
        email,
        verificationCode,
        newPassword,
      });

      if (!response.data || response.data.status !== "success") {
        throw new Error("Password reset failed");
      }
      handleLogin();
      // Show success toast
      toast.success("Password reset successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Dispatch a success action or set loading state to false if needed
      dispatch({ type: "RESET_PASSWORD_SUCCESS" });

      // Close the modal after successful password reset
      handleClose();
    } catch (error) {
      console.error("Password reset error:", error);

      // Show error toast
      toast.error("An error occurred during password reset", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Propagate the error for the component to handle
      throw error;
    }
  };

  const handleLogin = async (event) => {
    try {
      dispatch(loginUser(email, newPassword));
      // Redirect or perform other actions after successful login
    } catch (err) {
      // Handle login error
      console.error("Login failed", err);
    }
  };
  // useEffect will run when the component mounts and whenever the 'code' parameter changes
  useEffect(() => {
    const { code } = router.query;
    setVerificationCode(code || "");
    if (code) {
      handleOpen(true);
      setIsVerificationCodeSent(true);
    }
  }, [router.query]); // The effect will re-run whenever the 'query' object changes

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
          Forget Password
        </h1>
        <Form className="mb-5">
          <Form.Group className="mb-4">
            <Form.Label className="ts-text-gray-5 ts-fs-20 fw-medium">
              Email
            </Form.Label>
            <Form.Control
              size="lg"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>

          {isVerificationCodeSent && (
            <>
              <Form.Group className="mb-4">
                <Form.Label className="ts-text-gray-5 ts-fs-20 fw-medium">
                  New Password
                </Form.Label>
                <Form.Control
                  size="lg"
                  type="password"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="ts-text-gray-5 ts-fs-20 fw-medium">
                  Verification Code
                </Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  value={verificationCode}
                  onChange={handleVerificationCodeChange}
                />
              </Form.Group>
            </>
          )}
        </Form>
        <div className="text-center">
          {isVerificationCodeSent ? (
            <button
              className="btn ts-btn ts-btn--lg ts-fs-20 fw-bold ts-btn-primary text-uppercase mb-06"
              onClick={resetPassword}
            >
              Continue
            </button>
          ) : (
            <button
              className="btn ts-btn ts-btn--lg ts-fs-20 fw-bold ts-btn-primary text-uppercase mb-06"
              onClick={getVerificationCode}
            >
              Get Verification Code
            </button>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}
