import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'


function Footer() {
  return (
    <>
    <div className='footer'>
        <div className="footer_one">
        <h2>Join the #HyperXFamily on social!</h2>
        <br />
        <p>Get a sneak peek at our new products and deals when you sign up to join the HyperX Family.</p>
        </div>
        <div className="foterr_two">
<h2>Sign up for our newsletter to receive a 20% discount!</h2>
<p>Get a sneak peek at our new products and deals when you sign up to join the HyperX Family.</p>
<input type="text" placeholder='Email or adress' className="btn" />
        </div>
    </div>
    <div className="ddda">

    <div className="ftt">
      <h2>Support</h2>
      <br/>
      <p>Product Support</p>
      <br/>
      <p>Contact Support</p>
      <br/>
      <p>Shipping Information</p>
      <br/>
      <p>Refund Policy</p>
      <br/>
      <p>HP/HYPERX Visual Content Terms of Use</p>
      <br/>
    </div>
    <div className="fbb">
      <h2>Company</h2>
      <p>About HyperX</p>
      <br/>
      <p>About HP</p>
      <br/>
      <p>Careers</p>
      <br/>
      <p>Social Impact</p>
      <br/>
      <p>Press</p>
      <br/>
      <p>Privacy</p>
      <br/>
      <p>Terms of Use</p>
      <br/>
      <p>Limited Warranty Statement</p>
      <br/>
      <p>Accessibility</p>
      <br/>
      <p>Use of Cookies</p>
      <br/>
      <p>Personal Data Rights</p>
      <br/>
      <p>Terms of Service</p>
      <br/>
    </div>
    <div className="ggg">
      <h2>Other Resources</h2>
      <br/>
      <p>NGENUITY Software</p>
      <br/>
      <p>Blog</p>
      <br/>
      <p>Partner Program</p>
      <br/>
    </div>
<img src={logo} alt="" />
    </div>
    </>
  )
}

export default Footer