import { Col, Row } from "react-bootstrap"
import Container from "react-bootstrap/Container";

export const BrandedHomepage = () => {

  //inside a column
  return (
    <>
      {/*<Container fluid>*/}
      <Row className={'section-homepage'}>
        <Col xs={0} sm={0}/>
        <Col className={'d-inline-block text-center'}>
          <span>
          <img
            alt=""
            src="/logo.svg"
            width="300"
            height="300"
            className={"d-inline-block align-top" }
          />
            <br />
            {/* <h1 className={'Header-title extra-large-logo d-inline-block justify-content-center'}>RePop</h1> */}
          </span>

        </Col>

        <Col xs={0} sm={0}/>

      </Row>
      <br/>
      <Row>
        <Col sm={0} md={1} lg={2} xl={2} xxl={2}/>
        <Col sm={12} md={5} lg={4} xl={4} xxl={4} className={'align-self-center'}>
          <p>
          RePop
          </p>
<p>
Our childhood sense of imagination is unique. Do you remember yours?
</p>
<p>
Over time, our minds populate with information from the world around us and our sense of imagination erodes.
</p>
<p>
Alcohol ink, the medium of RePop, creates guidelines of an unfiltered, barely controllable flow of energy states from abstractly, individually felt by the artist, to collectively tangible and fully shareable by all.
</p>
<p>
Such vulnerability creates genuine abstract art that touches people in unique ways based on the perspective, mental state and personal experiences and belief systems of the beholder, back in the realm of their own being, where things are fully felt, and often elude accurate description. RePop becomes a language of expression and interpretation; it is the bridge that allows for the sharing of emotions where so many other mediums fail.
</p>
<p>
Energy that is transferred and transmuted in this way, co-creating with forces so subtle to be regularly perceived, is indeed a form of alchemy.
</p>
<p>
RePop, then, strives for a repopulation of the imagination with color, inspiration, creativity and emotion, a defiance of the population of our minds by imagery in a pretty crazy world.
</p>
<p>
lahli, the artist, and her RePop team thank you for being a part of this journey, and we hope it transfixes you and speaks to you as intimately as you allow it to.
</p>
<p>
Thank you for being here with us now.
          </p>

        </Col>
        <Col sm={12} md={5} lg={5} xl={5} xxl={5}>
          <img
            alt=""
            src="/repop-about-small.jpeg"
            width={'100%'}
            height={'auto'}
            className="d-inline-block justify-content-center"
          />
        </Col>
        <Col xs={1} sm={0} md={1} lg={1} xl={1} xxl={1}/>
      </Row>

      <br/>

      <Row>
        <Col/>
        <Col sm={11} md={10} lg={10} xl={10} xxl={10} className={'text-center'}>
          <hr/>
        </Col>
        <Col/>
      </Row>
      {/* <Row>

        <Col sm={0} md={1} lg={1} xl={1} xxl={1}/>

        <Col sm={12} md={5} lg={5} xl={5} xxl={5}>

          <img
            alt=""
            src="/array-of-triangles.png"
            width={'100%'}
            height={'auto'}
            className="d-inline-block justify-content-center"
          />
        </Col>

        <Col sm={12} md={5} lg={4} xl={4} xxl={4} className={'text-left align-self-center'}>
          <br/><br/>
          <h3>
            Building a new generative art community, with perks
          </h3>
          <p className={'text-left'}>
            We're cultivating a community of artists, collectors and fans of Hyperion, and couldn't be more excited to
            be on Stargaze.


          </p>
          <p>
            Holders of Hyperion NFTs will gain early access to a new generative art platform being built by the team
            behind Hyperion.
          </p>
        </Col>
        <Col xs={1} sm={1} md={0} lg={2} xl={2} xxl={2}/>
      </Row> */}


      <Row>
        <Col/><Col sm={11} md={10} lg={10} xl={10} xxl={10} className={'text-center'}>
        <hr/>
      </Col><Col/>
      </Row>


      <Row>
        <Col/>


        {/* <Col sm={12} md={5} lg={4} xl={4} xxl={4} className={'text-left align-self-center'}>
          <br/><br/>
          <h3>
            About the team
          </h3>
          <p className={'text-left'}>
            <a href={'https://twitter.com/stewbracken'}>skymagic.eth</a> is a generative artist, professional web3
            developer, and the creator of Hyperion.
          </p>
          <p className={'text-left'}>
            <a href={'https://twitter.com/ogcryptobeatz'}>nova</a> is a musician, web3 enthusiast, and advisor.
          </p>
          <p className={'text-left'}>
            <a href={'https://twitter.com/3CPyuki'}>3CPyuki</a> is an advisor.
          </p>

          {/*<p>*/}
          {/*  Collectors of Hyperion will gain early access to the generative art platform being built by the Hyperion*/}
          {/*  team.*/}
          {/*</p>*/}
        {/* </Col> */ }

        <Col/>
      </Row>


      {/*</Container>*/}
    </>
  )
}