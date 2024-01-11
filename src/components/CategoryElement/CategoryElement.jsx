import {useRef, useCallback, useEffect, useState} from 'react'

const CategoryElement = (props) => {
  const {src, alt, href, title} = props.element;
  const ref = useRef();
  const [ imagePos, setImagePos ] = useState({ x: `${50}%`, y: `${50}%` });

  const handleMouseLeave = () => {
    setImagePos({ x: `${50}%`, y: `${50}%` })
  };

  const handlerMoveMouse = useCallback((e) => {
    const rect = ref.current.getBoundingClientRect();
    setImagePos({ x: e.x - rect.x, y: e.y - rect.y });
  }, []);

  useEffect(() => {
    const _ref = ref.current;
    _ref.addEventListener('mousemove', handlerMoveMouse);
    return () => {
      _ref.removeEventListener('mousemove', handlerMoveMouse);
    }
  }, [ handlerMoveMouse ]);

  return (
    <a
      href={href}
      className="category-section__category-entry"
      ref={ ref }
      onMouseLeave={handleMouseLeave}
      >
      <span className="category-section__category-title">{title}</span>
      <span className="category-section__category-img">
        <img
          src={src}
          alt={alt}
        />
      </span>
      <div className="category-section__review-btn">
        <i
          className="category-section__review-icon"
          style={{ left: imagePos.x, top: imagePos.y }}
        >
        </i>
      </div>
    </a>
  )
}

export default CategoryElement;