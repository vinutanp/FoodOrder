import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div id='footer'>
      <div className='footer-info'>
      <h3>QuickEats</h3>
          <p>Order fresh, delicious food delivered right to your door!</p>
        </div>
        <div className='footer-contact'>
        <h4>Contact Us</h4>
          <p>Email: query@quickeats.com</p>
          <p>Phone: 1234567890</p>
          <p>Address: #123 delicious street, food town - 456987</p>
          </div>
    </div >
    <div style={{ marginTop: '1.5rem', display:'flex',justifyContent: 'center', alignItems: 'center', gap:'1.5rem' }}>
      <FaInstagram/>
<FaLinkedin/>
<RiTwitterXLine/>
<FaFacebookF/>
<p style={{ marginTop: '1rem', fontSize: '1rem', }}>&copy; 2023 QuickEats</p>

</div>
   
    </>
  )
}

export default Footer
