import React from "react";
// import Katie from "../../Assests/images/katie-zaferes.jpg";
import star from "../../Assests/images/star.jpg";
import styles from "./Card.module.scss";

export const Card = (props) => {
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className={styles["card"]}>
            {/* Conditional rendering if truthy - will not run if falsey*/}
            {badgeText && (
                <div className={styles["card--badge"]}>{badgeText}</div>
            )}
            <img src={props.item.coverImg} className={styles["card--image"]} />
            <div className={styles["card--stats"]}>
                <img src={star} className={styles["card--star"]} />
                <span>{props.item.stats.rating} </span>
                <span className="grey">
                    {" "}
                    ({props.item.stats.reviewCount}) •
                </span>
                <span className="grey">{props.item.location}</span>
            </div>
            <p className={styles["card--title"]}>{props.item.title}</p>
            <p className={styles["card--price"]}>
                <span className="bold">From ${props.item.price}</span>/ person
            </p>
        </div>
    );
};
