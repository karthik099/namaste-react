
import CDNURL from "../utils/constants";
const Card = (props) => {
  
    const { card } = props;
    console.log('>>>>',card);
    const { resId, image, resName, cuisine, avgRating, delTime } = card;
  
    return (
      <div className="card" key={resId}>
        <img className="banner" src={CDNURL + image} />
        <h3 className="res-name">{resName}</h3>
        <p title={cuisine}>{cuisine}</p>
        <div className="card-misc">
          <span className="star-rating">{avgRating} ⭐️</span>
          <span className="delivery-time">⏱️ {delTime} min</span>
        </div>
      </div>
    );
  };

export default Card;