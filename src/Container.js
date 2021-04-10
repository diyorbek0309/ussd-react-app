import React, { useState } from "react";
import HeaderButton from "./components/HeaderButton";
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
  };

  const clickHandler4 = () => {
    if (!showRight) {
      setShowRight(!showRight);
    }
    setShowLeft(false);
  };

  return (
    <>
      <div>
        <HeaderButton
          button_text="Oddiy to'plamlar"
          clickHandler={clickHandler3}
        />
        <HeaderButton
          button_text="NON-Stop to'plamlar"
          clickHandler={clickHandler4}
        />
      </div>
      {showLeft ? (
        <div>
          <button onClick={clickHandler1}>Kunlik to'plamlar</button>
          <button onClick={clickHandler2}>Oylik to'plamlar</button>
          {displayLeft ? <ToggleContent type="daily" /> : null}
          {displayRight ? <ToggleContent type="monthly" /> : null}
        </div>
      ) : (
        <div>
          <button>Oylik to'plamlar</button>
          <ToggleContent type="non_stop_monthly" />
        </div>
      )}
    </>
  );
}

export default Container;
