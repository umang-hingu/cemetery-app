import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function RegisterPage() {
  const histroy = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const registerData = {
    email: email,
    password: password,
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });

  const tokenReceiveHandler = async () => {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(registerData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const token = data.token;
    localStorage.setItem("login-token", token);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    tokenReceiveHandler();
    histroy.replace("/login-page");
    if (localStorage.getItem("register-token")) {
      histroy.push("/index");
    } else {
      histroy.push("/register-page");
    }
  };

  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>
                <div className="social-line text-center"></div>
                <Form className="register-form" onSubmit={submitHandler}>
                  <label>Email</label>
                  <Input
                    placeholder="Email"
                    type="text"
                    onChange={emailChangeHandler}
                  />
                  <label>Password</label>
                  <Input
                    placeholder="Password"
                    type="password"
                    onChange={passwordChangeHandler}
                  />
                  <Button className="btn-link" onClick={()=>{histroy.push('/register-page')}} type="button">Register Here</Button>

                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="submit"
                  >
                    Log In
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Umang Hingu
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
