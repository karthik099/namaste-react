import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.png"
import cardBanner from "./images/banner.jpg"

const cdnUrl = 'https://media-assets.swiggy.com/swiggy/image/upload/';
const cardData = [
    {
        resId:1,
        image: 'fl_lossy,f_auto,q_auto,w_660/sfqa2q7svnybbjajui58',
        resName: 'Hotel Chinnus',
        avgRating: 4.2,
        delTime:35,
        cuisine: 'Desserts, Chinese, North Indian, South Indian, Ice Cream, Biryani Kesavadasapuram'
    },
    {
        resId:2,
        image: 'fl_lossy,f_auto,q_auto,w_660/fykpygdjrzhojmirvi08',
        resName: 'Porotta Hut',
        avgRating: 3.9,
        delTime: 30,
        cuisine: 'Chinese, North Indian, Palayam, 1.5 km'
    },
    {
        resId:3,
        image: 'fl_lossy,f_auto,q_auto,w_660/k5et8u3mczf49irgg0f7',
        resName: 'Steam Pot',
        avgRating: 4.3,
        delTime: 30,
        cuisine: 'Chinese, North Indian, Pattom'
    },
    {
        resId:4,
        image: 'fl_lossy,f_auto,q_auto,w_660/v1jl5ndnvi1eoylzauhl',
        resName: 'Al Hassan',
        avgRating: 4.1,
        delTime: 30,
        cuisine: 'Chinese, North Indian, Trivandrum'
    }
]

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo}/>
            </div>
            <div className="navigation">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

const AppBody = () => {
    return (
        <div className="container">
            <div className="search">
                <input type="text" placeholder="Search here"/>
                <button>Search</button>
            </div>
            <div className="card-container">
                {
                    cardData.map((card) => (<Card key={card.resId} card={card}/>))
                }
            </div>
        </div>
    )
}

const Card = (props) => {
    const {card} = props;
    const {image, resName, cuisine, avgRating,delTime} = card;

    return (
        <div className="card">
            <img className="banner" src={cdnUrl + image}/>
            <h3 className="res-name">{resName}</h3>
            <p title={cuisine}>{cuisine}</p>
            <div className="card-misc">
                <span className="star-rating">{avgRating} ⭐️</span>
                <span className="delivery-time">⏱️ {delTime} min</span>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <AppBody/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);