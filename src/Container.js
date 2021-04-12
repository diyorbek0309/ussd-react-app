import React, { useState } from "react";
import ToggleContent from "./components/ToggleContent";

function Container() {
  const [displayLeft, setDisplayLeft] = useState(true);
  const [displayRight, setDisplayRight] = useState(false);
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(false);

  const clickHandler1 = () => {
    if (!displayLeft) {
      setDisplayLeft(!displayLeft);
    }
    setDisplayRight(false);
  };

  const clickHandler2 = () => {
    if (!displayRight) {
      setDisplayRight(!displayRight);
    }
    setDisplayLeft(false);
  };

  const clickHandler3 = () => {
    if (!showLeft) {
      setShowLeft(!showLeft);
    }
    setShowRight(false);
    console.log("dhfkdjfg");
  };

  const clickHandler4 = () => {
    if (!showRight) {
      setShowRight(!showRight);
    }
    setShowLeft(false);
  };

  return (
    <>
      <div className="clr"></div>
      <div>
        <div className="header_button">
          <button onClick={clickHandler3}>Oddiy</button>
          <button onClick={clickHandler4}>NON-Stop</button>
        </div>
        {/* <HeaderButton 
          button_text="Oddiy to'plamlar"
          clickHandler={clickHandler3}
        />
        <HeaderButton
          button_text="NON-Stop to'plamlar"
          clickHandler={clickHandler4}
        /> */}
      </div>
      {showLeft ? (
        <div>
          <div className="button_toplamlar">
            <button onClick={clickHandler1}>Kunlik to'plamlar</button>
            <button onClick={clickHandler2}>Oylik to'plamlar</button>
          </div>
          {displayLeft ? <ToggleContent type="daily" /> : null}
          {displayRight ? <ToggleContent type="monthly" /> : null}
        </div>
      ) : (
        <>
          <div className="button_toplamlar_non">
            <button>Oylik to'plamlar</button>
          </div>
          <ToggleContent type="non_stop_monthly" />
        </>
      )}
    </>
  );
}

export default Container;
