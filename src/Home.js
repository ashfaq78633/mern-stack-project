import React from "react";
import './App.css';
import imd1 from './ashfaq.jpg'

const Home = () => {
  return (
    <div className="home-container">
       <img src={imd1} alt="" className="home-image" />
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br><br></br><br></br><br></br><br></br>
      <h1 className="home-heading">Ashfaq A</h1>
      <p className="home-subheading">Aspiring AI & ML Engineer | Passionate Programmer</p>
      <img src={imd1} alt="" className="home-image" />
    </div>
  );
};

export default Home;
