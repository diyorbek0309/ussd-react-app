import React from "react";

function HeaderButton({ button_text, clickHandler }) {
  return (
    <div className="header_button1">
      <div className="header_button">
        <button onClick={clickHandler}>{button_text}</button>
      </div>
    </div>
  );
}

export default HeaderButton;
