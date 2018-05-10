import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Modal, Button } from 'antd';

class Residential extends Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
  	  const images = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/www.gtop.asia/static/media/bg-1.f75533d1.png',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/www.gtop.asia/static/media/bg-1.f75533d1.png',
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/www.gtop.asia/static/media/bg-2.7c7abf12.png',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/www.gtop.asia/static/media/bg-2.7c7abf12.png'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/www.gtop.asia/static/media/bg-3.1770beb0.png',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/www.gtop.asia/static/media/bg-3.1770beb0.png'
      }
    ]

    return (
    	<div className="content-page">
    		<div className="gallery-container">
    			<div className="gallery-card" onClick={this.showModal}>
    				<h2>Bathroom</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card" onClick={this.showModal}>
    				<h2>Detached House</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card" onClick={this.showModal}>
    				<h2>Kitchen</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card" onClick={this.showModal}>
    				<h2>Living & Dining</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div><div className="gallery-card" onClick={this.showModal}>
    				<h2>Study</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card" onClick={this.showModal}>
    				<h2>Terrace & Balcony</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card" onClick={this.showModal}>
    				<h2>Wardrobe</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    		</div>	

        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <ImageGallery 
          	items={images}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>
      </div>
    );
  }
}

export default Residential;