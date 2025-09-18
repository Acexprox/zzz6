import React, { useState } from 'react';
import styled from 'styled-components';

const PrepaidCard = () => {
  const [selectedColor, setSelectedColor] = useState(1); // Default to second color (Team Navy)
  const [selectedSize, setSelectedSize] = useState('s'); // Default size
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  const colors = [
    { id: 0, name: 'ذهبي جامعي', color: '#ffd426' },
    { id: 1, name: 'كحلي فريق', color: '#144076' },
    { id: 2, name: 'أزرق نابض', color: '#00b9ff' },
    { id: 3, name: 'وردي مندمج', color: '#ff6ba1' }
  ];

  const sizes = ['xs', 's', 'm', 'l', 'xl'];

  const handleColorClick = (colorId) => {
    setSelectedColor(colorId);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleMoreClick = () => {
    // تأخير بسيط لتحسين تجربة المستخدم
    setTimeout(() => {
      setIsModalOpen(true);
    }, 350); // 350 ميلي ثانية
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const products = [
    { name: 'PlayStation', image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e' },
    { name: 'Fortnite', image: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa' }, 
    { name: 'Razer Gold', image: 'https://images.unsplash.com/photo-1597463330912-eb868206b68e' },
    { name: 'CrossFire', image: 'https://images.unsplash.com/photo-1611931960487-4932667079f1' },
    { name: 'Roblox', image: 'https://images.unsplash.com/photo-1656639969809-ebc544c96955' },
    { name: 'iTunes', image: 'https://images.unsplash.com/photo-1646627928127-7ec90300352a' },
    { name: 'Google Play', image: 'https://images.unsplash.com/photo-1587573578335-9672da4d0292' },
    { name: 'Steam', image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575' },
    { name: 'Amazon', image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2' },
    { name: 'Shein', image: 'https://images.unsplash.com/photo-1729860649086-aa55852aabdf' },
    { name: 'Flower Art', image: 'https://images.unsplash.com/photo-1637070155805-e6fbee6ec2cf' },
    { name: 'MasterCard', image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg' }
  ];

  // مكون اللودر المستمر - نمط الأسهم
  const Loader = () => (
    <ArrowLoaderWrapper>
      <div className="arrow">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </ArrowLoaderWrapper>
  );

  return (
    <StyledWrapper>
      <div className="card">
        <div className="image-container">
          <svg viewBox="0 0 1921 1081" xmlns="http://www.w3.org/2000/svg" className="svg">
            <defs>
              <radialGradient gradientUnits="objectBoundingBox" gradientTransform="translate(0.219) scale(0.563 1)" r="1.204" cy="0.5" cx="0.5" id="radial-gradient">
                <stop stopColor="#f8fafc" offset={0} />
                <stop stopColor="#e2e8f0" offset={0.5} />
                <stop stopColor="#cbd5e1" offset={1} />
              </radialGradient>
              <linearGradient id="glass-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
              </linearGradient>
            </defs>
            <g transform="translate(-121.5 -92.5)" id="background">
              <rect fill="url(#radial-gradient)" strokeWidth={1} strokeMiterlimit={10} stroke="rgba(255,255,255,0.3)" transform="translate(122 93)" height={1080} width={1920} data-name="Rectangle 83" id="Rectangle_83" />
              <rect fill="url(#glass-gradient)" transform="translate(122 93)" height={1080} width={1920} opacity="0.7" />
            </g>
          </svg>
          <div className="white-circle">
            <img src="https://customer-assets.emergentagent.com/job_site-refresher/artifacts/udth1qz2_1757617210840.png" alt="Gift Cards" className="gift-cards-image" />
          </div>
          <div className="card-title-overlay">
            <h2 className="main-title">بطائق إلكترونية</h2>
            <h3 className="sub-title">مسبقة الدفع</h3>
          </div>
        </div>
        <div className="green-circle"></div>
        <div className="content">
          {/* كود مُضاف كما هو بالضبط، بدون أي تغيير في المكونات أو الأسماء */}
          <UiverseWrapper>
            <div className="card inner-card">
              <div className="img-container">
                <div className="services-data">
                  <div className="column-one">
                    <div className="service-row">
                      <span className="service-icon icon-categories">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="7 1.17 1.17 4.08 7 7 12.83 4.08 7 1.17"></polygon>
                          <polyline points="1.17 9.92 7 12.83 12.83 9.92"></polyline>
                          <polyline points="1.17 7 7 9.92 12.83 7"></polyline>
                        </svg>
                      </span>
                      <div className="service-content">
                        <div className="service-title">فئات متعددة</div>
                        <div className="service-item"><span className="item-circle circle-green"></span>مالية</div>
                        <div className="service-item"><span className="item-circle circle-blue"></span>العاب</div>
                        <div className="service-item"><span className="item-circle circle-orange"></span>تسوق</div>
                      </div>
                    </div>
                  </div>
                  <div className="column-two">
                    <div className="service-row">
                      <span className="service-icon icon-global">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="#10b981" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="7" cy="7" r="5.5"></circle>
                          <path d="M7 1a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"></path>
                          <path d="M2 7h10"></path>
                          <path d="M7 1c1.5 0 3 2.7 3 6s-1.5 6-3 6-3-2.7-3-6 1.5-6 3-6z"></path>
                        </svg>
                      </span>
                      <div className="service-content">
                        <div className="service-title">توافق عالمي</div>
                        <div className="service-item"><span className="item-circle circle-green"></span>منصات</div>
                        <div className="service-item"><span className="item-circle circle-blue"></span>تطبيقات</div>
                        <div className="service-item"><span className="item-circle circle-orange"></span>مواقع</div>
                      </div>
                    </div>
                    <div className="service-row">
                      <span className="service-icon icon-packages">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="8" height="8" rx="1"></rect>
                          <path d="M6 1v2"></path>
                          <path d="M8 1v2"></path>
                        </svg>
                      </span>
                      <div className="service-content">
                        <div className="service-title">باقات مناسبة</div>
                        <div className="service-description">متنوعة وبأسعار مناسبة</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="description card" onClick={handleMoreClick}>
                  <span className="title">
                    المزيد
                  </span>
                  <Loader />
                </div>
              </div>
            </div>
          </UiverseWrapper>
        </div>
        <div className="blue-line"></div>
        <div className="features-icons">
          <div className="feature-item">
            <div className="icon shield">🛡️</div>
            <span>أمان</span>
          </div>
          <div className="feature-item">
            <div className="icon lightning">⚡</div>
            <span>سرعة</span>
          </div>
          <div className="feature-item">
            <div className="icon chart">📈</div>
            <span>ثقة</span>
          </div>
          <div className="feature-item">
            <div className="icon medal">🏅</div>
            <span>جودة</span>
          </div>
        </div>
      </div>

      {/* Modal for displaying product cards */}
      {isModalOpen && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h2>بطاقات المنتجات</h2>
              <CloseButton onClick={handleCloseModal}>×</CloseButton>
            </ModalHeader>
            <CardsGrid>
              {products.map((product, index) => (
                <MiniCard key={index}>
                  <MiniCardImage>
                    <img src={product.image} alt={product.name} />
                  </MiniCardImage>
                  <MiniCardContent>
                    <h3>{product.name}</h3>
                    <p>بطاقة إلكترونية عالية الجودة</p>
                    <MiniCardPrice>{(index + 1) * 50} ريال</MiniCardPrice>
                  </MiniCardContent>
                </MiniCard>
              ))}
            </CardsGrid>
          </ModalContent>
        </ModalOverlay>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  * {
    font-family: 'Tajawal', Arial, sans-serif;
  }

  .card {
    --accent-color: #ffd426;
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 1.33rem;
    padding: 0.4rem 0.4rem 6rem 0.4rem;
    box-shadow: 
      0 25px 50px -12px rgba(0, 0, 0, 0.25),
      0 0 0 1px rgba(255, 255, 255, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    direction: rtl;
    text-align: right;
  }

  .card .image-container {
    margin-bottom: 1.33rem;
    position: relative;
    width: 100%;
    height: 173px;
    border-radius: 0.93rem;
    border-top-left-radius: 5.33rem;
    margin-bottom: 0.33rem;
    overflow: hidden;
  }

  .card .image-container .svg {
    height: 100%;
    width: 100%;
    border-radius: inherit;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 45%, #cbd5e1 100%);
    position: relative;
  }

  .card .image-container .svg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.4) 0%, 
      rgba(255, 255, 255, 0.1) 50%, 
      rgba(255, 255, 255, 0.2) 100%);
    backdrop-filter: blur(10px);
    border-radius: inherit;
  }

  .card .green-circle {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 10.67px;
    left: 10.67px;
    background-color: #22c55e;
    border-radius: 50%;
  }

  .card .white-circle {
    position: absolute;
    width: 106.67px;
    height: 106.67px;
    top: 50%;
    right: 6.67px;
    transform: translateY(-50%);
    background: linear-gradient(145deg, #ffffff, #f8fafc);
    border: 2.67px solid rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 
      0 25px 50px -12px rgba(0, 0, 0, 0.25),
      0 0 0 1px rgba(255, 255, 255, 0.05),
      0 0 30px rgba(59, 130, 246, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.8),
      inset 0 -1px 0 rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 10;
  }

  .card .gift-cards-image {
    width: 93.33px;
    height: 93.33px;
    object-fit: cover;
    border-radius: 50%;
    opacity: 0.9;
    transition: opacity 0.3s ease;
  }

  .card .white-circle:hover {
    transform: translateY(-50%) translateY(-8px) scale(1.05);
    box-shadow: 
      0 35px 70px -12px rgba(0, 0, 0, 0.35),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      0 0 40px rgba(59, 130, 246, 0.6),
      0 0 80px rgba(59, 130, 246, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.9),
      inset 0 -1px 0 rgba(0, 0, 0, 0.08);
  }

  .card .white-circle:hover .gift-cards-image {
    opacity: 1;
  }

  .card .content { 
    display: flex;
    justify-content: center;
    margin-top: 0.67rem;
    padding: 0px 1.07rem;
    margin-bottom: 0rem;
    direction: rtl;
    text-align: right;
  }

  .card .card-title-overlay {
    position: absolute;
    top: 50%;
    left: 20px;
    right: 126.67px;
    transform: translateY(-50%);
    text-align: right;
    z-index: 5;
    font-family: 'Tajawal', Arial, sans-serif;
  }

  .card .main-title {
    font-size: 22.67px;
    font-weight: 700;
    color: #144076;
    margin: 0;
    line-height: 1.2;
    font-family: 'Tajawal', Arial, sans-serif;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card .sub-title {
    font-size: 16px;
    font-weight: 500;
    color: #6b7280;
    margin: 2.67px 0 0 0;
    line-height: 1.2;
    font-family: 'Tajawal', Arial, sans-serif;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card .blue-line {
    position: absolute;
    bottom: 60px;
    left: 1.07rem;
    right: 1.07rem;
    height: 1.33px;
    background-color: #1e40af;
    border-radius: 0.67px;
  }

  .card .features-icons {
    position: absolute;
    bottom: 10.67px;
    left: 1.07rem;
    right: 1.07rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    direction: rtl;
  }

  .card .feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    flex: 1;
    opacity: 0;
    transform: translateY(20px);
    animation: slideInUp 1s ease-out forwards;
  }

  .card .feature-item:nth-child(1) {
    animation-delay: 0.5s;
  }

  .card .feature-item:nth-child(2) {
    animation-delay: 1s;
  }

  .card .feature-item:nth-child(3) {
    animation-delay: 1.5s;
  }

  .card .feature-item:nth-child(4) {
    animation-delay: 2s;
  }

  .card .feature-item .icon {
    font-size: 21.33px;
    line-height: 1;
  }

  .card .feature-item span {
    font-size: 10.67px;
    font-weight: 700;
    color: #374151;
    text-align: center;
    white-space: nowrap;
    font-family: 'Tajawal', Arial, sans-serif;
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }




`;

const ArrowLoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  .arrow {
    transform: rotate(90deg);
    cursor: pointer;
  }

  .arrow span {
    display: block;
    width: 10px;
    height: 10px;
    border-bottom: 3px solid white;
    border-right: 3px solid white;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate28797 2s infinite;
  }

  .arrow span:nth-child(1) {
    border-bottom-color: #ff6ba1;
    border-right-color: #ff6ba1;
  }

  .arrow span:nth-child(2) {
    border-bottom-color: #00b9ff;
    border-right-color: #00b9ff;
  }

  .arrow span:nth-child(3) {
    border-bottom-color: #ffd426;
    border-right-color: #ffd426;
  }

  .arrow span:nth-child(4) {
    border-bottom-color: #22c55e;
    border-right-color: #22c55e;
  }

  .arrow span:nth-child(5) {
    border-bottom-color: #8b5cf6;
    border-right-color: #8b5cf6;
  }

  .arrow span:nth-child(2) {
    animation-delay: -0.2s;
  }

  .arrow span:nth-child(3) {
    animation-delay: -0.4s;
  }

  .arrow span:nth-child(4) {
    animation-delay: -0.6s;
  }

  .arrow span:nth-child(5) {
    animation-delay: -0.8s;
  }

  @keyframes animate28797 {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-15px, -15px);
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: rotate(45deg) translate(15px, 15px);
    }
  }
`;

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(8px);
  animation: fadeIn 0.3s ease-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(8px);
    }
  }
`;

const ModalContent = styled.div`
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(248, 250, 252, 0.9) 100%);
  backdrop-filter: blur(20px);
  border-radius: 1.5rem;
  width: 95%;
  max-width: 1200px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.18);
  direction: rtl;
  animation: scaleIn 1.3s ease-out;
  transform-origin: center center;
  
  @keyframes scaleIn {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    60% {
      transform: scale(1.05);
      opacity: 0.9;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  font-family: 'Tajawal', Arial, sans-serif;

  h2 {
    color: #144076;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #6b7280;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  
  &:hover {
    color: #374151;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: 1.25rem 0.75rem;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(248, 250, 252, 0.05) 100%);
`;

const MiniCard = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 12px;
  box-shadow: 
    0 6px 20px -6px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px);
  position: relative;
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #ff6ba1, #00b9ff, #ffd426, #22c55e);
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 
      0 15px 35px -8px rgba(0, 0, 0, 0.25),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      0 0 25px rgba(59, 130, 246, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }
`;

const MiniCardImage = styled.div`
  height: 130px;
  background: linear-gradient(135deg, 
    #f8fafc 0%, 
    #e2e8f0 45%, 
    #cbd5e1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.4) 0%, 
      rgba(255, 255, 255, 0.1) 50%, 
      rgba(255, 255, 255, 0.2) 100%);
    backdrop-filter: blur(10px);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
    box-shadow: none;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.08);
  }
`;

const MiniCardContent = styled.div`
  padding: 0.75rem 0.5rem;
  text-align: center;
  font-family: 'Tajawal', Arial, sans-serif;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.9) 0%, 
    rgba(248, 250, 252, 0.8) 100%);
  backdrop-filter: blur(10px);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  h3 {
    color: #144076;
    font-size: 0.85rem;
    font-weight: 700;
    margin: 0 0 0.25rem 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    line-height: 1.2;
  }
  
  p {
    color: #6b7280;
    font-size: 0.65rem;
    margin: 0 0 0.5rem 0;
    font-weight: 500;
    opacity: 0.8;
    line-height: 1.3;
  }
`;

const MiniCardPrice = styled.div`
  color: #22c55e;
  font-weight: 800;
  font-size: 0.9rem;
  text-shadow: 0 1px 2px rgba(34, 197, 94, 0.2);
  background: linear-gradient(135deg, #22c55e, #16a34a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  margin-top: auto;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 25px;
    height: 2px;
    background: linear-gradient(90deg, #22c55e, #16a34a);
    border-radius: 1px;
  }
`;

// غلاف مخصص يطبق الشiفرة الأصلية بالكامل مع نفس الأسماء والمؤثرات، دون تغيير، لكن مع حصر النطاق داخل الغلاف فقط
const UiverseWrapper = styled.div`
  /* From uiverse.io by @FrM-bot */
  & .card {
    width: 370px;
    height: min-content;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    border-radius: .67rem 2.67rem;
    box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.5);
    padding: 0; /* override outer .card padding to avoid extra height */
    margin: 0 auto;
  }

  & .card:hover {
    transform: scale(1.008) translateY(-0.5px);
    box-shadow: 0px 16px 22px -6px rgba(0, 0, 0, 0.45);
  }

  & .img-container {
    display: grid;
    border-radius: .67rem 2.67rem;
    height: 333.33px;
    overflow: hidden;
  }

  & .description {
    position: absolute;
    bottom: .67rem;
    left: .75rem;
    text-align: start;
    padding: .55rem 1.33em;
    width: 92%;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    text-overflow: ellipsis;
    white-space: nowrap;
    backdrop-filter: blur(.133rem);
    background: linear-gradient(135deg, 
      rgba(20, 64, 118, 0.85) 0%, 
      rgba(25, 70, 130, 0.8) 50%, 
      rgba(20, 64, 118, 0.85) 100%);
    border-radius: .67rem 2.67rem;
    border: 1px solid rgba(255, 255, 255, 0.15);
    cursor: pointer;
  }

  & .description:hover {
    transform: perspective(120px) translateX(8px) translateY(-1px) rotateX(4deg) rotateY(4deg) scale(1.02);
    background: linear-gradient(135deg, 
      rgba(20, 64, 118, 0.95) 0%, 
      rgba(25, 70, 130, 0.9) 50%, 
      rgba(20, 64, 118, 0.95) 100%);
    box-shadow: 0 4px 15px rgba(20, 64, 118, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.25);
  }

  & .title {
    color: #ffffff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  & .inner-card {
    min-height: 453.33px;
  }



  & .services-data {
    position: absolute;
    top: 24px;
    left: 12px;
    right: 12px;
    display: grid;
    grid-template-columns: 1fr 8px 1fr;
    font-family: 'Tajawal', Arial, sans-serif;
    direction: rtl;
    text-align: right;
    z-index: 1;
  }

  & .column-one {
    grid-column: 1;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
  }

  & .column-two {
    grid-column: 3;
    display: flex;
    flex-direction: column;
    gap: 10.67px;
    padding-right: 26px;
  }

  & .service-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.9);
    padding: 10.67px 5.33px;
    border-radius: 8px;
    backdrop-filter: blur(5.33px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 138.67px;
    min-height: auto;
    text-align: center;
  }

  & .service-content {
    display: grid;
    grid-template-rows: auto auto auto auto; /* عنوان + ثلاث عناصر */
    align-items: start;
    justify-items: center;
    gap: 8px;
    width: 100%;
  }

  & .service-title {
    color: #374151;
    font-size: 17.33px;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 2.67px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform: scale(1.02);
    transform-origin: right center;
  }

  & .service-description {
    color: #6b7280;
    font-size: 13.33px;
    font-weight: 600;
    line-height: 1.4;
    padding-right: 0px;
    margin-left: 0px;
    word-spacing: -0.67px;
    white-space: normal;
    display: inline-block;
    transform: scale(1.12);
    transform-origin: right center;
  }

  & .service-item {
    color: #6b7280;
    font-size: 13.33px;
    font-weight: 600;
    line-height: 1.3;
    padding-right: 10.67px; /* مساحة إضافية من الحافة اليمنى (RTL) */
    display: grid;
    grid-template-columns: 8px auto;
    column-gap: 4px;
    align-items: center;
    width: 100%;
    transform: scale(1.08);
    transform-origin: right center;
  }

  & .item-circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 2px solid;
    background: transparent;
    display: inline-block;
    flex-shrink: 0;
  }

  & .circle-green {
    border-color: #10b981;
    box-shadow: 0 0 0 2px rgba(16,185,129,0.10);
  }

  & .circle-blue {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59,130,246,0.10);
  }

  & .circle-orange {
    border-color: #f59e0b;
    box-shadow: 0 0 0 2px rgba(245,158,11,0.10);
  }

  & .service-icon {
    font-size: 24px;
    min-width: 18.67px;
    line-height: 1;
    vertical-align: top;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #6366f1;
    position: relative;
    width: 37.33px;
    height: 37.33px;
    border-radius: 50%;
    background: radial-gradient(130% 130% at 30% 20%, rgba(255,255,255,0.80), rgba(255,255,255,0.35) 60%, rgba(255,255,255,0.15) 100%);
    border: 1.33px solid rgba(255,255,255,0.85);
    box-shadow:
      0 1.33px 0 rgba(255,255,255,0.7) inset,
      0 0 0 1.33px rgba(2,6,23,0.04),
      0 10.67px 18.67px rgba(2,6,23,0.06);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  & .service-icon:hover {
    filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.6));
    transform: scale(1.05);
  }

  & .service-icon::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: radial-gradient(120% 120% at 50% 50%, rgba(99,102,241,0.10), rgba(99,102,241,0.0) 60%);
    pointer-events: none;
    filter: blur(0.2px);
    animation: icon-aura 3.5s ease-in-out infinite alternate;
  }

  @keyframes icon-aura {
    0%   { opacity: .45; transform: scale(1); }
    100% { opacity: .65; transform: scale(1.03); }
  }

  & .icon-categories {
    color: #6366f1;
    position: relative;
    z-index: 2;
  }

  & .icon-categories::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: rgba(99, 102, 241, 0.04);
    box-shadow: 0 0 0 1.33px rgba(99, 102, 241, 0.12);
    animation: halo-pulse-blue 5s ease-in-out infinite;
    z-index: -1;
  }

  & .icon-global {
    color: #10b981;
    position: relative;
    z-index: 2;
  }

  & .icon-global::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: rgba(16, 185, 129, 0.04);
    box-shadow: 0 0 0 1.33px rgba(16, 185, 129, 0.12);
    animation: halo-pulse-green 5s ease-in-out infinite;
    z-index: -1;
  }

  & .icon-packages {
    color: #f59e0b;
    position: relative;
    z-index: 2;
  }

  & .icon-packages::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: rgba(245, 158, 11, 0.04);
    box-shadow: 0 0 0 1.33px rgba(245, 158, 11, 0.12);
    animation: halo-pulse-orange 5s ease-in-out infinite;
    z-index: -1;
  }

  @keyframes halo-pulse-blue {
    0%, 100% { 
      box-shadow: 0 0 0 1.33px rgba(99, 102, 241, 0.12);
      background: rgba(99, 102, 241, 0.04);
      transform: translate(-50%, -50%) scale(1);
    }
    50% { 
      box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.18), 0 0 0 8px rgba(99, 102, 241, 0.08);
      background: rgba(99, 102, 241, 0.08);
      transform: translate(-50%, -50%) scale(1.15);
    }
  }

  @keyframes halo-pulse-green {
    0%, 100% { 
      box-shadow: 0 0 0 1.33px rgba(16, 185, 129, 0.12);
      background: rgba(16, 185, 129, 0.04);
      transform: translate(-50%, -50%) scale(1);
    }
    50% { 
      box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.18), 0 0 0 8px rgba(16, 185, 129, 0.08);
      background: rgba(16, 185, 129, 0.08);
      transform: translate(-50%, -50%) scale(1.15);
    }
  }

  @keyframes halo-pulse-orange {
    0%, 100% { 
      box-shadow: 0 0 0 1.33px rgba(245, 158, 11, 0.12);
      background: rgba(245, 158, 11, 0.04);
      transform: translate(-50%, -50%) scale(1);
    }
    50% { 
      box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.18), 0 0 0 8px rgba(245, 158, 11, 0.08);
      background: rgba(245, 158, 11, 0.08);
      transform: translate(-50%, -50%) scale(1.15);
    }
  }

  & .service-text {
    color: #374151;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.3;
    flex: 1;
  }


`;

export default PrepaidCard;