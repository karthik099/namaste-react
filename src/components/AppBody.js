import Card from "./Card";

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

export default AppBody;