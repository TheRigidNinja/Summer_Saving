import React from 'react'
import img1 from '../Img/SlideImage1.png'
import img2 from '../Img/SlideImage2.png'
import img3 from '../Img/SlideImage3.png'
import img4 from '../Img/SlideImage4.png'
import img5 from '../Img/SlideImage5.png'

function Sectio3() {
  return (
    <section className="section3">
        <div className="cont">
            <h1>POPULAR ONLINE <span id="boldText">DEALS</span></h1>

            <div className="Slider">
                <span id="arrowRight"></span>
                <span id="arrowLeft"></span>
                
                <div>
                  <img src={img1} alt="Img?"/>
                  <h6 id="boldText">£26</h6>
                  <h4>Red Shorts</h4>
                  <span><a href="##">SHOP NOW</a></span>
                </div>
                <div>
                  <img src={img2} alt="Img?"/>
                  <h6 id="boldText">£18</h6>
                  <h4>Bags</h4>
                  <span><a href="##">SHOP NOW</a></span>
                </div>
                <div>
                  <img src={img3} alt="Img?"/>
                  <h6 id="boldText">£22</h6>
                  <h4>Child dress</h4>
                  <span><a href="##">SHOP NOW</a></span>
                </div>
                <div>
                  <img src={img4} alt="Img?"/>
                  <h6 id="boldText">£49</h6>
                  <h4>Trainers</h4>
                  <span><a href="##">SHOP NOW</a></span>
                </div>
                <div>
                  <img src={img5} alt="Img?"/>
                  <h6 id="boldText">£49</h6>
                  <h4>Grey coat</h4>
                  <span><a href="##">SHOP NOW</a></span>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Sectio3
