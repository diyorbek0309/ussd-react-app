import React, { useState } from "react";
import HeaderButton from "./components/HeaderButton";
import ToggleContent from "./components/ToggleContent";

function Container() {
  const [displayLeft, setDisplayLeft] = useState(true);
  const [displayRight, setDisplayRight] = useState(false);
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

  return (
    <>
      <div>
        <HeaderButton button_text="Oddiy to'plamlar" />
        <HeaderButton button_text="NON-Stop to'plamlar" />
      </div>
      <button onClick={clickHandler1}>Kunlik to'plamlar</button>
      <button onClick={clickHandler2}>Oylik to'plamlar</button>
      {displayLeft ? <ToggleContent type="daily" /> : null}
      {displayRight ? <ToggleContent type="monthly" /> : null}
    </>
  );
}

export default Container;
