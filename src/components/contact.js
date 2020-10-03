import React from "react"
import contactStyles from "./contact.module.css"


function contact(props) {
  return (
    <div className={contactStyles.container}>
      <h2>{props.heading}</h2>
      <p>
        For anything that brings people together to celebrate an occasion, we
        create truly memorable experiences that you will cherish forever.
      </p>
      <div className={contactStyles.divider}></div>
      <div className={contactStyles.contactContainer}>
        <div className={contactStyles.intro}>
          <h3>Have a question?</h3>

          <p>
            Vivamus tempor nunc vel nisi tristique, id ultrices massa dictum.
            Proin vel consequat metus. In hac habitasse platea dictumst. Fusce
            elementum convallis nisi, nec commodo nulla efficitur at morbi
            euismod diam vel.
          </p>

          <p>
            Tortor dignissim mollis. Integer iaculis, sem ac cursus congue, mi
            orci faucibus arcu, ut tristique ligula tortor sed nulla. Phasellus
            laoreet tempor justo id elementum. Suspendisse mattis, justo congue
            suscipit pharetra, felis nibh bibendum nibh, sit amet luctus metus
            nibh pharetra.
          </p>

          <p>
            Note: Vivamus tempor nunc vel nisi tristique, id ultrices massa
            dictum.
          </p>
        </div>
        <div className={contactStyles.form}>
          <form>
            <div className={contactStyles.section}>
              <label htmlFor="fname">First name:</label>
              <input type="text" id="fname" name="fname" placeholder="John" />
            </div>
            <div className={contactStyles.section}>
              <label htmlFor="lname">Last name:</label>
              <input type="text" id="lname" name="lname" placeholder="Smith" />
            </div>
            <div className={contactStyles.section}>
              <label htmlFor="lname">Message:</label>
              <textarea
                id="message"
                name="w3review"
                rows="4"
                cols="50"
              ></textarea>
            </div>
            <div className={contactStyles.section}>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default contact
