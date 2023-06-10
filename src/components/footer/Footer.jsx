import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    This is the movies web app where you can see trailors of all movies..
                </div>
                <div className="socialIcons">
                    <span className="icon"><a href="https://www.facebook.com/profile.php?id=100022008412677" rel="noreferrer" target="_blank"><FaFacebookF /></a>
                    </span>
                    <span className="icon"><a href="https://www.instagram.com/vivekprajapat212/" target="_blank"><FaInstagram /></a>
                    </span>
                    <span className="icon"><a href="https://github.com/vivekprajapat19" target="_blank"><FaGithub /></a>
                        
                    </span>
                    <span className="icon" ><a href="https://www.linkedin.com/in/vivek-prajapat-b00b8a221/"  target="_blank" > <FaLinkedin /></a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
