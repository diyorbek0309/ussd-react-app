import React from "react";

function BoxItem({ trafic, price }) {
  return (
    <div>
      <h2 className="box_item">
        <a href="tel:+4733378901">
          {trafic} MB - {price} so'm
        </a>
      </h2>
    </div>
  );
}

export default BoxItem;
