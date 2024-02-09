import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PrivateRoutes from "../../Routes/PrivateRoutes";
import "./NewsCard.css";

const NewsCard = ({ news }) => {
  const { title, description, date, link, img } = news;

  return (
    <section className="my-3">
      <div className="card card-style">
        <div className="row ">
          <div className="col-md-7 px-3">
            <div className="card-block px-6">
              <h4 className="card-title">{title}</h4>
              <p className="card-text text-justify">{description}</p>
              <p>
                <small>{date}</small>
              </p>
              {/* <p className="card-text">
                Made for usage, commonly searched for. Fork, like and use it.
                Just move the carousel div above the col containing the text for
                left alignment of images
              </p> */}
              <br />
                <Link
                  to={link}
                  target="_blank"
                  className="mt-auto btn btn-primary  "
                >
                  Read More
                </Link>
            </div>
          </div>
          {/* <!-- start of  img-div --> */}
          <div className="col-md-5">
            <img className="news-card-img-sizing" src={img} alt="" />
          </div>
          {/* <!-- End of img-div --> */}
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
