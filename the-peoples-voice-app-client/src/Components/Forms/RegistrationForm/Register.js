import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/UserContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Register.css";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successfull, setSuccessfull] = useState(false);
  const [accept, setAccept] = useState(false);

  const { SignUp, updateUserNameAndImage, emailVerification, setShow, show } =
    useContext(AuthContext);

  //modal colse function
  const handleClose = () => setShow(false);

  //handle Checked
  const handleCheck = (event) => {
    setAccept(event.target.checked);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessfull(false);
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name, email, password, confirmPassword, photo);

    if (password !== confirmPassword) {
      setErrorMessage(" Sorry Password Didn't Matched");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password Length Must be atleast 6 character");
      return;
    }

    SignUp(email, password)
      .then((result) => {
        const user = result.user;
        updateUserNameAndImage(name, photo);
        emailVerification();
        setSuccessfull(true);
        form.reset();
        console.log("The Create user is :-", user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="login-form-style " style={{}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center min-vh-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-6 form-style">
            <div
              className="card shadow-2-strong bg-color"
              style={{ borderRadius: "1rem" }}
            >
              <form
                onSubmit={handleSignUp}
                className="card-body p-5 text-center"
              >
                <h1 className="mb-5 text-info border-bottom">Sign Up</h1>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typeNameX-2">
                    <h5 className="">Name:</h5>
                  </label>
                  <input
                    type="text"
                    id="typeNameX-2"
                    name="name"
                    className="form-control  form-control-lg"
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typeNameX-2">
                    <h5 className="">Photo URL:</h5>
                  </label>
                  <input
                    type="text"
                    id="typeNameX-2"
                    name="photoUrl"
                    className="form-control  form-control-lg"
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typeEmailX-3">
                    <h5 className="">Email:</h5>
                  </label>
                  <input
                    type="email"
                    id="typeEmailX-3"
                    name="email"
                    className="form-control  form-control-lg"
                  />
                </div>

                <div className="form-outline mb-4 ">
                  <label className="form-label " htmlFor="typePasswordX-2">
                    <h5 className="">Password:</h5>
                  </label>
                  <input
                    type="password"
                    id="typePasswordX-4"
                    name="password"
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="form-outline mb-4 ">
                  <label className="form-label " htmlFor="typePasswordX-2">
                    <h5 className="">Confirm Password:</h5>
                  </label>
                  <input
                    type="password"
                    id="typePasswordX-4"
                    name="confirmPassword"
                    className="form-control form-control-lg"
                  />
                </div>

                {/* <!-- Checkbox --> */}
                <div className="form-check d-flex justify-content-start mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onClick={handleCheck}
                  />
                  <label className="form-check-label" for="form1Example3">
                    Accept <Link to="/terms">Terms and Conditions</Link>
                  </label>
                </div>

                {errorMessage ? (
                  <>
                    <hr className="my-4 border-bottom" />
                    <h6 className="text-danger">{errorMessage}</h6>
                    <hr className="my-4 border-bottom" />
                  </>
                ) : (
                  " "
                )}
                {successfull && (
                  <>
                    <hr className="my-4 border-bottom" />
                    <h6 className="text-success">User Created successfully</h6>
                    <hr className="my-4 border-bottom" />
                  </>
                )}

                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                  disabled={!accept}
                >
                  SignUp
                </button>

                <hr className="my-4 border-bottom" />
                <p>
                  Have a account Please{" "}
                  <Link to="/login" className="text-danger">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* email verification sent message */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Email verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>verification mail sent to your Email</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Register;
