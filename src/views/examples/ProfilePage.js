import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";

import IndexNavbar from "components/Navbars/IndexNavbar";

function ProfilePage() {
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-thumbnail img-responsive"
                src={require("assets/picture.JPG")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Umang Hingu <br />
              </h4>
              <h6 className="description">Web Devloper</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProfilePage;
