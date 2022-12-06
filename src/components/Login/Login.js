import React from "react";
import auth from "../../firebase.init";
import {
  useAuthState,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { FloatingLabel, Form } from "react-bootstrap";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/admin", { replace: "true" });
    }
  }, [user, navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const secret = event.target.secret.value;
    const password = event.target.password.value;
    fetch("https://lugatul-quran-server.onrender.com/isAdmin", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ secret })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          signInWithEmailAndPassword(email, password);
        }
      });
  };
  return (
    <div className="login-page mx-auto mt-5 pt-5 mb-3">
      <h2 className="display-6 text-center">Please Login</h2>
      <Form onSubmit={handleLogin}>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            required
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingSecret"
          label="Admin secret"
          className="mb-3"
        >
          <Form.Control
            type="password"
            name="secret"
            placeholder="name@example.com"
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </FloatingLabel>
        <button
          type="submit"
          className="btn btn-dark login-button mx-auto d-block mt-3 w-50"
        >
          Login
        </button>
      </Form>
    </div>
  );
};

export default Login;
