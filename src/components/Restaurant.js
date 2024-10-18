import { CDN_url } from "../utils/const.js";

const Restaurentcard = (props) => {
    const{resdata} = props;

    const{cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        deliveryTime,
        costForTwo}
         = resdata?.info;

    return(
        <div className="res_card" style={{
            backgroundColor:"#f0f0f0",
        }}>
            <img className="res_logo"
             src=
             {CDN_url
                +
             cloudinaryImageId
             }
             />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}*</h4>
            <h4>{deliveryTime} Min</h4>
            <h4>{costForTwo}Rs.</h4>

        </div>
    )
}

export default Restaurentcard;