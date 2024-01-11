import Hreny from '../CategoryElement/CategoryElement'

const CategoryListElement = () => {

  const images = [
    {src: "https://redstone.media/merge/img/redstone-food-delivery.png", alt: "delivery", href: "../websolution", title: "Доставка їжі"},
    {src: "https://redstone.media/merge/img/category-img-6.png", alt: "building", href: "../budivelni-kompaniyi-neruhomist", title: "Будівництво"},
    {src: "https://redstone.media/merge/img/category-img-5.png", alt: "mobile app", href: "../stvorennja-mobilnih-dodatkiv", title: "APP"},
    {src: "https://redstone.media/merge/img/category-img-8.webp", alt: "solution", href: "../websolution", title: "WEB Solution"},
    {src: "https://redstone.media/merge/img/redstone-auto.png", alt: "auto", href: "../auto", title: "Авто"},
    {src: "https://redstone.media/merge/img/category-img-3.webp", alt: "brending", href: "../brendbuky", title: "Брендування"}
  ]

  const items = images.map((item, key) => {
    return (
      <div className="category-section__category" key={key} >
        <Hreny element={item} />
      </div>
    )
  })
  return items;
}

export default CategoryListElement;