import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiLoginBoxFill} from "react-icons/ri";
import { BsFillPersonLinesFill } from "react-icons/bs";

import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/UserContext";

const Header = () => {
  const { user,logOut} = useContext(AuthContext);

  //handleProfile 
  const navigate = useNavigate();
  const handleProfile =(event)=>{
     event.preventDefault();
     navigate("/profile");
  }

  return (
    <div className="header-section">
      <section className="top-navbar">
        <Nav activeKey="/home">
          <Navbar.Brand href="#" className="top-navbar-logo">
            <img src={require("./logo.png")} className="img-sizing" alt="" />
          </Navbar.Brand>
        </Nav>
        <div className="login-info">
          {user?.email ? " " : <h4 style={{ color: "crimson" }}>Welcome To Our Website</h4>
          }
        </div>
        {user?.email ?<>
           <div style={{cursor:"pointer"}} onClick={handleProfile} className="profile-img-section">
               <img className="profile-img-edit" src={user.photoURL} alt=""/>
           </div>
          <div className="logout-btn-style">
          <Button onClick={(event)=>{
             event.preventDefault();
             logOut();
          }} className="btn-style" variant="success">
            <Link to="/login" style={{ color: "white" }}>
              <RiLoginBoxFill className="me-2 fs-4"></RiLoginBoxFill>
              Logout
            </Link>
          </Button>
          </div>
        
        </>: (
          <>
            <div className="d-flex btn-div">
              <Button className="btn-style" variant="success">
                <Link to="/login" style={{ color: "white" }}>
                  <RiLoginBoxFill className="me-2 fs-4"></RiLoginBoxFill>
                  Login
                </Link>
              </Button>
              <Button className="btn-style" variant="success">
                <Link to="/signup" style={{ color: "white" }}>
                  SignUp
                </Link>
              </Button>
            </div>
          </>
        )}
      </section>
      <section>
        <div className="bottom-navbar-section ">
          {["sm"]?.map((expand) => (
            <Navbar
              key={expand}
              bg="dark"
              expand={expand}
              className="mb-3 navbar-dark "
            >
              <Container fluid>
                <Navbar.Brand className="navbar-logo" href="#">
                  <img
                    src={require("./logo.png")}
                    className="img-sizing"
                    alt=""
                  />
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      The People's Voice
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-start flex-grow-1 ">
                      <Nav.Link>
                        <NavLink
                          to="/"
                          style={({ isActive }) => ({
                            color: isActive ? "red" : "white",
                          })}
                        >
                          Home
                        </NavLink>
                      </Nav.Link>
                      <Nav.Link>
                        <NavLink
                          to="about"
                          style={({ isActive }) => ({
                            color: isActive ? "red" : "white",
                          })}
                        >
                          About Us
                        </NavLink>
                      </Nav.Link>
                      <Nav.Link>
                        <NavLink
                          to="/contract"
                          style={({ isActive }) => ({
                            color: isActive ? "red" : "white",
                          })}
                        >
                          Contract Us
                        </NavLink>
                      </Nav.Link>

                      {/* this for the aside getting in navbar that's when i use mobile phone the website */}

                      <aside className="sidebar sidebar-display">
                        <h2>All Category</h2>

                        <nav className="menu">
                          <Link href="#" className="menu-item is-active">
                            Breaking News
                          </Link>
                          <Link href="#" className="menu-item">
                            Regular News
                          </Link>
                          <Link href="#" className="menu-item">
                            International News
                          </Link>
                          <Link href="#" className="menu-item">
                            Sports
                          </Link>
                          <Link href="#" className="menu-item">
                            Entertainment
                          </Link>
                          <Link href="#" className="menu-item">
                            Arts
                          </Link>
                        </nav>
                      </aside>
                    </Nav>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Header;
