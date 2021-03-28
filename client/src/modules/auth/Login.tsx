import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "./Login.scss";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signInWithGoogle();
    } catch (error) {
      setError("failed to sign in with google");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="Login-container">
        <Card className="Login-card">
          <div className="Logo">
            <h1>Concierge</h1>
          </div>
          <Card.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Button disabled={loading} type="submit" variant="outlined">
                  Sign In With Google
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Login;
