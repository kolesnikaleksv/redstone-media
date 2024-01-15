import './header.scss';
import logo from '../../images/logo.svg'
import informer from '../../images/informer.svg'
import CloseButton from '../CloseBtn/CloseButton'
import MenuButton from '../MenuButton/MenuButton';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Navigation from '../Navigation/Navigation';
import QuestionBtn from '../QuestionBtn/QuestionBtn';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const toggleClass = () => {
    setIsFixed(!isFixed);
  };

  useEffect(() => {
    if (isFixed) {
      document.documentElement.classList.add('fixed');
      document.querySelector('.popup-wrapper').classList.add('active');
      document.querySelector('.popup').classList.add('active');
    } else {
      document.documentElement.classList.remove('fixed');
      document.querySelector('.popup-wrapper').classList.remove('active');
      document.querySelector('.popup').classList.remove('active');
    }
    return () => {
      document.documentElement.classList.remove('fixed');
      document.querySelector('.popup-wrapper').classList.remove('active');
      document.querySelector('.popup').classList.remove('active');
    };
  }, [isFixed]);

  return (
    <>
      <header className="header">
        <div className="header__informer text text-sm flex items-center justify-center">
          <img src={informer} className='max-w-8 mr-4' alt="" loading="lazy" />
          <a href="../ukraine" className='inline align-middle mb-0 font-light'>We stand with Ukraine.</a>
          <CloseButton />
        </div>
        <div className="sm:max-w-[540px] md:max-w-[720px] laptop:max-w-[960px] desktop:max-w-7xl mx-auto px-3.5 h-[60px] desktop:h-20 flex justify-between items-center">
          <div className="logo-wrapp flex w-full desktop:w-auto justify-between desktop:justify-start">
            <div className="mr-11">
              <a href="../">
                <img className='max-w-[140px]' src={logo} alt="Створення сайтів Львів" />
              </a>
            </div>
            <MenuButton />
          </div>
          <Navigation />
          <div className="header-right d-none d-xl-flex flex justify-center">
            <a href="tel:+380676075784" className="phone-number type-1" target="_blank" rel="noreferrer">
              <PhoneAndroidIcon fontSize="inherit"/>
              <span>+38 067 607 57 84</span>
            </a>
            <QuestionBtn openPopup={toggleClass}/>
          </div>
        </div>
      </header>
    </>
  )
};

export default Header;