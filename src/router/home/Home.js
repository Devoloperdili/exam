import React from 'react'
import './Home.css'
import banner from '../../assets/banner.png'
import rasm from '../../assets/Screenshot (86).png'
import phota from  '../../assets/Screenshot (91).png'
import ppp from '../../assets/olti.png'
import ttt from '../../assets/sichqoncha.png'
import klava from '../../assets/klava.png'
import kameta from '../../assets/kameta.png'
import ramsimi from '../../assets/ppp.png'
import ramsimii from '../../assets/Screenshot (86).png'
import ddd from '../../assets/ddd.png'

function Home() {
  return (
    <div className='home'>
      <img src={banner} alt="" />
      <div className="colection">
        
   <div className="ttt">
   <h2>Legendary comfort, now wireless</h2>
      <p>The HyperX Cloud II was built to be an ultra-comfortable
         gaming headset with great sound.  We put a lot of thought into the details of our HyperX signature memory foam, the premium  leatherette, clamping force, and weight distribution. It’s no wonder that it’s become the  preferred headset for millions of gamers. We're proud to   present the HyperX Cloud II Wireless. With
          a fast 2.4Ghz wireless connection, a long-lasting 30-hour battery,  and 20 meters of wireless range, you're set  for more than a full day of comfort and wireless freedom. 53mm drivers deliver impressive sound and when combined  with DTS® Headphone:X®  spatial audio you can escape into your favorite fantasy game worlds.</p>
   </div>
   <div className="rrr">
   <button className='btn'><p>Gaming-grade wireless with long-lasting battery life</p></button>
      <button className='btn'><p>53mm drivers deliver immersive audio</p></button>
      <button className='btn'><p>Durable aluminum frame</p></button>
      <button className='btn'><p>Built-in mic monitoring</p></button>
      <button className='btn'><p>Signature HyperX comfort</p></button>
      <button className='btn'><p>DTS® Headphone:X® Spatial Audio</p></button>
      <button className='btn'><p>Noise-cancelling detachable mic with LED mute indicator</p></button>
      <button className='btn'><p>PC, PS5™, PS4™ compatible</p></button>
   </div>
      </div>
      <img width={250} src={rasm} alt="" />
      <img width={250} src={phota} alt="" />
      <img width={250} src={ramsimi} alt="" />
      <img width={250} src={ramsimii} alt="" />
      <img width={250} src={ddd} alt="" />
      <br />
      <img src={ppp} alt="" />
      <div className="sinchona">
       <img src={ttt} alt="" />
     <div className="bbb">
     <h1>HYPERX PULSEFIRE HASTE 2 MINI</h1>
       <br />
       <p>The HyperX Pulsefire Haste 2 Mini Wireless is a precise mouse for gamers who want an ultra-light mouse with wireless freedom, but want all that in a compact form factor that weighs less than 60 grams.</p>
       <br />
       <button className="btn5">Learn More</button>
     </div>
      </div>
      <br />
      <div className="klava">
        <div className="kkk">
          <p>Boost your Keyboard’s Brilliance!</p>
          <br />
          <br />
          <h1>HYPERX PUDDING KEYCAPS 2</h1>
          <br />
          <p>HyperX Pudding Keycaps 2 will breathe new life into your desktop aesthetic with a customized look that allows your stunning RGB themes to shine.</p>
          <br />
          <button className="btn5">Shop Now</button>
        </div>
        <img src={klava} alt="" />
      </div>
      <br />
      <div className="nnn">
        <img src={kameta} alt="" />
        <div className="ggg">
          <br />
          <p>OMEN & HyperX have become a Strategic Technology partner for Riot Games!</p>
          <h1>HYPERX | OMEN & RIOT GAMES</h1>
          <br />
          <p>From world-class esports to community events, right down to developers putting final touches on Champions and Agents alike, our peripherals are helping the Riot Games team perform to their absolute best and bring world-class experiences to players and fans.</p>
          <button className="btn5">Learn More</button>
          <br />
        </div>
      </div>
      <br />
        <div className="rrtt">
          <br />
          <br />
          <br />
          <br />
          <br />
          <h3  className='rdrd'>technical Spacs</h3>
          <br />
          <h3 className='rdrd'>What’s Included in the Box</h3>
          <br />
          <h3 className='rdrd'>Warranty</h3>
          <br />
          <h3 className='rdrd'>Shipping and Returns</h3>
        </div>
    </div>
  )
}

export default Home