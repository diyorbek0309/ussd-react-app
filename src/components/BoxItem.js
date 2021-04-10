import React from "react";

function BoxItem({ trafic, price }) {
  return (
    <div>
      <h2>
        {trafic} MB - {price} so'm
      </h2>
    </div>
  );
}

export default BoxItem;
