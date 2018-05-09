import React, { Component } from 'react';
import { Icon } from 'antd';

class Contact extends Component {
  render() {
    return (
    <div className="content">
	    <div className="banner">
	      <h1>Let's Keep In Touch!</h1>
	      <h3>We’d love to hear about your project and help you get started.</h3>
	    </div>
	    <div className="contact-cards-container">
	      <div className="contact-card-container">
	        <div className="left-card">
	          <Icon className="contact-icon-lg" type="tool" />
	          <h3>Construction Office</h3>
	          <p><Icon className="mail-icon" type="mail" />info@gtop.asia</p>
	          <p><Icon className="location-icon" type="environment-o" />5001 Beach Road, Golden Mile Complex<br />#07-01, Singapore 199588</p>
	        </div>
	      </div>
	      <div className="contact-card-container">
	        <div className="right-card">
	          <Icon className="contact-icon-lg" type="desktop" />
	          <h3>IT Office</h3>
	          <p><Icon className="mail-icon" type="mail" />info@e-spector.com</p>
	          <p><Icon className="location-icon" type="environment-o" />JTC LaunchPad@One-North Blk 79<br />#04-01/02, S139955</p>
	        </div>
	      </div>
	    </div>
	    <div className="footer">&copy; 2018 G Top International Pte Ltd</div>
	  </div>
    );
  }
}

export default Contact;