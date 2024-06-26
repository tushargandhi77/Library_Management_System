import React from 'react'
import './Footer.css';
import facebook from '../assets/footerimage/facebook.png';
import twitter from '../assets/footerimage/twitter.png';
import linkedin from '../assets/footerimage/linkedin.png';
import instagram from '../assets/footerimage/instagram.png';

export default function Footer() {
  return (
    <div className="footer mt-5">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
          <h4>Resources</h4>
            <a href="/resourse">
              <p>Resourse center</p>
            </a>
            <a href="/resourse">
              <p>Testimonials</p>
            </a>
            <a href="/resourse">
              <p>STV</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
          <h4>Partners</h4>
            <a href="/employe">
              <p>swing tech</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
          <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Coming soon</h4>
            <div className="socialmedia">
              <p><img src={facebook} alt=""/></p>
              <p><img src={twitter} alt=""/></p>
              <p><img src={linkedin} alt=""/></p>
              <p><img src={instagram} alt=""/></p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              @{new Date().getFullYear()} Libralogic. All right reserved.
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/Privacy"><div><p>Privacy</p></div></a>
            <a href="/security"><div><p>Security</p></div></a>
            <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>
  )
}