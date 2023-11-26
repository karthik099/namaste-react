import Card from "./Card";
import CARDDATA from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const AppBody = () => {
  let [cardObj, setCardObj] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.5241391&lng=76.9366376&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
    setCardObj(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // SHIMMER UI - `CONDITIONAL RENDERING`
  if(cardObj.length === 0){
    return <Shimmer />
  }

  return (
    <div className="container">
      <div className="search">
        <input type="text" placeholder="Search here" />
        <button>Search</button>
      </div>
      <div className="filter">
        <button
          className="top-rated"
          value={"Top Rated"}
          onClick={() => {
            cardObj = cardObj.filter((res) => res.info.avgRating > 4);
            setCardObj(cardObj);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="card-container">
        {cardObj.map((cards) => (
          <Card key={cards.id} card={cards} />
        ))}
      </div>
    </div>
  );
};

export default AppBody;
