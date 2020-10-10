import React from "react"
import footerStyles from "./footer.module.css"
import bottomCurve from "../../src/images/curve-bottom.svg"

function footer(props) {
  return (
    <div className={footerStyles.footerContainer}>
      <img className={footerStyles.topCurve} src={bottomCurve} alt="Top Curve" />
      <div className={`${footerStyles.container} ${footerStyles.footer}`}>
        <div><h3>BON VOYAGE TRIPS</h3>
        <div className={footerStyles.divider}></div>
        <p>Incredible experinces to share with your loved ones.</p>
        <p>we create truly memorable experiences that you will cherish forever.</p>
        </div>
        <div><h3>NEWSLETTER</h3>
        <div className={footerStyles.divider}></div>
        <form>
            <div className={footerStyles.section}>
              <input type="email" id="email" name="email" aria-label="Newsletter signup" placeholder="name@email.com" />
            </div>
            <div className={footerStyles.section}>
              <input type="submit" value="SUBMIT" />
            </div>
          </form>
        </div>
        <div><h3>SERVICES</h3>
        <div className={footerStyles.divider}></div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Book Online</li>
            <li>News</li>
        </ul>
        </div>
        <div><h3>SERVICES</h3>
        <div className={footerStyles.divider}></div>
        <ul className={footerStyles.address}>
            <li>1 Roadtown Street, The Boat Building, British Virgin Islands</li>
            <li>0800 123456</li>
            <li>contact@bonvoyagetrips.com</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default footer
