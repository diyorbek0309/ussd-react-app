import React from "react";

function HeaderButton({ button_text, clickHandler }) {
  return (
    <div className="header_button">
      <button onClick={clickHandler}>{button_text}</button>
    </div>
  );
}

export default HeaderButton;
