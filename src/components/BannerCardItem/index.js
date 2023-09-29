import './index.css'

const BannerCardItem = props => {
  const {bannerCard} = props
  const {headerText, description, className, buttonText} = bannerCard
  return (
    <div className="userCardContainer">
      <li className={className}>
        <h1 className="main-heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="buttonClass" type="button">
          {buttonText}
        </button>
      </li>
    </div>
  )
}

export default BannerCardItem
