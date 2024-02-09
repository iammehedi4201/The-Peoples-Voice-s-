import React from "react";
import './CarouselItems.css'

const CarouselItems = ({news}) => {

    const {title,date,link,img} = news

  return (
    <div className="inner-carousel-item">
      <div className="carousel-img-details">
        <h6>{title}</h6>
        <p>
          
          <span>{date}</span>
        </p>

        <a className="btn btn-dark d-grid" target="_blank" href={link} >
          Read More
        </a>
      </div>
      <img src={img} className="carousel-img-sizing" alt="Messi" />
    </div>
  );
};

export default CarouselItems;
