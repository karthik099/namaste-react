
import CDNURL from "../utils/constants";
const Card = (props) => {
  
    const { card } = props;
    // console.log('>>>>',card.info);
    const { id, cloudinaryImageId, name, cuisines, avgRating, delTime } = card?.info;
    return (
      <div className="card" key={id}>
        <img className="banner" src={CDNURL + cloudinaryImageId} />
        <h3 className="res-name">{name}</h3>
        <p title={cuisines.join(', ')}>{cuisines.join(', ')}</p>
        <div className="card-misc">
          <span className="star-rating">{avgRating} ⭐️</span>
          <span className="delivery-time">⏱️ {delTime} min</span>
        </div>
      </div>
    );
  };

export default Card;