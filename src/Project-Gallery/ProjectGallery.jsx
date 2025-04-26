import React, { useState, useEffect, useRef  } from 'react';

const ProjectGallery = () => {
    const CylinderCarousels = [
        "CylinderCarousel/brave_screenshot_localhost-1.png",
        "CylinderCarousel/brave_screenshot_localhost-5.png",
        "CylinderCarousel/brave_screenshot_localhost-6.png",
        "CylinderCarousel/brave_screenshot_localhost-2.png",
        "CylinderCarousel/brave_screenshot_localhost-3.png",
        "CylinderCarousel/brave_screenshot_localhost-4.png",
        "CylinderCarousel/brave_screenshot_localhost-7.png",
    ]
    const StackedCarousels = [
        "StackedCarousel/brave_screenshot_chat-app-1.png",
        "StackedCarousel/brave_screenshot_chat-app-2.png",
        "StackedCarousel/brave_screenshot_chat-app-3.png",
        "StackedCarousel/brave_screenshot_chat-app-4.png",
    ]
    

    return (
      <div className="all-carousels-container">
        <div className="carousel-section">
          <h2>Some live photos of the designed projects</h2>
          <SphereCarousel images={CylinderCarousels} />
        </div>

        <div className="carousel-section">
          <h2> Some live photos from the plogApp project</h2>
        </div>

        <div className="carousel-section">
          <StackedCarousel images={StackedCarousels} />
          <h2>Some shots from the chat app</h2>
        </div>
        <div className="carousel-section">
        <Carousel/>
          <h2>Some shots from the bookStore </h2>
        </div>
      </div>
    );
};


// 2. Sphere Carousel Component
const SphereCarousel = ({ images }) => {
    const [angles, setAngles] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setAngles(prev => ({
                x: prev.x - 0.5,
                y: prev.y - 0.5
            }));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="sp-carousel-wrapper">
            <div className="sp-carousel-container">
                <div
                    className="sp-carousel"
                    style={{
                        transform: `rotateX(${angles.x}deg) rotateY(${angles.y}deg)`
                    }}
                >
                    {images.map((img, index) => {
                        const phi = Math.acos(-1 + (2 * index) / images.length);
                        const theta = Math.sqrt(images.length * Math.PI) * phi;
                        return (
                            <div
                                key={index}
                                className="sp-carousel-slide"
                                style={{
                                    transform: `
                    rotateY(${theta}rad)
                    rotateX(${phi}rad)
                    translateZ(300px)
                    rotateY(-${theta}rad)
                    rotateX(-${phi}rad)
                  `,
                                    opacity: 0.9
                                }}
                            >
                                <img src={img} alt={`Image ${index + 1}`} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// 3. Stacked Cards Carousel Component
const StackedCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="st-carousel-wrapper">
            <div className="st-carousel-container">
                {images.map((img, index) => {
                    const offset = (index - currentIndex + images.length) % images.length;
                    const zIndex = images.length - offset;
                    const scale = 1 - (offset * 0.05);
                    const opacity = offset === 0 ? 1 : 0.7;

                    return (
                        <div
                            key={index}
                            className="st-carousel-slide"
                            style={{
                                transform: `translateX(${offset * 30 - 30}px) scale(${scale})`,
                                zIndex: zIndex,
                                opacity: opacity
                            }}
                        >
                            <img src={img} alt={`Image ${index + 1}`} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Carousel = () => {
  const [angle, setAngle] = useState(0);
  const containerRef = useRef(null);
    
    useEffect(() => {
      const rotationInterval = setInterval(() => {
        setAngle(prev => prev - 90);
      }, 5000);
      
      return () => clearInterval(rotationInterval);
    }, []);
  
    const images = [
      'carousel/bookstore-1.png',
      'carousel/booksotores-2.png',
      'carousel/bookstores-3.png',
      'carousel/bookstores-7.png'
  ];
  useEffect(() => {
        const calcR = () => {
          if (!containerRef.current) return;
          const w = containerRef.current.offsetWidth;
          const slides = images.length;
          const r = (w / 2) / Math.tan(Math.PI / slides);
          containerRef.current.style.setProperty('--r', `${r}px`);
        };
        calcR();
        window.addEventListener('resize', calcR);
        return () => window.removeEventListener('resize', calcR);
      }, []); 
  
    return (
      <div className="carousel-wrapper">
             <div className="carousel-container" ref={containerRef}>
        
          <div 
            className="carousel"
            style={{ transform: `rotateY(${angle}deg)` }}
          >
            {images.map((img, index) => (
              <div 
                key={index}
                className="carousel-slide"
              >
                <img 
                  src={img} 
                  alt={`Image ${index + 1}`} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };


export default ProjectGallery;