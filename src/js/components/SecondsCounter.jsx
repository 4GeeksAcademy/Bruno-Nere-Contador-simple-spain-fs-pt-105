import React from "react";
import PropTypes from "prop-types";
import { FaClock } from "react-icons/fa";

function SecondsCounter(props) {
    const digit1 = Math.floor(props.seconds / 100000) % 10;
    const digit2 = Math.floor(props.seconds / 10000) % 10;
    const digit3 = Math.floor(props.seconds / 1000) % 10;
    const digit4 = Math.floor(props.seconds / 100) % 10;
    const digit5 = Math.floor(props.seconds / 10) % 10;
    const digit6 = props.seconds % 10;

    return (
        <div className="big-counter">
            <div className="clock"><FaClock /></div>
            <div className="digit">{digit1}</div>
            <div className="digit">{digit2}</div>
            <div className="digit">{digit3}</div>
            <div className="digit">{digit4}</div>
            <div className="digit">{digit5}</div>
            <div className="digit">{digit6}</div>
        </div>
    );
}

SecondsCounter.propTypes = {
    seconds: PropTypes.number.isRequired
};

export default SecondsCounter;
