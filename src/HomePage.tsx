import React from 'react';
import { Header } from "./components/header";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { Footer } from "./components/footer";
import styles from './Homepage.module.css'
import Image from 'next/image'
import {imageLoader} from '../loader'

function HomePage() {
  return (
    <div className="App">
      <Header/>
      <Container fluid style={{paddingLeft:'0',paddingRight:'0'}}>
        <Row>
          <Col className={styles['section-homepage']}>
            {/* <RandomToken/> */}
            {/* <div className={styles['full-background']}  style={{'width':"100%","backgroundImage": "url('/repop-homepage-small.jpeg')"}} > */}
            <div>
              {/* <Image src='/repop-homepage-small.jpeg' loader={imageLoader} unoptimized={true} layout="responsive" width={'1280'} height={'1920'}></Image> */}
              <img style={{width:'100%'}} className='responsive-image' src={'/repop-homepage-small.jpeg'} />  
            </div>
            
          </Col>
        </Row>
        
        <Row >
          <Col/>
          <Col sm={11} md={10} lg={10} xl={10} xxl={10} className={'text-center'}>
            <hr/>
          </Col>
          <Col/>
        </Row>
        <Row>
          <Col>
            {/*<AllMintedGallery />*/}
            {/* <BrandedHomepage/> */}
          </Col>
        </Row>
        
        
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
