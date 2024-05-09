import React from 'react'
import google from "./assets/image/google.png"
import navImage from "./assets/image/navimg.svg"
import navUser from "./assets/image/navUser.png"
import search from "./assets/image/search.svg"
import mic from "./assets/image/mic.svg"
import camera from "./assets/image/camera.svg"
import lastImage from "./assets/image/lastimage.png"

const App = () => {
  return (
    <>
      <nav>
        <div className='navBar'>
        <h6 className='navGmail'><a href="#">Gmail</a></h6>
        <h6 className='navImage'><a href="#">Images</a></h6>
        <a href="#"><img src={navImage} alt="" className='navimage' /></a>
        <a href="#"><img src={navUser} alt="" className='navUser'/></a>
        </div>
      </nav>

      <div className='googleImg'><img src={google} alt="" /></div>
      <div className='mainBox'>
        <img src={search} alt="" className='mainBoxSearch' />
        <input type="text" />
        <a href="#"><img src={mic} alt="" className='mainBoxMic'/></a>
        <a href="#"><img src={camera} alt=""  className='mainBoxCamera'/></a>
      </div>

      <div className='divThir'>
        <p className='divThirPFir'><a href="#">Google Search</a></p>
        <p className='divThirSec'><a href="#">I'm Feeling Lucky</a></p>
      </div>

      <div className='divFour'>
        <span>Google offered in:</span>
        <a href="#">Hausa</a>
        <a href="#">Igbo</a>
        <a href="#">Èdè Yorùbá</a>
        <a href="#">Nigerian Pidgin</a>
      </div>

      <footer className='footerDiv'>
        <div className='footerDivFir'>
          <h6><a href="#">About</a></h6>
          <h6><a href="#">Advertising</a></h6>
          <h6><a href="#">Business</a></h6>
          <h6><a href="#">How Search works</a></h6>
        </div>
        <div className='footerDivSec'>
          <img src={lastImage} alt="" />
          <h6><a href="#">Our third decade of climate action: join us</a></h6>
        </div>
        <div className='footerDivThir'>
          <h6><a href="#">Privacy</a></h6>
          <h6><a href="#">Terms</a></h6>
          <h6><a href="#">Settings</a></h6>
        </div>
      </footer>
    </>
  )
}

export default App