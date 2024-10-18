import { LOGO_url } from "../utils/const.js";
// import "../../index.css"
const Header = () => {
    return(
        <div className = "header">
            <div className = "logo-container">
              <img src={LOGO_url} alt="" />
              {/* <img src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg" alt="" /> */}
            </div>

            <div className = "nav-items">
                <ul>
                    <li>Home </li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
