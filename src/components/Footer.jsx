import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


function Footer() {
    return (
        <div className="footer-set">
            <div className="foot-col1">
                <p>Jazra Land Sales</p>
                <p>© 2024 Company, Inc. All rights reserved.</p>
            </div>
            <div className="foot-col2">
                <div className="newsletter-sect">
                    <h5 className="text-white">Subscribe to our newsletter</h5>
                    <p className="text-white">Monthly digest of what's new and exciting from us.</p>
                    <input type="text" name="" id="newsletter-input" placeholder="Enter your Email address" />
                    <button type="submit" className="newsletter-btn">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="foot-col3">
             <ul  className="footer-nav">
                <li className="footer-nav-item">Home</li>
                <li className="footer-nav-item">Listings</li>
                <li className="footer-nav-item">Pricing</li>
                <li className="footer-nav-item">FAQ</li>
                <li className="footer-nav-item">About</li>
             </ul>
             </div>
        </div>
    )
}
export default Footer;

// <ul className="list-unstyled d-flex footer-nav">
// <li className="ms-3 footer-nav-item">
//     <a className="link-body-emphasis text-white" href="#">
//         <FontAwesomeIcon icon={faFacebook} />
//     </a>
// </li>
// <li className="ms-3 footer-nav-item">
//     <a className="link-body-emphasis text-white" href="#">
//         <FontAwesomeIcon icon={faTwitter} />
//     </a>
// </li>
// <li className="ms-3 footer-nav-item">
//     <a className="link-body-emphasis text-white" href="#">
//         <FontAwesomeIcon icon={faInstagram} />
//     </a>
// </li>
// </ul>