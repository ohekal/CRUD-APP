import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function RootLayout() {
  return (
    <Container>
      <Header />
      <Row className="px-5">
        <Col xs={{ span: 8, offset: 2 }}></Col>
        <Outlet />
      </Row>
    </Container>
  );
}

export default RootLayout;
