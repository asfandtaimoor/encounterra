import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import axiosInstance from "@/axios";
import { toast } from "react-toastify";

function ForgetPassword({ show, handleClose }) {
  const dispatch = useDispatch();

  // State variables for user input
  const [email, setEmail] = useState("");

  // Form change handler
  const handleEmailChange = (e) => setEmail(e.target.value);

  const resetPassword = async () => {
    try {
      // Dispatch a loading action to set loading state to true
      dispatch({ type: "RESET_PASSWORD_START" });
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
      toast.success("Password reset email sent successfully", {
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
      handleClose(); // Close the modal after successful password reset
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
        </Form>
        <div className="text-center">
          <button
            className="btn ts-btn ts-btn--lg ts-fs-20 fw-bold ts-btn-primary text-uppercase mb-06"
            onClick={resetPassword}
          >
            Continue
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ForgetPassword;
