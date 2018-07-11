import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Modal, Button } from 'antd';

class Residential extends Component {
  state = { 
  	oneNorthVisible: false,
  	suntecVisible: false,
  	officeAVisible: false,
  	officeBVisible: false,
  	officeCVisible: false,
  	barAVisible: false,
  	barBVisible: false,
  	nusPgpVisible: false,
  	canteenAVisible: false,
  	canteenBVisible: false,
  	canteenCVisible: false
  }
  setOneNorthVisible(oneNorthVisible) {
    this.setState({ oneNorthVisible });
  }
  setSuntecVisible(suntecVisible) {
  	this.setState({ suntecVisible });
  }
  setOfficeAVisible(officeAVisible) {
  	this.setState({ officeAVisible });
  }
  setOfficeBVisible(officeBVisible) {
  	this.setState({ officeBVisible });
  }
  setOfficeCVisible(officeCVisible) {
  	this.setState({ officeCVisible });
  }
  setBarAVisible(barAVisible) {
  	this.setState({ barAVisible });
  }
  setBarBVisible(barBVisible) {
  	this.setState({ barBVisible });
  }
  setNusPgpVisible(nusPgpVisible) {
  	this.setState({ nusPgpVisible });
  }
  setCanteenAVisible(canteenAVisible) {
  	this.setState({ canteenAVisible });
  }
  setCanteenBVisible(canteenBVisible) {
  	this.setState({ canteenBVisible });
  }
  setCanteenCVisible(canteenCVisible) {
  	this.setState({ canteenCVisible });
  }

