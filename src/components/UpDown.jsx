import React from "react";

const UpDown = props => {
    return (
        <div>
            <button 
                onClick={
                    e => {
                        if (props.min === undefined || props.value > props.min) { props.setValue(props.value - 1)} 
                    }
                }
                disabled={
                    props.min !== undefined && props.value <= props.min
                }
            >-</button>
            <span className="number-indicator">{props.value}</span>
            <button onClick={e => 
                {if (props.max === undefined || props.value < props.max) { props.setValue(props.value + 1)} }
            }
            disabled={
                props.max !== undefined && props.value >= props.max
            }
            >+</button>
        </div>
    );
}

export default UpDown;