import { useDispatch } from 'react-redux';
// import { isvisible } from '../../toolkitRedux/toolkitReducer';
import { toggleVisibility } from '../../slices/popupSlice';
import ContactForm from '../ContactForm/ContactForm';

import './pop-up.scss'

const PopUp = () => {
  const dispatch = useDispatch()
  return (
    <div className="popup-wrapper" id="popups"><div className="popup-wrapper__bg-layer"></div>
      <div className="popup popup-feedback" data-rel="2">
        <div className="popup__layer-close"></div>
        <div className="popup__popup-container">
          <div className="popup__align">
            <div className="w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] laptop:max-w-[960px] desktop:max-w-7xl">
              <div className="row flex flex-wrap -mx-4">
                <div className="relative w-full px-4 max-w-full desktop:max-w-1/2 mx-auto grow-0 shrink-0 basis-full desktop:basis-3/6">
                  <div className="popup__inner">
                    <div className="popup__title">Розкажіть нам про свій проект, подумаємо над ним разом. Почніть з простого - просто напишіть нам</div>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                          {/* use toolkitReducer */}
        {/* <div className="popup__btn-close" onClick={() => dispatch(isvisible())}> */}
                          {/* use popupSlice */}
        <div className="popup__btn-close" onClick={() => dispatch(toggleVisibility())}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M6 6L18 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </div>
      </div>
    </div>
  )
}

export default PopUp;