import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow";

const SellActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleSellClick = async () => {
    try {
      await axios.delete(`http://localhost:3002/sellOrder/${uid}`);
      generalContext.closeSellWindow();
    } catch (err) {
      console.error("Error selling stock:", err);
    }
    generalContext.closeSellWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="sell-order">
        
        <p>Do you want to sell all holdings of stock <strong>{uid}</strong>?</p>
      </div>

      <div className="buttons">
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell All
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
