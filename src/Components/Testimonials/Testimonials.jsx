import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  let tx = 25;

  const slideForward = () => {
    if (tx > -50) {
      tx = -50; // Decrementing tx by 25 to move the slider forward
      slider.current.style.transform = `translateX(${tx}%)`;
      setTimeout(() => {
        window.location.reload((e)=>e.preventDefault()) // Reload the page after a delay
      }, 1000); // Adjust the delay time as needed (500 milliseconds in this example)
    
    }
  };
  

  const slideBackward = () => {
    if (tx <-50) { // Allow reaching tx = 0 (starting position)
      tx = + 25;
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  
  




  };
  
  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='naxt-btn' onClick={slideForward}  />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Will Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at ICBT University has been one of the most rewarding decisions I've ever made. The vibrant community, cutting-edge facilities, and dedication to academic excellence have far surpassed my expectations. From engaging lectures to practical hands-on experiences, ICBT </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3> Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at ICBT University has been one of the most rewarding decisions I've ever made. The vibrant community, cutting-edge facilities, and dedication to academic excellence have far surpassed my expectations. From engaging lectures to practical hands-on experiences, ICBT </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Will</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at ICBT University has been one of the most rewarding decisions I've ever made. The vibrant community, cutting-edge facilities, and dedication to academic excellence have far surpassed my expectations. From engaging lectures to practical hands-on experiences, ICBT </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Buttler</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at ICBT University has been one of the most rewarding decisions I've ever made. The vibrant community, cutting-edge facilities, and dedication to academic excellence have far surpassed my expectations. From engaging lectures to practical hands-on experiences, ICBT </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
