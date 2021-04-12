import React from "react";
import img from "../img/a.png";

function Footer() {
  return (
    <div className="footer_img">
      <img src={img} alt="" />
      <div className="footer_text">
        <div className="footer_left">
          <h1>Sayt haqida</h1>
          <p>
            Ushbu sayt UzMobile aloqa operatorining rasmiy dilleri - "LUCKY NET"
            M.CH.J tomonidan taqdim etilmoqda. Sayt orqali UzMobile
            operatorining kunlik, haftalik, oylik internet to'plamlarini osonlik
            bilan faollashtirishingiz mumkin.
          </p>
        </div>
        <div className="footer_right">
          <h1>Biz Ijtimoiy Tarmoqlarda</h1>
          <p>
            Telegram orqali murojaat: Telegram kanal
            <br />
            USSD-Yordamchi: Botga murojaat
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
