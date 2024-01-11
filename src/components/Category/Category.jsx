import CategoryListElement from '../CategoryListElement/CategoryListElement'
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
        <div className='category-section__categories' >
          <CategoryListElement/>
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