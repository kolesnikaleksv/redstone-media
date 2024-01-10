import foodDelivery from '../../images/redstone-food-delivery.png'
import construction from '../../images/construction.png'
import appImg from '../../images/app.png'
import redstoneAuto from '../../images/redstone-auto.png'
import solution from '../../images/solution.webp'
import brending from '../../images/brending.webp'
import './category.scss'

const Category = () => {
  return (
    <div id="content" className="category-section">
      <div className="category-section__container">
        <div className="category-section__title-box">
          <div className="category-section__title">
            Ефектні та ефективні веб і мобайл рішення із зануренням у ваш бізнес
          </div>
          <p className="category-section__description">
            Ми знаємо болі у Вашій ніші! У нашому арсеналі є всі інструменти для
            їх вирішення: <b>аналіз</b>, <b>брендинг</b>, <b>розробка сайту</b>,{" "}
            <b>створення app</b> і <b>технічна підтримка</b>.
          </p>
        </div>
        <div className='category-section__categories'>
          <div className="category-section__category" >
            <a href="../sajt-dostavka-yizhi" className="category-section__category-entry">
              <span className="category-section__category-title">Доставка їжі</span>
              <span className="category-section__category-img">
                <img
                  src={foodDelivery}
                  alt="delivery"
                />
              </span>
              <div className="category-section__review-btn">
                <i className="category-section__review-icon"></i>
              </div>
            </a>
          </div>
          <div className="category-section__category">
            <a href="../budivelni-kompaniyi-neruhomist" className="category-section__category-entry">
              <span className="category-section__category-title">Будівництво</span>{" "}
              <span className="category-section__category-img">
                <img
                  src={construction}
                  alt="building"
                />
              </span>
              <div className="category-section__review-btn">
                <i className="category-section__review-icon"></i>
              </div>
            </a>
          </div>
          <div className="category-section__category">
            <a href="../stvorennja-mobilnih-dodatkiv" className="category-section__category-entry">
              <span className="category-section__category-title">APP</span>{" "}
              <span className="category-section__category-img">
                <img
                  src={appImg}
                  alt="mobile app"
                />
              </span>
              <div className="category-section__review-btn">
                <i className="category-section__review-icon"></i>
              </div>
            </a>
          </div>
          <div className="category-section__category">
            <a href="../websolution" className="category-section__category-entry">
              <span className="category-section__category-title">WEB Solution</span>
              <span className="category-section__category-img">
                <img
                  src={solution}
                  alt="solution"
                />
              </span>
              <div className="category-section__review-btn">
                <i className="category-section__review-icon"></i>
              </div>
            </a>
          </div>
          <div className="category-section__category">
            <a href="../auto" className="category-section__category-entry">
              <span className="category-section__category-title">Авто</span>
              <span className="category-section__category-img">
                <img
                  src={redstoneAuto}
                  alt="auto"
                />
              </span>
              <div className="category-section__review-btn">
                <i className="category-section__review-icon"></i>
              </div>
            </a>
          </div>
          <div className="category-section__category">
            <a href="../brendbuky" className="category-section__category-entry">
              <span className="category-section__category-title">Брендування</span>
              <span className="category-section__category-img">
                <img
                  src={brending}
                  alt="brending"
                />
              </span>
              <div className="category-section__review-btn">
                <i className="category-section__review-icon"></i>
              </div>
            </a>
          </div>
        </div>
        <div className="text-center">
          <a href="../portfolio" className="btn btn-inverted">
            ПЕРЕГЛЯНУТИ ВСІ РОБОТИ
          </a>
        </div>
      </div>
    </div>
  )
}

export default Category;