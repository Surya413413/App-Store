// Write your code here
import './index.css'

const TabItem = props => {
  const {eachApp, changeStatus, isActive} = props
  const {displayText, tabId} = eachApp

  const activeClassName = isActive ? `active-btn` : ''

  const onClickButton = () => {
    changeStatus(tabId)
  }

  return (
    <li>
      <button
        className={`button-style ${activeClassName}`}
        onClick={onClickButton}
      >
        <p>{displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
