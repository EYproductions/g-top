import React, { Component } from 'react';
import { Carousel } from 'antd';
import bg1 from '../images/bg-1.png';
import bg2 from '../images/bg-2.png';
import bg3 from '../images/bg-3.png';
import bg4 from '../images/bg-4.png';

class Home extends Component {
  render() {
    return (
    	<div className="carousel-container">
		    <Carousel autoplay>
		      <div>
		        <img className="home-img" src={ bg1 } alt="Background 1" />
		      </div>
		      <div>
		        <img className="home-img" src={ bg2 } alt="Background 2" />
		      </div>
		      <div>
		        <img className="home-img" src={ bg3 } alt="Background 3" />
		      </div>
		      <div>
		        <img className="home-img" src={ bg4 } alt="Background 4" />
		      </div>
		    </Carousel>
		    <p className="carousel-title">Ideal outside. Ideas inside.</p>
		    <div className="carousel-subtitle"><p>We are BCA Licensed builder and Registered Renovation Contractor. We are not only serve you good looking for the space, what’s inside that really matters.</p></div>
		    <div className="home-footer">&copy; 2018 G Top International Pte Ltd</div>
		  </div>
    );
  }
}

export default Home;