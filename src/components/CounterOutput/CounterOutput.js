import React from 'react';

import './CounterOutput.css';

const counterOutput = (props) => (
    <div className="CounterOutput">
        Contador Atual: {props.value}
    </div>
);

export default counterOutput;