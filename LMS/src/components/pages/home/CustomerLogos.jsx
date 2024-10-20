import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const partners = [
  { name: 'Al-Azhar University', logoId: 'al-azhar-logo' },
  { name: 'Islamic University of Madinah', logoId: 'madinah-university-logo' },
  { name: 'International Islamic University Malaysia', logoId: 'iium-logo' },
  { name: 'Zaytuna College', logoId: 'zaytuna-logo' },
  { name: 'Dar al-Iftaa', logoId: 'dar-al-iftaa-logo' },
  { name: 'Sheikh Mohammed Bin Rashid Al Maktoum', logoId: 'sheikh-mohammed-logo' },
  { name: 'Dr. Yasir Qadhi', logoId: 'yasir-qadhi-logo' },
];

const IslamicPartnersSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className="py-8 md:py-24 bg-green-50 overflow-hidden">
      <div className="max-w-[85vw] mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-center text-green-800 text-sm md:text-lg font-semibold mb-16">
          Our Esteemed Partners and Contributors
        </h2>
        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.name} className="px-4">
              <svg className="h-9 md:h-16 w-full">
                <use xlinkHref={`#${partner.logoId}`} />
              </svg>
              <p className="text-center text-xs md:text-sm mt-2 text-gray-600">{partner.name}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* SVG Definitions */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <symbol id="al-azhar-logo" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="#006400"/>
          <text x="50" y="55" fontFamily="Arial" fontSize="14" fill="white" textAnchor="middle">Al-Azhar</text>
        </symbol>
        
        <symbol id="madinah-university-logo" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="#008000"/>
          <text x="50" y="55" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">Islamic University</text>
          <text x="50" y="70" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">of Madinah</text>
        </symbol>
        
        <symbol id="iium-logo" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="#006400"/>
          <text x="50" y="60" fontFamily="Arial" fontSize="14" fill="white" textAnchor="middle">IIUM</text>
        </symbol>
        
        <symbol id="zaytuna-logo" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="#8B4513"/>
          <text x="50" y="55" fontFamily="Arial" fontSize="14" fill="white" textAnchor="middle">Zaytuna</text>
        </symbol>
        
        <symbol id="dar-al-iftaa-logo" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" rx="15" ry="15" fill="#4CAF50"/>
          <text x="50" y="55" fontFamily="Arial" fontSize="14" fill="white" textAnchor="middle">Dar al-Iftaa</text>
        </symbol>
        
        <symbol id="sheikh-mohammed-logo" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="#FFD700"/>
          <text x="50" y="45" fontFamily="Arial" fontSize="12" fill="#006400" textAnchor="middle">Sheikh</text>
          <text x="50" y="60" fontFamily="Arial" fontSize="12" fill="#006400" textAnchor="middle">Mohammed</text>
        </symbol>
        
        <symbol id="yasir-qadhi-logo" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="#1E90FF"/>
          <text x="50" y="55" fontFamily="Arial" fontSize="14" fill="white" textAnchor="middle">Dr. Yasir Qadhi</text>
        </symbol>
      </svg>
    </section>
  );
};

export default IslamicPartnersSlider;