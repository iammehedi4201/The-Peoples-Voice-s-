import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LeftSideNav from "../../Components/Header/Sidebar/LeftSideNav/LeftSideNav";
import RightNav from "../../Components/Header/Sidebar/RightNav/RightNav";
import './Main.css'

const Main = () => {
  return (
    <div className="row">
      <Container className="min-vh-100">
      <Header></Header>
        <Row>
          <Col md='2' className="leftsidenav-col ">
              <LeftSideNav></LeftSideNav>
          </Col>
          <Col>
            <Outlet></Outlet>
            <Footer></Footer>
          </Col>
          <Col md="3" >
             <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
    
    </div>
  );
};

export default Main;
