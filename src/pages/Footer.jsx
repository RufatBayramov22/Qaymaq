import React from 'react'
import Logo from "../assets/images/headerImg/qaymaq.logo.png"
import {BsInstagram,BsTwitter} from "react-icons/bs"
import {AiOutlineYoutube} from "react-icons/ai"
import {BiLogoFacebook} from "react-icons/bi"

import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="contanier">
        <div className="row">
        <div class="footer_wrapper">
            <div class="footer_logo">
                <img src={Logo} alt="" />
            </div>
            <div class="footer_navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
            <div class="footer_media">
                <ul className='socialList'>
                  <li className='socialItem'>
                    <Link to="https://www.youtube.com/" target='blank'>
                    <AiOutlineYoutube fill='white'/>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/" target='blank'>
                    <BsInstagram fill='white'/>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.facebook.com/" target='blank'>
                    <BiLogoFacebook fill='white'/>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://twitter.com/" target='blank'>
                    <BsTwitter fill='white'/>
                    </Link>
                    
                  </li>
                </ul>
            </div>
        </div>
        <div class="footer_copy">
            <p>
                © 2023 QayMaq
            </p>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer