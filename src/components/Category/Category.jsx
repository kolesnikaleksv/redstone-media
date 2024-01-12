import { useState, useEffect } from 'react'
import CategoryListElement from '../CategoryListElement/CategoryListElement'
import './category.scss'

const Category = () => {
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);

  const handleScroll = () => {
    const categoriesElement = document.querySelector('.category-section');
    
    if (categoriesElement) {
      const rect = categoriesElement.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsCategoriesVisible(isVisible);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      handleScroll();
    };
    handleScroll();
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div id="content" className="category-section">
      <div className="category-section__container">
        <div className="category-section__title-box">
          <div className={isCategoriesVisible ? 'category-section__title' : 'hidden'}>
            Ефектні та ефективні веб і мобайл рішення із зануренням у ваш бізнес
          </div>
          <p className={isCategoriesVisible ? 'category-section__description' : 'hidden'}>
            Ми знаємо болі у Вашій ніші! У нашому арсеналі є всі інструменти для
            їх вирішення: <b>аналіз</b>, <b>брендинг</b>, <b>розробка сайту</b>,{" "}
            <b>створення app</b> і <b>технічна підтримка</b>.
          </p>
        </div>
        <div className={isCategoriesVisible ? 'category-section__categories' : 'hidden'}>
          <CategoryListElement/>
        </div>
        <div className="flex justify-center">
          <a href="../portfolio" className={isCategoriesVisible ? 'btn btn-inverted block' : 'hidden'}>
            ПЕРЕГЛЯНУТИ ВСІ РОБОТИ
          </a>
        </div>
      </div>
    </div>
  )
}

export default Category;