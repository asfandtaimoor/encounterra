import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import axiosInstance from "@/axios";
import { toast } from "react-toastify";

function ForgetPassword({ show, handleClose }) {
  const dispatch = useDispatch();
  const [isverificationCodeSent, setIsverificationCodeSent] = useState(false);
  // State variables for user input
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [varificationCode, setVarificationCode] = useState("");
  // Form change handler
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handlevarificationCodeChange = (e) =>
    setVarificationCode(e.target.value);

  const getVarificationCode = async () => {
    try {
      // Dispatch a loading action to set loading state to true
      dispatch({ type: "Forget_PASSWORD_START" });
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

      const response = await axiosInstance.post("forgot-password", {
        email,
      });

      if (!response.data || response.data.status !== "success") {
        throw new Error("Password reset failed");
      }

      // Show success toast
      toast.success("Varification Code Sent!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Dispatch a success action or set loading state to false if needed
      dispatch({ type: "Forget_PASSWORD_SUCCESS" });
      setIsverificationCodeSent(true);
      // handleClose(); // Close the modal after successful password reset
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
            <Form.Control
              size="lg"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>

          {isverificationCodeSent && (
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
                  Varification Code
                </Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  value={varificationCode}
                  onChange={handlevarificationCodeChange}
                />
              </Form.Group>
            </>
          )}
        </Form>
        <div className="text-center">
          {isverificationCodeSent ? (
            <button
              className="btn ts-btn ts-btn--lg ts-fs-20 fw-bold ts-btn-primary text-uppercase mb-06"
              onClick={getVarificationCode}
            >
              Continue
            </button>
          ) : (
            <button
              className="btn ts-btn ts-btn--lg ts-fs-20 fw-bold ts-btn-primary text-uppercase mb-06"
              onClick={getVarificationCode}
            >
              Get Varification Code
            </button>
          )}
          {/* <button
            className="btn ts-btn ts-btn--lg ts-fs-20 fw-bold ts-btn-primary text-uppercase mb-06"
            onClick={getVarificationCode}
          >
            Continue
          </button> */}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ForgetPassword;
