import React from "react";
import Carasuel from "../Carasuel/Carasuel";  
import TopHeading from "../News/TopHeading/TopHeading";
import './Home.css'

const Home = () => {
  return (
    <div className="home-section">
        <Carasuel></Carasuel>
        <TopHeading></TopHeading>
    </div>
  );
};  

export default Home;
