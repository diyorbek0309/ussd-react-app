import React from "react";

function HeaderButton(props) {
  return (
    <div className="header_button">
      <button>{props.button_text}</button>
    </div>
  );
}

export default HeaderButton;
