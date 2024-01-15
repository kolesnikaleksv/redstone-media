import './question-btn.scss'

const QuestionBtn = (props) => {
  return (
    <button type="button" className="btn hidden open-popup" onClick={props.openPopup}>
      Задати запитання
    </button>
  )
}

export default QuestionBtn;