  render() {
    const oneNorthImages = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-one-north/ucommune-one-north-1.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-one-north/ucommune-one-north-1.jpg',
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-one-north/ucommune-one-north-2.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-one-north/ucommune-one-north-2.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-one-north/ucommune-one-north-3.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-one-north/ucommune-one-north-3.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-one-north/ucommune-one-north-4.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-one-north/ucommune-one-north-4.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-one-north/ucommune-one-north-5.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-one-north/ucommune-one-north-5.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-one-north/ucommune-one-north-6.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-one-north/ucommune-one-north-6.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-one-north/ucommune-one-north-7.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-one-north/ucommune-one-north-7.jpg'
      }
    ]
    const suntecImages = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-suntec/ucommune-suntec-1.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-suntec/ucommune-suntec-1.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-suntec/ucommune-suntec-2.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-suntec/ucommune-suntec-2.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-suntec/ucommune-suntec-3.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-suntec/ucommune-suntec-3.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-suntec/ucommune-suntec-4.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-suntec/ucommune-suntec-4.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-suntec/ucommune-suntec-5.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-suntec/ucommune-suntec-5.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-suntec/ucommune-suntec-6.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-suntec/ucommune-suntec-6.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-suntec/ucommune-suntec-7.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-suntec/ucommune-suntec-7.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-suntec/ucommune-suntec-8.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/ucommune-suntec/ucommune-suntec-8.jpg'
      }
    ]
    const officeAImages = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office1/office1-1.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office1/office1-1.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office1/office1-2.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office1/office1-2.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office1/office1-3.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office1/office1-3.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office1/office1-4.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office1/office1-4.jpg'
      }
    ]
    const officeBImages = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office2/office2-1.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office2/office2-1.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office2/office2-2.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office2/office2-2.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office2/office2-3.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office2/office2-3.jpg'
      }
    ]
    const officeCImages = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office3/office3-1.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office3/office3-1.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office3/office3-2.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office3/office3-2.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office3/office3-3.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/office3/office3-3.jpg'
      }
    ]
    const barAImages = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/bar1/bar1-1.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/bar1/bar1-1.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/bar1/bar1-2.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/bar1/bar1-2.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/bar1/bar1-3.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/bar1/bar1-3.jpg'
      }
    ]
    const barBImages = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/bar2/bar2-1.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/bar2/bar2-1.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/bar2/bar2-2.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/bar2/bar2-2.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/bar2/bar2-3.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/bar2/bar2-3.jpg'
      }
    ]
    const nusPgpImages = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/nus-pgp/nus-pgp-1.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/nus-pgp/nus-pgp-1.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/nus-pgp/nus-pgp-2.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/nus-pgp/nus-pgp-2.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/nus-pgp/nus-pgp-3.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/nus-pgp/nus-pgp-3.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/nus-pgp/nus-pgp-4.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/nus-pgp/nus-pgp-4.jpg'
      }
    ]
    const canteenAImages = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/canteen1/canteen1-1.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/canteen1/canteen1-1.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/canteen1/canteen1-2.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/canteen1/canteen1-2.jpg'
      }
    ]
    const canteenBImages = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/canteen2/canteen2-1.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/canteen2/canteen2-1.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/canteen2/canteen2-2.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/canteen2/canteen2-2.jpg'
      }
    ]
    const canteenCImages = [
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/canteen3/canteen3-1.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/canteen3/canteen3-1.jpg'
      },
      {
        original: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/canteen3/canteen3-2.jpg',
        thumbnail: 'https://s3-ap-southeast-1.amazonaws.com/g-top-gallery/commercial/canteen3/canteen3-2.jpg'
      }
    ]

    return (
    	<div className="content-page">
    		<div className="gallery-container">
    			<div className="gallery-card one-north" onClick={() => this.setOneNorthVisible(true)}>
    				<h2>Ucommune - One North</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card suntec" onClick={() => this.setSuntecVisible(true)}>
    				<h2>Ucommune - Suntec</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card office-a" onClick={() => this.setOfficeAVisible(true)}>
    				<h2>Office A</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card office-b" onClick={() => this.setOfficeBVisible(true)}>
    				<h2>Office B</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card office-c" onClick={() => this.setOfficeCVisible(true)}>
    				<h2>Office C</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card bar-a" onClick={() => this.setBarAVisible(true)}>
    				<h2>Bar A</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card bar-b" onClick={() => this.setBarBVisible(true)}>
    				<h2>Bar B</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card nus-pgp" onClick={() => this.setNusPgpVisible(true)}>
    				<h2>NUS PGP</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card canteen-a" onClick={() => this.setCanteenAVisible(true)}>
    				<h2>Canteen A</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card canteen-b" onClick={() => this.setCanteenBVisible(true)}>
    				<h2>Canteen B</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    			<div className="gallery-card canteen-c" onClick={() => this.setCanteenCVisible(true)}>
    				<h2>Canteen C</h2>
    				<span>STYLE 1</span>
    				<span>STYLE 2</span>
    			</div>
    		</div>	

        <Modal
          title="Ucommune - One North"
          visible={this.state.oneNorthVisible}
          onCancel={() => this.setOneNorthVisible(false)}
          footer={null}
        >
          <ImageGallery 
          	items={oneNorthImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>

        <Modal
          title="Ucommune - Suntec"
          visible={this.state.suntecVisible}
          onCancel={() => this.setSuntecVisible(false)}
          footer={null}
        >
          <ImageGallery 
          	items={suntecImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>

        <Modal
          title="Office A"
          visible={this.state.officeAVisible}
          onCancel={() => this.setOfficeAVisible(false)}
          footer={null}
        >
          <ImageGallery 
          	items={officeAImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>

        <Modal
          title="Office B"
          visible={this.state.officeBVisible}
          onCancel={() => this.setOfficeBVisible(false)}
          footer={null}
        >
          <ImageGallery 
          	items={officeBImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>

        <Modal
          title="Office C"
          visible={this.state.officeCImages}
          onCancel={() => this.setOfficeCVisible(false)}
          footer={null}
        >
          <ImageGallery 
          	items={officeCImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>

        <Modal
          title="Bar A"
          visible={this.state.barAVisible}
          onCancel={() => this.setBarAVisible(false)}
          footer={null}
        >
          <ImageGallery 
          	items={barAImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>

        <Modal
          title="Bar B"
          visible={this.state.barBVisible}
          onCancel={() => this.setBarBVisible(false)}
          footer={null}
        >
          <ImageGallery 
          	items={barBImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>

        <Modal
          title="NUS PGP"
          visible={this.state.nusPgpVisible}
          onCancel={() => this.setNusPgpVisible(false)}
          footer={null}
        >
          <ImageGallery 
          	items={nusPgpImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>

        <Modal
          title="Canteen A"
          visible={this.state.canteenAVisible}
          onCancel={() => this.setCanteenAVisible(false)}
          footer={null}
        >
          <ImageGallery 
          	items={canteenAImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>

        <Modal
          title="Canteen B"
          visible={this.state.canteenBVisible}
          onCancel={() => this.setCanteenBVisible(false)}
          footer={null}
        >
          <ImageGallery 
          	items={canteenBImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>

        <Modal
          title="Canteen C"
          visible={this.state.canteenCVisible}
          onCancel={() => this.setCanteenCVisible(false)}
          footer={null}
        >
          <ImageGallery 
          	items={canteenCImages}
	          showIndex={true}
	          autoPlay={true}
	          slideOnThumbnailHover={true} />
        </Modal>
      </div>
    );
  }
}

export default Residential;