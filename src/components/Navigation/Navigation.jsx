import './navigation.scss'

const Navigation = () => {
 

  return (
    <nav className="primary-nav d-none d-xl-block">
    <ul className='primary-nav__list'>
      <li>
        <a href="../portfolio">Портфоліо</a>
      </li>
      <li className="has-children pr-3.5 relative group">
        <span>
          Послуги<i></i>
        </span>
        <ul className='hidden group-hover:flex flex-col absolute mt-2 p-2 -left-5'>
        <li>
            <a href="https://redstone.media/servis-stvorennya-saytiv">
              Створення сайтів
            </a>
          </li>
          <li>
            <a href="https://redstone.media/servis-brending-ta-dyzajn">
              Брендинг та дизайн
            </a>
          </li>
          <li>
            <a href="https://redstone.media/servis-crm-sistemi">
              CRM системи
            </a>
          </li>
          <li>
            <a href="https://redstone.media/servis-internet-magazyn">
              Інтернет магазин
            </a>
          </li>
          <li>
            <a href="https://redstone.media/servis-landing-page">
              Лендінг
            </a>
          </li>
          <li>
            <a href="https://redstone.media/servis-pidtrymka-sajtu">
              Підтримка сайту
            </a>
          </li>
          <li>
            <a href="https://redstone.media/servis-redyzajn">Редизайн</a>
          </li>
          <li>
            <a href="https://redstone.media/servis-rozrobka-dodatkiv">
              Розробка додатків
            </a>
          </li>
          <li>
            <a href="https://redstone.media/servis-poshukova-optymizatsiia">
              Пошукова оптимізація
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="../brendbuky">Брендинг</a>
      </li>
      <li>
        <span className="scroll-to-contacts">Контакти</span>
      </li>
    </ul>
  </nav>
  )
}

export default Navigation;