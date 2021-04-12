import React from "react";
import BoxItem from "./BoxItem";

function ToggleContent({ type }) {
  return (
    <>
      {type === "daily" ? (
        <>
          <div className="wrap_shape"></div>
          <div className="daily_wrap">
            <BoxItem trafic="500" price="10000" />
            <BoxItem trafic="500" price="10000" />
            <BoxItem trafic="500" price="10000" />
            <BoxItem trafic="500" price="10000" />
            <BoxItem trafic="500" price="10000" />
            <BoxItem trafic="500" price="10000" />
            <BoxItem trafic="500" price="10000" />
            <BoxItem trafic="500" price="10000" />
          </div>
        </>
      ) : type === "monthly" ? (
        <>
          <div className="wrap_shape1"></div>
          <div className="monthly_wrap">
            <BoxItem trafic="5000" price="100000" />
            <BoxItem trafic="5000" price="100000" />
            <BoxItem trafic="5000" price="100000" />
            <BoxItem trafic="5000" price="100000" />
            <BoxItem trafic="5000" price="100000" />
            <BoxItem trafic="5000" price="100000" />
            <BoxItem trafic="5000" price="100000" />
            <BoxItem trafic="5000" price="100000" />
          </div>
        </>
      ) : (
        <>
          <div className="wrap_shape_non"></div>
          <div className="non_stop_monthly_wrap">
            <BoxItem trafic="5000" price="100000" />
          </div>
        </>
      )}
    </>
  );
}

export default ToggleContent;
