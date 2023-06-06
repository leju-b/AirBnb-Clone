import React from "react";
import './section1.css'

const Section_one = () => {
    return(
        <section className="card-section">
            <div className="card-one">
                <img src="./images/image 12.png" alt="" />
                <div className="card--details">
                    <p className="star"><img src="./images/Star 1.png" alt="" /><span><strong>5.0 </strong></span>(6) - USA</p>
                    <p className="summary">Life lessons with Katie Zaferes</p>
                    <p className="price"><span>From </span><span>$136</span> / person</p>
                </div>
            </div>
        </section>
    )
}

export default Section_one