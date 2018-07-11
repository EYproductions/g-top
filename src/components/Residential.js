import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Modal, Button } from 'antd';

class Residential extends Component {
  state = { 
  	bathroomVisible: false,
  	detachedHouseVisible: false,
  	kitchenVisible: false,
  	livingVisible: false,
  	studyVisible: false,
  	terraceVisible: false,
  	wardrobeVisible: false,
  }
  setBathroomVisible(bathroomVisible) {
    this.setState({ bathroomVisible });
  }
  setDetachedHouseVisible(detachedHouseVisible) {
  	this.setState({ detachedHouseVisible });
  }
  setKitchenVisible(kitchenVisible) {
  	this.setState({ kitchenVisible });
  }
  setLivingVisible(livingVisible) {
  	this.setState({ livingVisible });
  }
  setStudyVisible(studyVisible) {
  	this.setState({ studyVisible });
  }
  setTerraceVisible(terraceVisible) {
  	this.setState({ terraceVisible });
  }
  setWardrobeVisible(wardrobeVisible) {
  	this.setState({ wardrobeVisible });
  }

  render() {
  	  const bathroomImages = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/www.gtop.asia/static/media/bg-1.f75533d1.png',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/www.gtop.asia/static/media/bg-1.f75533d1.png'
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
    			<div className="gallery-card" onClick={() => this.setBathroomVisible(true)}>
    				<h2>Bathroom</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card" onClick={() => this.setDetachedHouseVisible(true)}>
    				<h2>Detached House</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card" onClick={() => this.setKitchenVisible(true)}>
    				<h2>Kitchen</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card" onClick={() => this.setLivingVisible(true)}>
    				<h2>Living & Dining</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card" onClick={() => this.setStudyVisible(true)}>
    				<h2>Study</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card" onClick={() => this.setTerraceVisible(true)}>
    				<h2>Terrace & Balcony</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card" onClick={() => this.setWardrobeVisible(true)}>
    				<h2>Wardrobe</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    		</div>	

        <Modal
          title="Bathroom"
          visible={this.state.bathroomVisible}
          onCancel={() => this.setBathroomVisible(false)}
          footer={null}
        >
          <ImageGallery 
          	items={bathroomImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>

        <Modal
          title="Detached House"
          visible={this.state.detachedHouseVisible}
          onCancel={() => this.setDetachedHouseVisible(false)}
          footer={null}
        >
          <ImageGallery 
          	items={bathroomImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>

        <Modal
          title="Kitchen"
          visible={this.state.kitchenVisible}
          onCancel={() => this.setKitchenVisible(false)}
          footer={null}
        >
          <ImageGallery 
          	items={bathroomImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>

        <Modal
          title="Living & Dining"
          visible={this.state.livingVisible}
          onCancel={() => this.setLivingVisible(false)}
          footer={null}
        >
          <ImageGallery 
          	items={bathroomImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>

        <Modal
          title="Study"
          visible={this.state.studyVisible}
          onCancel={() => this.setStudyVisible(false)}
          footer={null}
        >
          <ImageGallery 
          	items={bathroomImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>

        <Modal
          title="Terrace & Balcony"
          visible={this.state.terraceVisible}
          onCancel={() => this.setTerraceVisible(false)}
          footer={null}
        >
          <ImageGallery 
          	items={bathroomImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>

        <Modal
          title="Wardrobe"
          visible={this.state.wardrobeVisible}
          onCancel={() => this.setWardrobeVisible(false)}
          footer={null}
        >
          <ImageGallery 
          	items={bathroomImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>
      </div>
    );
  }
}

export default Residential;