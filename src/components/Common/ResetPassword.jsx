import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import axiosInstance from "@/axios";
import { toast } from "react-toastify";

function ResetPassword({ show, handleClose }) {
  const dispatch = useDispatch();

  // State variables for user input
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Form change handlers
  const handleOldPasswordChange = (e) => setOldPassword(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const resetPassword = async () => {
    try {
      // Dispatch a loading action to set loading state to true
      dispatch({ type: "RESET_PASSWORD_START" });

      // Add form validation logic here if needed
      if (!oldPassword || !newPassword || newPassword !== confirmPassword) {
        // Show error toast for invalid input
        toast.error("Invalid input. Please check your passwords.", {
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

      const response = await axiosInstance.post("reset-password", {
        oldPassword,
        newPassword,
      });

      if (!response.data || response.data.status !== "success") {
        throw new Error("Password reset failed");
      }

      // Show success toast
      toast.success("Password reset successful", {
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
          Reset Password
        </h1>
        <Form className="mb-5">
          <Form.Group className="mb-4">
            <Form.Label className="ts-text-gray-5 ts-fs-20 fw-medium">
              Old Password
            </Form.Label>
            <Form.Control
              size="lg"
              type="password"
              value={oldPassword}
              onChange={handleOldPasswordChange}
            />
          </Form.Group>
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
              Confirm Password
            </Form.Label>
            <Form.Control
              size="lg"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
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

export default ResetPassword;
