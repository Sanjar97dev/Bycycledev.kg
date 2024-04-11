import React, { useState, useEffect } from 'react';
import '../../styles/main.css';
import iconPlus from '../../assets/icon.svg';
import btnEmployees from '../../assets/btnheroemployess.svg';
import googleImg from '../../assets/sponsors/logos_google.svg';
import microsoftImg from '../../assets/sponsors/logos_microsoft.svg';
import samsungImg from '../../assets/sponsors/samsung.svg';
import lgimg from '../../assets/sponsors/simple-icons_lg.svg';
import slackImg from '../../assets/sponsors/slack.svg';
import sony from '../../assets/sponsors/sony.svg';

const Main = () => {
  const [slides, setSlides] = useState([
    { img: samsungImg },
    { img: googleImg },
    { img: microsoftImg },
    { img: lgimg },
    { img: slackImg },
    { img: sony }
  ]);

  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 3000);

    return () => clearTimeout(interval);
  }, [currentSlide, slides.length]);


  return (
    <main>
      <div className='hero'>
        <div className="hero_kvadrat" />
        <div className="kvadrat-circle" >
          <div className="hero-plus" style={{ backgroundImage: `url( ${iconPlus} )` }} />
        </div>

        <div className="hero-title">
          <h2 className='hero-title-h2'>Technical innovation for dynamic growth</h2>
          <h2 className='hero-descr-h2'>
            We are pleased to offer a wide range of high-quality IT services.
          </h2>
        </div>

        <div className="hero-block-one">
          <div className="hero-block-title">
            <h4>Our employees</h4>
            <img src={btnEmployees} alt="employees" />
          </div>
          <button>More</button>
        </div>

        <div className="hero-block-two">
          <div className="hero-block-title">
            <h4>Careers</h4>
            <img src={btnEmployees} alt="employees" />
          </div>
          <button>More</button>
        </div>

        <div className="kvadrat-circle-2" >
          <div className="hero-plus-2" style={{ backgroundImage: `url( ${iconPlus} )` }} />
        </div>
      </div>

      <div className="slider">
        <div className="slide-track">
          {slides.map(({ img, title }, index) => (
            <div key={index}  className="slide-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              <img src={img} alt="company" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Main;
