import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import axiosInstance from "@/axios";
import { getLoginDetails } from "@/redux/reducers/Auth"; // Update the path as needed
import { toast } from "react-toastify";

// taimoorlive786@gmail.com
// Taimoor@1234
function CreateAccountModal({
  show,
  handleClose,
  handleShowForgetPassword,
  handleShowLogin,
}) {
  const dispatch = useDispatch();

  // State variables for user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // Form change handlers
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRepeatPasswordChange = (e) => setRepeatPassword(e.target.value);

  // Registration function
  const registerUser = async () => {
    if (password !== repeatPassword) {
      toast.error("Password and Repeat Password must be Same!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      try {
        // Dispatch a loading action to set loading state to true
        dispatch({ type: "LOGIN_START" });

        // Add form validation logic here if needed
        if (!email || !password || password !== repeatPassword) {
          // Show error toast for invalid input
          toast.error("Invalid input. Please check your email and password.", {
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

        const response = await axiosInstance.post("register", {
          email,
          password,
        });

        if (!response.data || response.data.status !== "success") {
          throw new Error("Registration failed");
        }

        dispatch(getLoginDetails(true));

        // Show success toast
        toast.success("Registration successful", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // Dispatch a success action or set loading state to false if needed
        dispatch({ type: "lOGIN_SUCCESS" });
        handleClose(); // Close the modal after successful registration
      } catch (error) {
        console.error("Registration error:", error);

        // Dispatch an error action to update state with the error message
        dispatch({
          type: "FETCH_USER_FAILURE",
          payload: error.message || "An error occurred during registration",
        });

        // Show error toast
        toast.error("An error occurred during registration", {
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
        <Form className="mb-5">
          <Form.Group className="mb-4">
            <Form.Label className="ts-text-gray-5 ts-fs-20 fw-medium">
              Email Address
            </Form.Label>
            <Form.Control
              size="lg"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="ts-text-gray-5 ts-fs-20 fw-medium d-flex justify-content-between ">
              <span>Password</span>
              {/* ... (Rest of the password input) */}
            </Form.Label>
            <Form.Control
              size="lg"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="ts-text-gray-5 ts-fs-20 fw-medium ">
              <span>Repeat Password</span>
            </Form.Label>
            <Form.Control
              size="lg"
              type="password"
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
            />
          </Form.Group>
        </Form>
        <div className="text-center">
          <button
            className="btn ts-btn ts-btn--lg ts-fs-20 fw-bold ts-btn-primary text-uppercase mb-05"
            onClick={registerUser}
          >
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

export default CreateAccountModal;
