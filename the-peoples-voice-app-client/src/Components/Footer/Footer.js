import React from "react";
import './Footer.css'
import img  from './images/insta-2.jpg'
import { FaInfo,FaNewspaper,FaLocationArrow,FaPhone,FaVoicemail,FaInstagram} from 'react-icons/fa';
import { HiOutlinePaperAirplane,HiEnvelope} from "react-icons/hi2";

const Footer = () => {
  return (
    <div className="footer-seciton">
      <footer className="footer-09">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading d-flex">
                <span className="icon d-flex align-items-center justify-content-center">
                <FaInfo />
                </span>
                About
              </h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon"></span>
                    <FaLocationArrow className="mx-1"></FaLocationArrow>
                    <span className="text">
                       56/7-5,Bashabo,Dhaka
                    </span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon"></span>
                      <FaPhone className="mx-1"></FaPhone>
                      <span className="text">01775777038</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon"></span>
                       <HiEnvelope className="mx-1"></HiEnvelope>
                      <span className="text">iammehedi296@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <form action="#" className="subscribe-form">
                <div className="form-group d-flex">
                  <input
                    type="text"
                    className="form-control from-control-style rounded-left"
                    placeholder="Enter email address"
                  />
                  <button
                    type="submit"
                    className="form-control submit rounded-right"
                  >
                    <span className="sr-only">Submit</span>
                     <HiOutlinePaperAirplane></HiOutlinePaperAirplane>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading d-flex align-items-center">
                <span className="icon d-flex align-items-center justify-content-center">
                 <FaNewspaper></FaNewspaper>
                </span>
                Latest News
              </h2>
              <div className="block-21 mb-4 d-flex">
                <a
                  className="img mr-4 rounded"
                  style={{ 
                    backgroundImage:`url(${img})` 
                  }}
                ></a>
                <div className="text">
                  <h3 className="heading">
                    <a href="#">
                      Even the all-powerful Pointing has no control about
                    </a>
                  </h3>
                  <div className="meta">
                    <div>
                      <a href="#">
                        <span className="icon-calendar"></span> {new Date().toJSON().slice(0, 10)}
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-person"></span> Mehedi
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-chat"></span> 23
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <a
                  className="img mr-4 rounded"
                  style={{ 
                    backgroundImage:`url(${img})` 
                  }}
                ></a>
                <div className="text">
                  <h3 className="heading">
                    <a href="#">
                      Even the all-powerful Pointing has no control about
                    </a>
                  </h3>
                  <div className="meta">
                    <div>
                      <a href="#">
                        <span className="icon-calendar"></span> {new Date().toJSON().slice(0, 10)}
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-person"></span> Mehedi
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-chat"></span> 23
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading d-flex align-items-center">
                <span className="icon d-flex align-items-center justify-content-center">
                 <FaInfo></FaInfo>
                </span>
                Information
              </h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="py-1 d-block">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="py-1 d-block">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="py-1 d-block">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="py-1 d-block">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="py-1 d-block">
                    Help &amp; Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading d-flex align-items-center">
                <span className="icon d-flex align-items-center justify-content-center">
                  <FaInstagram></FaInstagram>
                </span>
                Instagram
              </h2>
              <div className="block-24">
                <div className="row no-gutters">
                  <div className="col-4 col-md-4 p-1">
                    <a
                      href="#"
                      className="img rounded"
                      style={{ 
                        backgroundImage:`url(${img})` 
                      }}
                    ></a>
                  </div>
                  <div className="col-4 col-md-4 p-1">
                    <a
                      href="#"
                      className="img rounded"
                      style={{ 
                        backgroundImage:`url(${img})` 
                      }}
                    ></a>
                  </div>
                  <div className="col-4 col-md-4 p-1">
                    <a
                      href="#"
                      className="img rounded"
                      style={{ 
                        backgroundImage:`url(${img})` 
                      }}
                    ></a>
                  </div>
                  <div className="col-4 col-md-4 p-1">
                    <a
                      href="#"
                      className="img rounded"
                      style={{ 
                        backgroundImage:`url(${img})` 
                      }}
                    ></a>
                  </div>
                  <div className="col-4 col-md-4 p-1">
                    <a
                      href="#"
                      className="img rounded"
                      style={{ 
                        backgroundImage:`url(${img})` 
                      }}
                    ></a>
                  </div>
                  <div className="col-4 col-md-4 p-1">
                    <a
                      href="#"
                      className="img rounded"
                      style={{ 
                        backgroundImage:`url(${img})` 
                      }}
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-1 pt-4 border-top">
              <p className="copyright text-center">
                Copyright &copy;
                {new Date().getFullYear()} All
                rights reserved.
              </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
