import './hero-section.scss'
import clutch from '../../images/clutch.svg'
import awwwards from '../../images/awwwards.svg'
import it_rating from '../../images/it_rating.svg'
import other from '../../images/other.svg'

const HeroSection = () => {

  const scrollToContent = () => {
    const contentDiv = document.getElementById('content');
    
    if (contentDiv) {
      const targetY = contentDiv.getBoundingClientRect().top + window.scrollY;
      const startingY = window.scrollY;
      const distance = targetY - startingY;
      const duration = 2000; 
  
      const startTime = performance.now();
  
      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = easeInOutQuad(progress);
        window.scrollTo(0, startingY + distance * easedProgress - 80);
  
        if (elapsedTime < duration) {
          requestAnimationFrame(animateScroll);
        }
      };
  
      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
  
      requestAnimationFrame(animateScroll);
    }
  };
  return (
    // <div className="hero-section sect-spacer text-center text-xl-left animate-item animated">
    <div className="hero-section sect-spacer text-xl-left animate-item animated">
      {/* <div className="hero-section__container d-flex flex-column justify-content-center full-height pt-0"> */}
      <div className="hero-section__container">
        <div className="grid grid-rows-2 grid-cols-1 desktop:grid-cols-12 desktop:grid-rows-1 items-center desktop:text-left">
          <div className="grid desktop:col-start-1 desktop:col-span-7 pr-3.5">
            <div className="hero-section__title">
              Сайти <b>.</b> App <b>.</b> Брендинг - Робимо складне простим
            </div>
            <a href="../portfolio" className="btn btn-inverted btn-md">
              НАШІ РОБОТИ
            </a>
            <div className="hero-section__logo-group">
              <div className="flex justify-start items-center h-full">
                <a
                  href="https://clutch.co/profile/redstone"
                  target="_blank"
                  rel="noreferrer"
                >
                      <img 
                    src={clutch}
                    data-i-src="./img/clutchco.svg"
                    alt=""
                    className="imgLoaded max-w-20"
                    rel="noreferrer"
                  />
                </a>
                <a
                  href="https://www.awwwards.com/REDSTONE/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={awwwards}
                    data-i-src="./img/green-awwwards.svg"
                    alt=""
                    className="imgLoaded"
                  />
                </a>
                <a
                  href="https://it-rating.ua/rating-webstudio-lvov-2020"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={it_rating}
                    data-i-src="./img/itr_logo.svg"
                    alt=""
                    className="imgLoaded"
                  />
                </a>
                <a href="../nagorody">
                  <img
                    src={other}
                    data-i-src="./img/other.svg"
                    alt=""
                    className="imgLoaded"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="desktop:col-start-8 desktop:col-span-5 h-full px-3.5">
            <div className="hero-section__counter-block type-1">
              <div className="hero-section__svg-wrapper type-2">
                <svg
                  version="1.1"
                  viewBox="0 0 100 100"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <text x="50%" y="97%" strokeWidth="1" textAnchor="middle">
                    <tspan className="text-bold">18</tspan>
                  </text>
                </svg>
              </div>
            </div>
            <div className="hero-section__sub-title text-center">
              <span className="desktop:hidden">18</span> Років переносимо ваш бізнес online
            </div>
          </div>
        </div>
        <div className="hero-section__btn-scroll scroll-to-content" onClick={scrollToContent}>
          <svg
            width="63"
            height="14"
            viewBox="0 0 63 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 7H55.902"
              stroke="#989898"
              strokeDasharray="5.49 8.78"
              className="dashed"
            ></path>
            <path
              d="M54.9297 1L61.7405 7.16216L54.9297 13"
              stroke="#989898"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;