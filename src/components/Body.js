import Restaurentcard from "./Restaurant";
import resList from "../utils/mockData";

// const listOfRestaurent = [

// ]


const Body = () => {
    return(
        <div className = "body">
                <div className="filter"> 
                    <button className="filter-btn" onClick={() => {console.log("Button clicked");
                    }}>
                        Top Rated Restaurants </button>
                </div>
                <div className="res-container">
                   {
                resList.map((restaurant) => (<Restaurentcard resdata = {restaurant}/>
                   ))}
                </div>

        </div>
    )
}

export default Body;