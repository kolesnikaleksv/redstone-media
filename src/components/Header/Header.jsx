import './header.scss';
import logo from '../../images/logo.svg'
import informer from '../../images/informer.svg'
import CloseButton from '../CloseBtn/CloseButton'
import MenuButton from '../MenuButton/MenuButton';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Navigation from '../Navigation/Navigation';
import QuestionBtn from '../QuestionBtn/QuestionBtn';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__informer text text-sm flex items-center justify-center">
          <img src={informer} className='max-w-8 mr-4' alt="" loading="lazy" />
          <a href="../ukraine" className='inline align-middle mb-0 font-light'>We stand with Ukraine.</a>
          <CloseButton />
        </div>
        <div className="max-w-7xl mx-auto px-3.5 h-20 flex justify-between items-center">
          <div className="logo-wrapp flex justify-start">
            <div className="mr-11">
              <a href="../">
                <img className='max-w-[140px]' src={logo} alt="Створення сайтів Львів" />
              </a>
            </div>
            <MenuButton />
          </div>
          <Navigation />
          <div className="header-right d-none d-xl-flex flex justify-center">
            <a href="tel:+380676075784" className="phone-number type-1" target="_blank">
              <PhoneAndroidIcon fontSize="inherit"/>
              +38 067 607 57 84
            </a>
            <QuestionBtn />
          </div>
        </div>
      </header>
    </>
  )
};

export default Header;