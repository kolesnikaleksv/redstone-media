import './menu-button.scss'

const MenuButton = () => {
  return (
  <button type="button" className="menu-button group hover:text-red-500">
    <span className='menu-button__container'>
      <span className='menu-button__container--first-strip group-hover:w-full group-hover:bg-red-500'></span>
      <span className='menu-button__container--second-strip group-hover:bg-red-500'></span>
      <span className='menu-button__container--third-strip group-hover:bg-red-500 group-hover:w-full'></span>
    </span>
    <em>меню</em>
  </button>
  )
}

export default MenuButton;