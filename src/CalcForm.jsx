import React from 'react';

const CalcForm = props => {
    return (
        <div>
            <input type="text" placeholder="Type something" id="first"/>
            +
            <input type="text" placeholder="Type something" id="second" />
        </div>
    )
}

export default CalcForm