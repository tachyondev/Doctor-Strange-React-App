import React, { Component } from "react";
import { Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomLayout.css";

class CustomLayout extends Component {
  render() {
    return (
      <div>
        <div className="content-img-layer"></div>
        <div className="content-img-overlay"></div>
        <div className="content-data-layer">
          <div className="content-logo-holder">
            <img
              className="content-logo"
              src="http://time-stone.herokuapp.com/images/logo.png"
              alt="logo"
            ></img>
          </div>
          <div className="content-social-media-holder">
            <FontAwesomeIcon
              className="content-social-media-youtube"
              icon={faYoutube}
            />
            <FontAwesomeIcon
              className="content-social-media-twitter"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className="content-social-media-insta"
              icon={faInstagram}
            />
            <div className="content-social-media-text">#WHATEVERITTAKES</div>
          </div>
          <div className="content-nav-holder">
            <Nav className="justify-content-center">
              <Nav.Item className="content-nav-item">HOME</Nav.Item>
              <Nav.Item className="content-nav-item">SYNOPSIS</Nav.Item>
              <Nav.Item className="content-nav-item">CAST</Nav.Item>
              <Nav.Item className="content-nav-item">GALLARY</Nav.Item>
              <Nav.Item className="content-nav-item">TRAILER</Nav.Item>
            </Nav>
          </div>
          <div className="content-menu-holder">
            <FontAwesomeIcon className="content-menu-icon" icon={faBars} />
          </div>
          <div className="content-item-counts-holder">
            <div className="content-item-counts-text">#TIMESTONE</div>
            <div className="conetnt-item-counts-number-one">01</div>
            <div className="conetnt-item-counts-number-two">02</div>
            <div className="conetnt-item-counts-number-three">03</div>
            <div className="conetnt-item-counts-number-four">04</div>
            <div className="conetnt-item-counts-number-five">05</div>
            <div className="content-item-counts-text-end">ESP</div>
          </div>
          <div className="content-main-holder">
            <div className="content-main-title-holder">
              <h1 className="content-main-title-text">DOCTOR STRANGE</h1>
            </div>
            <div className="content-main-subtitle-holder">
              <h1 className="content-main-subtitle-text">
                VERY SOON EVERYTHING WILL BE AT STAKE <br/>THE
                <span> DENSITY OF THE HUMAN</span> RACE WILL BE LIVED.
              </h1>
              <h3 className="content-main-subtitle-subtext">
                The most anticipated movie of the year.
              </h3>
            </div>
            <div className="content-main-button-holder">
              <Button className="content-main-button" variant="outline-secondary">
                TRAILER
              </Button>
            </div>
          </div>
          {/* <div className="content-next-page-content-holder">
             <Button className="content-next-page-button" variant="outline-secondary">
               <img className="content-next-page-button-icon" src="http://192.168.225.28:3000/images/scroll_down.png" alt="scroll_down"></img>
              </Button>
          </div> */}
        </div>
      </div>
    );
  }
}

export default CustomLayout;
