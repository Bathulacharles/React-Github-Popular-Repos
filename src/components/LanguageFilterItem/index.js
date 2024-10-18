import './index.css'

const LanguageFilterItem = props => {
  const {isActive, languageFilterDetails, setActiveLanguageFilterId} = props
  const {id, language} = languageFilterDetails

  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'

  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button
        className={btnClassName}
        type="button"
        onClick={onClickLanguageFilter}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
