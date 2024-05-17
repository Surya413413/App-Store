// Write your code here
import './index.css'

const AppItem = props => {
  const {listApps, appId} = props
  const {appName, imageUrl, category} = listApps

  return (
    <li className="apps-para">
      <img src={imageUrl} className="list-app" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
