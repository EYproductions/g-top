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
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/bathroom/bathroom-1.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/bathroom/bathroom-1.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/bathroom/bathroom-2.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/bathroom/bathroom-2.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/bathroom/bathroom-3.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/bathroom/bathroom-3.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/bathroom/bathroom-4.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/bathroom/bathroom-4.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/bathroom/bathroom-5.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/bathroom/bathroom-5.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/bathroom/bathroom-6.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/bathroom/bathroom-6.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/bathroom/bathroom-7.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/bathroom/bathroom-7.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/bathroom/bathroom-8.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/bathroom/bathroom-8.jpg'
      }
    ]
    const detachedHouseImages = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/detached-house/detached-house-1.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/detached-house/detached-house-1.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/detached-house/detached-house-2.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/detached-house/detached-house-2.jpg'
      }
    ]
    const kitchenImages = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-1.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-1.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-2.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-2.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-3.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-3.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-4.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-4.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-5.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-5.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-6.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-6.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-7.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-7.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-8.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-8.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-9.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-9.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-10.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-10.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-11.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-11.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-12.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-12.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-13.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-13.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-14.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-14.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-15.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-15.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-16.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/kitchen/kitchen-16.jpg'
      }
    ]
    const livingAndDiningImages = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-1.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-1.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-2.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-2.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-3.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-3.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-4.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-4.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-5.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-5.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-6.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-6.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-7.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-7.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-8.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-8.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-9.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-9.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-10.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-10.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-11.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-11.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-12.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-12.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-13.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-13.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-14.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-14.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-15.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-15.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-16.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-16.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-17.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-17.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-18.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-18.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-19.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-19.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-20.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-20.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-21.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-21.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-22.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-22.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-23.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-23.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-24.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-24.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-25.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-25.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-26.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-26.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-27.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-27.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-28.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/living-and-dining/living-and-dining-28.jpg'
      }
    ]
    const studyImages = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-1.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-1.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-2.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-2.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-3.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-3.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-4.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-4.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-5.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-5.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-6.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-6.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-7.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-7.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-8.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-8.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-9.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-9.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-10.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/study/study-10.jpg'
      }
    ]
    const terraceAndBalconyImages = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/terrace-and-balcony/terrace-and-balcony-1.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/terrace-and-balcony/terrace-and-balcony-1.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/terrace-and-balcony/terrace-and-balcony-2.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/terrace-and-balcony/terrace-and-balcony-2.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/terrace-and-balcony/terrace-and-balcony-3.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/terrace-and-balcony/terrace-and-balcony-3.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/terrace-and-balcony/terrace-and-balcony-4.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/terrace-and-balcony/terrace-and-balcony-4.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/terrace-and-balcony/terrace-and-balcony-5.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/terrace-and-balcony/terrace-and-balcony-5.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/terrace-and-balcony/terrace-and-balcony-6.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/terrace-and-balcony/terrace-and-balcony-6.jpg'
      }
    ]
    const wardrobeImages = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/wardrobe/wardrobe-1.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/wardrobe/wardrobe-1.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/wardrobe/wardrobe-2.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/wardrobe/wardrobe-2.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/wardrobe/wardrobe-3.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/wardrobe/wardrobe-3.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/wardrobe/wardrobe-4.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/wardrobe/wardrobe-4.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/wardrobe/wardrobe-5.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/wardrobe/wardrobe-5.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/wardrobe/wardrobe-6.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/residential/wardrobe/wardrobe-6.jpg'
      }
    ]


    return (
    	<div className="content-page">
    		<div className="gallery-container">
          <div className="gallery-title">
            Gallery | Residential
            <span>76 photos</span>
          </div>
    			<div className="gallery-card bathroom" onClick={() => this.setBathroomVisible(true)}>
    				<h2>Bathroom</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card detached-house" onClick={() => this.setDetachedHouseVisible(true)}>
    				<h2>Detached House</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card kitchen" onClick={() => this.setKitchenVisible(true)}>
    				<h2>Kitchen</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card living-and-dining" onClick={() => this.setLivingVisible(true)}>
    				<h2>Living & Dining</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card study" onClick={() => this.setStudyVisible(true)}>
    				<h2>Study</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card terrace-and-balcony" onClick={() => this.setTerraceVisible(true)}>
    				<h2>Terrace & Balcony</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card wardrobe" onClick={() => this.setWardrobeVisible(true)}>
    				<h2>Wardrobe</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    		</div>
        <div className="footer content-footer">&copy; 2018 G Top International Pte Ltd</div>	

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
          	items={detachedHouseImages}
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
          	items={kitchenImages}
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
          	items={livingAndDiningImages}
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
          	items={studyImages}
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
          	items={terraceAndBalconyImages}
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
          	items={wardrobeImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>
      </div>
    );
  }
}

export default Residential;